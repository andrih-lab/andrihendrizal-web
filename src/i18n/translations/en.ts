// Seluruh teks antarmuka bahasa Inggris. Komponen dan halaman TIDAK BOLEH
// menulis string bahasa secara langsung — selalu ambil dari sini lewat
// `useTranslations()` (lihat src/i18n/utils.ts).
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
    contact: 'Contact',
    // TODO (Tahap 2/3): tambahkan Research, Publications, Books, Writing,
    // Students, CV begitu halamannya dibangun.
  },
  languageSwitcher: {
    label: 'Language',
  },
  footer: {
    copyright: 'All rights reserved.',
  },
  home: {
    heroPosition:
      'Lecturer, Faculty of Fisheries and Marine Science, Universitas Riau · PhD Candidate (by Research), Universiti Malaya',
    introHeading: 'About',
    // TODO: ganti dengan paragraf perkenalan ~100 kata dari pemilik situs
    // (lihat Bagian 12 dokumen rancang bangun — belum tersedia).
    intro:
      '[TODO: replace with the site owner’s ~100-word introduction.] Andri Hendrizal is a mangrove ecology researcher based in Riau, Indonesia, working at the intersection of blue carbon science and local ecological knowledge.',
    focusHeading: 'Research Focus',
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
    // TODO: satu kalimat kontribusi utama riset — perlu diisi pemilik situs.
    contributionStatement:
      '[TODO: one-sentence statement of the primary research contribution, to be provided by the site owner.]',
    publicationsHeading: 'Recent Publications',
    // TODO (Tahap 2): ganti dengan tiga publikasi terbaru dari OpenAlex.
    publicationsPlaceholder: '[TODO: automatically populated from OpenAlex in Stage 2.]',
    writingHeading: 'Recent Writing',
    // TODO (Tahap 3): ganti dengan dua tulisan terbaru begitu sistem tulisan ada.
    writingPlaceholder: '[TODO: populated once the writing system is built in Stage 3.]',
    profilesHeading: 'Academic Profiles',
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
