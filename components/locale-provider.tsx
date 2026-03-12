"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import type { Locale } from "@/lib/i18n"
import en from "@/messages/en.json"
import es from "@/messages/es.json"

const messages = { en, es } as const

type Messages = typeof en

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Messages
} | null>(null)

const STORAGE_KEY = "portfolio-locale"

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "en"
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  return stored && (stored === "en" || stored === "es") ? stored : "en"
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getStoredLocale())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.lang = locale === "es" ? "es" : "en"
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale, mounted])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
  }, [])

  const t = messages[locale]

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return context
}
