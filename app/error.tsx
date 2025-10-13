"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle, Home, RefreshCw } from "lucide-react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Error occurred:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-6">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
          <h1 className="text-4xl font-bold mb-2">حدث خطأ ما</h1>
          <p className="text-muted-foreground text-lg">عذراً، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            <RefreshCw className="ml-2 h-5 w-5" />
            إعادة المحاولة
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/">
              <Home className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </a>
          </Button>
        </div>

        {error.digest && (
          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">رمز الخطأ: {error.digest}</p>
          </div>
        )}

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">إذا استمرت المشكلة، يرجى الاتصال بنا</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="/contact" className="text-primary hover:underline">
              اتصل بنا
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a href="tel:123-456-7890" className="text-primary hover:underline">
              123-456-7890
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a href="mailto:info@alanwar.pharmacy" className="text-primary hover:underline">
              info@alanwar.pharmacy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
