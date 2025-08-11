export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">{"درباره شیکستون"}</h1>
        <p className="text-neutral-700 dark:text-neutral-300">
          {
            "شیکستون با هدف خلق تجربه‌ای شاد، امن و باکیفیت برای خرید لباس کودک متولد شد. ما باور داریم لباس خوب باید راحت، بادوام و دوست‌داشتنی باشد."
          }
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          {
            "از طراحی تا دوخت، از انتخاب پارچه تا کنترل کیفیت، همه چیز با دقت انجام می‌شود. رنگ‌ها و طرح‌های ما الهام گرفته از دنیای رنگارنگ کودکان است."
          }
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">{"همراه هم باشیم تا کودکی، شیک و شاد بگذرد 🌸"}</p>
      </div>
    </div>
  )
}
