import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-2">الصفحة غير موجودة</h2>
          <p className="text-muted-foreground text-lg">عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/products">
              <Search className="ml-2 h-5 w-5" />
              تصفح المنتجات
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">هل تحتاج مساعدة؟</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link href="/contact" className="text-primary hover:underline">
              اتصل بنا
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <Link href="/about" className="text-primary hover:underline">
              من نحن
            </Link>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a href="tel:123-456-7890" className="text-primary hover:underline">
              123-456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
