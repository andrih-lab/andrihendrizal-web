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
 * cukup. `hasAlternate=false` menutupi kasus halaman yang sengaja hanya
 * satu bahasa (mis. Santai Sejenak): daripada menebak URL yang tidak ada,
 * fungsi ini jatuh ke beranda bahasa tujuan.
 */
export function getAlternatePath(pathname: string, targetLang: Locale, hasAlternate: boolean = true): string {
  if (!hasAlternate) return `/${targetLang}/`;
  const segments = pathname.split('/').filter(Boolean);
  if (LOCALES.includes(segments[0] as Locale)) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }
  return `/${segments.join('/')}/`;
}
