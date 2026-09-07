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
    writing: 'Writing',
    books: 'Books',
    students: 'For Students',
    cv: 'CV',
    contact: 'Contact',
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
    // Disusun dari Lampiran A dokumen rancang bangun (jabatan, riset,
    // pengalaman WRI Indonesia, hibah).
    intro:
      'Andri Hendrizal is a lecturer and researcher at the Department of Aquatic Resources Management, Universitas Riau, and a PhD candidate (by Research) at the Institute of Biological Sciences, Universiti Malaya. His work sits at the intersection of mangrove ecology, blue carbon, and local ecological knowledge, combining long-term field monitoring in Riau’s coastal mangroves with remote sensing, GIS, and drone-based mapping. Between 2023 and 2024 he served as an Ocean Account Research and Engagement Consultant for World Resources Institute (WRI) Indonesia, and his research has been supported by grants from Universitas Riau and Indonesia’s Ministry of Higher Education, Science and Technology.',
    focusHeading: 'Research Focus',
    contributionStatement:
      'His research combines blue carbon science with local ecological knowledge to inform community-grounded mangrove management across Riau’s coastal districts.',
    // Sinyal internasional terkuat (Bagian 12 catatan penyusunan) — data
    // faktual dari Lampiran A, ditonjolkan juga di halaman CV.
    internationalNote:
      'Recent international engagement includes a research consultancy with World Resources Institute (WRI) Indonesia and fellowships with the East-West Center (USA) and University of Sopron (Hungary).',
    publicationsHeading: 'Recent Publications',
    publicationsEmpty: 'Publications will appear here once available.',
    writingHeading: 'Recent Writing',
    writingEmpty: 'New posts will appear here soon.',
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
    galleryHeading: 'Field Photo Gallery',
    galleryEmpty: 'More field photos coming soon.',
  },
  publications: {
    title: 'Publications',
    description: 'Publications by Andri Hendrizal, retrieved from OpenAlex.',
    intro: 'Automatically retrieved from OpenAlex at build time.',
    selectedHeading: 'Selected Publications',
    selectedEmpty: 'Selected publications will be added soon.',
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
    emptyState: 'Publications will appear here once available.',
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
  },
  writing: {
    title: 'Writing',
    description: 'Essays and notes by Andri Hendrizal on mangrove ecology, blue carbon, and research methods.',
    empty: 'New posts will appear here soon.',
    readMore: 'Read more →',
    backToList: '← Back to Writing',
    translationAvailable: 'Also available in',
  },
  books: {
    title: 'Books',
    description: 'Books and ebooks by Andri Hendrizal.',
    empty: 'Books will be listed here once published.',
    formatsLabel: 'Formats',
    buyButton: 'Where to buy',
    isbnLabel: 'ISBN',
  },
  students: {
    title: 'For Students',
    description: 'Information for students interested in research supervision.',
    topicsHeading: 'Available Research Topics',
    topicsBody:
      'Specific open topics will be posted here soon. In the meantime, you are welcome to reach out with your own research interest within one of the three focus areas above — explain the fit in your first email.',
    expectationsHeading: 'What’s Expected',
    expectationsBody:
      'Supervision follows a research-apprenticeship model: regular fieldwork, careful data management, and consistent progress toward at least one publishable output. Students are expected to be comfortable working outdoors in coastal and estuarine environments, to meet agreed deadlines, and to communicate proactively when problems arise.',
    benefitsHeading: 'What You Will Get',
    benefitsBody:
      'Access to long-term monitoring sites in Bengkalis and Dumai (see the Research page), hands-on training in field methods, GIS, and drone-based mapping, and the opportunity to co-author publications arising from your thesis work.',
    contactHeading: 'How to Contact',
    contactIntro: 'Send a short email to the address on the Contact page. To get a useful reply quickly, include:',
    contactList: [
      'Your academic background and current program',
      'Which research focus area interests you and why',
      'Your CV or transcript',
      'Your availability for fieldwork',
    ],
    faqHeading: 'Frequently Asked Questions',
    faq: [
      {
        question: 'Do I need to already know GIS or R before contacting you?',
        answer:
          'No — these are things you will learn during supervision. An interest in learning them matters more than existing expertise.',
      },
      {
        question: 'Can I propose my own topic instead of choosing from the list above?',
        answer:
          'Yes, as long as it fits within the three research focus areas on the Research page. Explain the fit in your first email.',
      },
    ],
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
