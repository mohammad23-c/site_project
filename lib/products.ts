export type Review = { name: string; rating: number; comment: string }

export type Product = {
  id: string
  title: string
  subtitle?: string
  description: string
  price: number
  image: string
  sizes: string[]
  material: string
  colors: string[]
  ageGroup: string
  rating?: number
  reviews?: Review[]
}

export const products: Product[] = [
  {
    id: "1",
    title: "ست خرس کوچولو",
    subtitle: "مناسب ۳ تا ۷ سال",
    description: "ست تیشرت و شرتک پنبه‌ای نرم با دوخت تقویت‌شده برای بازی‌های روزانه.",
    price: 390_000,
    image: "/kid-tshirt-set.png",
    sizes: ["S", "M", "L"],
    material: "پنبه",
    colors: ["قرمز", "آبی", "نارنجی"],
    ageGroup: "۳-۵ سال",
    rating: 4.7,
    reviews: [
      { name: "محیا", rating: 5, comment: "خیلی لطیف و رنگش عالیه." },
      { name: "آیدین", rating: 4.5, comment: "سایزبندی کاملاً مطابق راهنما بود." },
    ],
  },
  {
    id: "2",
    title: "تی‌شرت و شرتک سونیک",
    subtitle: "مناسب ۸ تا ۱۵ سال",
    description: "ست خنک تابستانی با طرح محبوب و رنگ‌بندی جذاب.",
    price: 359_000,
    image: "/placeholder-fnzxa.png",
    sizes: ["M", "L", "XL"],
    material: "پنبه",
    colors: ["آبی", "سفید"],
    ageGroup: "۱۰-۱۲ سال",
    rating: 4.4,
    reviews: [{ name: "یگانه", rating: 4.5, comment: "دوست‌داشتنی و راحت." }],
  },
  {
    id: "3",
    title: "دامن لینن",
    subtitle: "بزرگسال",
    description: "دامن بلند از جنس لنین سبک و خنک.",
    price: 499_000,
    image: "/placeholder-krn5b.png",
    sizes: ["S", "M", "L"],
    material: "کتان",
    colors: ["قهوه‌ای", "کِرِم"],
    ageGroup: "نوجوان",
    rating: 4.2,
    reviews: [{ name: "مهسا", rating: 4, comment: "دوخت تمیز و جنس خوب." }],
  },
  {
    id: "4",
    title: "کش مو پاپیونی (۴ عددی)",
    subtitle: "ترکیب رنگی شاد",
    description: "کش موهای مخملی با رنگ‌های جذاب برای استایل روزانه.",
    price: 99_000,
    image: "/placeholder-d4fps.png",
    sizes: ["XS", "S"],
    material: "پلی‌استر",
    colors: ["صورتی", "بنفش", "سبز"],
    ageGroup: "۳-۵ سال",
    rating: 4.8,
    reviews: [{ name: "غزاله", rating: 5, comment: "خیلی بامزه و باکیفیت." }],
  },
  {
    id: "5",
    title: "سرهمی دخترانه لونا",
    subtitle: "دخترانه",
    description: "سرهمی راحت با طراحی فانتزی برای مهمانی‌های کودکانه.",
    price: 299_000,
    image: "/girl-purple-jumpsuit-studio.png",
    sizes: ["S", "M"],
    material: "پلی‌استر",
    colors: ["بنفش"],
    ageGroup: "۶-۹ سال",
    rating: 4.6,
    reviews: [{ name: "مینا", rating: 4.5, comment: "خوش‌دوخت و شیک." }],
  },
  {
    id: "6",
    title: "بسته جوراب رنگین‌کمانی",
    subtitle: "۷ رنگ",
    description: "۷ جفت جوراب نرم و سبک برای هر روز هفته.",
    price: 125_000,
    image: "/colorful-socks-circle.png",
    sizes: ["XS", "S", "M"],
    material: "پنبه",
    colors: ["صورتی", "آبی", "سبز", "زرد"],
    ageGroup: "۳-۵ سال",
    rating: 4.3,
    reviews: [{ name: "رهام", rating: 4, comment: "طرح‌ها بامزه و کاربردی." }],
  },
  {
    id: "7",
    title: "پیراهن تابستانی",
    subtitle: "سبک و خنک",
    description: "پیراهن نخی با رنگ‌های پاستلی برای روزهای گرم.",
    price: 320_000,
    image: "/pastel-summer-dress.png",
    sizes: ["S", "M", "L"],
    material: "پنبه",
    colors: ["صورتی", "نعنایی"],
    ageGroup: "۶-۹ سال",
    rating: 4.5,
    reviews: [{ name: "هانیه", rating: 5, comment: "به‌موقع رسید و خیلی زیباست." }],
  },
  {
    id: "8",
    title: "هودی نرم کودکانه",
    subtitle: "گرم و راحت",
    description: "هودی لطیف برای روزهای خنک با رنگ‌بندی شاد.",
    price: 380_000,
    image: "/cozy-hoodie-kids-pink-studio.png",
    sizes: ["M", "L"],
    material: "پلی‌استر",
    colors: ["صورتی", "خاکستری"],
    ageGroup: "۱۰-۱۲ سال",
    rating: 4.1,
    reviews: [{ name: "پویا", rating: 4, comment: "نرم و سبک." }],
  },
]
