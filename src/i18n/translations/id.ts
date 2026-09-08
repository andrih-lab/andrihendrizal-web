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
    mangroveGuide: 'Panduan Mangrove',
    publications: 'Publikasi',
    writing: 'Tulisan',
    courses: 'Kursus',
    books: 'Buku',
    grants: 'Hibah',
    santaiSejenak: 'Santai Sejenak',
    cv: 'CV',
    contact: 'Kontak',
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
      'Dosen, Fakultas Perikanan dan Ilmu Kelautan, Universitas Riau · Mahasiswa PhD (by Research), Universiti Malaya',
    introHeading: 'Tentang',
    // Disusun dari Lampiran A dokumen rancang bangun (jabatan, riset,
    // pengalaman WRI Indonesia, hibah).
    intro:
      'Andri Hendrizal adalah dosen dan peneliti di Departemen Manajemen Sumberdaya Perairan, Universitas Riau, serta mahasiswa PhD (by Research) di Institute of Biological Sciences, Universiti Malaya. Karyanya berada pada irisan ekologi mangrove, blue carbon, dan pengetahuan ekologi lokal, memadukan pemantauan lapangan jangka panjang di pesisir mangrove Riau dengan penginderaan jauh, GIS, dan pemetaan berbasis drone. Pada 2023–2024 ia menjabat sebagai Ocean Account Research and Engagement Consultant untuk World Resources Institute (WRI) Indonesia, dan risetnya didukung hibah dari Universitas Riau serta Kementerian Pendidikan Tinggi, Sains, dan Teknologi.',
    focusHeading: 'Fokus Riset',
    contributionStatement:
      'Risetnya memadukan ilmu blue carbon dengan pengetahuan ekologi lokal untuk mendukung pengelolaan mangrove berbasis masyarakat di kabupaten-kabupaten pesisir Riau.',
    // Sinyal internasional terkuat (Bagian 12 catatan penyusunan) — data
    // faktual dari Lampiran A, ditonjolkan juga di halaman CV.
    internationalNote:
      'Keterlibatan internasional terbaru mencakup konsultasi riset bersama World Resources Institute (WRI) Indonesia serta program bersama East-West Center (Amerika Serikat) dan University of Sopron (Hongaria).',
    publicationsHeading: 'Publikasi Terbaru',
    publicationsEmpty: 'Publikasi akan tampil di sini begitu tersedia.',
    writingHeading: 'Tulisan Terbaru',
    writingEmpty: 'Tulisan baru akan tampil di sini segera.',
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
    mapCoordinateNote: 'Lokasi penanda merupakan perkiraan pada tingkat kecamatan.',
    methodsHeading: 'Metode dan Instrumen',
    toolHeading: 'Alat Identifikasi Lapangan',
    toolIntro:
      'Panduan interaktif 46 spesies mangrove Indonesia, lengkap dengan ciri akar/batang/daun/bunga/buah, alat banding cepat, dan tes mandiri.',
    toolCta: 'Buka Panduan Identifikasi Mangrove →',
    galleryHeading: 'Galeri Foto Lapangan',
    galleryEmpty: 'Foto lapangan lainnya segera menyusul.',
  },
  publications: {
    title: 'Publikasi',
    description: 'Publikasi Andri Hendrizal, diambil dari OpenAlex.',
    intro: 'Diambil otomatis dari OpenAlex saat build.',
    selectedHeading: 'Publikasi Pilihan',
    selectedEmpty: 'Publikasi pilihan akan ditambahkan segera.',
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
    emptyState: 'Publikasi akan tampil di sini begitu tersedia.',
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
    grantsSeeAll: 'Lihat detail lengkap hibah →',
    skillsHeading: 'Kompetensi Teknis',
    rankingsHeading: 'Peringkat dan Indeks',
  },
  writing: {
    title: 'Tulisan',
    description: 'Esai dan catatan Andri Hendrizal seputar ekologi mangrove, blue carbon, dan metode riset.',
    empty: 'Tulisan baru akan tampil di sini segera.',
    readMore: 'Baca selengkapnya →',
    backToList: '← Kembali ke Tulisan',
    translationAvailable: 'Tersedia juga dalam bahasa',
  },
  books: {
    title: 'Buku',
    description: 'Buku dan ebook karya Andri Hendrizal.',
    empty: 'Buku akan tercantum di sini begitu terbit.',
    formatsLabel: 'Format',
    buyButton: 'Tempat membeli',
    isbnLabel: 'ISBN',
  },
  grants: {
    title: 'Hibah',
    description: 'Hibah penelitian yang pernah diperoleh Andri Hendrizal.',
    amountLabel: 'Nominal',
  },
  courses: {
    title: 'Kursus',
    description: 'Mini-kursus gratis dan berbayar dari Andri Hendrizal seputar ekologi mangrove dan metode lapangan.',
    empty: 'Kursus akan segera tampil di sini.',
    freeLabel: 'Gratis',
    paidLabel: 'Berbayar',
    priceLabel: 'Harga',
    buyButton: 'Beli kursus ini →',
    buyNote: 'Pembayaran dan akses kursus akan diselesaikan di situs mitra kursus kami.',
    readMore: 'Lihat kursus →',
    backToList: '← Kembali ke Kursus',
  },
  contact: {
    title: 'Kontak',
    emailLabel: 'Email',
    emailValue: 'andri.h@lecturer.unri.ac.id',
    affiliationLabel: 'Afiliasi',
    affiliationValue:
      'Dosen, Fakultas Perikanan dan Ilmu Kelautan, Universitas Riau; Mahasiswa PhD, Institute of Biological Sciences, Universiti Malaya',
    locationLabel: 'Lokasi',
    locationValue: 'Provinsi Riau, Indonesia',
    profilesHeading: 'Profil Akademik',
  },
} satisfies typeof en;
