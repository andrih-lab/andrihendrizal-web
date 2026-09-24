#!/usr/bin/env Rscript
# Menggabungkan data luas mangrove per provinsi (Lampiran II SK Menhut No.
# 594/2025) dengan batas administrasi provinsi, lalu mengekspor GeoJSON
# ringan untuk peta interaktif (Leaflet) di andrihendrizal.com.
#
# Jalankan ulang skrip ini kapan pun ada data baru — cukup ganti isi
# data-raw/mangrove-provinsi-2024.csv (atau salin file versi baru dengan
# nama yang sama) dan jalankan lagi. Lihat SOURCES.md untuk detail sumber
# dan lisensi tiap berkas input.
#
# Jalankan dari root proyek: Rscript scripts/mangrove-map/01_join_and_export_web.R

suppressPackageStartupMessages({
  library(sf)
  library(dplyr)
  library(jsonlite)
})

here <- function(...) file.path("scripts/mangrove-map", ...)
web_out_dir <- "public/data"
dir.create(web_out_dir, recursive = TRUE, showWarnings = FALSE)

# --- 1. Baca data ------------------------------------------------------

mangrove <- read.csv(here("data-raw/mangrove-provinsi-2024.csv"), stringsAsFactors = FALSE)

boundaries <- st_read(here("data-raw/idn-38-provinces-boundary.geojson"), quiet = TRUE)

# --- 2. Validasi penggabungan -------------------------------------------
# Nama provinsi di CSV sudah ditulis persis sama dengan field PROVINSI pada
# GeoJSON batas wilayah (lihat SOURCES.md) — kalau ada data provinsi baru
# yang namanya beda ejaan, join akan menghasilkan NA dan dicek di sini.

joined <- boundaries %>%
  left_join(mangrove, by = c("PROVINSI" = "provinsi"))

unmatched_csv <- setdiff(mangrove$provinsi, boundaries$PROVINSI)
no_data <- joined %>% filter(is.na(mangrove_eksisting_ha)) %>% pull(PROVINSI)

if (length(unmatched_csv) > 0) {
  stop(
    "Provinsi di CSV tidak ditemukan di GeoJSON batas wilayah (cek ejaan): ",
    paste(unmatched_csv, collapse = ", ")
  )
}
message("Provinsi tanpa data mangrove (diharapkan hanya Papua Pegunungan, tidak berpantai): ",
        paste(no_data, collapse = ", "))

# --- 3. Sederhanakan geometri untuk web ---------------------------------
# Batas provinsi ini sudah relatif ringan (~250KB untuk 38 provinsi), jadi
# hanya disederhanakan sedikit (toleransi kecil) supaya tetap presisi di
# level zoom provinsi tapi ukuran file tetap kecil untuk dimuat langsung
# sebagai GeoJSON (tidak perlu PMTiles untuk 38 fitur).
sf_use_s2(FALSE) # simplifikasi planar lebih stabil untuk poligon lon/lat sederhana ini
joined_simplified <- st_simplify(joined, dTolerance = 0.001, preserveTopology = TRUE)
sf_use_s2(TRUE)

# --- 4. Pilih & rapikan kolom untuk output ------------------------------
web_data <- joined_simplified %>%
  transmute(
    provinsi = PROVINSI,
    kode_prov = KODE_PROV,
    pulau_gugus = pulau_gugus,
    mangrove_eksisting_ha = mangrove_eksisting_ha,
    potensi_habitat_ha = potensi_habitat_ha,
    geometry
  )

out_path <- file.path(web_out_dir, "mangrove-provinsi-2024.geojson")
if (file.exists(out_path)) file.remove(out_path)
st_write(web_data, out_path, quiet = TRUE)

message("Ditulis: ", out_path, " (", round(file.size(out_path) / 1024), " KB)")
message("Fitur: ", nrow(web_data))
