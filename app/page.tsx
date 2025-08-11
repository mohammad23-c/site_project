"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import Navbar from "@/components/nav-bar"
import BannerCarousel from "@/components/banner-carousel"
import FilterSidebar, { type FilterState } from "@/components/filter-sidebar"
import ProductCard from "@/components/product-card"
import ProductDialog from "@/components/product-dialog"
import ChatWidget from "@/components/chat-widget"
import InstagramWidget from "@/components/instagram-widget"
import HowToUse from "@/components/how-to-use"
import FilterDialog from "@/components/filter-dialog"
import { products as initialProducts, type Product } from "@/lib/products"
import { formatPriceFa } from "@/lib/format"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    materials: [],
    colors: [],
    price: [0, 1_000_000],
    ages: [],
  })
  const [active, setActive] = useState<Product | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const products = useMemo(() => {
    return initialProducts.filter((p) => {
      const priceOk = p.price >= filters.price[0] && p.price <= filters.price[1]
      const sizeOk = filters.sizes.length ? p.sizes.some((s) => filters.sizes.includes(s)) : true
      const matOk = filters.materials.length ? filters.materials.includes(p.material) : true
      const ageOk = filters.ages.length ? filters.ages.includes(p.ageGroup) : true
      const colorOk = filters.colors.length ? p.colors.some((c) => filters.colors.includes(c)) : true
      return priceOk && sizeOk && matOk && ageOk && colorOk
    })
  }, [filters])

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <Navbar />

      <HowToUse />

      <BannerCarousel />

      {/* نوار گزینه‌ها با دکمه فیلتر */}
      <section className="container mx-auto px-4 mt-4">
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between bg-white/80 dark:bg-neutral-950/60">
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            {`نتایج: ${products.length.toLocaleString("fa-IR")} کالا`}
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setFiltersOpen(true)} className="bg-amber-500 hover:bg-amber-600 text-white gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              {"فیلترها"}
            </Button>
            <Button
              variant="outline"
              className="bg-transparent"
              onClick={() => setFilters({ sizes: [], materials: [], colors: [], price: [0, 1_000_000], ages: [] })}
            >
              {"پاک کردن فیلتر"}
            </Button>
          </div>
        </div>
      </section>

      {/* شبکه محصولات */}
      <section className="container mx-auto px-4 py-6 sm:py-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold">{"جدیدترین محصولات شیکستون"}</h2>
          <Link href="#" className="text-amber-600 hover:text-amber-700 dark:text-amber-400">
            {"مشاهده همه"}
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={() => setActive(p)} />
          ))}
        </div>

        {/* پیشنهادهای ویژه/باندل */}
        <div className="mt-10">
          <div className="mb-3">
            <h3 className="text-lg sm:text-xl font-semibold">{"پیشنهادهای ویژه باندل"}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {"با خرید همزمان چند محصول، تخفیف بیشتری دریافت کنید."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {initialProducts.slice(0, 3).map((p) => (
              <div
                key={`bundle-${p.id}`}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-amber-50/40 dark:bg-amber-950/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium line-clamp-1">{p.title}</div>
                  <span className="inline-flex items-center rounded-full bg-amber-500 text-white text-xs px-2 py-0.5">
                    {"%15 تخفیف"}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                  {p.subtitle || "باندل محبوب والدین"}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-sm font-semibold">{formatPriceFa(Math.round(p.price * 0.85))}</div>
                  <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                    {"افزودن باندل"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* بخش وبلاگ کوتاه */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg sm:text-xl font-semibold">{"مجله شیکستون"}</h3>
            <Link href="/blog" className="text-amber-600 hover:text-amber-700 dark:text-amber-400">
              {"مشاهده بیشتر"}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "۸ نکته برای انتخاب لباس تابستانی کودک", href: "/blog" },
              { title: "راهنمای سایزبندی دقیق برای والدین", href: "/blog" },
              { title: "مراقبت از لباس‌های ظریف بچه‌گانه", href: "/blog" },
            ].map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 hover:shadow-md transition-shadow bg-white dark:bg-neutral-950"
              >
                <div className="h-28 rounded-lg bg-gradient-to-tr from-amber-200 via-zinc-100 to-amber-50 dark:from-amber-950/40 dark:via-zinc-900/20 dark:to-amber-950/30 mb-3" />
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-neutral-500 mt-1">{"۴ دقیقه مطالعه"}</div>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        {/* درباره کوتاه */}
        <div className="rounded-2xl p-6 bg-gradient-to-br from-amber-50 via-zinc-50 to-amber-100 dark:from-amber-950/30 dark:via-zinc-950/20 dark:to-amber-900/30">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold">{"درباره شیکستون"}</h3>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                {
                  "در شیکستون، با عشق به کودکان، لباس‌هایی باکیفیت، راحت و رنگ‌های گرم ارائه می‌کنیم تا کودکی، شاد و خاطره‌انگیزتر شود."
                }
              </p>
            </div>
            <Link href="/about" className="shrink-0">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white w-full md:w-auto">{"بیشتر بدانید"}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* پنجره فیلترها */}
      <FilterDialog open={filtersOpen} onOpenChange={setFiltersOpen}>
        <FilterSidebar value={filters} onChange={setFilters} />
      </FilterDialog>

      {/* ابزارک‌ها */}
      <ChatWidget />
      <InstagramWidget href="https://instagram.com/shikestoon" />

      <ProductDialog product={active} onOpenChange={(open) => !open && setActive(null)} />
    </main>
  )
}
