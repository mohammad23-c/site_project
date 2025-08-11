"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: "s1",
    title: "کلکسیون تابستان ۱۴۰۴",
    subtitle: "گرم، سبک و راحت با رنگ‌های ملایم",
    cta: "مشاهده مجموعه",
    href: "#",
    image: "/banners/banner-1.png",
  },
  {
    id: "s2",
    title: "حراج میانی فصل",
    subtitle: "تا ۳۰٪ تخفیف روی منتخب‌ها",
    cta: "خرید کنید",
    href: "#",
    image: "/banners/banner-2.png",
  },
  {
    id: "s3",
    title: "ست‌های خانوادگی",
    subtitle: "برای لحظه‌های خاطره‌انگیز",
    cta: "دیدن ست‌ها",
    href: "#",
    image: "/banners/banner-3.png",
  },
]

export default function BannerCarousel() {
  const [index, setIndex] = useState(0)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function next() {
    setIndex((i) => (i + 1) % slides.length)
  }
  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [index])

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]">
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image || "/placeholder.svg"}
              alt={s.title}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
            <div className="absolute inset-0 container mx-auto px-4 flex items-center">
              <div className="max-w-xl ms-auto text-right text-white drop-shadow">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{s.title}</h2>
                <p className="mt-2 text-sm sm:text-base md:text-lg">{s.subtitle}</p>
                <Link href={s.href}>
                  <Button className="mt-4 bg-amber-500 hover:bg-amber-600">{s.cta}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* کنترل‌ها */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
        <button
          onClick={prev}
          className="pointer-events-auto h-9 w-9 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur grid place-items-center text-neutral-700 dark:text-neutral-200 hover:text-amber-600"
          aria-label="قبلی"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto h-9 w-9 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur grid place-items-center text-neutral-700 dark:text-neutral-200 hover:text-amber-600"
          aria-label="بعدی"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>

      {/* نقاط */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index ? "w-6 bg-amber-500" : "w-3 bg-white/70 dark:bg-neutral-700",
            )}
            aria-label={`اسلاید ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
