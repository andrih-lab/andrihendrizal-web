import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Domain akhir situs (lihat Bagian 1 dokumen rancang bangun). Tahap 1 di-deploy
// ke subdomain Netlify sementara; nilai `site` tetap domain akhir agar tag
// hreflang dan canonical sudah benar sejak awal dan tidak perlu diubah saat
// migrasi domain (lihat Bagian 11).
export default defineConfig({
  site: 'https://andrihendrizal.com',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
