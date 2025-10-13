import { ar } from "./ar"
import { en } from "./en"

export type Locale = "ar" | "en"

export const translations = {
  ar,
  en,
}

export function getTranslations(locale: Locale = "ar") {
  return translations[locale] || translations.ar
}
