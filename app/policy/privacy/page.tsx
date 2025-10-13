import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">سياسة الخصوصية</h1>

            <Card>
              <CardContent className="p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">جمع المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نقوم بجمع المعلومات التي تقدمها لنا عند إنشاء حساب أو إجراء عملية شراء، بما في ذلك الاسم والعنوان
                    ورقم الهاتف والبريد الإلكتروني.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">استخدام المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم معلوماتك لمعالجة طلباتك، وتحسين خدماتنا، والتواصل معك بشأن طلباتك والعروض الخاصة.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">حماية المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام أو الكشف.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">مشاركة المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لا نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة إلا عند الضرورة لتقديم خدماتنا أو
                    عندما يقتضي القانون ذلك.
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
