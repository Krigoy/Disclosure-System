import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import { ProductDetailContent } from '@/components/ProductDetailContent'
import { Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

interface ProductDetailPageProps {
    params: Promise<{ id: string }>
}

function ProductDetailSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-8 w-64" />
            <div className="grid gap-6 lg:grid-cols-2">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-64 w-full" />
            </div>
        </div>
    )
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = await params
    const product = products.find((p) => p.id === id)

    if (!product) {
        notFound()
    }

    return (
        <div className="min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background">
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
                <Suspense fallback={<ProductDetailSkeleton />}>
                    <ProductDetailContent product={product} />
                </Suspense>
            </main>
        </div>
    )
}
