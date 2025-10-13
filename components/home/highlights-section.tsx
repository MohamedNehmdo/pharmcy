"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Clock, Headphones } from "lucide-react"

export function HighlightsSection() {
  const highlights = [
    {
      icon: Truck,
      title: "توصيل سريع لجميع انحاء زفتي فى نفس اليوم",
      description: "خدمة توصيل في نفس اليوم لجميع الطلبات",
    },
    {
      icon: Shield,
      title: "أدوية أصلية ومضمونة 100%",
      description: "جميع منتجاتنا من مصادر موثوقة ومعتمدة",
    },
    {
      icon: Clock,
      title: "خدمة على مدار الساعة",
      description: "فريق صيادلة متاح للاستشارات 24/7",
    },
    {
      icon: Headphones,
      title: "دعم فني متميز",
      description: "نساعدك في اختيار المنتج المناسب",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-[#FF7A00]/10 flex items-center justify-center mb-4">
                <highlight.icon className="h-8 w-8 text-[#FF7A00]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
