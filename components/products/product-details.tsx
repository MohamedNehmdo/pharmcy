"use client"

import type { Product, Category } from "@/lib/types"
import Image from "next/image"
import { useState } from "react"
import { Star, ShoppingCart, Minus, Plus, FileText, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useCartStore } from "@/lib/store/cart-store"
import { useToast } from "@/hooks/use-toast"

interface ProductDetailsProps {
  product: Product & { category: Category }
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const addItem = useCartStore((state) => state.addItem)
  const { toast } = useToast()

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      nameAr: product.nameAr,
      slug: product.slug,
      price: product.price,
      quantity,
      image: product.images[0] || "/placeholder.svg",
      stock: product.stock,
      isRX: product.isRX,
    })

    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تم إضافة ${product.nameAr} إلى سلة التسوق`,
    })

    setQuantity(1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-primary">
          الرئيسية
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary">
          المنتجات
        </Link>
        <span>/</span>
        <Link href={`/categories/${product.category.slug}`} className="hover:text-primary">
          {product.category.nameAr}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.nameAr}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg?height=600&width=600"}
              alt={product.nameAr}
              fill
              className="object-cover"
              priority
            />
            {product.isRX && (
              <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">RX</Badge>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.nameAr} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{product.brandAr}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.nameAr}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewsCount} تقييم)</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-primary">{product.price.toFixed(2)} ₪</span>
              {product.stock < 10 && product.stock > 0 && (
                <Badge variant="outline" className="text-amber-600 border-amber-600">
                  متبقي {product.stock} فقط
                </Badge>
              )}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">الوصف</h3>
            <p className="text-muted-foreground leading-relaxed">{product.descriptionAr}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">الشكل الدوائي:</span>
              <p className="font-medium">{product.dosageFormAr}</p>
            </div>
            <div>
              <span className="text-muted-foreground">المادة الفعالة:</span>
              <p className="font-medium">{product.activeIngredientAr}</p>
            </div>
            <div>
              <span className="text-muted-foreground">رقم التسجيل:</span>
              <p className="font-medium">{product.sku}</p>
            </div>
            <div>
              <span className="text-muted-foreground">الحالة:</span>
              <p className="font-medium">{product.stock > 0 ? "متوفر" : "نفذت الكمية"}</p>
            </div>
          </div>

          <Separator />

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">الكمية:</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button className="w-full" size="lg" disabled={product.stock === 0} onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5 ml-2" />
              {product.stock === 0 ? "نفذت الكمية" : "أضف إلى السلة"}
            </Button>
          </div>

          {/* Additional info */}
          {product.storageNotesAr && (
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">ملاحظات التخزين</h4>
                    <p className="text-sm text-muted-foreground">{product.storageNotesAr}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {product.warningsAr && (
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1 text-amber-900 dark:text-amber-100">تحذيرات</h4>
                    <p className="text-sm text-amber-800 dark:text-amber-200">{product.warningsAr}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
