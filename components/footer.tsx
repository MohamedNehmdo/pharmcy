import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground text-xl font-bold">
                ص
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none">صيدلية الأنوار</span>
                <span className="text-xs text-muted-foreground">Al-Anwar Pharmacy</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              صيدليتك الموثوقة للأدوية الأصلية والمنتجات الصحية. نقدم خدمات صيدلانية متميزة مع توصيل سريع.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  المنتجات
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">
                  الأقسام
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">السياسات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/policy/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/policy/returns" className="text-muted-foreground hover:text-primary transition-colors">
                  سياسة الإرجاع
                </Link>
              </li>
              <li>
                <Link href="/policy/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  سياسة الشحن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>123-456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@alanwar.pharmacy</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span> الغربية زفتي</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                ✓
              </div>
              <h4 className="font-semibold text-sm">صيدلية مرخصة</h4>
              <p className="text-xs text-muted-foreground">معتمدة من وزارة الصحة</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                🔒
              </div>
              <h4 className="font-semibold text-sm">دفع آمن</h4>
              <p className="text-xs text-muted-foreground">معاملات مشفرة ومحمية</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
                🚚
              </div>
              <h4 className="font-semibold text-sm">توصيل سريع</h4>
              <p className="text-xs text-muted-foreground">خدمة توصيل في نفس اليوم</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 صيدلية الأنوار. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
