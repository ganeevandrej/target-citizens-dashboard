export type DashboardDistributionItem = {
    label: string
    value: number
}

export type DashboardTimeseriesPoint = {
    month: string
    value: number
}

export type DashboardData = {
    totalCitizens: number
    activeCitizens: number
    needsUpdateCitizens: number
    averageAge: number
    byRegion: DashboardDistributionItem[]
    byStatus: DashboardDistributionItem[]
    monthlyRegistrations: DashboardTimeseriesPoint[]
}
