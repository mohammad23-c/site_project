"use client"

import { Instagram } from "lucide-react"

export default function InstagramWidget({ href = "https://instagram.com/shikestoon" }: { href?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-amber-600 to-zinc-600 text-white shadow-lg hover:opacity-90 transition-opacity"
      aria-label="صفحه اینستاگرام شیکستون"
      title="اینستاگرام شیکستون"
    >
      <Instagram className="h-6 w-6" />
    </a>
  )
}
