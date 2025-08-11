"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, ShoppingCart, SlidersHorizontal, Truck } from "lucide-react"

export default function HowToUse() {
  return (
    <div className="container mx-auto px-4 pt-3 mb-4">
      <Card className="p-3 sm:p-4 bg-amber-50/60 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30 leading-6">
        <div className="text-[15px] sm:text-base font-semibold mb-2 sm:mb-3 text-amber-700 dark:text-amber-300">
          {"راهنمای خرید از شیکستون"}
        </div>
        <ol className="grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex items-start gap-2.5">
            <SlidersHorizontal className="h-4 w-4 text-amber-500 mt-0.5" />
            <div className="text-[13px] sm:text-sm">
              <span className="font-medium">{"۱) انتخاب فیلترها"}</span>
              <div className="text-neutral-700 dark:text-neutral-300">
                {"از دکمه «فیلترها» بالا استفاده کنید و سایز، رنگ و قیمت را تنظیم کنید."}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="h-4 w-4 text-amber-500 mt-0.5" />
            <div className="text-[13px] sm:text-sm">
              <span className="font-medium">{"۲) مشاهده جزئیات"}</span>
              <div className="text-neutral-700 dark:text-neutral-300">
                {"روی کارت محصول کلیک کنید یا با دوبار کلیک در دسکتاپ جزئیات را ببینید."}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <ShoppingCart className="h-4 w-4 text-amber-500 mt-0.5" />
            <div className="text-[13px] sm:text-sm">
              <span className="font-medium">{"۳) افزودن به سبد"}</span>
              <div className="text-neutral-700 dark:text-neutral-300">
                {"سایز و رنگ را انتخاب کرده و «افزودن به سبد» را بزنید."}
              </div>
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <Truck className="h-4 w-4 text-amber-500 mt-0.5" />
            <div className="text-[13px] sm:text-sm">
              <span className="font-medium">{"۴) ارسال سریع"}</span>
              <div className="text-neutral-700 dark:text-neutral-300">
                {"سفارش شما با بسته‌بندی امن و ارسال سریع به دستتان می‌رسد."}
              </div>
            </div>
          </li>
        </ol>
      </Card>
    </div>
  )
}
