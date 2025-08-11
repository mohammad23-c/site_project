"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatPriceFa } from "@/lib/format"
import { ReviewStars } from "./review-stars"
import { products, type Product } from "@/lib/products"

export default function ProductDialog({
  product,
  onOpenChange,
}: {
  product: Product | null
  onOpenChange: (open: boolean) => void
}) {
  if (!product) return null
  const related = products.filter((p) => p.id !== product.id).slice(0, 3)
  return (
    <Dialog open={!!product} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{product.title}</span>
            <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-300">
              {"ارسال رایگان"}
            </Badge>
          </DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="space-y-3">
            <ReviewStars value={product.rating || 4.6} />
            <div className="text-lg font-semibold">{formatPriceFa(product.price)}</div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{product.description}</p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <span key={c} className="px-2 py-1 rounded-full border text-xs">
                  {c}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">{"افزودن به سبد"}</Button>
              <Button variant="outline">{"افزودن به علاقه‌مندی"}</Button>
            </div>

            <div className="pt-3">
              <h4 className="font-semibold mb-2">{"نظر مشتریان"}</h4>
              <ScrollArea className="h-28 rounded border p-3">
                {(product.reviews || []).map((r, idx) => (
                  <div key={idx} className="mb-3 last:mb-0">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{r.name}</span>
                      <ReviewStars value={r.rating} />
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{r.comment}</p>
                  </div>
                ))}
              </ScrollArea>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold mb-2">{"محصولات مرتبط"}</h4>
              <div className="grid grid-cols-3 gap-2">
                {related.map((r) => (
                  <div key={r.id} className="text-center">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded">
                      <Image src={r.image || "/placeholder.svg"} alt={r.title} fill className="object-cover" />
                    </div>
                    <div className="mt-1 text-xs line-clamp-1">{r.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
