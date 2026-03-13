import type { DashboardData, DashboardDistributionItem, DashboardTimeseriesPoint } from '@shared/types'

import { mockCitizens } from './citizens'

const countByLabel = (values: string[]): DashboardDistributionItem[] => {
    const counts: Record<string, number> = {}

    values.forEach((value) => {
        counts[value] = (counts[value] ?? 0) + 1
    })

    return Object.entries(counts).map(([label, value]) => ({
        label,
        value,
    }))
}

const buildMonthlyRegistrations = (): DashboardTimeseriesPoint[] => {
    return [
        { month: '2025-10', value: 8 },
        { month: '2025-11', value: 11 },
        { month: '2025-12', value: 10 },
        { month: '2026-01', value: 12 },
        { month: '2026-02', value: 9 },
        { month: '2026-03', value: 7 },
    ]
}

export const mockDashboardData: DashboardData = {
    totalCitizens: mockCitizens.length,
    activeCitizens: mockCitizens.filter((citizen) => citizen.status === 'active').length,
    needsUpdateCitizens: mockCitizens.filter((citizen) => citizen.status === 'needs_update').length,
    averageAge: Math.round(
        mockCitizens.reduce((total, citizen) => total + citizen.age, 0) / mockCitizens.length,
    ),
    byRegion: countByLabel(mockCitizens.map((citizen) => citizen.region)),
    byStatus: countByLabel(mockCitizens.map((citizen) => citizen.status)),
    monthlyRegistrations: buildMonthlyRegistrations(),
}
