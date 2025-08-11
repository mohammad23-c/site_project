"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, ZoomIn } from "lucide-react"
import { useEffect, useState } from "react"
import { formatPriceFa } from "@/lib/format"
import { ReviewStars } from "./review-stars"
import { cn } from "@/lib/utils"

type Product = {
  id: string
  title: string
  subtitle?: string
  price: number
  image: string
  rating?: number
}

export default function ProductCard({
  product,
  onOpen,
}: {
  product: Product
  onOpen?: () => void
}) {
  const [zoomed, setZoomed] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  return (
    <Card
      className={cn(
        "group overflow-hidden border-neutral-200 dark:border-neutral-800 transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-0.5",
      )}
      onDoubleClick={() => isDesktop && onOpen?.()}
    >
      <CardHeader className="p-0">
        <div
          className="relative aspect-[4/5] w-full overflow-hidden cursor-zoom-in"
          onClick={() => setZoomed((z) => !z)}
        >
          <Image
            src={product.image || "/placeholder.svg?height=800&width=640&query=kids%20fashion%20product"}
            alt={product.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              zoomed ? "scale-125" : "group-hover:scale-105",
            )}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <button
            aria-label="افزودن به علاقه‌مندی‌ها"
            className="absolute top-3 left-3 rounded-full bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-2 text-neutral-700 dark:text-neutral-200 hover:text-amber-600 transition-colors"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            aria-label="بزرگ‌نمایی"
            className="absolute top-3 right-3 rounded-full bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-2 text-neutral-700 dark:text-neutral-200 hover:text-amber-600 transition-colors"
          >
            <ZoomIn className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-4 pt-4 pb-2">
        <div
          onClick={onOpen}
          className="line-clamp-1 font-medium text-neutral-900 dark:text-neutral-100 hover:text-amber-600 cursor-pointer"
        >
          {product.title}
        </div>
        {product.subtitle ? (
          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">{product.subtitle}</div>
        ) : null}
        {product.rating ? (
          <div className="mt-2">
            <ReviewStars value={product.rating} />
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex items-center justify-between">
        <div className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
          {formatPriceFa(product.price)}
        </div>
        <Button
          className="bg-amber-500 hover:bg-amber-600 text-white shadow-sm transition-all hover:shadow-md"
          size="sm"
        >
          {"خرید"}
        </Button>
      </CardFooter>
    </Card>
  )
}
