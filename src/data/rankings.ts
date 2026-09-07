// Peringkat dan indeks (Bagian 5 CV: "AD Scientific Index dan sejenisnya",
// Bagian 1: "Tempatkan sebagai satu baris di halaman CV"). Sengaja hanya
// peringkat/persentil, TIDAK PERNAH angka h-index mentah, di mana pun di
// situs ini.
export interface Ranking {
  name: string;
  value: string;
  url?: string;
}

export const rankings: Ranking[] = [
  {
    name: 'AD Scientific Index (2027 ranking)',
    value: 'Top 48.6% in Indonesia (rank 67,559 of 139,019 scientists) · Top 48.4% at Universitas Riau (rank 76 of 157)',
  },
  {
    name: 'ScholarGPS® (2025 evaluation)',
    value: '31 publications and 18 citations tracked in Life Sciences (Biology and Biological Sciences)',
  },
];
