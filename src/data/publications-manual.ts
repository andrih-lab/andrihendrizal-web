import type { Publication } from '../lib/openalex';

// Publikasi yang belum terindeks OpenAlex — bab buku, prosiding lokal, dst.
// (Bagian 5 dokumen: "Sediakan juga daftar manual opsional untuk publikasi
// yang belum terindeks OpenAlex"). Kosong untuk sekarang.
//
// TODO: tambahkan entri di sini bila ada, contoh bentuknya:
// {
//   id: 'manual-1',
//   title: 'Judul bab buku atau prosiding',
//   authors: ['Andri Hendrizal', 'Penulis Lain'],
//   venue: 'Nama buku/prosiding',
//   year: 2023,
//   publicationDate: null,
//   citedByCount: 0,
//   doi: null,
//   isOA: false,
//   workType: 'book-chapter',
//   source: 'manual',
// }
export const manualPublications: Publication[] = [];
