// Data faktual CV, ditranskripsi dan diterjemahkan langsung dari Lampiran A
// dokumen rancang bangun. Bukan teks antarmuka, jadi disimpan terpisah dari
// src/i18n/translations/ (yang hanya berisi label/judul bagian).

interface Bilingual {
  en: string;
  id: string;
}

export interface CvEducation {
  degree: Bilingual;
  institution: Bilingual;
  period: string;
}

export const education: CvEducation[] = [
  {
    degree: { en: 'B.Ed. in Biology Education', id: 'S.Pd Pendidikan Biologi' },
    institution: { en: 'Faculty of Teacher Training and Education, Universitas Riau', id: 'FKIP Universitas Riau' },
    period: '2009–2014',
  },
  {
    degree: { en: 'M.Sc. in Biology', id: 'M.Sc Biologi' },
    institution: {
      en: 'Faculty of Biology, Universitas Gadjah Mada',
      id: 'Fakultas Biologi, Universitas Gadjah Mada',
    },
    period: '2014–2016',
  },
  {
    degree: { en: 'PhD (by Research)', id: 'PhD (by Research)' },
    institution: {
      en: 'Institute of Biological Sciences, Faculty of Science, Universiti Malaya',
      id: 'Institute of Biological Sciences, Faculty of Science, Universiti Malaya',
    },
    period: '2025–present',
  },
];

export interface CvExperience {
  role: Bilingual;
  organization: Bilingual;
  period: string;
  location: string;
  international?: boolean;
}

export const experience: CvExperience[] = [
  {
    role: { en: 'Lecturer & Researcher', id: 'Dosen dan Peneliti' },
    organization: {
      en: 'Department of Aquatic Resources Management, Universitas Riau',
      id: 'Departemen Manajemen Sumberdaya Perairan, Universitas Riau',
    },
    period: 'Jul 2019–present',
    location: 'Pekanbaru',
  },
  {
    role: { en: 'Ocean Account Research and Engagement Consultant', id: 'Ocean Account Research and Engagement Consultant' },
    organization: { en: 'World Resources Institute (WRI) Indonesia', id: 'World Resources Institute (WRI) Indonesia' },
    period: 'May 2023–Mar 2024',
    location: 'Riau Province',
    international: true,
  },
  {
    role: { en: 'Research Assistant', id: 'Asisten Peneliti' },
    organization: {
      en: 'Center for Environmental Studies, Universitas Riau',
      id: 'Pusat Studi Lingkungan, Universitas Riau',
    },
    period: 'Feb 2017–2019',
    location: 'Pekanbaru',
  },
];

export interface CvTraining {
  name: Bilingual;
  provider: Bilingual;
  location: Bilingual;
  year: string;
  international?: boolean;
}

export const training: CvTraining[] = [
  {
    name: { en: 'Small UAS Remote Pilot Training', id: 'Small UAS Remote Pilot Training' },
    provider: { en: 'Drone Edutech', id: 'Drone Edutech' },
    location: { en: 'Indonesia', id: 'Indonesia' },
    year: '2026',
  },
  {
    name: {
      en: 'Thematic Remote Sensing (mangrove and vegetation density analysis)',
      id: 'Thematic Remote Sensing (analisis mangrove dan kerapatan vegetasi)',
    },
    provider: { en: 'Geospasial Education', id: 'Geospasial Education' },
    location: { en: 'Indonesia', id: 'Indonesia' },
    year: '2025',
  },
  {
    name: { en: 'Grant Writing Workshop', id: 'Grant Writing Workshop' },
    provider: { en: 'Sciencemind', id: 'Sciencemind' },
    location: { en: 'Indonesia', id: 'Indonesia' },
    year: '2024',
  },
  {
    name: { en: 'Pre-Doctoral Program', id: 'Pre-Doctoral Program' },
    provider: { en: 'University of Sopron', id: 'University of Sopron' },
    location: { en: 'Hungary', id: 'Hongaria' },
    year: '2022',
    international: true,
  },
  {
    name: { en: 'Study of the U.S. Institute (SUSI) / YSEALI', id: 'Study of US Institute (SUSI) / YSEALI' },
    provider: { en: 'East-West Center', id: 'East-West Center' },
    location: { en: 'Hawaii, United States', id: 'Hawaii, Amerika Serikat' },
    year: '2013',
    international: true,
  },
];

export interface CvMembership {
  organization: Bilingual;
  role: Bilingual;
  memberId: string;
  location: Bilingual;
}

export const memberships: CvMembership[] = [
  {
    organization: {
      en: 'International Society for Mangrove Ecosystems (ISME)',
      id: 'International Society for Mangrove Ecosystems (ISME)',
    },
    role: { en: 'Lifetime Member', id: 'Anggota Seumur Hidup (Lifetime Member)' },
    memberId: '1342LIF2603',
    location: { en: 'Japan', id: 'Jepang' },
  },
  {
    organization: {
      en: 'Ikatan Ilmuwan Indonesia Internasional (I4)',
      id: 'Ikatan Ilmuwan Indonesia Internasional (I4)',
    },
    role: { en: 'Member', id: 'Anggota' },
    memberId: '2310090010',
    location: { en: 'Indonesia', id: 'Indonesia' },
  },
];

export interface CvGrant {
  title: Bilingual;
  funder: Bilingual;
  year: string;
  /** Deskripsi singkat penelitian, dipakai di halaman Grants (bukan tabel CV). */
  description: Bilingual;
  /** Nominal hibah dalam Rupiah. Sumber: CV pemilik situs (2026 ISC Biotrop). */
  amountIDR: number;
}

// Judul resmi, deskripsi, dan nominal ditranskripsi dari CV pemilik situs
// (CV_Andri_Hendrizal_2026ISC_Biotrop.pdf), lebih lengkap daripada Lampiran A.
export const grants: CvGrant[] = [
  {
    year: '2025',
    funder: {
      en: 'DPPM, Ministry of Higher Education, Science and Technology',
      id: 'Direktorat Penelitian dan Pengabdian kepada Masyarakat (DPPM), Kementerian Pendidikan Tinggi, Sains dan Teknologi',
    },
    title: {
      en: 'Exploration and Inventory of Traditional Ecological Knowledge in Mangrove Management as an Effort for Coastal Environmental Conservation in Riau Province',
      id: 'Eksplorasi dan Inventarisasi Pengetahuan Ekologi Tradisional dalam Pengelolaan Mangrove sebagai Upaya Konservasi Lingkungan Pesisir di Provinsi Riau',
    },
    description: {
      en: 'Documents and analyzes the traditional ecological knowledge (TEK) of coastal communities in mangrove management practices, aiming to identify local ecological practices that can support more contextual, community-based, and sustainable conservation strategies for coastal ecosystems.',
      id: 'Mendokumentasikan dan menganalisis pengetahuan ekologi tradisional (TEK) masyarakat pesisir dalam praktik pengelolaan mangrove, untuk mengidentifikasi praktik ekologi lokal yang dapat mendukung strategi konservasi pesisir yang lebih kontekstual, berbasis masyarakat, dan berkelanjutan.',
    },
    amountIDR: 102_150_000,
  },
  {
    year: '2025',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Behavioral Response Characterization of Giant Freshwater Prawn (Macrobrachium rosenbergii) toward Trap Fishing Gear',
      id: 'Karakterisasi Respons Perilaku Udang Galah (Macrobrachium rosenbergii) terhadap Alat Tangkap Perangkap',
    },
    description: {
      en: 'Investigates the behavioral responses of giant freshwater prawns to trap-based fishing gear, integrating behavioral biology and fisheries technology to improve fishing efficiency while supporting sustainable resource management practices.',
      id: 'Meneliti respons perilaku udang galah terhadap alat tangkap jenis perangkap, memadukan biologi perilaku dan teknologi perikanan untuk meningkatkan efisiensi penangkapan sekaligus mendukung pengelolaan sumber daya yang berkelanjutan.',
    },
    amountIDR: 15_000_000,
  },
  {
    year: '2022',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Development of a Limited Fisheries Production Sanctuary in the Seasonal Lake of Putus, Lubuk Siam Village, Riau, Indonesia',
      id: 'Pengembangan Suaka Produksi Perikanan Terbatas di Danau Musiman Putus, Desa Lubuk Siam, Riau',
    },
    description: {
      en: 'Examines the development of fisheries sanctuary areas as a conservation-based resource management strategy, focused on balancing fisheries utilization and ecosystem protection within inland aquatic environments.',
      id: 'Mengkaji pengembangan kawasan suaka perikanan sebagai strategi pengelolaan sumber daya berbasis konservasi, dengan fokus menyeimbangkan pemanfaatan perikanan dan perlindungan ekosistem di perairan darat.',
    },
    amountIDR: 30_000_000,
  },
  {
    year: '2021',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Analysis of Marine Debris Accumulation for Mangrove Forest Conservation Efforts in Purnama Village, Dumai City, Riau Province',
      id: 'Analisis Akumulasi Sampah Laut untuk Upaya Konservasi Hutan Mangrove di Desa Purnama, Kota Dumai, Provinsi Riau',
    },
    description: {
      en: 'Identifies and analyzes marine debris accumulation within mangrove ecosystems and assesses its ecological impacts, contributing to coastal pollution mitigation and mangrove conservation strategies.',
      id: 'Mengidentifikasi dan menganalisis akumulasi sampah laut di ekosistem mangrove serta menilai dampak ekologisnya, sebagai kontribusi bagi strategi mitigasi pencemaran pesisir dan konservasi mangrove.',
    },
    amountIDR: 25_000_000,
  },
  {
    year: '2021',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Morphological and Genetic Characteristics (Mitochondrial DNA) as a Basis for Determining Sustainable Management Strategies of Giant Freshwater Prawn (Macrobrachium rosenbergii) Resources in Riau Province',
      id: 'Karakteristik Morfologi dan Genetik (DNA Mitokondria) sebagai Dasar Penentuan Strategi Pengelolaan Berkelanjutan Sumber Daya Udang Galah (Macrobrachium rosenbergii) di Provinsi Riau',
    },
    description: {
      en: 'Integrates morphological and genetic analyses to understand the population structure of giant freshwater prawns, providing scientific baseline data for sustainable fisheries resource management and conservation planning.',
      id: 'Memadukan analisis morfologi dan genetik untuk memahami struktur populasi udang galah, sebagai data dasar ilmiah bagi pengelolaan sumber daya perikanan yang berkelanjutan dan perencanaan konservasi.',
    },
    amountIDR: 30_000_000,
  },
];

export interface CvSkillArea {
  title: Bilingual;
  description: Bilingual;
}

export const technicalSkills: CvSkillArea[] = [
  {
    title: { en: 'Remote Sensing & GIS', id: 'Penginderaan Jauh dan GIS' },
    description: {
      en: 'Spatial analysis, mangrove mapping, environmental monitoring, and geospatial data visualization with QGIS.',
      id: 'Analisis spasial, pemetaan mangrove, pemantauan lingkungan, dan visualisasi data geospasial dengan QGIS.',
    },
  },
  {
    title: { en: 'R Programming', id: 'Pemrograman R' },
    description: {
      en: 'Statistical analysis, ecological data processing, bibliometric analysis, and scientific data visualization.',
      id: 'Analisis statistik, pengolahan data ekologi, analisis bibliometrik, dan visualisasi data ilmiah.',
    },
  },
  {
    title: { en: 'Drone Operations', id: 'Operasi Drone' },
    description: {
      en: 'Certified Small UAS Remote Pilot; aerial mapping.',
      id: 'Bersertifikat Small UAS Remote Pilot; pemetaan udara.',
    },
  },
];
