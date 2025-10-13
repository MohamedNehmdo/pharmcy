import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { CategoriesCarousel } from "@/components/home/categories-carousel"
import { BestsellersCarousel } from "@/components/home/bestsellers-carousel"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { getCategories, getBestsellers } from "@/lib/mock-data"

export default async function HomePage() {
  const categories = getCategories(10)
  const bestsellers = getBestsellers(12)

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <CategoriesCarousel categories={categories} />
        <BestsellersCarousel products={bestsellers} />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
