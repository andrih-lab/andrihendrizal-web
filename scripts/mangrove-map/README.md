# Pipeline Peta Sebaran Mangrove

Menghasilkan peta interaktif (`/mangrove-map/` di situs) dan peta statis
acuan dari data luas mangrove per provinsi. Lihat `SOURCES.md` untuk detail
sumber data dan lisensi tiap berkas.

## Ketergantungan (dependencies)

- R (skrip ini dibuat & diuji dengan R 4.6). Paket yang dipakai:
  `sf`, `dplyr`, `jsonlite`, `ggplot2`, `ggspatial`, `rnaturalearth`,
  `rnaturalearthdata`, `patchwork`, `classInt`. Pasang semuanya sekali
  lewat:

  ```r
  install.packages(c(
    "sf", "dplyr", "jsonlite", "ggplot2", "ggspatial",
    "rnaturalearth", "rnaturalearthdata", "patchwork", "classInt"
  ), type = "binary")
  ```

  (`type = "binary"` penting di macOS supaya tidak perlu kompilasi
  GDAL/GEOS/PROJ dari sumber — CRAN sudah menyediakan versi biner siap
  pakai untuk R resmi dari r-project.org.)

## Struktur folder

```
scripts/mangrove-map/
├── data-raw/
│   ├── mangrove-provinsi-2024.csv         # transkripsi manual Lampiran II SK Menhut 594/2025
│   └── idn-38-provinces-boundary.geojson  # batas provinsi (CC BY 4.0, lihat SOURCES.md)
├── output/                                # PNG + PDF hasil 02_static_maps.R (tidak di-commit, lihat .gitignore)
├── 01_join_and_export_web.R
├── 02_static_maps.R
├── SOURCES.md
└── README.md   (berkas ini)
```

## Cara menjalankan ulang

Jalankan dari root proyek (folder yang berisi `package.json`):

```bash
Rscript scripts/mangrove-map/01_join_and_export_web.R
Rscript scripts/mangrove-map/02_static_maps.R
```

Skrip 1 menulis `public/data/mangrove-provinsi-2024.geojson` — inilah yang
dipakai halaman `/mangrove-map/` (lewat `src/components/MangroveMap.astro`,
diimpor langsung saat build, bukan diambil lewat fetch runtime).

Skrip 2 menulis 8 berkas ke `scripts/mangrove-map/output/` (PNG 300dpi +
PDF vektor, masing-masing Eksisting/Potensi Habitat × ID/EN). Salin manual
ke `public/mangrove-map/` supaya bisa diunduh dari situs:

```bash
cp scripts/mangrove-map/output/*.png scripts/mangrove-map/output/*.pdf public/mangrove-map/
```

## Kalau ada data versi baru (mis. Peta Mangrove Nasional 2025)

1. Ganti isi `data-raw/mangrove-provinsi-2024.csv` dengan angka baru (atau
   buat berkas baru dengan nama tahun yang sesuai, lalu perbarui nama
   berkas di `01_join_and_export_web.R`).
2. Perbarui referensi SK/tahun di `SOURCES.md` dan pada label judul di
   `02_static_maps.R` (variabel `labels`).
3. Jalankan ulang kedua skrip seperti di atas.
4. Salin ulang PNG/PDF baru ke `public/mangrove-map/` (menimpa yang lama).
5. Commit perubahan `public/data/`, `public/mangrove-map/`, dan
   `data-raw/mangrove-provinsi-2024.csv`.

Batas provinsi (`idn-38-provinces-boundary.geojson`) biasanya tidak perlu
diperbarui kecuali ada pemekaran provinsi baru — kalau itu terjadi, unduh
ulang dari sumber di `SOURCES.md` dan timpa berkasnya.

## Kalau nanti dapat dataset poligon mangrove asli (bukan agregat provinsi)

Pipeline ini sengaja dirancang untuk data agregat per provinsi (lihat
catatan keterbatasan di `SOURCES.md`). Kalau dataset vektor per-poligon
mangrove yang sebenarnya berhasil diperoleh (mis. dari Geoportal KLHK atau
Ina-Geoportal BIG), pipeline perlu ditulis ulang: langkah join provinsi
tidak lagi relevan, dan ekspor web sebaiknya memakai PMTiles (via
`tippecanoe`) alih-alih GeoJSON langsung, karena jumlah fiturnya akan jauh
lebih besar dari 38 poligon provinsi.
