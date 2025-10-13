import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")

    if (!query || query.length < 2) {
      return NextResponse.json({ suggestions: [] })
    }

    const products = await prisma.product.findMany({
      where: {
        OR: [
          { nameAr: { contains: query, mode: "insensitive" } },
          { name: { contains: query, mode: "insensitive" } },
          { brandAr: { contains: query, mode: "insensitive" } },
          { brand: { contains: query, mode: "insensitive" } },
        ],
        stock: { gt: 0 },
      },
      take: 5,
      select: {
        id: true,
        nameAr: true,
        slug: true,
        price: true,
        images: true,
      },
    })

    return NextResponse.json({ suggestions: products })
  } catch (error) {
    console.error("Error fetching search suggestions:", error)
    return NextResponse.json({ error: "Failed to fetch suggestions" }, { status: 500 })
  }
}
