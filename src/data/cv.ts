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

export interface CvGrant {
  title: Bilingual;
  funder: Bilingual;
  year: string;
}

// Nominal hibah sengaja tidak ditampilkan (Bagian 12 catatan penyusunan:
// "tanpa perlu menyebut nominal jika dirasa kurang relevan untuk audiens
// internasional" — kolaborator internasional adalah audiens prioritas
// pertama, Bagian 1).
export const grants: CvGrant[] = [
  {
    year: '2025',
    funder: { en: 'DPPM, Ministry of Higher Education, Science and Technology', id: 'DPPM Kemendiktisaintek' },
    title: {
      en: 'Exploration and inventory of Traditional Ecological Knowledge in mangrove management, Riau',
      id: 'Eksplorasi dan inventarisasi TEK dalam pengelolaan mangrove, Riau',
    },
  },
  {
    year: '2025',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Behavioral response of giant freshwater prawn to trap gear',
      id: 'Respons perilaku udang galah terhadap alat tangkap perangkap',
    },
  },
  {
    year: '2022',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Development of the Danau Putus fisheries production sanctuary, Lubuk Siam',
      id: 'Pengembangan suaka produksi perikanan Danau Putus, Lubuk Siam',
    },
  },
  {
    year: '2021',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Morphological and genetic characteristics of giant freshwater prawn, Riau',
      id: 'Karakteristik morfologi dan genetik udang galah, Riau',
    },
  },
  {
    year: '2021',
    funder: { en: 'Universitas Riau', id: 'Universitas Riau' },
    title: {
      en: 'Marine debris accumulation analysis for mangrove conservation, Purnama, Dumai',
      id: 'Analisis akumulasi sampah laut untuk konservasi mangrove, Purnama, Dumai',
    },
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
