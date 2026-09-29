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
export const manualPublications: Publication[] = [
  {
    // Ditambahkan 2026-09-29, terbit hari yang sama — OpenAlex belum
    // sempat mengindeksnya. getPublications() TIDAK menyaring duplikat
    // (lihat src/lib/openalex.ts), jadi HAPUS entri ini begitu paper ini
    // muncul sendiri lewat OpenAlex (cek DOI di atas), supaya tidak
    // tampil dobel di halaman Publikasi.
    id: 'manual-1',
    title:
      'Morphological Characters and Qualitative Leaf Phytochemistry of Two Dye Plants, Indigofera tinctoria and Phyllanthus reticulatus, in Water and Ethanol Extracts',
    authors: [
      'Yolanda Getrudis Naisumu',
      'Noviana Mery Obenu',
      'Remigius Binsasi',
      'Maria Octoviani Tani',
      'De Paul Eangling Aomenu',
      'Andri Hendrizal',
    ],
    venue: 'JIPI (Jurnal IPA & Pembelajaran IPA)',
    year: 2026,
    publicationDate: '2026-09-29',
    citedByCount: 0,
    doi: 'https://doi.org/10.24815/jipi.v10i3.3663',
    isOA: true,
    workType: 'article',
    source: 'manual',
  },
];
