export interface Category {
  id: number
  name: string
  nameAr: string
  slug: string
  icon: string
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: number
  name: string
  nameAr: string
  slug: string
  description: string
  descriptionAr: string
  brand: string
  brandAr: string
  price: number
  compareAtPrice: number | null
  images: string[]
  categoryId: number
  stock: number
  sku: string
  barcode: string | null
  dosageForm: string | null
  dosageFormAr: string | null
  activeIngredient: string | null
  activeIngredientAr: string | null
  isRX: boolean
  isOTC: boolean
  rating: number
  reviewsCount: number
  createdAt: Date
  updatedAt: Date
}

export interface ProductWithCategory extends Product {
  category: Category
}

export interface Tag {
  id: number
  name: string
  nameAr: string
  slug: string
  createdAt: Date
  updatedAt: Date
}
