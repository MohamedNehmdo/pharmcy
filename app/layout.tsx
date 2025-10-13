import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { notoSansArabic, geistSans } from "@/lib/fonts"
import "./globals.css"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL("https://al-anwar-pharmacy.vercel.app"),
  title: {
    default: "صيدلية الأنوار | Al-Anwar Pharmacy",
    template: "%s | صيدلية الأنوار",
  },
  description: "صيدليتك الموثوقة للأدوية الأصلية والمنتجات الصحية. توصيل سريع ومجاني للطلبات فوق 100 شيكل",
  keywords: [
    "صيدلية",
    "أدوية",
    "منتجات صحية",
    "فيتامينات",
    "مكملات غذائية",
    "العناية بالبشرة",
    "pharmacy",
    "medicines",
  ],
  authors: [{ name: "Al-Anwar Pharmacy" }],
  creator: "Al-Anwar Pharmacy",
  publisher: "Al-Anwar Pharmacy",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://al-anwar-pharmacy.vercel.app",
    title: "صيدلية الأنوار | Al-Anwar Pharmacy",
    description: "صيدليتك الموثوقة للأدوية الأصلية والمنتجات الصحية",
    siteName: "صيدلية الأنوار",
  },
  twitter: {
    card: "summary_large_image",
    title: "صيدلية الأنوار | Al-Anwar Pharmacy",
    description: "صيدليتك الموثوقة للأدوية الأصلية والمنتجات الصحية",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`font-sans ${notoSansArabic.variable} ${geistSans.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
