'use client'

import { Product } from '@/types/product'
import { DisclosureSummary } from './DisclosureSummary'
import { VersionHistory } from './VersionHistory'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductDetailContentProps {
    product: Product
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-6"
            >
                <Link href="/">
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to products
                    </Button>
                </Link>
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    {product.image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="w-full overflow-hidden rounded-lg border bg-muted lg:w-80"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    )}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl font-semibold text-foreground">{product.name}</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Producer-declared information
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mb-6"
            >
                <Card className="border-amber-200 bg-amber-50/50">
                    <CardContent className="flex items-start gap-3 p-4">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-amber-900">
                                Disclosure Notice
                            </p>
                            <p className="mt-1 text-sm text-amber-800">
                                This page presents producer-declared information; it is not certification or verification.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid gap-6 lg:grid-cols-2"
            >
                <DisclosureSummary product={product} />
                <VersionHistory product={product} />
            </motion.div>
        </>
    )
}
