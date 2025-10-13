import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  name: string
  nameAr: string
  slug: string
  icon: string
  productCount?: number
}

export function CategoryCard({ nameAr, slug, icon, productCount }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <Card className="group hover:shadow-lg hover:border-primary transition-all cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
          <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">{nameAr}</h3>
          {productCount !== undefined && <p className="text-xs text-muted-foreground">{productCount} منتج</p>}
        </CardContent>
      </Card>
    </Link>
  )
}
