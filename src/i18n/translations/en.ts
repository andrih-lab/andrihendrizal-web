// Seluruh teks antarmuka bahasa Inggris. Komponen dan halaman TIDAK BOLEH
// menulis string bahasa secara langsung — selalu ambil dari sini lewat
// `useTranslations()` (lihat src/i18n/utils.ts). Data faktual (publikasi,
// situs riset, CV) hidup di src/data/, bukan di sini — lihat berkas-berkas
// itu untuk isi yang bisa berbeda per bahasa tapi bukan teks antarmuka.
export const en = {
  site: {
    name: 'Andri Hendrizal',
    title: 'Andri Hendrizal — Mangrove Ecology Researcher',
    description:
      'Personal portfolio of Andri Hendrizal, mangrove ecology and blue carbon researcher at Universitas Riau.',
  },
  nav: {
    label: 'Primary navigation',
    home: 'Home',
    research: 'Research',
    publications: 'Publications',
    cv: 'CV',
    contact: 'Contact',
    // TODO (Tahap 3/4): tambahkan Books, Writing, Students begitu
    // halamannya dibangun.
  },
  languageSwitcher: {
    label: 'Language',
  },
  footer: {
    copyright: 'All rights reserved.',
  },
  // Tiga bidang fokus riset — dipakai bersama oleh Beranda dan Research
  // (Bagian 1 dan Bagian 5 dokumen rancang bangun).
  focusAreas: [
    {
      title: 'Mangrove Ecology',
      description: 'Structure, dynamics, and monitoring of mangrove ecosystems in Sumatra.',
    },
    {
      title: 'Blue Carbon',
      description: 'Carbon stock assessment and the climate mitigation potential of coastal wetlands.',
    },
    {
      title: 'Local Ecological Knowledge',
      description: 'Documenting and integrating community knowledge into mangrove management.',
    },
  ],
  home: {
    heroPosition:
      'Lecturer, Faculty of Fisheries and Marine Science, Universitas Riau · PhD Candidate (by Research), Universiti Malaya',
    introHeading: 'About',
    // TODO: ganti dengan paragraf perkenalan ~100 kata dari pemilik situs
    // (lihat Bagian 12 dokumen rancang bangun — belum tersedia).
    intro:
      '[TODO: replace with the site owner’s ~100-word introduction.] Andri Hendrizal is a mangrove ecology researcher based in Riau, Indonesia, working at the intersection of blue carbon science and local ecological knowledge.',
    focusHeading: 'Research Focus',
    // TODO: satu kalimat kontribusi utama riset — perlu diisi pemilik situs.
    contributionStatement:
      '[TODO: one-sentence statement of the primary research contribution, to be provided by the site owner.]',
    // Sinyal internasional terkuat (Bagian 12 catatan penyusunan) — data
    // faktual dari Lampiran A, ditonjolkan juga di halaman CV.
    internationalNote:
      'Recent international engagement includes a research consultancy with World Resources Institute (WRI) Indonesia and fellowships with the East-West Center (USA) and University of Sopron (Hungary).',
    publicationsHeading: 'Recent Publications',
    publicationsEmpty: '[TODO: no publications available — check the OpenAlex build-time fetch, see src/lib/openalex.ts.]',
    writingHeading: 'Recent Writing',
    // TODO (Tahap 3): ganti dengan dua tulisan terbaru begitu sistem tulisan ada.
    writingPlaceholder: '[TODO: populated once the writing system is built in Stage 3.]',
    profilesHeading: 'Academic Profiles',
  },
  research: {
    title: 'Research',
    description: 'Research focus, field sites, and methods.',
    focusHeading: 'Research Focus',
    mapHeading: 'Field Research Sites',
    mapIntro:
      'Every site that has been part of Andri Hendrizal’s research, drawn from publication and grant history — not only permanent monitoring sites. Click a marker for details.',
    mapLabel: 'Interactive map of field research sites',
    permanentSite: 'Permanent monitoring site',
    pastSite: 'Past research site',
    // TODO: koordinat masih perkiraan tingkat kecamatan (lihat src/data/research-sites.ts);
    // ganti dengan koordinat pasti begitu tersedia dari pemilik situs (Bagian 12).
    mapCoordinateNote: 'Marker locations are approximate (sub-district level) pending precise coordinates from the site owner.',
    methodsHeading: 'Methods & Instruments',
    projectsHeading: 'Ongoing Projects',
    // TODO: belum ada data proyek yang sedang berjalan dari pemilik situs.
    projectsTodo: '[TODO: list of ongoing projects, to be provided by the site owner.]',
    galleryHeading: 'Field Photo Gallery',
    // TODO: belum ada foto lapangan dari pemilik situs (Bagian 12).
    galleryTodo: '[TODO: field photographs of mangrove sites, to be added by the site owner.]',
  },
  publications: {
    title: 'Publications',
    description: 'Publications by Andri Hendrizal, retrieved from OpenAlex.',
    intro: 'Automatically retrieved from OpenAlex at build time.',
    selectedHeading: 'Selected Publications',
    // TODO: pemilik situs belum memilih Selected Publications (Bagian 12).
    selectedTodo: '[TODO: the site owner has not yet chosen the Selected Publications — see src/data/selected-publications.ts.]',
    allHeading: 'All Publications',
    filterYear: 'Year',
    filterType: 'Type',
    filterKeyword: 'Keyword',
    filterKeywordPlaceholder: 'Search title, journal, author…',
    filterAll: 'All',
    filterNoResults: 'No publications match these filters.',
    citedBy: 'Cited by',
    openAccess: 'Open Access',
    unknownYear: 'Undated',
    emptyState: '[TODO: no publications available — check the OpenAlex build-time fetch and the fallback snapshot.]',
  },
  cv: {
    title: 'CV',
    description: 'Curriculum vitae of Andri Hendrizal.',
    downloadPdf: 'Download PDF',
    educationHeading: 'Education',
    experienceHeading: 'Experience',
    internationalBadge: 'International',
    trainingHeading: 'International Training & Programs',
    grantsHeading: 'Research Grants',
    grantsYear: 'Year',
    grantsFunder: 'Funder',
    grantsTitle: 'Title',
    skillsHeading: 'Technical Skills',
    rankingsHeading: 'Rankings & Indices',
    // TODO: peringkat AD Scientific Index dsb. belum tersedia dari pemilik situs.
    rankingsTodo: '[TODO: add AD Scientific Index ranking and similar indices here, to be provided by the site owner.]',
  },
  contact: {
    title: 'Contact',
    emailLabel: 'Email',
    emailValue: 'andri.h@lecturer.unri.ac.id',
    affiliationLabel: 'Affiliation',
    affiliationValue:
      'Lecturer, Faculty of Fisheries and Marine Science, Universitas Riau; PhD Candidate, Institute of Biological Sciences, Universiti Malaya',
    locationLabel: 'Location',
    locationValue: 'Riau Province, Indonesia',
    profilesHeading: 'Academic Profiles',
  },
};
