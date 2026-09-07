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

// Frontmatter buku (Bagian 5 dokumen rancang bangun, "Books"). Belum ada
// entri — lihat src/pages/*/books/index.astro untuk status TODO-nya, dan
// src/content/books/.gitkeep untuk contoh bentuk frontmatter.
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    isbn: z.string().optional(),
    cover: z.string().optional(),
    formats: z.array(z.enum(['print', 'pdf', 'epub'])).default([]),
    purchaseUrl: z.string().url().optional(),
    quote: z.string().optional(),
  }),
});

export const collections = { writing, books };
