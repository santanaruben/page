export type Locale = "en" | "es"

export const locales: Locale[] = ["en", "es"]
export const defaultLocale: Locale = "en"

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
}
