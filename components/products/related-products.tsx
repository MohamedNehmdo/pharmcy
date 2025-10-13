import type { Product, Category } from "@/lib/types"
import { ProductCard } from "@/components/product-card"

interface RelatedProductsProps {
  products: (Product & { category: Category })[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="container mx-auto px-4 py-12 border-t">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">منتجات ذات صلة</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  )
}
