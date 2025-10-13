import { Noto_Sans_Arabic } from "next/font/google"
import { GeistSans } from "geist/font/sans"

export const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
})

export const geistSans = GeistSans
