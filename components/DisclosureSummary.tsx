'use client'

import { Product } from '@/types/product'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Calendar, FileText } from 'lucide-react'
import { format } from 'date-fns'

interface DisclosureSummaryProps {
    product: Product
}

export function DisclosureSummary({ product }: DisclosureSummaryProps) {
    const formatDate = (dateString: string) => {
        try {
            return format(new Date(dateString), 'MMMM d, yyyy')
        } catch {
            return dateString
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Disclosure Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                        <Building2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Declared by</p>
                            <p className="text-base font-semibold">{product.declaredBy}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Calendar className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">
                                Declaration date
                            </p>
                            <p className="text-base font-semibold">
                                {formatDate(product.declarationDate)}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <FileText className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Evidence</p>
                            <div className="flex items-center gap-2">
                                <span className="text-base font-semibold">
                                    {product.evidenceAttached ? 'Attached' : 'None provided'}
                                </span>
                                {product.evidenceAttached && product.evidenceCount && (
                                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                                        {product.evidenceCount} files
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {product.description && (
                    <div className="mt-4 rounded-lg bg-muted p-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {product.description}
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
