"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, ShoppingCart, User, Heart, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import ThemeToggle from "@/components/theme-toggle"

const categories: Array<
  | { name: string; href: string }
  | {
      name: string
      items: { name: string; href: string }[]
    }
> = [
  { name: "خانه", href: "/" },
  {
    name: "پوشاک",
    items: [
      { name: "تیشرت و بلوز", href: "#" },
      { name: "شلوار و شرتک", href: "#" },
      { name: "ست‌ها", href: "#" },
      { name: "لباس راحتی", href: "#" },
    ],
  },
  {
    name: "اکسسوری",
    items: [
      { name: "کلاه", href: "#" },
      { name: "گیره و تل", href: "#" },
      { name: "کیف و کوله", href: "#" },
    ],
  },
  { name: "ست خانوادگی", href: "#" },
  { name: "فصلی", href: "#" },
  { name: "حراج", href: "#" },
]

export default function Navbar() {
  const [search, setSearch] = useState("")

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 dark:bg-neutral-950/80 backdrop-blur transition-colors">
      {/* ردیف بالا */}
      <div className="container mx-auto px-4 py-3 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{"منو"}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="p-4">
                <Link href="/" className="inline-flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-amber-500 inline-grid place-items-center text-white font-bold">
                    {"SH"}
                  </span>
                  <span className="font-semibold">{"شیکستون"}</span>
                </Link>
              </div>
              <Separator />
              <nav className="p-2 space-y-1">
                {categories.map((cat) =>
                  "items" in cat ? (
                    <div key={cat.name} className="px-2 py-1.5">
                      <div className="text-sm font-semibold mb-1">{cat.name}</div>
                      <div className="grid">
                        {cat.items.map((it) => (
                          <Link
                            key={it.name}
                            href={it.href}
                            className="rounded px-2 py-1 text-sm hover:bg-amber-50 dark:hover:bg-amber-950/30"
                          >
                            {it.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="block px-4 py-2 text-sm hover:bg-amber-50 dark:hover:bg-amber-950/30"
                    >
                      {cat.name}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="hidden lg:flex items-center gap-2">
            <span className="h-9 w-9 rounded-full bg-amber-500 inline-grid place-items-center text-white font-bold">
              {"SH"}
            </span>
            <span className="text-lg font-semibold">{"شیکستون"}</span>
          </Link>
        </div>

        {/* جستجو */}
        <form onSubmit={(e) => e.preventDefault()} className="flex-1 flex items-center gap-2">
          <div className="relative w-full">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="نام کالا، کد یا دسته‌بندی..."
              className="pr-9 bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
              dir="rtl"
            />
          </div>
          <Button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white shadow-sm hover:shadow-md">
            {"جستجو"}
          </Button>
        </form>

        {/* عملیات */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="hover:text-amber-600">
            <Heart className="h-5 w-5" />
            <span className="sr-only">{"علاقه‌مندی‌ها"}</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-amber-600">
            <User className="h-5 w-5" />
            <span className="sr-only">{"حساب کاربری"}</span>
          </Button>
          <Button variant="outline" size="icon" className="relative bg-transparent">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">{"سبد خرید"}</span>
            <span className="absolute -top-1 -left-1 h-4 min-w-4 rounded-full bg-amber-500 text-white text-[10px] leading-4 text-center">
              {"۲"}
            </span>
          </Button>
          <ThemeToggle />
        </div>
      </div>

      {/* دسته‌بندی‌ها دسکتاپ */}
      <div className="hidden lg:block border-t">
        <nav className="container mx-auto px-4 py-2 flex items-center gap-3">
          {categories.map((cat) =>
            "items" in cat ? (
              <DropdownMenu key={cat.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1 hover:text-amber-600">
                    {cat.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={6}>
                  {cat.items.map((it) => (
                    <DropdownMenuItem key={it.name} asChild>
                      <Link href={it.href}>{it.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={cat.name}
                href={cat.href}
                className="px-3 py-2 text-sm rounded hover:bg-amber-50 hover:text-amber-700 dark:hover:bg-amber-950/30"
              >
                {cat.name}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
