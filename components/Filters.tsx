'use client'

import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Product, SortOption } from '@/types/product'

interface FiltersProps {
    searchQuery: string
    onSearchChange: (query: string) => void
    categoryFilter: string
    onCategoryChange: (category: string) => void
    statusFilter: string
    onStatusChange: (status: string) => void
    sortOption: SortOption
    onSortChange: (option: SortOption) => void
    products: Product[]
}

export function Filters({
    searchQuery,
    onSearchChange,
    categoryFilter,
    onCategoryChange,
    statusFilter,
    onStatusChange,
    sortOption,
    onSortChange,
    products
}: FiltersProps) {
    const categories = [
        'all',
        ...Array.from(new Set(products.map((p) => p.category)))
    ]
    const statuses = ['all', 'draft', 'submitted', 'published']

    return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between p-1 bg-muted/40 rounded-xl border border-border/40">
            <div className="relative flex-1 lg:max-w-md">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative group">
                    <Input
                        id="search"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-10 h-12 lg:h-11 bg-transparent border-0 focus-visible:ring-0 placeholder:text-muted-foreground/70 transition-all"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 absolute left-3 top-3.5 lg:top-3 text-muted-foreground/70 group-focus-within:text-primary transition-colors pointer-events-none"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:flex lg:items-center lg:gap-2 pr-1">
                <div className="space-y-0">
                    <Select value={categoryFilter} onValueChange={onCategoryChange}>
                        <SelectTrigger id="category" className="h-11 lg:h-10 border-0 bg-background shadow-sm hover:bg-muted/50 w-full lg:w-[160px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-0">
                    <Select value={statusFilter} onValueChange={onStatusChange}>
                        <SelectTrigger id="status" className="h-11 lg:h-10 border-0 bg-background shadow-sm hover:bg-muted/50 w-full lg:w-[140px]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            {statuses.map((status) => (
                                <SelectItem key={status} value={status}>
                                    {status === 'all'
                                        ? 'All Statuses'
                                        : status.charAt(0).toUpperCase() + status.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-0">
                    <Select value={sortOption} onValueChange={onSortChange}>
                        <SelectTrigger id="sort" className="h-11 lg:h-10 border-0 bg-background shadow-sm hover:bg-muted/50 w-full lg:w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="date-desc">Newest First</SelectItem>
                            <SelectItem value="date-asc">Oldest First</SelectItem>
                            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}
