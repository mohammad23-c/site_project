"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useId } from "react"

export type FilterState = {
  sizes: string[]
  materials: string[]
  colors: string[]
  price: [number, number]
  ages: string[]
}

const sizes = ["XS", "S", "M", "L", "XL"]
const materials = ["پنبه", "کتان", "پلی‌استر"]
const colors = ["زرد", "خاکستری", "آبی", "سبز", "سفید", "مشکی"]
const ages = ["۳-۵ سال", "۶-۹ سال", "۱۰-۱۲ سال", "نوجوان"]

export default function FilterSidebar({
  value,
  onChange,
}: {
  value: FilterState
  onChange: (v: FilterState) => void
}) {
  const id = useId()

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4">
      <div className="mb-2 text-base font-semibold">{"فیلترها"}</div>
      <Accordion type="multiple" defaultValue={["price", "size", "material"]}>
        <AccordionItem value="price">
          <AccordionTrigger>{"بازه قیمت (تومان)"}</AccordionTrigger>
          <AccordionContent>
            <Slider
              defaultValue={value.price}
              min={0}
              max={1_000_000}
              step={10_000}
              onValueChange={(v) => onChange({ ...value, price: [v[0], v[1]] as [number, number] })}
            />
            <div className="flex items-center justify-between mt-2 text-sm">
              <span>{value.price[0].toLocaleString("fa-IR")}</span>
              <span>{value.price[1].toLocaleString("fa-IR")}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="size">
          <AccordionTrigger>{"سایز"}</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((s) => (
                <label key={`${id}-${s}`} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox
                    checked={value.sizes.includes(s)}
                    onCheckedChange={(c) =>
                      onChange({
                        ...value,
                        sizes: c ? [...value.sizes, s] : value.sizes.filter((x) => x !== s),
                      })
                    }
                  />
                  {s}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="material">
          <AccordionTrigger>{"جنس"}</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {materials.map((m) => (
                <label key={`${id}-${m}`} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox
                    checked={value.materials.includes(m)}
                    onCheckedChange={(c) =>
                      onChange({
                        ...value,
                        materials: c ? [...value.materials, m] : value.materials.filter((x) => x !== m),
                      })
                    }
                  />
                  {m}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color">
          <AccordionTrigger>{"رنگ"}</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={`${id}-${c}`}
                  onClick={() =>
                    onChange({
                      ...value,
                      colors: value.colors.includes(c) ? value.colors.filter((x) => x !== c) : [...value.colors, c],
                    })
                  }
                  className={`px-2.5 py-1 rounded-full border text-xs ${
                    value.colors.includes(c)
                      ? "border-amber-500 text-amber-700 bg-amber-50"
                      : "border-neutral-200 dark:border-neutral-700"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="age">
          <AccordionTrigger>{"گروه سنی"}</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {ages.map((a) => (
                <label key={`${id}-${a}`} className="flex items-center gap-2 text-sm cursor-pointer">
                  <Checkbox
                    checked={value.ages.includes(a)}
                    onCheckedChange={(c) =>
                      onChange({
                        ...value,
                        ages: c ? [...value.ages, a] : value.ages.filter((x) => x !== a),
                      })
                    }
                  />
                  {a}
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-4 flex gap-2">
        <Button
          variant="outline"
          className="flex-1 bg-transparent"
          onClick={() => onChange({ sizes: [], materials: [], colors: [], price: [0, 1_000_000], ages: [] })}
        >
          {"پاک کردن"}
        </Button>
        <Button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white">{"اعمال"}</Button>
      </div>
    </div>
  )
}
