"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const current = theme === "system" ? systemTheme : theme

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label="تغییر تم"
      className="transition-colors"
    >
      {!mounted ? (
        <Sun className="h-5 w-5" />
      ) : current === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  )
}
