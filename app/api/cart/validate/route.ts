import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    const { items } = await request.json()

    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ error: "Invalid cart items" }, { status: 400 })
    }

    // Fetch current product data from database
    const productIds = items.map((item: any) => item.id)
    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    })

    // Validate each item
    const validatedItems = items.map((item: any) => {
      const product = products.find((p) => p.id === item.id)

      if (!product) {
        return {
          ...item,
          error: "Product not found",
          isValid: false,
        }
      }

      if (product.stock < item.quantity) {
        return {
          ...item,
          error: "Insufficient stock",
          availableStock: product.stock,
          isValid: false,
        }
      }

      if (product.price !== item.price) {
        return {
          ...item,
          error: "Price has changed",
          currentPrice: product.price,
          isValid: false,
        }
      }

      return {
        ...item,
        isValid: true,
      }
    })

    // Calculate totals
    const subtotal = validatedItems
      .filter((item: any) => item.isValid)
      .reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)

    const shippingFee = subtotal >= 100 ? 0 : 15
    const total = subtotal + shippingFee

    return NextResponse.json({
      items: validatedItems,
      subtotal,
      shippingFee,
      total,
      isValid: validatedItems.every((item: any) => item.isValid),
    })
  } catch (error) {
    console.error("Error validating cart:", error)
    return NextResponse.json({ error: "Failed to validate cart" }, { status: 500 })
  }
}
