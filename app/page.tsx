import { Suspense } from 'react'
import { ProductList } from '@/components/ProductList'
import { products } from '@/data/products'
import { Skeleton } from '@/components/ui/skeleton'

function ProductListSkeleton() {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                    <Skeleton className="h-[200px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default function Home() {
    return (
        <div className="min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-foreground">Hedamo</h1>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                                Disclosure System
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <section aria-labelledby="product-section-title" className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <h2
                            id="product-section-title"
                            className="text-3xl font-bold tracking-tight text-foreground"
                        >
                            Products
                        </h2>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Browse producer-declared information
                        </p>
                    </div>
                    <Suspense fallback={<ProductListSkeleton />}>
                        <ProductList products={products} />
                    </Suspense>
                </section>
            </main>
        </div>
    )
}
