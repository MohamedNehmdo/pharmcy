import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetails } from "@/components/products/product-details"
import { RelatedProducts } from "@/components/products/related-products"
import { getProductBySlug, getProductsByCategory } from "@/lib/mock-data"
import type { Metadata } from "next"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "المنتج غير موجود | صيدلية الأنوار",
    }
  }

  const imageUrl = product.images[0] || "/placeholder.svg?height=400&width=400"

  return {
    title: `${product.nameAr} - ${product.brandAr} | صيدلية الأنوار`,
    description: product.descriptionAr,
    keywords: [product.nameAr, product.brandAr, product.category.nameAr, "صيدلية", "دواء"],
    openGraph: {
      title: `${product.nameAr} - ${product.brandAr}`,
      description: product.descriptionAr,
      images: [imageUrl],
      type: "website",
      locale: "ar_SA",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.nameAr} - ${product.brandAr}`,
      description: product.descriptionAr,
      images: [imageUrl],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params

  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category.slug, 4).filter((p) => p.id !== product.id)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.nameAr,
    description: product.descriptionAr,
    image: product.images[0] || "/placeholder.svg?height=400&width=400",
    brand: {
      "@type": "Brand",
      name: product.brandAr,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "ILS",
      availability: product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
    },
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: "https://al-anwar-pharmacy.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: product.category.nameAr,
        item: `https://al-anwar-pharmacy.vercel.app/products?category=${product.category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.nameAr,
        item: `https://al-anwar-pharmacy.vercel.app/products/${product.slug}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />
      <main className="min-h-screen bg-background">
        <ProductDetails product={product} />
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </main>
      <Footer />
    </>
  )
}
