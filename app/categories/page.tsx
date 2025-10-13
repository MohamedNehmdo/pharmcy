import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryCard } from "@/components/category-card"
import { getCategories, mockProducts } from "@/lib/mock-data"

export default async function CategoriesPage() {
  const categories = getCategories()

  // Calculate product count per category
  const categoriesWithCount = categories.map((category) => ({
    ...category,
    productCount: mockProducts.filter((p) => p.categoryId === category.id).length,
  }))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">جميع الأقسام</h1>
            <p className="text-muted-foreground">تصفح منتجاتنا حسب القسم</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categoriesWithCount.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                nameAr={category.nameAr}
                slug={category.slug}
                icon={category.icon}
                productCount={category.productCount}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
