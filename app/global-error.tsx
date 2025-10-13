"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Global error occurred:", error)
  }, [error])

  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
                <AlertTriangle className="h-10 w-10 text-destructive" />
              </div>
              <h1 className="text-5xl font-bold mb-2">500</h1>
              <h2 className="text-2xl font-bold mb-2">خطأ في الخادم</h2>
              <p className="text-muted-foreground">عذراً، حدث خطأ في الخادم. نحن نعمل على إصلاحه</p>
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <Button onClick={reset} size="lg" className="w-full">
                إعادة المحاولة
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                <a href="/">العودة للرئيسية</a>
              </Button>
            </div>

            {error.digest && (
              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">رمز الخطأ: {error.digest}</p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
