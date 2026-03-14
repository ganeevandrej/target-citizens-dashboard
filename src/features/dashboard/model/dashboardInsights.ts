import type { DashboardData, DashboardTimeseriesPoint } from '@shared/types'

export type DashboardInsight = {
    label: string
    value: string
    caption: string
}

type DashboardDerivedMetrics = {
    activeShare: number
    archivedCount: number
    peakMonth: DashboardTimeseriesPoint
    lastMonthTrend: number
}

const defaultTimeseriesPoint: DashboardTimeseriesPoint = {
    month: '1970-01',
    value: 0,
}

const getActiveShare = (dashboard: DashboardData) => {
    if (dashboard.totalCitizens === 0) return 0

    return Math.round((dashboard.activeCitizens / dashboard.totalCitizens) * 100)
}

const getArchivedCount = (dashboard: DashboardData) => {
    return dashboard.byStatus.find((item) => item.label === 'archived')?.value ?? 0
}

const getPeakMonth = (dashboard: DashboardData) => {
    return dashboard.monthlyRegistrations.reduce(
        (bestPoint, currentPoint) =>
            currentPoint.value > bestPoint.value ? currentPoint : bestPoint,
        dashboard.monthlyRegistrations[0] ?? defaultTimeseriesPoint,
    )
}

const getLastMonthTrend = (dashboard: DashboardData) => {
    const lastPoint =
        dashboard.monthlyRegistrations[dashboard.monthlyRegistrations.length - 1] ??
        defaultTimeseriesPoint
    const previousPoint =
        dashboard.monthlyRegistrations[dashboard.monthlyRegistrations.length - 2] ?? lastPoint

    return lastPoint.value - previousPoint.value
}

const getDashboardDerivedMetrics = (dashboard: DashboardData): DashboardDerivedMetrics => ({
    activeShare: getActiveShare(dashboard),
    archivedCount: getArchivedCount(dashboard),
    peakMonth: getPeakMonth(dashboard),
    lastMonthTrend: getLastMonthTrend(dashboard),
})

const formatPeakMonth = (peakMonth: DashboardTimeseriesPoint) => {
    return new Intl.DateTimeFormat('ru-RU', {
        month: 'long',
        year: 'numeric',
    }).format(new Date(`${peakMonth.month}-01`))
}

const buildDashboardInsights = ({
    activeShare,
    archivedCount,
    peakMonth,
    lastMonthTrend,
}: DashboardDerivedMetrics): DashboardInsight[] => [
    {
        label: 'Покрытие активного контура',
        value: `${activeShare}%`,
        caption: 'Доля актуальных карточек в текущем реестре граждан.',
    },
    {
        label: 'Пиковый месяц регистраций',
        value: `${peakMonth.value} · ${formatPeakMonth(peakMonth)}`,
        caption: 'Лучший месяц по притоку новых карточек в тестовой выборке.',
    },
    {
        label: 'Архивный контур',
        value: `${archivedCount} записей`,
        caption: 'Объём записей, которые уже выведены из активной работы.',
    },
    {
        label: 'Тренд к прошлому месяцу',
        value: lastMonthTrend >= 0 ? `+${lastMonthTrend}` : `${lastMonthTrend}`,
        caption: 'Разница между двумя последними месяцами по числу регистраций.',
    },
]

export const getDashboardInsights = (dashboard: DashboardData): DashboardInsight[] => {
    return buildDashboardInsights(getDashboardDerivedMetrics(dashboard))
}
