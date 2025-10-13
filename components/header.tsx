import Link from "next/link"
import { Search, Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search-bar"
import { CartSheet } from "@/components/cart/cart-sheet"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <Link href="/contact" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>اتصل بنا: 123-456-7890</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span>توصيل الى جميع انحاء زفتي</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground text-xl font-bold">
              ص
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none">صيدلية الأنوار</span>
              <span className="text-xs text-muted-foreground pt-1">Al-Anwar Pharmacy</span>
            </div>
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <SearchBar />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <CartSheet />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </nav>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <SearchBar />
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex h-12 items-center gap-6 text-sm border-t">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            الرئيسية
          </Link>
          <Link href="/products" className="hover:text-primary transition-colors">
            المنتجات
          </Link>
          <Link href="/categories" className="hover:text-primary transition-colors">
            الأقسام
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            من نحن
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            اتصل بنا
          </Link>
        </nav>
      </div>
    </header>
  )
}
