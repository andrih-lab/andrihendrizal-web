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
    research: 'Riset',
    publications: 'Publikasi',
    cv: 'CV',
    contact: 'Kontak',
    // TODO (Tahap 3/4): tambahkan Books, Writing, Students begitu
    // halamannya dibangun.
  },
  languageSwitcher: {
    label: 'Bahasa',
  },
  footer: {
    copyright: 'Hak cipta dilindungi.',
  },
  // Tiga bidang fokus riset — dipakai bersama oleh Beranda dan Research
  // (Bagian 1 dan Bagian 5 dokumen rancang bangun).
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
  home: {
    heroPosition:
      'Dosen, Fakultas Perikanan dan Ilmu Kelautan, Universitas Riau · Kandidat PhD (by Research), Universiti Malaya',
    introHeading: 'Tentang',
    // TODO: ganti dengan paragraf perkenalan ~100 kata dari pemilik situs
    // (lihat Bagian 12 dokumen rancang bangun — belum tersedia).
    intro:
      '[TODO: ganti dengan paragraf perkenalan ±100 kata dari pemilik situs.] Andri Hendrizal adalah peneliti ekologi mangrove yang berbasis di Riau, Indonesia, bekerja pada irisan ilmu blue carbon dan pengetahuan ekologi lokal.',
    focusHeading: 'Fokus Riset',
    // TODO: satu kalimat kontribusi utama riset — perlu diisi pemilik situs.
    contributionStatement:
      '[TODO: satu kalimat pernyataan kontribusi utama riset, perlu diisi pemilik situs.]',
    // Sinyal internasional terkuat (Bagian 12 catatan penyusunan) — data
    // faktual dari Lampiran A, ditonjolkan juga di halaman CV.
    internationalNote:
      'Keterlibatan internasional terbaru mencakup konsultasi riset bersama World Resources Institute (WRI) Indonesia serta program bersama East-West Center (Amerika Serikat) dan University of Sopron (Hongaria).',
    publicationsHeading: 'Publikasi Terbaru',
    publicationsEmpty: '[TODO: publikasi belum tersedia — periksa pengambilan data OpenAlex saat build, lihat src/lib/openalex.ts.]',
    writingHeading: 'Tulisan Terbaru',
    // TODO (Tahap 3): ganti dengan dua tulisan terbaru begitu sistem tulisan ada.
    writingPlaceholder: '[TODO: diisi setelah sistem tulisan dibangun pada Tahap 3.]',
    profilesHeading: 'Profil Akademik',
  },
  research: {
    title: 'Riset',
    description: 'Fokus riset, situs lapangan, dan metode.',
    focusHeading: 'Fokus Riset',
    mapHeading: 'Situs Riset Lapangan',
    mapIntro:
      'Seluruh lokasi yang pernah menjadi tempat penelitian Andri Hendrizal, ditarik dari riwayat publikasi dan hibah — bukan hanya situs pemantauan permanen. Klik penanda untuk detail.',
    mapLabel: 'Peta interaktif situs riset lapangan',
    permanentSite: 'Situs pemantauan permanen',
    pastSite: 'Lokasi penelitian lampau',
    // TODO: koordinat masih perkiraan tingkat kecamatan (lihat src/data/research-sites.ts);
    // ganti dengan koordinat pasti begitu tersedia dari pemilik situs (Bagian 12).
    mapCoordinateNote: 'Lokasi penanda masih perkiraan (tingkat kecamatan) sampai koordinat pasti diberikan pemilik situs.',
    methodsHeading: 'Metode dan Instrumen',
    projectsHeading: 'Proyek yang Sedang Berjalan',
    // TODO: belum ada data proyek yang sedang berjalan dari pemilik situs.
    projectsTodo: '[TODO: daftar proyek yang sedang berjalan, perlu diisi pemilik situs.]',
    galleryHeading: 'Galeri Foto Lapangan',
    // TODO: belum ada foto lapangan dari pemilik situs (Bagian 12).
    galleryTodo: '[TODO: foto lapangan mangrove, perlu ditambahkan pemilik situs.]',
  },
  publications: {
    title: 'Publikasi',
    description: 'Publikasi Andri Hendrizal, diambil dari OpenAlex.',
    intro: 'Diambil otomatis dari OpenAlex saat build.',
    selectedHeading: 'Publikasi Pilihan',
    // TODO: pemilik situs belum memilih Selected Publications (Bagian 12).
    selectedTodo: '[TODO: pemilik situs belum memilih Publikasi Pilihan — lihat src/data/selected-publications.ts.]',
    allHeading: 'Semua Publikasi',
    filterYear: 'Tahun',
    filterType: 'Jenis',
    filterKeyword: 'Kata Kunci',
    filterKeywordPlaceholder: 'Cari judul, jurnal, penulis…',
    filterAll: 'Semua',
    filterNoResults: 'Tidak ada publikasi yang cocok dengan penyaring ini.',
    citedBy: 'Disitasi',
    openAccess: 'Open Access',
    unknownYear: 'Tanpa Tahun',
    emptyState: '[TODO: publikasi belum tersedia — periksa pengambilan data OpenAlex saat build dan berkas cadangan.]',
  },
  cv: {
    title: 'CV',
    description: 'Curriculum vitae Andri Hendrizal.',
    downloadPdf: 'Unduh PDF',
    educationHeading: 'Pendidikan',
    experienceHeading: 'Pengalaman',
    internationalBadge: 'Internasional',
    trainingHeading: 'Pelatihan dan Program Internasional',
    grantsHeading: 'Hibah Penelitian',
    grantsYear: 'Tahun',
    grantsFunder: 'Pemberi',
    grantsTitle: 'Judul',
    skillsHeading: 'Kompetensi Teknis',
    rankingsHeading: 'Peringkat dan Indeks',
    // TODO: peringkat AD Scientific Index dsb. belum tersedia dari pemilik situs.
    rankingsTodo: '[TODO: cantumkan peringkat AD Scientific Index dan sejenisnya di sini, perlu diisi pemilik situs.]',
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
