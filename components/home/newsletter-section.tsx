"use client"

import { motion } from "framer-motion"
import { NewsletterForm } from "@/components/newsletter-form"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#FF7A00] to-[#D45D00] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-lg mb-8 opacity-90">احصل على آخر العروض والنصائح الصحية مباشرة في بريدك الإلكتروني</p>
          <NewsletterForm />
          <p className="text-sm mt-4 opacity-75">نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.</p>
        </motion.div>
      </div>
    </section>
  )
}
