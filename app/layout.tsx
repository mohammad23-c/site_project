import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import "./globals.css"

const vazir = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazir" })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${vazir.style.fontFamily};
  --font-vazir: ${vazir.variable};
}
/* Slightly heavier default text for readability; headings still use font-semibold/bold */
body { font-weight: 430; }
        `}</style>
      </head>
      <body className={`${vazir.variable} font-sans antialiased transition-colors duration-300`}>{children}</body>
    </html>
  )
}
