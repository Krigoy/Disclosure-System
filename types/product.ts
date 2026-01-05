export type ProductStatus = 'draft' | 'submitted' | 'published'

export interface ProductVersion {
  id: string
  date: string
  status: ProductStatus
  notes?: string
}

export interface Product {
  id: string
  name: string
  category: string
  producerName: string
  status: ProductStatus
  lastUpdated: string
  declarationDate: string
  declaredBy: string
  evidenceAttached: boolean
  evidenceCount?: number
  versions: ProductVersion[]
  description?: string
  image?: string
}

export type SortOption = 'name-asc' | 'name-desc' | 'date-asc' | 'date-desc'
