"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Loading theme toggle</span>
      </Button>
    )
  }

  const cycleTheme = () => {
    const currentTheme = theme || "system"
    console.log("Current theme:", currentTheme, "Resolved theme:", resolvedTheme)

    if (currentTheme === "system") {
      console.log("Switching to light theme")
      setTheme("light")
    } else if (currentTheme === "light") {
      console.log("Switching to dark theme")
      setTheme("dark")
    } else {
      console.log("Switching to system theme")
      setTheme("system")
    }
  }

  const renderIcon = () => {
    const currentTheme = theme || "system"
    const displayTheme = currentTheme === "system" ? resolvedTheme || "light" : currentTheme

    if (currentTheme === "system") {
      return <Monitor className="h-[1.2rem] w-[1.2rem]" />
    }
    if (displayTheme === "dark") {
      return <Moon className="h-[1.2rem] w-[1.2rem]" />
    }
    return <Sun className="h-[1.2rem] w-[1.2rem]" />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="w-9 h-9 hover:bg-accent hover:text-accent-foreground transition-colors"
      title={`Current theme: ${theme || "system"}. Click to cycle themes.`}
    >
      {renderIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
