import Link from "next/link"

const posts = [
  { id: "1", title: "۸ نکته برای انتخاب لباس تابستانی کودک", excerpt: "خنک، نرم و ایمن در برابر تعریق...", minutes: 4 },
  { id: "2", title: "راهنمای سایزبندی دقیق برای والدین", excerpt: "اندازه‌گیری درست قد و دور سینه...", minutes: 3 },
  { id: "3", title: "مراقبت از لباس‌های ظریف بچه‌گانه", excerpt: "نکاتی برای شست‌وشو و خشک‌کردن...", minutes: 5 },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">{"مجله شیکستون"}</h1>
      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-36 bg-gradient-to-tr from-pink-200 via-violet-200 to-emerald-200 dark:from-rose-950/40 dark:via-fuchsia-950/30 dark:to-emerald-950/30" />
            <div className="p-4">
              <h2 className="font-semibold mb-1">{p.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">{p.excerpt}</p>
              <div className="mt-3 text-xs text-neutral-500">{`${p.minutes} دقیقه مطالعه`}</div>
              <Link href="#" className="mt-3 inline-block text-rose-600 hover:text-rose-700">
                {"ادامه مطلب"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
