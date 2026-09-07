export const LANGUAGES = {
  en: 'English',
  id: 'Bahasa Indonesia',
} as const;

export type Locale = keyof typeof LANGUAGES;

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALES = Object.keys(LANGUAGES) as Locale[];
