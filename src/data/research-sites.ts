// Lokasi riset lapangan (Bagian 5 dokumen rancang bangun, "Research").
// TODO: SELURUH koordinat di sini adalah perkiraan tingkat kecamatan/kota,
// dibuat dari pengetahuan geografis umum — BUKAN hasil survei presisi.
// Dokumen rancang bangun eksplisit meminta ini sebagai nilai sementara
// ("gunakan koordinat perkiraan tingkat kecamatan sebagai sementara").
// Ganti dengan koordinat pasti begitu diberikan pemilik situs (Bagian 12).
export interface ResearchSite {
  id: string;
  name: { en: string; id: string };
  lat: number;
  lng: number;
  type: 'permanent' | 'past';
  theme: { en: string; id: string };
}

export const researchSites: ResearchSite[] = [
  {
    id: 'pangkalan-jambi',
    name: { en: 'Pangkalan Jambi, Bengkalis Regency', id: 'Pangkalan Jambi, Kabupaten Bengkalis' },
    lat: 1.62,
    lng: 102.15,
    type: 'permanent',
    theme: { en: 'Mangrove ecology & Local Ecological Knowledge', id: 'Ekologi mangrove dan LEK' },
  },
  {
    id: 'bukit-batu',
    name: { en: 'Bukit Batu, Bengkalis Regency', id: 'Bukit Batu, Kabupaten Bengkalis' },
    lat: 1.4,
    lng: 101.63,
    type: 'permanent',
    theme: { en: 'Permanent monitoring site', id: 'Situs pemantauan permanen' },
  },
  {
    id: 'purnama-dumai',
    name: { en: 'Kelurahan Purnama, Dumai City', id: 'Kelurahan Purnama, Kota Dumai' },
    lat: 1.68,
    lng: 101.45,
    type: 'permanent',
    theme: { en: 'Marine debris & mangrove density', id: 'Sampah laut dan kerapatan mangrove' },
  },
  {
    id: 'lingga',
    name: { en: 'Lingga Regency, Riau Islands', id: 'Kabupaten Lingga, Kepulauan Riau' },
    lat: -0.37,
    lng: 104.78,
    type: 'past',
    theme: { en: 'Soil parameters & mangrove growth', id: 'Parameter tanah dan pertumbuhan mangrove' },
  },
  {
    id: 'meranti',
    name: { en: 'Kepulauan Meranti Regency, Riau', id: 'Kabupaten Kepulauan Meranti, Riau' },
    lat: 1.02,
    lng: 102.68,
    type: 'past',
    theme: { en: 'Mud crab silvofishery', id: 'Silvofishery kepiting bakau' },
  },
  {
    id: 'koto-panjang',
    name: { en: 'Koto Panjang Reservoir, Kampar, Riau', id: 'Waduk Koto Panjang, Kampar, Riau' },
    lat: 0.35,
    lng: 100.83,
    type: 'past',
    theme: { en: 'Sustainable aquaculture', id: 'Akuakultur berkelanjutan' },
  },
  {
    id: 'danau-putus',
    name: { en: 'Danau Putus, Lubuk Siam, Kampar, Riau', id: 'Danau Putus, Desa Lubuk Siam, Kampar, Riau' },
    lat: 0.45,
    lng: 101.35,
    type: 'past',
    theme: { en: 'Fisheries production sanctuary', id: 'Suaka produksi perikanan' },
  },
  {
    id: 'danau-panjang',
    name: { en: 'Danau Panjang, Riau', id: 'Danau Panjang, Riau' },
    lat: 0.33,
    lng: 101.05,
    type: 'past',
    theme: { en: 'Kissing gourami (tambakan) growth', id: 'Pertumbuhan ikan tambakan' },
  },
  {
    id: 'batang-haluan',
    name: { en: 'Batang Haluan River, West Sumatra', id: 'Sungai Batang Haluan, Sumatera Barat' },
    lat: -0.9,
    lng: 100.75,
    type: 'past',
    theme: { en: 'Local ecological knowledge & fish conservation', id: 'Kearifan lokal dan konservasi ikan' },
  },
];
