// Input Koleksi Bacaan interaktif: `npm run buku`.
// - No. Induk (BK-xxxx) otomatis = nomor terbesar yang sudah dipakai + 1
//   (tidak pernah dipakai ulang; draft pun dihitung).
// - Nomor Panggil otomatis: [kelas DDC] [3 huruf pengarang, KAPITAL] [1 huruf judul, kecil],
//   sama dengan rumus di Database_Buku_Koleksi.xlsx.
// - Kelas DDC, subjek, bahasa, format dipilih dari scripts/library-reference.json.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const dir = new URL('../src/content/library/', import.meta.url);
const ref = JSON.parse(readFileSync(new URL('./library-reference.json', import.meta.url), 'utf8'));

export const nextCatalogNumber = (files) => {
  const used = files
    .map((f) => /^bk-(\d+)/i.exec(f)?.[1])
    .filter(Boolean)
    .map(Number);
  return 'BK-' + String((used.length ? Math.max(...used) : 0) + 1).padStart(4, '0');
};

export const callNumber = (ddc, author, title) => {
  const letters = (s) => s.normalize('NFD').replace(/[^A-Za-z]/g, '');
  return `${ddc} ${letters(author).slice(0, 3).toUpperCase()} ${letters(title).slice(0, 1).toLowerCase()}`;
};

const slugify = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const q = (s) => `'${String(s).replace(/'/g, "''")}'`;

// Antrean baris sendiri (bukan rl.question) agar input yang dialirkan lewat pipe tidak hilang.
const rl = createInterface({ input: stdin });
const queue = [];
const waiting = [];
let closed = false;
rl.on('line', (l) => (waiting.length ? waiting.shift()(l) : queue.push(l)));
rl.on('close', () => {
  closed = true;
  waiting.splice(0).forEach((w) => w(''));
});
const readLine = (prompt) => {
  stdout.write(prompt);
  if (queue.length) return Promise.resolve(queue.shift());
  if (closed) return Promise.resolve('');
  return new Promise((r) => waiting.push(r));
};
const ask = async (label, { required = false } = {}) => {
  for (;;) {
    const v = (await readLine(`${label}: `)).trim();
    if (v || !required) return v;
    if (closed) throw new Error('Input berakhir sebelum kolom wajib terisi.');
    console.log('  (wajib diisi)');
  }
};
const pick = async (label, items, { multi = false, allowEmpty = false } = {}) => {
  console.log(`\n${label}`);
  items.forEach((it, i) => console.log(`  ${String(i + 1).padStart(2)}. ${it.text ?? it}`));
  for (;;) {
    const raw = (await readLine(multi ? 'Nomor (pisahkan koma, kosong = lewati): ' : 'Nomor: ')).trim();
    if (!raw && (allowEmpty || multi)) return multi ? [] : null;
    const idx = raw.split(',').map((x) => Number(x.trim()) - 1);
    if (idx.every((i) => Number.isInteger(i) && i >= 0 && i < items.length) && idx.length && (multi || idx.length === 1)) {
      return multi ? idx.map((i) => items[i]) : items[idx[0]];
    }
    console.log('  Pilihan tidak valid.');
  }
};

const files = readdirSync(dir);
const catalogNumber = nextCatalogNumber(files);
console.log(`\nTambah buku — No. Induk otomatis: ${catalogNumber}\n`);

const title = await ask('Judul', { required: true });
const subtitle = await ask('Anak judul (opsional)');
const author = await ask('Pengarang utama', { required: true });
const coAuthors = await ask('Pengarang/editor lain (opsional)');
const publisher = await ask('Penerbit (opsional)');
const year = await ask('Tahun terbit (opsional)');
const isbn = await ask('ISBN (opsional)');
const pages = await ask('Jml halaman (opsional)');

const ddc = await pick('Kelas DDC:', ref.ddc.map((d) => ({ ...d, text: `${d.kode.padEnd(8)} ${d.deskripsi}` })));
const negara = await pick('Diperoleh di (negara):', ref.negara.map((n) => n.id), { allowEmpty: true });
const subjek = await pick('Subjek/topik:', ref.subjek, { multi: true });
const bahasa = await pick('Bahasa buku:', ref.bahasa, { allowEmpty: true });
const formats = await pick('Format:', ref.format, { multi: true });
const status = await pick('Status baca:', ['belum', 'sedang', 'sudah']);
const rating = await ask('Rating 1-5 (opsional)');
const link = await ask('Link Google Play Books dsb. (opsional)');
const note = await ask('Kesan/ringkasan singkat (opsional)');
rl.close();

const call = callNumber(ddc.kode, author, title);
const lines = [
  `catalogNumber: ${q(catalogNumber)}`,
  `callNumber: ${q(call)}`,
  `title: ${q(title)}`,
  subtitle && `subtitle: ${q(subtitle)}`,
  `author: ${q(author)}`,
  coAuthors && `coAuthors: ${q(coAuthors)}`,
  publisher && `publisher: ${q(publisher)}`,
  /^\d+$/.test(year) && `year: ${year}`,
  isbn && `isbn: ${q(isbn)}`,
  bahasa && `language: ${q(bahasa)}`,
  /^\d+$/.test(pages) && `pages: ${pages}`,
  negara && `acquiredIn: ${q(negara)}`,
  `categories: [${subjek.map(q).join(', ')}]`,
  `formats: [${formats.map(q).join(', ')}]`,
  link && `link: ${q(link)}`,
  `status: ${q(status)}`,
  /^[1-5]$/.test(rating) && `rating: ${rating}`,
  'draft: false',
].filter(Boolean);

const name = `${catalogNumber.toLowerCase()}-${slugify(title)}.md`;
writeFileSync(new URL(name, dir), `---\n${lines.join('\n')}\n---\n\n${note}\n`, { flag: 'wx' });
console.log(`\nDibuat: src/content/library/${name}\nNomor panggil: ${call}`);
