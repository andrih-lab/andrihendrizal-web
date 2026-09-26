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
    menu: 'Menu',
    home: 'Beranda',
    research: 'Riset',
    mangroveGuide: 'Panduan Mangrove',
    herbarium: 'Herbarium',
    microscopy: 'Mikroskop',
    mangroveMap: 'Peta Mangrove',
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
    privacyPolicy: 'Kebijakan Privasi',
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
    {
      title: 'Pendidikan Tinggi',
      description: 'Literasi biologi dan literasi lingkungan di perguruan tinggi.',
    },
  ],
  home: {
    heroPosition:
      'Dosen, Fakultas Perikanan dan Ilmu Kelautan, Universitas Riau · Mahasiswa PhD (by Research), Universiti Malaya',
    introHeading: 'Tentang',
    // Disusun dari Lampiran A dokumen rancang bangun (jabatan, riset,
    // pengalaman WRI Indonesia, hibah).
    intro:
      'Andri Hendrizal adalah dosen dan peneliti di Departemen Manajemen Sumberdaya Perairan, Universitas Riau, serta mahasiswa PhD (by Research) di Institute of Biological Sciences, Universiti Malaya. Fokus risetnya adalah ekologi mangrove, dengan minat tambahan pada blue carbon dan pengetahuan ekologi lokal, bertumpu pada pemantauan lapangan jangka panjang di pesisir mangrove Riau dan sesekali didukung penginderaan jauh, GIS, serta pemetaan berbasis drone. Ia juga sesekali meneliti literasi biologi dan literasi lingkungan di pendidikan tinggi. Pada 2023–2024 ia menjabat sebagai Ocean Account Research and Engagement Consultant untuk World Resources Institute (WRI) Indonesia, dan risetnya didukung hibah dari Universitas Riau serta Kementerian Pendidikan Tinggi, Sains, dan Teknologi.',
    focusHeading: 'Fokus Riset',
    contributionStatement:
      'Risetnya memadukan ilmu blue carbon dengan pengetahuan ekologi lokal untuk mendukung pengelolaan mangrove berbasis masyarakat di kabupaten-kabupaten pesisir Riau.',
    // Sinyal internasional terkuat (Bagian 12 catatan penyusunan) — data
    // faktual dari Lampiran A, ditonjolkan juga di halaman CV.
    internationalNote:
      'Keterlibatan internasional terbaru mencakup konsultasi riset bersama World Resources Institute (WRI) Indonesia serta program bersama East-West Center (Amerika Serikat) dan University of Sopron (Hongaria).',
    // Latar belakang masa studi sarjana (arsip staff.unri.ac.id, halaman
    // "Profil") — ditulis faktual/netral, tanpa superlatif (Bagian 12).
    backgroundNote:
      'Selama masa studi sarjana, ia pernah menjabat sebagai Bupati Mahasiswa di Universitas Riau (2011/2012) dan menerima predikat mahasiswa teladan pada tahun ajaran yang sama. Pada tahun 2013, ia terpilih sebagai satu dari tujuh delegasi Indonesia untuk program Study of the U.S. Institute mengenai isu lingkungan global, yang diselenggarakan oleh East-West Center di Hawaii.',
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
    microscopyCta: 'Buka Dokumentasi Mikroskop →',
    outreachHeading: 'Pengabdian Masyarakat',
    // Direvisi: memimpin dengan 2 publikasi pengabdian masyarakat yang
    // langsung bertema mangrove (2025, lihat halaman Publications), baru
    // menyebut program pengabdian umum dari arsip staff.unri.ac.id
    // (2019–2021) sebagai konteks tambahan (Bagian 12).
    outreachNote:
      'Publikasi pengabdian masyarakatnya berfokus pada kelompok masyarakat pesisir yang bergantung pada mangrove di Riau — termasuk pelatihan digital marketing untuk kelompok produk olahan mangrove di Bengkalis dan inisiatif branding berbasis website untuk produk olahan mangrove (keduanya 2025, lihat halaman Publikasi). Ia juga terlibat dalam program pengabdian yang lebih umum, seperti pelatihan pengelolaan sampah plastik dan sosialisasi ketahanan pangan di sekolah dasar (2019–2021).',
    galleryHeading: 'Galeri Foto Lapangan',
    galleryEmpty: 'Foto lapangan lainnya segera menyusul.',
    microscopyHeading: 'Dokumentasi Mikroskop',
    microscopyIntro: 'Foto dan video hasil pengamatan mikroskop dari kegiatan riset.',
  },
  herbarium: {
    title: 'Herbarium',
    description:
      'Koleksi spesimen tumbuhan dan awetan fauna yang dikumpulkan Andri Hendrizal, disusun per seri perjalanan lapangan.',
    intro:
      'Spesimen yang dikumpulkan saat kunjungan keluarga maupun kuliah lapangan, didokumentasikan di sini sebagai bagian dari upaya memasyarakatkan kembali ilmu pengetahuan ke ruang publik.',
    empty: 'Seri herbarium akan ditambahkan segera.',
    backToList: '← Kembali ke Herbarium',
    locationLabel: 'Lokasi',
    familyLabel: 'Famili',
    localNameLabel: 'Nama daerah',
    specimensHeading: 'Spesimen',
    specimensLabel: 'spesimen',
    plantsHeading: 'Herbarium (Tumbuhan)',
    wholePlantLabel: 'tumbuhan utuh',
    pressedSpecimenLabel: 'spesimen herbarium',
    // Fauna: awetan basah (siput, udang, kepiting kecil ekosistem mangrove
    // diawetkan dalam alkohol 70%) — koleksi terpisah dari herbarium
    // (taksonomi berbeda) tapi ditampilkan di halaman yang sama, bukan menu
    // navbar sendiri, karena kontennya masih sedikit.
    faunaHeading: 'Fauna (Awetan Basah)',
    faunaIntro: 'Invertebrata kecil dari ekosistem mangrove — siput, udang, kepiting — diawetkan dalam alkohol 70%.',
    faunaEmpty: 'Seri awetan basah akan ditambahkan segera.',
    preservationLabel: 'Pengawetan',
    filterCategory: 'Kategori',
    filterAll: 'Semua',
    filterNoResults: 'Tidak ada seri yang cocok dengan kategori ini.',
  },
  mangroveMap: {
    title: 'Peta Sebaran Mangrove',
    description:
      'Peta interaktif dan peta acuan luas mangrove Indonesia per provinsi tahun 2024, berdasarkan Keputusan Peta Mangrove Nasional.',
    intro:
      'Luas mangrove eksisting dan luas potensi habitat mangrove per provinsi, tahun 2024, berdasarkan Peta Mangrove Nasional. Klik provinsi untuk melihat angkanya; halaman ini memetakan total per provinsi, bukan per bidang mangrove individual — lihat catatan di bawah untuk alasannya.',
    mapLabel: 'Peta interaktif luas mangrove per provinsi',
    metricLabel: 'Metrik',
    eksistingLabel: 'Mangrove Eksisting',
    potensiLabel: 'Potensi Habitat',
    metricHelp:
      'Mangrove Eksisting: luas tutupan mangrove yang ada saat ini. Potensi Habitat: luas lahan di kawasan pesisir yang belum bertutupan mangrove namun sesuai/berpotensi untuk direhabilitasi menjadi mangrove (mis. bekas tambak atau lahan mangrove yang rusak).',
    provinceLabel: 'Provinsi',
    unitHa: 'Ha',
    noData: 'tidak ada data',
    streetBasemap: 'Peta Jalan',
    satelliteBasemap: 'Citra Satelit',
    sourceNote:
      'Sumber: Keputusan Menteri Kehutanan RI No. 594 Tahun 2025 tentang Peta Mangrove Nasional Tahun 2024, Lampiran II (hanya total per provinsi — dokumen sumber tidak menyertakan geometri per-bidang mangrove). Batas provinsi: Indonesia GeoJSON & TopoJSON Maps (38 Provinces) oleh denyherianto, CC BY 4.0.',
    staticHeading: 'Peta Statis Acuan',
    staticIntro:
      'Versi siap cetak dari peta di atas, dilengkapi skala, arah utara, grid koordinat, dan inset lokasi Asia Tenggara — untuk sitasi, laporan, atau presentasi.',
    downloadPng: 'Unduh PNG (300 dpi)',
    downloadPdf: 'Unduh PDF (vektor)',
    citeHeading: 'Cara Mengutip',
    citeIntro:
      'Peta ini adalah karya orisinal Andri Hendrizal, disusun dari data publik, dan dirilis di bawah lisensi Creative Commons Attribution 4.0 (CC BY 4.0) — boleh dipakai ulang dan diadaptasi, termasuk untuk keperluan komersial, selama mencantumkan sumber di bawah ini.',
    citeCopy: 'Salin sitasi',
    citeCopied: 'Tersalin',
  },
  microscopy: {
    title: 'Dokumentasi Mikroskop',
    description: 'Foto dan video hasil pengamatan mikroskop oleh Andri Hendrizal, dari kegiatan lapangan dan lab.',
    intro:
      'Foto dan video hasil pengamatan mikroskop dari kegiatan lapangan dan lab, termasuk foto spesimen asli bila tersedia.',
    empty: 'Dokumentasi mikroskop akan ditambahkan segera.',
    magnificationLabel: 'Perbesaran',
    moreImagesLabel: 'Foto lainnya',
    // Preparat anatomi daun — lihat komentar di src/content.config.ts untuk
    // penjelasan tiap jenis sayatan.
    leafSectionsLabel: 'Preparat anatomi daun',
    transversalLabel: 'Sayatan transversal',
    paradermalAdaxialLabel: 'Sayatan paradermal (atas/adaksial)',
    paradermalAbaxialLabel: 'Sayatan paradermal (bawah/abaksial)',
    petioleLabel: 'Sayatan melintang petiol',
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
    membershipsHeading: 'Keanggotaan Profesional',
    membershipIdLabel: 'Nomor Anggota',
    editorialHeading: 'Peran Editorial dan Reviewer',
    invitedTalksHeading: 'Undangan Sebagai Narasumber',
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
