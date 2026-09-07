// Peringkat dan indeks (Bagian 5 CV: "AD Scientific Index dan sejenisnya").
// Kosong sampai pemilik situs memberikan angka pastinya — halaman CV
// menyembunyikan seluruh bagian ini (bukan menampilkan teks kosong) selama
// array ini kosong, supaya tidak ada klaim angka yang belum terverifikasi.
export interface Ranking {
  name: string;
  value: string;
  url?: string;
}

export const rankings: Ranking[] = [];
