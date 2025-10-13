"use client"

import type { Category } from "@/lib/types"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { CategoryCard } from "@/components/category-card"
import { motion } from "framer-motion"

interface CategoriesCarouselProps {
  categories: Category[]
}

export function CategoriesCarousel({ categories }: CategoriesCarouselProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">تصفح حسب القسم</h2>
          <p className="text-muted-foreground text-lg">اختر من بين مجموعة واسعة من الأقسام الصحية</p>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="categories-swiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategoryCard name={category.name} nameAr={category.nameAr} slug={category.slug} icon={category.icon} />
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .categories-swiper .swiper-button-next,
          .categories-swiper .swiper-button-prev {
            color: #ff7a00;
          }
        `}</style>
      </div>
    </section>
  )
}
