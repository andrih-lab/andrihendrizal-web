import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Frontmatter tulisan (Bagian 7 dokumen rancang bangun). Tulisan tidak
// wajib dua bahasa — tiap berkas punya satu `lang`, dan `translationOf`
// menghubungkannya ke padanan di bahasa lain bila ada (Bagian 5 Writing).
// Berkas/folder berawalan "_" (mis. _template.md) otomatis diabaikan oleh
// Astro, dipakai di sini sebagai contoh tulisan yang bisa disalin.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'id']),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    translationOf: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Frontmatter buku (Bagian 5 dokumen rancang bangun, "Books"). Dikelola
// lewat /admin persis seperti tulisan — lihat src/content/books/.gitkeep
// untuk contoh bentuk frontmatter. `purchaseLinks` berupa daftar supaya
// pemilik situs bisa menambah beberapa tautan pembelian (cetak, ebook,
// toko berbeda-beda) tanpa dibatasi satu link.
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    isbn: z.string().optional(),
    cover: z.string().optional(),
    formats: z.array(z.enum(['print', 'pdf', 'epub'])).default([]),
    purchaseLinks: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
    quote: z.string().optional(),
  }),
});

// Kursus/mini e-course. Situs ini statis tanpa backend (Prinsip #1), jadi
// tidak ada proteksi akses yang sungguhan aman di sini — bedanya dua jenis:
// - access: 'free'  → isi (body Markdown, boleh sematkan <iframe> YouTube)
//   TAMPIL PENUH di situs ini, dikelola lewat /admin persis seperti tulisan.
// - access: 'paid'  → body di sini HANYA teaser/silabus publik. Materi
//   sungguhan (video, file) TIDAK BOLEH ditaruh di repo/CMS ini — harus
//   di-host di platform pihak ketiga yang menangani pembayaran + proteksi
//   (Gumroad, Payhip, Teachable, dsb). `purchaseUrl` menunjuk ke sana.
const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'id']),
    access: z.enum(['free', 'paid']),
    price: z.string().optional(),
    purchaseUrl: z.string().url().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(true),
  }),
});

export const collections = { writing, books, courses };
