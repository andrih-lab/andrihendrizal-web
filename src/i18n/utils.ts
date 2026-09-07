import { DEFAULT_LOCALE, LOCALES, type Locale } from './config';
import { en } from './translations/en';
import { id } from './translations/id';

const dictionaries = { en, id } as const;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (LOCALES.includes(lang as Locale)) return lang as Locale;
  return DEFAULT_LOCALE;
}

export function useTranslations(lang: Locale) {
  return dictionaries[lang];
}

/**
 * Tahap 1: setiap halaman tetap (beranda, kontak) tersedia di kedua bahasa
 * dengan struktur path yang sama persis, jadi mengganti segmen locale sudah
 * cukup. TODO (Tahap 3): tulisan tidak wajib dua bahasa (lihat Bagian 6 dan
 * 5.Writing dokumen rancang bangun) — begitu ada halaman tanpa padanan,
 * fungsi ini perlu menerima daftar path yang tersedia dan jatuh ke beranda
 * bahasa tujuan bila padanannya tidak ada.
 */
export function getAlternatePath(pathname: string, targetLang: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0] as Locale)) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }
  return `/${segments.join('/')}/`;
}
