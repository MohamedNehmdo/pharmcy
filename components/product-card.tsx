import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  id: string
  name: string
  nameAr: string
  slug: string
  brand: string
  brandAr: string
  price: number
  rating: number
  reviewsCount: number
  images: string[]
  isRX: boolean
  isOTC: boolean
  stock: number
}

export function ProductCard({
  name,
  nameAr,
  slug,
  brand,
  brandAr,
  price,
  rating,
  reviewsCount,
  images,
  isRX,
  stock,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/products/${slug}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={images[0] || "/placeholder.svg?height=300&width=300"}
            alt={nameAr}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isRX && <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">RX</Badge>}
          {stock < 10 && stock > 0 && (
            <Badge className="absolute top-2 left-2 bg-amber-500 text-white">كمية محدودة</Badge>
          )}
          {stock === 0 && <Badge className="absolute top-2 left-2 bg-muted text-muted-foreground">نفذت الكمية</Badge>}
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/products/${slug}`}>
          <p className="text-xs text-muted-foreground mb-1">{brandAr}</p>
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {nameAr}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewsCount})</span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">{price.toFixed(2)} ₪</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm" disabled={stock === 0}>
          <ShoppingCart className="h-4 w-4 ml-2" />
          {stock === 0 ? "نفذت الكمية" : "أضف للسلة"}
        </Button>
      </CardFooter>
    </Card>
  )
}
