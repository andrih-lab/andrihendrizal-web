#!/usr/bin/env node
// Mengompres otomatis SEMUA gambar di public/images/uploads/ — folder yang
// dipakai Sveltia CMS untuk menyimpan berkas yang diunggah lewat /admin
// (Bagian 7: unggahan CMS tidak lewat pipeline optimasi bawaan Astro,
// karena astro:assets hanya memproses gambar yang di-import dari src/,
// bukan berkas apa adanya di public/ — sudah diverifikasi langsung lewat
// build percobaan sebelum skrip ini ditulis).
//
// Dijalankan otomatis sebagai bagian dari "npm run build" (lihat
// package.json) — jadi setiap kali situs di-deploy ulang (termasuk setelah
// Anda unggah foto baru lewat CMS), berkas di folder ini otomatis diperkecil
// sebelum Netlify menerbitkannya. Path dan ekstensi berkas TIDAK diubah
// (tetap .jpg/.png/.webp apa adanya) supaya referensi di frontmatter CMS
// tidak pernah rusak.

import sharp from 'sharp';
import { readdir, stat, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const UPLOADS_DIR = fileURLToPath(new URL('../public/images/uploads/', import.meta.url));

// Foto lapangan/dokumentasi tidak perlu lebih lebar dari ini untuk tampil
// tajam di halaman manapun di situs ini (galeri paling lebar cuma
// menampilkan beberapa ratus piksel per foto).
const MAX_WIDTH = 1600;
const QUALITY = 78;
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

let entries;
try {
  entries = await readdir(UPLOADS_DIR, { withFileTypes: true });
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('optimize-uploads: belum ada folder public/images/uploads/, dilewati.');
    process.exit(0);
  }
  throw err;
}

for (const entry of entries) {
  if (!entry.isFile()) continue;
  const ext = path.extname(entry.name).toLowerCase();
  if (!IMAGE_EXT.has(ext)) continue;

  const filePath = path.join(UPLOADS_DIR, entry.name);
  const before = (await stat(filePath)).size;

  const image = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const buffer =
    ext === '.png'
      ? await image.png({ quality: QUALITY, compressionLevel: 9 }).toBuffer()
      : ext === '.webp'
        ? await image.webp({ quality: QUALITY }).toBuffer()
        : await image.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();

  // Cuma tulis ulang kalau sungguh lebih kecil — hindari kompres berulang
  // tanpa manfaat pada berkas yang sudah kecil/sudah teroptimasi.
  if (buffer.length < before) {
    await writeFile(filePath, buffer);
    console.log(`optimize-uploads: ${entry.name} ${(before / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB`);
  } else {
    console.log(`optimize-uploads: ${entry.name} sudah optimal, dilewati`);
  }
}
