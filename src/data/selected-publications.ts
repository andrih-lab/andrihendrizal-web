interface Bilingual {
  en: string;
  id: string;
}

export interface SelectedPublication {
  /** Judul sebagaimana diterbitkan — tidak diterjemahkan (beberapa memang terbit dalam bahasa Indonesia). */
  title: string;
  venue: string;
  year: number;
  description: Bilingual;
  /** Menentukan pengurutan tampil: topik mangrove selalu di atas (lihat halaman Publications). */
  topic: 'mangrove' | 'other';
}

// Ditranskripsi dari CV pemilik situs (CV_Andri_Hendrizal_2026ISC_Biotrop.pdf),
// yang memuat daftar publikasi lebih lengkap daripada yang bisa diambil dari
// OpenAlex di lingkungan pengembangan ini. Tidak ada tautan DOI/PDF di sini
// karena berkas sumber tidak menyertakan URL aslinya — hindari menebak link.
// Urutan tampil (permintaan pemilik situs): kelompok topik mangrove dulu
// (tahun terbaru di atas), baru kelompok topik lain (tahun terbaru di atas)
// — logika pengurutannya ada di halaman Publications, bukan di sini, supaya
// entri baru yang ditambahkan cukup diberi `topic` dan `year` yang benar.
export const selectedPublications: SelectedPublication[] = [
  {
    title: 'Inventory of Mangrove Types and Economic Potential Analysis through Mangrove-Based Products',
    venue: 'Egyptian Journal of Aquatic Biology and Fisheries, Vol. 30 No. 1',
    year: 2026,
    description: {
      en: 'Focuses on the identification of mangrove diversity and the analysis of economic potential derived from mangrove-based products to support sustainable coastal community development and ecosystem conservation.',
      id: 'Berfokus pada identifikasi keragaman mangrove dan analisis potensi ekonomi dari produk berbasis mangrove untuk mendukung pembangunan masyarakat pesisir yang berkelanjutan dan konservasi ekosistem.',
    },
    topic: 'mangrove',
  },
  {
    title: 'The Effect of Soil Environmental Parameters on Mangrove Tree Growth in Lingga District',
    venue: 'Jurnal Penelitian Pendidikan IPA, Vol. 10 No. 12',
    year: 2024,
    description: {
      en: 'Investigates the influence of soil environmental parameters on mangrove growth dynamics in coastal ecosystems.',
      id: 'Meneliti pengaruh parameter lingkungan tanah terhadap dinamika pertumbuhan mangrove di ekosistem pesisir.',
    },
    topic: 'mangrove',
  },
  {
    title:
      'Pengembangan Budidaya Kepiting Bakau (Scylla sp.) Sistem Silvofishery untuk Melestarikan Hutan Bakau di Kabupaten Kepulauan Meranti Provinsi Riau',
    venue: 'Jurnal Kebijakan Perikanan Indonesia, Vol. 12 No. 1',
    year: 2020,
    description: {
      en: 'Explores silvofishery-based mangrove crab aquaculture as a strategy for mangrove conservation and sustainable coastal management.',
      id: 'Mengeksplorasi budidaya kepiting bakau berbasis silvofishery sebagai strategi konservasi mangrove dan pengelolaan pesisir berkelanjutan.',
    },
    topic: 'mangrove',
  },
  {
    title: 'Global Scientific Contributions to Tropical Wetland Ecosystems: Insights from a Bibliometric Approach',
    venue: 'Egyptian Journal of Aquatic Biology and Fisheries, Vol. 30 No. 1',
    year: 2026,
    description: {
      en: 'Analyzes global scientific trends and research contributions related to tropical wetland ecosystems using bibliometric approaches.',
      id: 'Menganalisis tren ilmiah global dan kontribusi riset terkait ekosistem lahan basah tropis menggunakan pendekatan bibliometrik.',
    },
    topic: 'other',
  },
  {
    title: 'Keyword Networks and Research Frontiers in Fisheries and Lake Management: A Comprehensive Bibliometric Approach',
    venue: 'Egyptian Journal of Aquatic Biology and Fisheries, Vol. 29 No. 4',
    year: 2025,
    description: {
      en: 'Explores research trends, collaboration networks, and emerging themes in fisheries and lake management studies.',
      id: 'Mengeksplorasi tren riset, jaringan kolaborasi, dan tema yang berkembang dalam studi perikanan dan pengelolaan danau.',
    },
    topic: 'other',
  },
  {
    title: 'Scientific Roadmap: A Bibliometric Analysis of GIS Use in Aquatic Resources Management',
    venue: 'AgroScience Research, Vol. 3 No. 1',
    year: 2025,
    description: {
      en: 'Evaluates the development and application of Geographic Information Systems (GIS) in aquatic resource management research.',
      id: 'Mengevaluasi perkembangan dan penerapan Sistem Informasi Geografis (GIS) dalam riset pengelolaan sumber daya perairan.',
    },
    topic: 'other',
  },
  {
    title: 'Peran Artificial Intelligence (AI) dalam Mengelola Beban Kognitif Mahasiswa Biologi: Kajian Sistematis',
    venue: 'Biology and Education Journal, Vol. 5 No. 1',
    year: 2025,
    description: {
      en: 'Systematic review examining the role of artificial intelligence in supporting biology learning and reducing students’ cognitive load.',
      id: 'Kajian sistematis mengenai peran kecerdasan buatan dalam mendukung pembelajaran biologi dan mengurangi beban kognitif mahasiswa.',
    },
    topic: 'other',
  },
  {
    title: 'Trends in Scientific Publications on Aquatic Waste Management: A Bibliometric Approach',
    venue: 'Berkala Perikanan Terubuk, Vol. 52 No. 1',
    year: 2024,
    description: {
      en: 'Identifies scientific trends and research developments in aquatic waste management studies.',
      id: 'Mengidentifikasi tren ilmiah dan perkembangan riset dalam studi pengelolaan limbah perairan.',
    },
    topic: 'other',
  },
  {
    title: 'Pola Pertumbuhan dan Faktor Kondisi Ikan Tambakan (Helostoma sp.) di Danau Panjang, Riau',
    venue: 'Berkala Perikanan Terubuk, Vol. 51 No. 1',
    year: 2023,
    description: {
      en: 'Analyzes growth patterns and condition factors of freshwater fish species in inland aquatic ecosystems.',
      id: 'Menganalisis pola pertumbuhan dan faktor kondisi spesies ikan air tawar di ekosistem perairan darat.',
    },
    topic: 'other',
  },
  {
    title:
      'Morphological and Genetic Characteristics (Mitochondrial DNA) as a Basis for Determining the Direction of Giant Prawn (Macrobrachium rosenbergii) Resources Management in Riau Province, Indonesia',
    venue: 'Aquaculture, Aquarium, Conservation and Legislation, Vol. 16 No. 2',
    year: 2023,
    description: {
      en: 'Integrates morphological and genetic analyses to support sustainable fisheries resource management.',
      id: 'Memadukan analisis morfologi dan genetik untuk mendukung pengelolaan sumber daya perikanan yang berkelanjutan.',
    },
    topic: 'other',
  },
  {
    title: 'Sustainable Aquaculture in the Koto Panjang Reservoir, Indonesia',
    venue: 'Aquaculture, Aquarium, Conservation and Legislation, Vol. 15 No. 1',
    year: 2022,
    description: {
      en: 'Discusses sustainable aquaculture management strategies in reservoir ecosystems.',
      id: 'Membahas strategi pengelolaan akuakultur berkelanjutan di ekosistem waduk.',
    },
    topic: 'other',
  },
  {
    title:
      'Local Wisdom and Conservation Status of Tor Thai Mahseer Fish (Tor tambroides Blkr) in the Batang Haluan River, West Sumatra, Indonesia',
    venue: 'International Journal of Conservation Science, Vol. 12 No. 4',
    year: 2021,
    description: {
      en: 'Examines local ecological knowledge and conservation status of indigenous freshwater fish species.',
      id: 'Mengkaji pengetahuan ekologi lokal dan status konservasi spesies ikan air tawar asli.',
    },
    topic: 'other',
  },
];
