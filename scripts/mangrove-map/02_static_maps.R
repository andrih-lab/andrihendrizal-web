#!/usr/bin/env Rscript
# Peta statis acuan (choropleth luas mangrove per provinsi 2024), lengkap
# dengan skala, arah utara, grid koordinat, inset lokasi, dan sumber data.
# Menghasilkan PNG 300 dpi + PDF vektor, masing-masing versi Indonesia dan
# Inggris, untuk dua kolom data (Mangrove Eksisting & Potensi Habitat).
#
# Jalankan setelah 01_join_and_export_web.R (skrip ini memakai GeoJSON hasil
# gabungan dari public/data/, bukan file data-raw mentah).
#
# Jalankan dari root proyek: Rscript scripts/mangrove-map/02_static_maps.R

suppressPackageStartupMessages({
  library(sf)
  library(dplyr)
  library(ggplot2)
  library(ggspatial)
  library(rnaturalearth)
  library(patchwork)
  library(classInt)
})

out_dir <- "scripts/mangrove-map/output"
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

idn <- st_read("public/data/mangrove-provinsi-2024.geojson", quiet = TRUE) %>%
  st_make_valid()

# Warna mengikuti palet mangrove situs (src/styles/global.css) supaya
# konsisten dengan gaya visual andrihendrizal.com.
mangrove_palette <- c("#f1faf4", "#dcf2e4", "#b8e5c9", "#86cfa4", "#1a8a4f", "#0d4429")

# --- Inset lokasi (posisi Indonesia di Asia Tenggara) -------------------
asia <- ne_countries(scale = "medium", continent = "Asia", returnclass = "sf")
oceania <- ne_countries(scale = "medium", continent = "Oceania", returnclass = "sf")
region <- rbind(asia, oceania)

make_inset <- function() {
  ggplot() +
    geom_sf(data = region, fill = "grey85", color = "white", linewidth = 0.1) +
    geom_sf(data = idn, fill = "#147a44", color = NA) +
    coord_sf(xlim = c(90, 145), ylim = c(-15, 25), expand = FALSE) +
    theme_void() +
    theme(
      panel.background = element_rect(fill = "#eef6f1", color = "grey40", linewidth = 0.4),
      plot.margin = margin(1, 1, 1, 1)
    )
}

# --- Fungsi utama peta ---------------------------------------------------
# value_col: kolom yang dipetakan ("mangrove_eksisting_ha" atau
#            "potensi_habitat_ha")
# lang: "id" atau "en" — menentukan semua label/teks pada peta.
make_static_map <- function(value_col, lang) {
  labels <- list(
    id = list(
      eksisting = list(
        title = "Luas Mangrove Eksisting per Provinsi, 2024",
        legend = "Luas (Ha)"
      ),
      potensi = list(
        title = "Luas Potensi Habitat Mangrove per Provinsi, 2024",
        legend = "Luas (Ha)"
      ),
      caption = paste0(
        "Sumber data: Keputusan Menteri Kehutanan RI No. 594 Tahun 2025 tentang Peta Mangrove Nasional Tahun 2024, Lampiran II.\n",
        "Batas provinsi: Indonesia GeoJSON & TopoJSON Maps (38 Provinces) oleh denyherianto, CC BY 4.0.\n",
        "(c) 2026 Andri Hendrizal, andrihendrizal.com - Peta dirilis di bawah lisensi CC BY 4.0"
      )
    ),
    en = list(
      eksisting = list(
        title = "Existing Mangrove Area by Province, 2024",
        legend = "Area (ha)"
      ),
      potensi = list(
        title = "Potential Mangrove Habitat Area by Province, 2024",
        legend = "Area (ha)"
      ),
      caption = paste0(
        "Data source: Decree of the Indonesian Minister of Forestry No. 594/2025 on the 2024 National Mangrove Map, Annex II.\n",
        "Province boundaries: Indonesia GeoJSON & TopoJSON Maps (38 Provinces) by denyherianto, CC BY 4.0.\n",
        "(c) 2026 Andri Hendrizal, andrihendrizal.com - map released under CC BY 4.0"
      )
    )
  )

  which_layer <- if (value_col == "mangrove_eksisting_ha") "eksisting" else "potensi"
  lab <- labels[[lang]][[which_layer]]
  caption <- labels[[lang]]$caption

  values <- idn[[value_col]]
  breaks <- classIntervals(values[!is.na(values)], n = 6, style = "jenks")$brks
  big_mark <- if (lang == "id") "." else ","
  fmt <- function(x) format(round(x), big.mark = big_mark, scientific = FALSE, trim = TRUE)
  class_labels <- paste0(fmt(breaks[-length(breaks)]), "-", fmt(breaks[-1]))
  idn$kelas <- cut(values, breaks = breaks, include.lowest = TRUE, labels = class_labels)

  p <- ggplot(idn) +
    geom_sf(aes(fill = kelas), color = "white", linewidth = 0.1) +
    scale_fill_manual(
      values = mangrove_palette,
      na.value = "grey90",
      name = lab$legend,
      na.translate = FALSE
    ) +
    annotation_scale(location = "bl", width_hint = 0.25) +
    annotation_north_arrow(
      location = "tr", which_north = "true",
      style = north_arrow_fancy_orienteering
    ) +
    coord_sf(xlim = c(94, 141.5), ylim = c(-11.5, 6.5), expand = FALSE) +
    labs(title = lab$title, caption = caption) +
    theme_minimal(base_size = 11) +
    theme(
      panel.grid = element_line(color = "grey80", linewidth = 0.2),
      plot.title = element_text(face = "bold", size = 14),
      plot.caption = element_text(size = 7, color = "grey30", hjust = 0),
      legend.position = "right"
    )

  p_final <- p + inset_element(make_inset(), left = 0.72, bottom = 0.05, right = 0.99, top = 0.35)

  slug <- paste0(which_layer, "-", lang)
  ggsave(file.path(out_dir, paste0("peta-mangrove-", slug, ".png")), p_final,
         width = 11, height = 5.8, dpi = 300, bg = "white")
  # device = "pdf" (bawaan R) dipakai, bukan cairo_pdf, karena mesin build
  # ini tidak punya library X11/Cairo sistem — tetap PDF vektor yang valid.
  ggsave(file.path(out_dir, paste0("peta-mangrove-", slug, ".pdf")), p_final,
         width = 11, height = 5.8, device = "pdf", bg = "white")
  message("Selesai: ", slug)
}

for (lang in c("id", "en")) {
  for (col in c("mangrove_eksisting_ha", "potensi_habitat_ha")) {
    make_static_map(col, lang)
  }
}

message("Semua peta statis tersimpan di ", out_dir)
