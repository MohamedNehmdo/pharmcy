"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import { motion } from "framer-motion"

export function HeroSection() {
  const slides = [
    {
      title: "مرحباً بك في صيدلية الأنوار",
      subtitle: "مصدرك الموثوق للأدوية الأصلية",
      description: "توصيل سريع • صيادلة مرخصون • منتجات أصلية 100%",
      image: "/pharmacy-interior-modern.jpg",
    },
    {
      title: "عروض خاصة على الفيتامينات",
      subtitle: "خصم يصل إلى 25% على جميع المكملات الغذائية",
      description: "اعتن بصحتك مع أفضل المنتجات",
      image: "/vitamins-supplements-bottles.jpg",
    },
    {
      title: "خدمة توصيل في نفس اليوم",
      subtitle: "اطلب الآن واستلم طلبك خلال ساعات",
      description: "خدمة سريعة وموثوقة في جميع أنحاء غزة",
      image: "/delivery-service-pharmacy.jpg",
    },
  ]

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "!bg-[#FF7A00]",
        }}
        navigation
        loop
        speed={800}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[500px] md:h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('${slide.image}')`,
              }}
            >
              <div className="container mx-auto px-4 h-full flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h1>
                  <p className="text-xl md:text-2xl mb-3 text-balance">{slide.subtitle}</p>
                  <p className="text-base md:text-lg mb-8 opacity-90">{slide.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/products">
                      <Button size="lg" className="bg-[#FF7A00] hover:bg-[#D45D00] text-white">
                        تسوق الآن
                      </Button>
                    </Link>
                    <Link href="/categories">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 bg-transparent"
                      >
                        عرض الأقسام
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white;
        }
        .hero-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
