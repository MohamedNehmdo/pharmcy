import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ShippingPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">سياسة الشحن والتوصيل</h1>

            <Card>
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">مناطق التوصيل</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نقوم بالتوصيل إلى جميع مناطق قطاع غزة خلال نفس اليوم أو اليوم التالي حسب وقت الطلب.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">رسوم التوصيل</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>15 شيكل لجميع المناطق</li>
                    <li>توصيل مجاني للطلبات التي تزيد عن 200 شيكل</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">أوقات التوصيل</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    الطلبات المقدمة قبل الساعة 3 مساءً يتم توصيلها في نفس اليوم. الطلبات بعد ذلك يتم توصيلها في اليوم
                    التالي.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">تتبع الطلب</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    سيتم التواصل معك عبر الهاتف لتأكيد الطلب وتحديد موعد التوصيل المناسب.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
