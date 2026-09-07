#!/usr/bin/env node
// Mengoptimasi foto/logo asli di src/assets/source/ menjadi WebP terkompresi
// di public/ (Bagian 8: "Gambar dioptimasi ke format WebP"). Berkas asli
// tetap disimpan di src/assets/source/ (tidak ikut ter-build ke situs)
// sebagai arsip beresolusi penuh.
//
// Jalankan lagi bila ada foto baru yang perlu dioptimasi:
//   node scripts/optimize-images.mjs

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('../', import.meta.url);
const SOURCE = new URL('src/assets/source/', ROOT);
const IMAGES_OUT = new URL('public/images/', ROOT);

await mkdir(IMAGES_OUT, { recursive: true });

async function toWebp(sourceFile, outFile, { width, quality = 82 }) {
  const input = fileURLToPath(new URL(sourceFile, SOURCE));
  const output = fileURLToPath(new URL(outFile, ROOT));
  await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality }).toFile(output);
  console.log(`wrote ${outFile}`);
}

await toWebp('portrait-original.png', 'public/images/portrait.webp', { width: 640 });
await toWebp('portrait-casual-original.jpg', 'public/images/portrait-casual.webp', { width: 640 });
await toWebp('logo-mangrove-original.jpg', 'public/logo-mangrove.webp', { width: 512, quality: 85 });

// Favicon: crop persegi di tengah (logo aslinya lanskap dengan pohon
// di tengah kanvas), lalu turunkan ke beberapa ukuran ikon standar.
const logoPath = fileURLToPath(new URL('logo-mangrove-original.jpg', SOURCE));
const logoMeta = await sharp(logoPath).metadata();
const side = Math.min(logoMeta.width, logoMeta.height);
const squareCrop = {
  left: Math.round((logoMeta.width - side) / 2),
  top: Math.round((logoMeta.height - side) / 2),
  width: side,
  height: side,
};

async function favicon(size, outFile) {
  await sharp(logoPath)
    .extract(squareCrop)
    .resize(size, size)
    .png()
    .toFile(fileURLToPath(new URL(outFile, ROOT)));
  console.log(`wrote ${outFile}`);
}

await favicon(32, 'public/favicon-32.png');
await favicon(180, 'public/apple-touch-icon.png');
await favicon(512, 'public/favicon-512.png');
