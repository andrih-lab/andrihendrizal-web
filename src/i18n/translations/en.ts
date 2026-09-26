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
    menu: 'Menu',
    home: 'Home',
    research: 'Research',
    mangroveGuide: 'Mangrove ID Guide',
    herbarium: 'Herbarium',
    microscopy: 'Microscopy',
    mangroveMap: 'Mangrove Map',
    publications: 'Publications',
    writing: 'Writing',
    courses: 'Courses',
    books: 'Books',
    grants: 'Grants',
    // Sengaja tidak diterjemahkan — bagian ini memang Indonesia-only.
    santaiSejenak: 'Santai Sejenak',
    cv: 'CV',
    contact: 'Contact',
  },
  languageSwitcher: {
    label: 'Language',
  },
  footer: {
    copyright: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
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
    {
      title: 'Higher Education',
      description: 'Biology and environmental literacy in higher education.',
    },
  ],
  home: {
    heroPosition:
      'Lecturer, Faculty of Fisheries and Marine Science, Universitas Riau · PhD Student (by Research), Universiti Malaya',
    introHeading: 'About',
    // Disusun dari Lampiran A dokumen rancang bangun (jabatan, riset,
    // pengalaman WRI Indonesia, hibah).
    intro:
      'Andri Hendrizal is a lecturer and researcher at the Department of Aquatic Resources Management, Universitas Riau, and a PhD student (by Research) at the Institute of Biological Sciences, Universiti Malaya. His research centers on mangrove ecology, with additional interests in blue carbon and local ecological knowledge, grounded in long-term field monitoring in Riau’s coastal mangroves and occasionally supported by remote sensing, GIS, and drone-based mapping. He also occasionally researches biology and environmental literacy in higher education. Between 2023 and 2024 he served as an Ocean Account Research and Engagement Consultant for World Resources Institute (WRI) Indonesia, and his research has been supported by grants from Universitas Riau and Indonesia’s Ministry of Higher Education, Science and Technology.',
    focusHeading: 'Research Focus',
    contributionStatement:
      'His research combines blue carbon science with local ecological knowledge to inform community-grounded mangrove management across Riau’s coastal districts.',
    // Sinyal internasional terkuat (Bagian 12 catatan penyusunan) — data
    // faktual dari Lampiran A, ditonjolkan juga di halaman CV.
    internationalNote:
      'Recent international engagement includes a research consultancy with World Resources Institute (WRI) Indonesia and fellowships with the East-West Center (USA) and University of Sopron (Hungary).',
    // Latar belakang masa studi sarjana (arsip staff.unri.ac.id, halaman
    // "Profil") — ditulis faktual/netral, tanpa superlatif (Bagian 12).
    backgroundNote:
      'During his undergraduate studies, he served as student body president at Universitas Riau (2011–2012) and received the university’s model-student recognition for the same academic year. In 2013 he was one of seven Indonesian delegates selected for the Study of the U.S. Institute program on global environmental issues, hosted by the East-West Center in Hawaii.',
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
    mapCoordinateNote: 'Marker locations are approximate, at the sub-district level.',
    methodsHeading: 'Methods & Instruments',
    toolHeading: 'Field Identification Tool',
    toolIntro:
      'An interactive guide to 46 Indonesian mangrove species, with root/stem/leaf/flower/fruit identification notes, a quick-compare tool, and a self-test quiz. In Indonesian.',
    toolCta: 'Open the Mangrove ID Guide →',
    microscopyCta: 'Open Microscopy Documentation →',
    outreachHeading: 'Community Engagement',
    // Direvisi: memimpin dengan 2 publikasi pengabdian masyarakat yang
    // langsung bertema mangrove (2025, lihat halaman Publications), baru
    // menyebut program pengabdian umum dari arsip staff.unri.ac.id
    // (2019–2021) sebagai konteks tambahan (Bagian 12).
    outreachNote:
      'His community-service publications focus on mangrove-dependent communities in Riau — including digital-marketing training for a mangrove products group in Bengkalis and a website-based branding initiative for mangrove-derived products (both 2025, see Publications). He has also contributed to broader community programs, such as plastic-waste management training and food-security outreach at local schools (2019–2021).',
    galleryHeading: 'Field Photo Gallery',
    galleryEmpty: 'More field photos coming soon.',
    microscopyHeading: 'Microscopy Documentation',
    microscopyIntro: 'Photos and videos from microscope observations during fieldwork and lab work.',
  },
  herbarium: {
    title: 'Herbarium',
    description: 'A collection of plant specimens and preserved fauna gathered by Andri Hendrizal, organized by field trip.',
    intro:
      'Specimens collected during family visits and field courses, documented here as part of a broader effort to bring scientific literacy back into public view.',
    empty: 'Herbarium series will be added soon.',
    backToList: '← Back to Herbarium',
    locationLabel: 'Location',
    familyLabel: 'Family',
    localNameLabel: 'Local name',
    specimensHeading: 'Specimens',
    specimensLabel: 'specimens',
    plantsHeading: 'Herbarium (Plants)',
    wholePlantLabel: 'whole plant',
    pressedSpecimenLabel: 'herbarium specimen',
    // Fauna: awetan basah (siput, udang, kepiting kecil ekosistem mangrove
    // diawetkan dalam alkohol 70%) — koleksi terpisah dari herbarium
    // (taksonomi berbeda) tapi ditampilkan di halaman yang sama, bukan menu
    // navbar sendiri, karena kontennya masih sedikit.
    faunaHeading: 'Fauna (Wet-Preserved Specimens)',
    faunaIntro: 'Small invertebrates from the mangrove ecosystem — snails, shrimp, crabs — preserved in 70% ethanol.',
    faunaEmpty: 'Wet-specimen series will be added soon.',
    preservationLabel: 'Preservation',
    filterCategory: 'Category',
    filterAll: 'All',
    filterNoResults: 'No series match this category.',
  },
  mangroveMap: {
    title: 'Mangrove Distribution Map',
    description:
      "Interactive and reference maps of Indonesia's mangrove area by province, 2024, based on the National Mangrove Map decree.",
    intro:
      "Existing mangrove area and potential mangrove habitat area by province, 2024, based on Indonesia's National Mangrove Map. Click a province to see its figures; this page currently maps province-level totals, not individual mangrove patches — see the note below for why.",
    mapLabel: 'Interactive map of mangrove area by province',
    metricLabel: 'Metric',
    eksistingLabel: 'Existing Mangrove',
    potensiLabel: 'Potential Habitat',
    metricHelp:
      'Existing Mangrove: current mangrove cover. Potential Habitat: coastal land not currently covered by mangrove but suitable for mangrove rehabilitation (e.g. former aquaculture ponds or degraded mangrove land).',
    provinceLabel: 'Province',
    unitHa: 'ha',
    noData: 'no data',
    streetBasemap: 'Streets',
    satelliteBasemap: 'Satellite',
    sourceNote:
      'Source: Decree of the Indonesian Minister of Forestry No. 594/2025 on the 2024 National Mangrove Map, Annex II (province-level totals only — the source document does not include per-polygon mangrove geometry). Province boundaries: Indonesia GeoJSON & TopoJSON Maps (38 Provinces) by denyherianto, CC BY 4.0.',
    staticHeading: 'Static Reference Maps',
    staticIntro:
      'Print-ready versions of the map above, with scale bar, north arrow, coordinate grid, and a Southeast Asia locator inset — for citation, reports, or presentations.',
    downloadPng: 'Download PNG (300 dpi)',
    downloadPdf: 'Download PDF (vector)',
    citeHeading: 'How to Cite',
    citeIntro:
      'This map is an original work by Andri Hendrizal, compiled from public data, and is released under a Creative Commons Attribution 4.0 (CC BY 4.0) license — you are free to reuse and adapt it, including commercially, as long as you credit the source below.',
    citeCopy: 'Copy citation',
    citeCopied: 'Copied',
  },
  microscopy: {
    title: 'Microscopy Documentation',
    description: 'Photos and videos from microscope observations by Andri Hendrizal, during fieldwork and lab work.',
    intro:
      'Photos and videos from microscope observations during fieldwork and lab work, including the original specimen photo where available.',
    empty: 'Microscopy documentation will be added soon.',
    magnificationLabel: 'Magnification',
    moreImagesLabel: 'More photos',
    // Preparat anatomi daun — lihat komentar di src/content.config.ts untuk
    // penjelasan tiap jenis sayatan.
    leafSectionsLabel: 'Leaf anatomy preparations',
    transversalLabel: 'Transversal section',
    paradermalAdaxialLabel: 'Paradermal section (upper/adaxial)',
    paradermalAbaxialLabel: 'Paradermal section (lower/abaxial)',
    petioleLabel: 'Petiole cross-section',
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
    membershipsHeading: 'Professional Memberships',
    membershipIdLabel: 'Member ID',
    editorialHeading: 'Editorial & Reviewer Roles',
    invitedTalksHeading: 'Invited Talks',
    grantsHeading: 'Research Grants',
    grantsYear: 'Year',
    grantsFunder: 'Funder',
    grantsTitle: 'Title',
    grantsSeeAll: 'See full grant details →',
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
  grants: {
    title: 'Grants',
    description: 'Research grants awarded to Andri Hendrizal.',
    amountLabel: 'Amount',
  },
  courses: {
    title: 'Courses',
    description: 'Free and paid mini-courses by Andri Hendrizal on mangrove ecology and field methods.',
    empty: 'Courses will appear here soon.',
    freeLabel: 'Free',
    paidLabel: 'Paid',
    priceLabel: 'Price',
    buyButton: 'Buy this course →',
    // Ditampilkan di bawah tombol beli — jujur ke pengunjung soal alur pembelian.
    buyNote: 'You’ll complete payment and get access on our course partner’s site.',
    readMore: 'View course →',
    backToList: '← Back to Courses',
  },
  contact: {
    title: 'Contact',
    emailLabel: 'Email',
    emailValue: 'andri.h@lecturer.unri.ac.id',
    affiliationLabel: 'Affiliation',
    affiliationValue:
      'Lecturer, Faculty of Fisheries and Marine Science, Universitas Riau; PhD Student, Institute of Biological Sciences, Universiti Malaya',
    locationLabel: 'Location',
    locationValue: 'Riau Province, Indonesia',
    profilesHeading: 'Academic Profiles',
  },
};
