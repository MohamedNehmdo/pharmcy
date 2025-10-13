import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductFilters } from "@/components/products/product-filters"
// import { prisma } from "@/lib/prisma"
import { getCategories, mockProducts } from "@/lib/mock-data"
import type { Metadata } from "next"

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string
    search?: string
    minPrice?: string
    maxPrice?: string
    sort?: string
    page?: string
  }>
}

export const metadata: Metadata = {
  title: "جميع المنتجات | صيدلية الأنوار",
  description: "تصفح مجموعتنا الواسعة من الأدوية والمنتجات الصحية الأصلية بأفضل الأسعار",
  keywords: ["صيدلية", "أدوية", "منتجات صحية", "فيتامينات", "مكملات غذائية"],
  openGraph: {
    title: "جميع المنتجات | صيدلية الأنوار",
    description: "تصفح مجموعتنا الواسعة من الأدوية والمنتجات الصحية",
    type: "website",
    locale: "ar_SA",
  },
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams
  const { category, search, minPrice, maxPrice, sort = "relevance", page = "1" } = params

  const pageNumber = Number.parseInt(page)
  const itemsPerPage = 12

  let filteredProducts = [...mockProducts]

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter((p) => p.category.slug === category)
  }

  // Filter by search
  if (search) {
    const lowerSearch = search.toLowerCase()
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerSearch) ||
        p.nameAr.includes(search) ||
        p.brand.toLowerCase().includes(lowerSearch) ||
        p.brandAr.includes(search),
    )
  }

  // Filter by price
  if (minPrice) {
    filteredProducts = filteredProducts.filter((p) => p.price >= Number.parseFloat(minPrice))
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter((p) => p.price <= Number.parseFloat(maxPrice))
  }

  // Sort products
  switch (sort) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price)
      break
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price)
      break
    case "newest":
      filteredProducts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      break
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating)
      break
    default:
      filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  const totalCount = filteredProducts.length
  const totalPages = Math.ceil(totalCount / itemsPerPage)
  const paginatedProducts = filteredProducts.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)

  const categories = getCategories()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">جميع المنتجات</h1>
            <p className="text-muted-foreground">تصفح مجموعتنا الواسعة من الأدوية والمنتجات الصحية</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <Suspense fallback={<div>جاري التحميل...</div>}>
                <ProductFilters categories={categories} />
              </Suspense>
            </aside>

            <div className="lg:col-span-3">
              <Suspense fallback={<div>جاري التحميل...</div>}>
                <ProductsGrid
                  products={paginatedProducts}
                  totalCount={totalCount}
                  currentPage={pageNumber}
                  totalPages={totalPages}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
