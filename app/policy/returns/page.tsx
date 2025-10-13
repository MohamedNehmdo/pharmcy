import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function ReturnsPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">سياسة الإرجاع والاستبدال</h1>

            <Card>
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">شروط الإرجاع</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    يمكنك إرجاع المنتجات خلال 7 أيام من تاريخ الاستلام في الحالات التالية:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>المنتج معيب أو تالف</li>
                    <li>المنتج غير مطابق للمواصفات</li>
                    <li>استلام منتج خاطئ</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">المنتجات غير القابلة للإرجاع</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>الأدوية التي تتطلب وصفة طبية</li>
                    <li>المنتجات المفتوحة أو المستخدمة</li>
                    <li>المنتجات التي انتهت صلاحيتها</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">عملية الإرجاع</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    للقيام بعملية إرجاع، يرجى الاتصال بخدمة العملاء على الرقم 123-456-7890 أو إرسال بريد إلكتروني إلى
                    info@alanwar.pharmacy
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
