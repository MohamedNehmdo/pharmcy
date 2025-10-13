"use client"

import type { Product, Category } from "@/lib/types"
import { ProductCard } from "@/components/product-card"
import { useRouter, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductsGridProps {
  products: (Product & { category: Category })[]
  totalCount: number
  currentPage: number
  totalPages: number
}

export function ProductsGrid({ products, totalCount, currentPage, totalPages }: ProductsGridProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("sort", value)
    params.delete("page")
    router.push(`/products?${params.toString()}`)
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="space-y-6">
      {/* Sort and count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          عرض {products.length} من {totalCount} منتج
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm">ترتيب حسب:</span>
          <Select defaultValue={searchParams.get("sort") || "relevance"} onValueChange={handleSortChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">الأكثر صلة</SelectItem>
              <SelectItem value="price-asc">السعر: من الأقل للأعلى</SelectItem>
              <SelectItem value="price-desc">السعر: من الأعلى للأقل</SelectItem>
              <SelectItem value="newest">الأحدث</SelectItem>
              <SelectItem value="rating">الأعلى تقييماً</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products grid */}
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">لم يتم العثور على منتجات</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              nameAr={product.nameAr}
              slug={product.slug}
              brand={product.brand}
              brandAr={product.brandAr}
              price={product.price}
              rating={product.rating}
              reviewsCount={product.reviewsCount}
              images={product.images}
              isRX={product.isRX}
              isOTC={product.isOTC}
              stock={product.stock}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
