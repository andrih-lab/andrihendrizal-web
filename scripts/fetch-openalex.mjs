#!/usr/bin/env node
// Mengambil snapshot terbaru dari OpenAlex dan menyimpannya sebagai berkas
// cadangan (src/data/publications-fallback.json) yang dipakai src/lib/openalex.ts
// bila pengambilan langsung saat build gagal (Bagian 5 dokumen rancang bangun).
//
// Jalankan manual sesekali (mis. setelah menerbitkan publikasi baru), lalu
// commit hasilnya:
//   npm run fetch:publications

const AUTHOR_ID = 'A5054517180';
const URL = `https://api.openalex.org/works?filter=authorships.author.id:${AUTHOR_ID}&per_page=200&sort=publication_date:desc`;
const OUT_PATH = new URL('../src/data/publications-fallback.json', import.meta.url);

const res = await fetch(URL);
if (!res.ok) {
  console.error(`OpenAlex request failed: HTTP ${res.status}`);
  process.exit(1);
}

const data = await res.json();
const snapshot = {
  fetchedAt: new Date().toISOString(),
  results: data.results ?? [],
};

await import('node:fs/promises').then(({ writeFile }) =>
  writeFile(OUT_PATH, `${JSON.stringify(snapshot, null, 2)}\n`),
);

console.log(`Saved ${snapshot.results.length} works to ${OUT_PATH.pathname}`);
