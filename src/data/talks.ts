// Presentasi ilmiah (konferensi, seminar, kuliah tamu). Entri terbaru di atas.
// Video diunggah ke YouTube lalu ditanam lewat youtube-nocookie (tanpa
// membebani bandwidth Netlify); slide disimpan di public/talks/.
interface Bilingual {
  en: string;
  id: string;
}

export interface Talk {
  id: string;
  title: string;
  /** Urutan sesuai abstrak; `self: true` menandai Andri Hendrizal agar ditebalkan. */
  authors: Array<{ name: string; self?: boolean }>;
  type: Bilingual;
  event: string;
  eventShort: string;
  location: Bilingual;
  dateLabel: Bilingual;
  year: string;
  youtubeId?: string;
  /** Metadata video untuk data terstruktur VideoObject (Google Video). */
  video?: { uploadDate: string; durationIso: string };
  slidesUrl?: string;
  slidesSizeLabel?: string;
  summary: Bilingual;
  keywords: string[];
}

export const talks: Talk[] = [
  {
    id: 'mmm7-2026',
    title: 'A Participatory Mapping Study of Community-Based Governance in Riau Province, Indonesia',
    authors: [
      { name: 'Andri Hendrizal', self: true },
      { name: 'Amy Then Yee Hui' },
      { name: 'Riska Fatmawati' },
      { name: "Rina D'rita Sibagariang" },
      { name: 'Firdaus LN' },
    ],
    type: { en: 'Oral presentation', id: 'Presentasi oral' },
    event: '7th Mangrove Macrobenthos and Management Conference (MMM7) — Towards Nature Positive Mangroves',
    eventShort: 'MMM7',
    location: { en: 'Ishigaki City, Okinawa, Japan', id: 'Kota Ishigaki, Okinawa, Jepang' },
    dateLabel: { en: '1–5 July 2026', id: '1–5 Juli 2026' },
    year: '2026',
    youtubeId: 'y9wOnPQPyyk',
    video: { uploadDate: '2026-09-25T19:23:25-07:00', durationIso: 'PT18M34S' },
    slidesUrl: '/talks/hendrizal-et-al-2026-mmm7-slides.pdf',
    slidesSizeLabel: '1.2 MB',
    summary: {
      en: 'Key-informant spatial elicitation with community mangrove groups at three sites in Riau — Pangkalan Jambi, Bandar Bakau, and Purnama — revealed three socio-ecological management models along a gradient of institutional maturity, from a single strict-conservation core to a five-zone integrated system. The talk introduces a "spatial displacement paradox": strict local protection can push extraction pressure onto unmanaged mangroves. In the mature groups, women lead the value-added utilization zones. Policy support should therefore be tailored to each governance stage rather than applied uniformly.',
      id: 'Pemetaan spasial bersama tokoh kunci kelompok pengelola mangrove di tiga lokasi di Riau — Pangkalan Jambi, Bandar Bakau, dan Purnama — mengungkap tiga model pengelolaan sosial-ekologis sepanjang gradien kematangan kelembagaan, dari satu zona inti konservasi ketat hingga sistem terpadu lima zona. Presentasi ini memperkenalkan "paradoks perpindahan spasial": perlindungan lokal yang ketat dapat memindahkan tekanan pemanfaatan ke mangrove yang tidak dikelola. Pada kelompok yang sudah matang, perempuan memimpin zona pemanfaatan bernilai tambah. Karena itu, dukungan kebijakan perlu disesuaikan dengan tahap tata kelola masing-masing kelompok, bukan diseragamkan.',
    },
    keywords: ['Socio-ecological systems', 'Community governance', 'Participatory mapping', 'Riau'],
  },
];
