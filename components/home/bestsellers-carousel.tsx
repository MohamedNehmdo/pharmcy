"use client"

import type { ProductWithCategory } from "@/lib/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { ProductCard } from "@/components/product-card"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BestsellersCarouselProps {
  products: ProductWithCategory[]
}

export function BestsellersCarousel({ products }: BestsellersCarouselProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">الأكثر مبيعاً</h2>
            <p className="text-muted-foreground text-lg">المنتجات الأكثر طلباً من عملائنا</p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="hidden md:flex bg-transparent">
              عرض الكل
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="bestsellers-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
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
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-8 md:hidden">
          <Link href="/products">
            <Button variant="outline">
              عرض جميع المنتجات
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <style jsx global>{`
          .bestsellers-swiper .swiper-button-next,
          .bestsellers-swiper .swiper-button-prev {
            color: #ff7a00;
          }
        `}</style>
      </div>
    </section>
  )
}
