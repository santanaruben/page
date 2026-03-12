"use client"

import { useState } from "react"
import { useLocale } from "@/components/locale-provider"
import { Button } from "@/components/ui/button"
import { MessageCircle, Github, Linkedin, Plus, X } from "lucide-react"
import Link from "next/link"

export function FloatingActions() {
  const { t } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Telegram",
      href: "https://t.me/rubensantana",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/santanaruben",
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rubensantana/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ]

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-start gap-3">
      {/* Action Buttons */}
      {isOpen &&
        actions.map((action, index) => (
          <div
            key={action.label}
            className={`transform transition-all duration-300 ease-out ${
              isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Button
              asChild
              size="icon"
              className={`${action.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <Link href={action.href} target="_blank" rel="noopener noreferrer">
                {action.icon}
                <span className="sr-only">{action.label}</span>
              </Link>
            </Button>
            <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {action.label}
            </div>
          </div>
        ))}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        <span className="sr-only">{t.a11y.toggleActions}</span>
      </Button>
    </div>
  )
}
