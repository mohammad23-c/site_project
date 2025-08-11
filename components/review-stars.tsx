"use client"

import { Star } from "lucide-react"

export function ReviewStars({ value = 0 }: { value?: number }) {
  const full = Math.floor(value)
  const fraction = value - full
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = i < full ? 1 : i === full ? fraction : 0
        return (
          <div key={i} className="relative" aria-hidden>
            <Star className="h-[14px] w-[14px] text-neutral-300 dark:text-neutral-700" />
            <Star
              className="absolute inset-0 text-amber-500"
              style={{ clipPath: `inset(0 ${100 - fill * 100}% 0 0)` }}
            />
          </div>
        )
      })}
      <span className="ms-1 text-xs text-neutral-500">{value.toFixed(1)}</span>
    </div>
  )
}
