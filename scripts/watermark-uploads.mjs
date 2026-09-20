#!/usr/bin/env node
// Mengompres DAN membubuhkan watermark otomatis untuk foto mikroskop yang
// diunggah lewat /admin (folder public/images/microscopy-uploads/ — folder
// terpisah dari public/images/uploads/ yang dipakai sampul buku/kursus,
// SENGAJA tidak diberi watermark karena memang dibuat untuk dibagikan/
// dipajang di toko buku pihak ketiga).
//
// Watermark ini penanda kepemilikan, bukan proteksi sungguhan — masih bisa
// di-crop orang yang niat. Tujuannya supaya pemakaian ulang tanpa izin
// (mis. diambil dari Google Images) tetap jelas sumbernya.
//
// Dijalankan otomatis sebagai bagian dari "npm run build" (lihat
// package.json), sama seperti scripts/optimize-uploads.mjs.

import sharp from 'sharp';
import { readdir, stat, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const UPLOADS_DIR = fileURLToPath(new URL('../public/images/microscopy-uploads/', import.meta.url));

const MAX_WIDTH = 1600;
const QUALITY = 78;
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const WATERMARK_TEXT = '© Andri Hendrizal';

function watermarkSvg(width, height) {
  // Ukuran teks proporsional terhadap lebar foto, supaya tetap terbaca di
  // foto besar maupun kecil. Ditaruh pojok kanan bawah dengan sedikit
  // bayangan gelap di belakang teks putih, supaya tetap terbaca di atas
  // latar terang maupun gelap.
  const fontSize = Math.max(14, Math.round(width * 0.028));
  const padding = Math.round(fontSize * 0.9);
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <text
        x="${width - padding}"
        y="${height - padding}"
        text-anchor="end"
        font-family="sans-serif"
        font-size="${fontSize}"
        font-weight="600"
        fill="white"
        fill-opacity="0.85"
        stroke="black"
        stroke-opacity="0.35"
        stroke-width="${Math.max(1, fontSize * 0.05)}"
      >${WATERMARK_TEXT}</text>
    </svg>
  `);
}

let entries;
try {
  entries = await readdir(UPLOADS_DIR, { withFileTypes: true });
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('watermark-microscopy: belum ada folder public/images/microscopy-uploads/, dilewati.');
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

  const resized = sharp(filePath).resize({ width: MAX_WIDTH, withoutEnlargement: true });
  const { width, height } = await resized.metadata();
  const watermarked = resized.composite([{ input: watermarkSvg(width, height), top: 0, left: 0 }]);

  const buffer =
    ext === '.png'
      ? await watermarked.png({ quality: QUALITY, compressionLevel: 9 }).toBuffer()
      : ext === '.webp'
        ? await watermarked.webp({ quality: QUALITY }).toBuffer()
        : await watermarked.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();

  await writeFile(filePath, buffer);
  console.log(`watermark-microscopy: ${entry.name} ${(before / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB (watermarked)`);
}
