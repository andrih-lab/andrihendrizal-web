# Sumber Data / Data Sources

## 1. Luas mangrove per provinsi (`data-raw/mangrove-provinsi-2024.csv`)

- **Sumber**: Keputusan Menteri Kehutanan Republik Indonesia Nomor 594 Tahun
  2025 tentang Peta Mangrove Nasional Tahun 2024, Lampiran II ("Data Luas
  Mangrove Eksisting dan Potensi Habitat Mangrove Tahun 2024").
- **Ditetapkan**: Jakarta, 25 Februari 2025, ditandatangani a.n. Menteri
  Kehutanan oleh Direktur Jenderal Pengelolaan Daerah Aliran Sungai dan
  Rehabilitasi Hutan (Dyah Murtiningsih).
- **Dasar peta (dicantumkan pada Lampiran I)**: Citra Sentinel-2 tahun 2024,
  Citra Planet tahun 2024, Peta RBI skala 1:25.000, Peta RBI skala 1:50.000.
  Disusun oleh Kementerian Kehutanan, Badan Riset dan Inovasi Nasional
  (BRIN), dan Badan Informasi Geospasial (BIG).
- **Kelas tutupan tajuk** (dari legenda Lampiran I, referensi untuk versi
  mendatang jika dataset poligon aslinya diperoleh): Mangrove Lebat (>70%),
  Mangrove Sedang (30–70%), Mangrove Jarang (<30%).
- **Cakupan**: 37 dari 38 provinsi (Papua Pegunungan tidak termasuk karena
  tidak memiliki garis pantai).
- **Transkripsi**: dilakukan manual dari hasil scan PDF (dokumen ini adalah
  hasil pindai, bukan berkas GIS — tidak ada data vektor/atribut yang bisa
  diekstrak secara otomatis). Setiap angka dicocokkan ulang terhadap gambar
  sumber. Jumlah total per kolom pada CSV berselisih sangat kecil dari total
  tercetak di dokumen (Eksisting: 3.440.466 Ha hasil penjumlahan vs
  3.440.464 Ha tercetak; Potensi Habitat: 769.825 Ha vs 769.824 Ha tercetak)
  — selisih 1–2 Ha ini adalah pembulatan bawaan dokumen asli, bukan
  kesalahan transkripsi.
- **Keterbatasan penting**: dokumen ini HANYA berisi statistik agregat per
  provinsi. Tidak ada data poligon per-bidang mangrove (lokasi, bentuk,
  kelas kerapatan per poligon) di dalamnya. Peta pada Lampiran I/II PDF ini
  adalah produk kartografi cetak skala nasional (~1:25.000.000), bukan
  dataset GIS sumber. Untuk peta poligon detail penuh, dataset vektor asli
  perlu diperoleh langsung dari Geoportal KLHK atau Ina-Geoportal BIG
  (https://tanahair.indonesia.go.id).

## 2. Batas administrasi provinsi (`data-raw/idn-38-provinces-boundary.geojson`)

- **Sumber**: denyherianto/indonesia-geojson-topojson-maps-with-38-provinces
  (GitHub), diunduh 2026-09-24.
  <https://github.com/denyherianto/indonesia-geojson-topojson-maps-with-38-provinces>
- **Lisensi data**: Creative Commons Attribution 4.0 International (CC BY
  4.0) — boleh dipakai untuk keperluan apa pun termasuk komersial, dengan
  syarat mencantumkan atribusi.
- **Atribusi yang dipakai di situs**: "Batas provinsi: Indonesia GeoJSON &
  TopoJSON Maps (38 Provinces) oleh denyherianto, CC BY 4.0."
- **Cakupan**: 38 provinsi (termasuk provinsi hasil pemekaran Papua tahun
  2022/2023), field `PROVINSI` dipakai sebagai kunci penggabungan dengan
  data luas mangrove di atas.
