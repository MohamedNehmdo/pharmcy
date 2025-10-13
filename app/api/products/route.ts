import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("query")
    const category = searchParams.get("category")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")
    const brand = searchParams.get("brand")
    const dosageForm = searchParams.get("dosageForm")
    const isRX = searchParams.get("isRX")
    const isOTC = searchParams.get("isOTC")
    const inStock = searchParams.get("inStock")
    const sort = searchParams.get("sort") || "relevance"
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "12")

    // Build where clause
    const where: any = {}

    if (inStock === "true") {
      where.stock = { gt: 0 }
    }

    if (category) {
      const categoryData = await prisma.category.findUnique({
        where: { slug: category },
      })
      if (categoryData) {
        where.categoryId = categoryData.id
      }
    }

    if (query) {
      where.OR = [
        { nameAr: { contains: query, mode: "insensitive" } },
        { name: { contains: query, mode: "insensitive" } },
        { brandAr: { contains: query, mode: "insensitive" } },
        { brand: { contains: query, mode: "insensitive" } },
      ]
    }

    if (minPrice || maxPrice) {
      where.price = {}
      if (minPrice) where.price.gte = Number.parseFloat(minPrice)
      if (maxPrice) where.price.lte = Number.parseFloat(maxPrice)
    }

    if (brand) {
      where.OR = where.OR || []
      where.OR.push(
        { brand: { contains: brand, mode: "insensitive" } },
        { brandAr: { contains: brand, mode: "insensitive" } },
      )
    }

    if (dosageForm) {
      where.OR = where.OR || []
      where.OR.push(
        { dosageForm: { contains: dosageForm, mode: "insensitive" } },
        { dosageFormAr: { contains: dosageForm, mode: "insensitive" } },
      )
    }

    if (isRX === "true") {
      where.isRX = true
    }
    if (isOTC === "true") {
      where.isOTC = true
    }

    // Build orderBy clause
    let orderBy: any = {}
    switch (sort) {
      case "price-asc":
        orderBy = { price: "asc" }
        break
      case "price-desc":
        orderBy = { price: "desc" }
        break
      case "newest":
        orderBy = { createdAt: "desc" }
        break
      case "rating":
        orderBy = { rating: "desc" }
        break
      default:
        orderBy = { rating: "desc" }
    }

    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        where,
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          category: true,
        },
      }),
      prisma.product.count({ where }),
    ])

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
