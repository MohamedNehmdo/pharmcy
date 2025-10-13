"use client"

import type { CartItem as CartItemType } from "@/lib/store/cart-store"
import { useCartStore } from "@/lib/store/cart-store"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <div className="flex gap-4">
      <Link href={`/products/${item.slug}`} className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
        <Image src={item.image || "/placeholder.svg"} alt={item.nameAr} fill className="object-cover" />
      </Link>

      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/products/${item.slug}`} className="text-sm font-medium hover:text-primary line-clamp-2">
            {item.nameAr}
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0" onClick={() => removeItem(item.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 bg-transparent"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 bg-transparent"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              disabled={item.quantity >= item.stock}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <span className="text-sm font-semibold">{(item.price * item.quantity).toFixed(2)} ₪</span>
        </div>
      </div>
    </div>
  )
}
