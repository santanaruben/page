"use client"

import { useState, useEffect } from "react"
import { useLocale } from "@/components/locale-provider"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"

const navItems = [
  { href: "#about", labelKey: "about" },
  { href: "#featured", labelKey: "featured" },
  { href: "#projects", labelKey: "projects" },
  { href: "#contact", labelKey: "contact" },
]

export function Navigation() {
  const { t } = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link href="#" className="font-bold text-xl text-emerald-600">
            RS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-emerald-600 transition-colors duration-200 font-medium"
                onClick={() => {
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t.nav[item.labelKey as keyof typeof t.nav]}
              </Link>
            ))}
            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation - Language, Theme toggle and menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-emerald-600 transition-colors duration-200 font-medium"
                  onClick={() => {
                    setIsOpen(false)
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  {t.nav[item.labelKey as keyof typeof t.nav]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
