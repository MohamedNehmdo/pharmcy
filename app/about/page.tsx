import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">من نحن</h1>
              <p className="text-xl text-muted-foreground">صيدلية الأنوار - شريكك الموثوق في الرعاية الصحية</p>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">رسالتنا</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  في صيدلية الأنوار، نلتزم بتقديم أفضل الخدمات الصيدلانية والمنتجات الصحية الأصلية لعملائنا الكرام. نسعى
                  لأن نكون الخيار الأول والموثوق لكل من يبحث عن الجودة والاحترافية في مجال الرعاية الصحية.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  نؤمن بأن الصحة حق للجميع، ولذلك نعمل جاهدين على توفير جميع الأدوية والمنتجات الصحية بأسعار مناسبة
                  وبجودة عالية، مع خدمة توصيل سريعة وآمنة.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">منتجات أصلية ومضمونة</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        جميع منتجاتنا من مصادر موثوقة ومعتمدة من وزارة الصحة
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">صيادلة مؤهلون</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        فريق من الصيادلة المرخصين والمتخصصين لخدمتك
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">خدمة عملاء متميزة</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        نحن هنا لمساعدتك في اختيار المنتج المناسب
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">توصيل سريع</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        خدمة توصيل في نفس اليوم لجميع المناطق
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">التراخيص والاعتمادات</h2>
                <p className="text-muted-foreground leading-relaxed">
                  صيدلية الأنوار مرخصة من وزارة الصحة وتلتزم بجميع المعايير والضوابط الصحية المعتمدة. نحن
                  نضمن لك الحصول على منتجات آمنة وفعالة تلبي احتياجاتك الصحية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
