"use client"

import type { Category } from "@/lib/types"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ProductFiltersProps {
  categories: Category[]
}

export function ProductFilters({ categories }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 200])
  const selectedCategory = searchParams.get("category")

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (selectedCategory === slug) {
      params.delete("category")
    } else {
      params.set("category", slug)
    }
    params.delete("page")
    router.push(`/products?${params.toString()}`)
  }

  const handlePriceFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())
    params.delete("page")
    router.push(`/products?${params.toString()}`)
  }

  const handleClearFilters = () => {
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">الأقسام</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <Checkbox
                id={category.slug}
                checked={selectedCategory === category.slug}
                onCheckedChange={() => handleCategoryChange(category.slug)}
              />
              <Label htmlFor={category.slug} className="text-sm cursor-pointer flex items-center gap-2">
                <span>{category.icon}</span>
                <span>{category.nameAr}</span>
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">نطاق السعر</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={5} className="w-full" />
          <div className="flex items-center justify-between text-sm">
            <span>{priceRange[0]} ₪</span>
            <span>{priceRange[1]} ₪</span>
          </div>
          <Button onClick={handlePriceFilter} className="w-full" size="sm">
            تطبيق
          </Button>
        </CardContent>
      </Card>

      <Button onClick={handleClearFilters} variant="outline" className="w-full bg-transparent">
        مسح الفلاتر
      </Button>
    </div>
  )
}
