import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "إتمام الطلب",
  description: "أكمل معلوماتك لإتمام عملية الشراء",
  robots: {
    index: false,
    follow: false,
  },
}

export default function CheckoutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">إتمام الطلب</h1>
            <p className="text-muted-foreground">أكمل معلوماتك لإتمام عملية الشراء</p>
          </div>

          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
