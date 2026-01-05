'use client'

import { Product } from '@/types/product'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { History } from 'lucide-react'

interface VersionHistoryProps {
    product: Product
}

export function VersionHistory({ product }: VersionHistoryProps) {
    const formatDate = (dateString: string) => {
        try {
            return format(new Date(dateString), 'MMM d, yyyy h:mm a')
        } catch {
            return dateString
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

    const sortedVersions = [...product.versions].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                    <History className="h-5 w-5" />
                    Version History
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative space-y-6 border-l-2 border-muted pl-6">
                    {sortedVersions.map((version, index) => (
                        <div key={version.id} className="relative">
                            <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-border" />
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Badge variant={getStatusVariant(version.status)}>
                                        {version.status.charAt(0).toUpperCase() + version.status.slice(1)}
                                    </Badge>
                                    <span className="text-sm text-muted-foreground">
                                        {formatDate(version.date)}
                                    </span>
                                </div>
                                {version.notes && (
                                    <p className="text-sm text-foreground">{version.notes}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
