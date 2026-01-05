import { Product } from '@/types/product'

export const products: Product[] = [
    {
        id: '1',
        name: 'Organic Cotton T-Shirt',
        category: 'Textiles',
        producerName: 'EcoFabrics Co.',
        status: 'published',
        lastUpdated: '2024-03-15T10:30:00Z',
        declarationDate: '2024-02-10T09:00:00Z',
        declaredBy: 'EcoFabrics Co.',
        evidenceAttached: true,
        evidenceCount: 3,
        description: 'Producer-declared information about organic cotton sourcing and manufacturing processes.',
        image: '/assets/products/1.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-02-10T09:00:00Z',
                status: 'draft',
                notes: 'Initial declaration created'
            },
            {
                id: 'v2',
                date: '2024-02-20T14:15:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            },
            {
                id: 'v3',
                date: '2024-03-15T10:30:00Z',
                status: 'published',
                notes: 'Information made publicly available'
            }
        ]
    },
    {
        id: '2',
        name: 'Sustainable Bamboo Flooring',
        category: 'Building Materials',
        producerName: 'GreenBuild Industries',
        status: 'submitted',
        lastUpdated: '2024-03-20T11:45:00Z',
        declarationDate: '2024-03-01T08:00:00Z',
        declaredBy: 'GreenBuild Industries',
        evidenceAttached: true,
        evidenceCount: 5,
        description: 'Producer-reported details on bamboo sourcing, processing, and environmental impact.',
        image: '/assets/products/2.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-03-01T08:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-03-20T11:45:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            }
        ]
    },
    {
        id: '3',
        name: 'Recycled Aluminum Can',
        category: 'Packaging',
        producerName: 'CircularPack Solutions',
        status: 'draft',
        lastUpdated: '2024-03-25T16:20:00Z',
        declarationDate: '2024-03-25T16:20:00Z',
        declaredBy: 'CircularPack Solutions',
        evidenceAttached: false,
        description: 'Information declared by producer regarding recycled content and manufacturing process.',
        image: '/assets/products/3.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-03-25T16:20:00Z',
                status: 'draft',
                notes: 'Draft declaration in progress'
            }
        ]
    },
    {
        id: '4',
        name: 'Solar Panel Module',
        category: 'Energy',
        producerName: 'SunTech Energy',
        status: 'published',
        lastUpdated: '2024-03-10T13:00:00Z',
        declarationDate: '2024-01-15T10:00:00Z',
        declaredBy: 'SunTech Energy',
        evidenceAttached: true,
        evidenceCount: 7,
        description: 'Producer-declared specifications and environmental information.',
        image: '/assets/products/4.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-01-15T10:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-02-01T09:30:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            },
            {
                id: 'v3',
                date: '2024-02-20T11:00:00Z',
                status: 'published',
                notes: 'Information made publicly available'
            },
            {
                id: 'v4',
                date: '2024-03-10T13:00:00Z',
                status: 'published',
                notes: 'Updated information published'
            }
        ]
    },
    {
        id: '5',
        name: 'Biodegradable Food Container',
        category: 'Packaging',
        producerName: 'BioPack Materials',
        status: 'published',
        lastUpdated: '2024-03-18T14:30:00Z',
        declarationDate: '2024-02-28T12:00:00Z',
        declaredBy: 'BioPack Materials',
        evidenceAttached: true,
        evidenceCount: 4,
        description: 'Producer-reported details on biodegradable materials and decomposition characteristics.',
        image: '/assets/products/5.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-02-28T12:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-03-05T10:15:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            },
            {
                id: 'v3',
                date: '2024-03-18T14:30:00Z',
                status: 'published',
                notes: 'Information made publicly available'
            }
        ]
    },
    {
        id: '6',
        name: 'Hemp Fiber Insulation',
        category: 'Building Materials',
        producerName: 'NaturalInsulate Ltd.',
        status: 'submitted',
        lastUpdated: '2024-03-22T09:15:00Z',
        declarationDate: '2024-03-10T08:00:00Z',
        declaredBy: 'NaturalInsulate Ltd.',
        evidenceAttached: true,
        evidenceCount: 2,
        description: 'Producer-declared information about hemp sourcing and insulation properties.',
        image: '/assets/products/6.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-03-10T08:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-03-22T09:15:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            }
        ]
    },
    {
        id: '7',
        name: 'Recycled PET Bottle',
        category: 'Packaging',
        producerName: 'RecycleFirst Inc.',
        status: 'published',
        lastUpdated: '2024-03-12T15:45:00Z',
        declarationDate: '2024-02-05T11:00:00Z',
        declaredBy: 'RecycleFirst Inc.',
        evidenceAttached: true,
        evidenceCount: 6,
        description: 'Information declared by producer regarding recycled PET content and manufacturing.',
        image: '/assets/products/7.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-02-05T11:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-02-18T13:30:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            },
            {
                id: 'v3',
                date: '2024-03-01T10:00:00Z',
                status: 'published',
                notes: 'Information made publicly available'
            },
            {
                id: 'v4',
                date: '2024-03-12T15:45:00Z',
                status: 'published',
                notes: 'Updated information published'
            }
        ]
    },
    {
        id: '8',
        name: 'Organic Wheat Flour',
        category: 'Food Products',
        producerName: 'FarmFresh Organics',
        status: 'draft',
        lastUpdated: '2024-03-24T10:00:00Z',
        declarationDate: '2024-03-24T10:00:00Z',
        declaredBy: 'FarmFresh Organics',
        evidenceAttached: false,
        description: 'Producer-declared information about organic farming practices and processing.',
        image: '/assets/products/8.jpg',
        versions: [
            {
                id: 'v1',
                date: '2024-03-24T10:00:00Z',
                status: 'draft',
                notes: 'Draft declaration in progress'
            }
        ]
    },
    {
        id: '9',
        name: 'LED Light Bulb',
        category: 'Electronics',
        producerName: 'EfficientLight Systems',
        status: 'published',
        lastUpdated: '2024-03-08T12:20:00Z',
        declarationDate: '2024-01-20T09:00:00Z',
        declaredBy: 'EfficientLight Systems',
        evidenceAttached: true,
        evidenceCount: 3,
        description: 'Producer-reported specifications and energy efficiency information.',
        image: '/assets/products/9.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-01-20T09:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-02-10T11:00:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            },
            {
                id: 'v3',
                date: '2024-03-08T12:20:00Z',
                status: 'published',
                notes: 'Information made publicly available'
            }
        ]
    },
    {
        id: '10',
        name: 'Cork Flooring Tile',
        category: 'Building Materials',
        producerName: 'CorkNature Solutions',
        status: 'submitted',
        lastUpdated: '2024-03-21T14:00:00Z',
        declarationDate: '2024-03-08T10:00:00Z',
        declaredBy: 'CorkNature Solutions',
        evidenceAttached: true,
        evidenceCount: 4,
        description: 'Producer-declared information about cork harvesting and manufacturing processes.',
        image: '/assets/products/10.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-03-08T10:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-03-21T14:00:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            }
        ]
    },
    {
        id: '11',
        name: 'Compostable Coffee Cup',
        category: 'Packaging',
        producerName: 'EcoCup Manufacturing',
        status: 'published',
        lastUpdated: '2024-03-14T16:00:00Z',
        declarationDate: '2024-02-12T08:00:00Z',
        declaredBy: 'EcoCup Manufacturing',
        evidenceAttached: true,
        evidenceCount: 5,
        description: 'Information declared by producer regarding compostable materials and certification.',
        image: '/assets/products/11.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-02-12T08:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-02-25T10:30:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            },
            {
                id: 'v3',
                date: '2024-03-14T16:00:00Z',
                status: 'published',
                notes: 'Information made publicly available'
            }
        ]
    },
    {
        id: '12',
        name: 'Recycled Paper Notebook',
        category: 'Office Supplies',
        producerName: 'PaperCycle Co.',
        status: 'published',
        lastUpdated: '2024-03-16T11:30:00Z',
        declarationDate: '2024-02-20T09:00:00Z',
        declaredBy: 'PaperCycle Co.',
        evidenceAttached: true,
        evidenceCount: 2,
        description: 'Producer-declared information about recycled paper content and production methods.',
        image: '/assets/products/12.jpeg',
        versions: [
            {
                id: 'v1',
                date: '2024-02-20T09:00:00Z',
                status: 'draft',
                notes: 'Initial declaration'
            },
            {
                id: 'v2',
                date: '2024-03-05T13:00:00Z',
                status: 'submitted',
                notes: 'Submitted for review'
            },
            {
                id: 'v3',
                date: '2024-03-16T11:30:00Z',
                status: 'published',
                notes: 'Information made publicly available'
            }
        ]
    }
]
