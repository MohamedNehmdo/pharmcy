import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function OrderSuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-4">تم استلام طلبك بنجاح!</h1>
              <p className="text-lg text-muted-foreground mb-2">شكراً لك على طلبك من صيدلية الأنوار</p>
              <p className="text-muted-foreground mb-8">سيتم التواصل معك قريباً لتأكيد الطلب وترتيب التوصيل</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button size="lg">متابعة التسوق</Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline">
                    العودة للرئيسية
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
