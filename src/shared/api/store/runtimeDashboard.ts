import type { Citizen, DashboardData, DashboardDistributionItem, DashboardTimeseriesPoint } from '@shared/types'

import { getCitizenRegionOptions } from '../query'
import { getRuntimeCitizens } from './runtimeState'
import { getRuntimeCitizenListItems } from './runtimeSelectors'

// Форматирует части даты
const padNumber = (value: number, size = 2) => String(value).padStart(size, '0')

// Считает количество по категориям
const countByLabel = (values: string[]): DashboardDistributionItem[] => {
    const counts: Record<string, number> = {}

    values.forEach((value) => {
        counts[value] = (counts[value] ?? 0) + 1
    })

    return Object.entries(counts)
        .map(([label, value]) => ({
            label,
            value,
        }))
        .sort((left, right) => right.value - left.value)
}

// Строит помесячную динамику регистраций
const buildMonthlyRegistrations = (citizens: Citizen[]): DashboardTimeseriesPoint[] => {
    const monthlyCounts = citizens.reduce<Record<string, number>>((accumulator, citizen) => {
        const month = citizen.lastUpdatedAt.slice(0, 7)

        accumulator[month] = (accumulator[month] ?? 0) + 1

        return accumulator
    }, {})

    const sortedMonths = Object.keys(monthlyCounts).sort((leftMonth, rightMonth) => leftMonth.localeCompare(rightMonth))
    const latestMonth = sortedMonths.at(-1)

    if (!latestMonth) {
        return []
    }

    const [latestYear, latestMonthIndex] = latestMonth.split('-').map(Number)
    const monthsWindow = Array.from({ length: 12 }, (_, offset) => {
        const date = new Date(Date.UTC(latestYear, latestMonthIndex - 1 - (11 - offset), 1))
        const year = date.getUTCFullYear()
        const month = padNumber(date.getUTCMonth() + 1, 2)

        return `${year}-${month}`
    })

    return monthsWindow.map((month) => ({
        month,
        value: monthlyCounts[month] ?? 0,
    }))
}

// Собирает данные для дашборда
export const getRuntimeDashboardData = (): DashboardData => {
    const citizens = getRuntimeCitizens()

    return {
        totalCitizens: citizens.length,
        activeCitizens: citizens.filter((citizen) => citizen.status === 'active').length,
        needsUpdateCitizens: citizens.filter((citizen) => citizen.status === 'needs_update').length,
        averageAge:
            citizens.length > 0 ? Math.round(citizens.reduce((total, citizen) => total + citizen.age, 0) / citizens.length) : 0,
        byRegion: countByLabel(citizens.map((citizen) => citizen.region)),
        byStatus: countByLabel(citizens.map((citizen) => citizen.status)),
        monthlyRegistrations: buildMonthlyRegistrations(citizens),
    }
}

// Возвращает регионы из текущего набора
export const getAvailableCitizenRegions = () => {
    return getCitizenRegionOptions(getRuntimeCitizenListItems())
}
