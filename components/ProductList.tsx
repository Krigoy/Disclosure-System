'use client'

import { Product } from '@/types/product'
import { ProductCard } from './ProductCard'
import { Filters } from './Filters'
import { useState, useMemo } from 'react'
import { SortOption } from '@/types/product'
import { Card, CardContent } from '@/components/ui/card'
import { FileText } from 'lucide-react'

interface ProductListProps {
    products: Product[]
}

export function ProductList({ products }: ProductListProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('all')
    const [statusFilter, setStatusFilter] = useState('all')
    const [sortOption, setSortOption] = useState<SortOption>('date-desc')

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products

        // Search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (product) =>
                    product.name.toLowerCase().includes(query) ||
                    product.producerName.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query)
            )
        }

        // Category filter
        if (categoryFilter !== 'all') {
            filtered = filtered.filter((product) => product.category === categoryFilter)
        }

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter((product) => product.status === statusFilter)
        }

        // Sort
        const sorted = [...filtered].sort((a, b) => {
            switch (sortOption) {
                case 'name-asc':
                    return a.name.localeCompare(b.name)
                case 'name-desc':
                    return b.name.localeCompare(a.name)
                case 'date-asc':
                    return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime()
                case 'date-desc':
                    return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
                default:
                    return 0
            }
        })

        return sorted
    }, [products, searchQuery, categoryFilter, statusFilter, sortOption])

    return (
        <div className="space-y-6">
            <Filters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                categoryFilter={categoryFilter}
                onCategoryChange={setCategoryFilter}
                statusFilter={statusFilter}
                onStatusChange={setStatusFilter}
                sortOption={sortOption}
                onSortChange={setSortOption}
                products={products}
            />

            {filteredAndSortedProducts.length === 0 ? (
                <Card>
                    <CardContent className="flex flex-col items-center justify-center py-16">
                        <FileText className="mb-4 h-12 w-12 text-muted-foreground" />
                        <h3 className="mb-2 text-lg font-semibold">No products found</h3>
                        <p className="text-center text-sm text-muted-foreground">
                            Try adjusting your search or filter criteria to find what you&apos;re looking for.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredAndSortedProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            )}
        </div>
    )
}
