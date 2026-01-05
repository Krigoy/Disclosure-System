'use client'

import Link from 'next/link'
import { Product } from '@/types/product'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { motion } from 'framer-motion'

interface ProductCardProps {
    product: Product
    index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
    const formatDate = (dateString: string) => {
        try {
            return formatDistanceToNow(new Date(dateString), { addSuffix: true })
        } catch {
            return 'Recently'
        }
    }

    const getStatusVariant = (status: Product['status']) => {
        switch (status) {
            case 'draft':
                return 'draft'
            case 'submitted':
                return 'submitted'
            case 'published':
                return 'published'
            default:
                return 'default'
        }
    }

    const getStatusLabel = (status: Product['status']) => {
        switch (status) {
            case 'draft':
                return 'Draft'
            case 'submitted':
                return 'Submitted'
            case 'published':
                return 'Published'
            default:
                return status
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className="h-full"
        >
            <Link href={`/products/${product.id}`} className="block h-full">
                <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="h-full"
                >
                    <Card className="group h-full overflow-hidden border-white/40 bg-white/60 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white/80">
                        {product.image && (
                            <div className="aspect-square w-full overflow-hidden bg-muted/20 relative">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        )}
                        <CardHeader className="p-4 pb-2">
                            <div className="flex items-start justify-between gap-4">
                                <h3 className="font-bold tracking-tight text-foreground text-lg group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <Badge variant={getStatusVariant(product.status)} className="shrink-0 font-medium">
                                    {getStatusLabel(product.status)}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                            <div className="grid gap-2 text-sm text-muted-foreground">
                                <div className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:padding-0">
                                    <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/70">Category</span>
                                    <span className="font-medium text-foreground">{product.category}</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0 last:padding-0">
                                    <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/70">Producer</span>
                                    <span className="font-medium text-foreground">{product.producerName}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/70">Updated</span>
                                    <span>{formatDate(product.lastUpdated)}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </Link>
        </motion.div>
    )
}
