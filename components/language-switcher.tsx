"use client"

import { useLocale } from "@/components/locale-provider"
import { locales, localeLabels, type Locale } from "@/lib/i18n"

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-0.5 rounded-md border border-border bg-muted/30 p-0.5">
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => setLocale(loc as Locale)}
          className={`px-2.5 py-1 text-xs font-medium rounded-sm transition-colors ${
            locale === loc
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
          aria-label={localeLabels[loc as Locale]}
          aria-pressed={locale === loc}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
