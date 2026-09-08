---
title: 'Regresi Linear di R: Contoh Kasus Mangrove'
description: 'Pengantar singkat dan praktis untuk membuat serta menafsirkan regresi linear di R, memakai contoh ilustratif diameter dan tinggi pohon mangrove.'
lang: id
access: free
tags: ['R', 'statistika', 'mangrove']
draft: false
---

Regresi linear adalah salah satu alat yang paling sering dipakai dalam
riset mangrove dan kehutanan — misalnya untuk membangun persamaan alometrik
yang memperkirakan tinggi pohon, biomassa, atau stok karbon dari variabel
yang mudah diukur seperti diameter batang. Mini-kursus ini membahas
langkah-langkah membuat regresi linear sederhana di R.

## Yang Anda butuhkan

- [R](https://cran.r-project.org/) yang sudah terpasang di komputer.
- Opsional: [RStudio](https://posit.co/download/rstudio-desktop/) sebagai
  editor yang lebih nyaman — tidak wajib, R dasar sudah cukup untuk
  pelajaran ini.

Tidak dibutuhkan latar belakang statistik selain memahami apa itu diagram
pencar (scatter plot).

## Data contoh

Agar pelajaran ini berdiri sendiri, kita memakai dataset kecil yang
**ilustratif**, menghubungkan diameter setinggi dada (DBH, dalam cm) dengan
tinggi pohon (dalam m) untuk sepuluh pohon mangrove hipotetis. Ini data
untuk keperluan belajar saja — bukan hasil survei lapangan sungguhan —
tetapi kodenya bekerja dengan cara yang sama begitu Anda menggantinya
dengan data pengukuran Anda sendiri.

```r
mangrove <- data.frame(
  dbh_cm = c(4.2, 6.1, 7.8, 9.0, 10.5, 12.3, 13.7, 15.1, 16.8, 18.2),
  height_m = c(3.1, 4.0, 4.8, 5.3, 6.0, 6.7, 7.2, 7.9, 8.5, 9.1)
)
mangrove
```

## Langkah 1: Lihat dulu datanya

Selalu buat plot sebelum membuat model.

```r
plot(
  height_m ~ dbh_cm,
  data = mangrove,
  xlab = "Diameter setinggi dada (cm)",
  ylab = "Tinggi (m)",
  pch = 19
)
```

Pola yang kira-kira membentuk garis lurus seperti ini yang membuat regresi
linear jadi pilihan yang masuk akal di sini.

## Langkah 2: Buat modelnya

Di R, regresi linear dibuat dengan `lm()`. Formula `height_m ~ dbh_cm`
dibaca sebagai "tinggi dijelaskan oleh diameter":

```r
model <- lm(height_m ~ dbh_cm, data = mangrove)
summary(model)
```

Keluaran `summary()` memberi Anda, di antaranya:

- **Coefficients** — intersep dan kemiringan (slope) garis yang dihasilkan.
  Nilai slope menunjukkan seberapa besar tinggi bertambah, rata-rata,
  untuk setiap kenaikan 1 cm diameter.
- **Pr(>|t|)** — nilai-p untuk tiap koefisien; nilai yang kecil (biasanya
  < 0,05) menunjukkan hubungan tersebut kemungkinan besar bukan kebetulan.
- **Multiple R-squared** — proporsi variasi tinggi yang bisa dijelaskan
  oleh diameter (0 sampai 1; makin dekat ke 1 berarti kecocokan makin
  erat).

## Langkah 3: Gambar garis hasil model

```r
plot(
  height_m ~ dbh_cm,
  data = mangrove,
  xlab = "Diameter setinggi dada (cm)",
  ylab = "Tinggi (m)",
  pch = 19
)
abline(model, col = "forestgreen", lwd = 2)
```

## Langkah 4: Periksa residual

Sebelum mempercayai model, ada baiknya melihat sekilas plot residual —
plot ini membantu menemukan pola yang terlewat oleh garis lurus:

```r
par(mfrow = c(2, 2))
plot(model)
par(mfrow = c(1, 1))
```

Perhatikan terutama plot "Residuals vs Fitted": bila titik-titik menyebar
acak di sekitar garis nol horizontal tanpa pola melengkung yang jelas,
model garis lurus sudah cukup masuk akal.

## Memakai data lapangan Anda sendiri

Setelah nyaman dengan langkah-langkah di atas, ganti `data.frame` contoh
di atas dengan data pengukuran Anda sendiri — biasanya diimpor dari berkas
CSV:

```r
mangrove <- read.csv("data_lapangan_saya.csv")
```

Selama berkas CSV Anda punya kolom `dbh_cm` dan `height_m` (atau Anda
menyesuaikan nama kolom pada kode di atas dengan punya Anda), langkah-
langkah lainnya bekerja dengan cara yang sama.

## Langkah selanjutnya

Pelajaran ini membahas satu variabel prediktor. Model alometrik yang
sesungguhnya sering memakai diameter yang ditransformasi-log, atau
menambahkan prediktor kedua (seperti kerapatan kayu) — di sinilah regresi
berganda (`lm(y ~ x1 + x2)`) berperan, topik alami untuk mini-kursus
berikutnya.
