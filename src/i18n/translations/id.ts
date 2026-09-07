import type { en } from './en';

// Seluruh teks antarmuka bahasa Indonesia. Bentuknya harus selalu sama
// dengan en.ts — `satisfies typeof en` di bawah memastikan itu saat build.
export const id = {
  site: {
    name: 'Andri Hendrizal',
    title: 'Andri Hendrizal — Peneliti Ekologi Mangrove',
    description:
      'Portofolio pribadi Andri Hendrizal, peneliti ekologi mangrove dan blue carbon di Universitas Riau.',
  },
  nav: {
    label: 'Navigasi utama',
    home: 'Beranda',
    contact: 'Kontak',
    // TODO (Tahap 2/3): tambahkan Research, Publications, Books, Writing,
    // Students, CV begitu halamannya dibangun.
  },
  languageSwitcher: {
    label: 'Bahasa',
  },
  footer: {
    copyright: 'Hak cipta dilindungi.',
  },
  home: {
    heroPosition:
      'Dosen, Fakultas Perikanan dan Ilmu Kelautan, Universitas Riau · Kandidat PhD (by Research), Universiti Malaya',
    introHeading: 'Tentang',
    // TODO: ganti dengan paragraf perkenalan ~100 kata dari pemilik situs
    // (lihat Bagian 12 dokumen rancang bangun — belum tersedia).
    intro:
      '[TODO: ganti dengan paragraf perkenalan ±100 kata dari pemilik situs.] Andri Hendrizal adalah peneliti ekologi mangrove yang berbasis di Riau, Indonesia, bekerja pada irisan ilmu blue carbon dan pengetahuan ekologi lokal.',
    focusHeading: 'Fokus Riset',
    focusAreas: [
      {
        title: 'Ekologi Mangrove',
        description: 'Struktur, dinamika, dan pemantauan ekosistem mangrove di Sumatra.',
      },
      {
        title: 'Blue Carbon',
        description: 'Penilaian stok karbon dan potensi mitigasi iklim dari lahan basah pesisir.',
      },
      {
        title: 'Pengetahuan Ekologi Lokal (LEK)',
        description: 'Mendokumentasikan dan mengintegrasikan pengetahuan masyarakat ke dalam pengelolaan mangrove.',
      },
    ],
    // TODO: satu kalimat kontribusi utama riset — perlu diisi pemilik situs.
    contributionStatement:
      '[TODO: satu kalimat pernyataan kontribusi utama riset, perlu diisi pemilik situs.]',
    publicationsHeading: 'Publikasi Terbaru',
    // TODO (Tahap 2): ganti dengan tiga publikasi terbaru dari OpenAlex.
    publicationsPlaceholder: '[TODO: diisi otomatis dari OpenAlex pada Tahap 2.]',
    writingHeading: 'Tulisan Terbaru',
    // TODO (Tahap 3): ganti dengan dua tulisan terbaru begitu sistem tulisan ada.
    writingPlaceholder: '[TODO: diisi setelah sistem tulisan dibangun pada Tahap 3.]',
    profilesHeading: 'Profil Akademik',
  },
  contact: {
    title: 'Kontak',
    emailLabel: 'Email',
    emailValue: 'andri.h@lecturer.unri.ac.id',
    affiliationLabel: 'Afiliasi',
    affiliationValue:
      'Dosen, Fakultas Perikanan dan Ilmu Kelautan, Universitas Riau; Kandidat PhD, Institute of Biological Sciences, Universiti Malaya',
    locationLabel: 'Lokasi',
    locationValue: 'Provinsi Riau, Indonesia',
    profilesHeading: 'Profil Akademik',
  },
} satisfies typeof en;
