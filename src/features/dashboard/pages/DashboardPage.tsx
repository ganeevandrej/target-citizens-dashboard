import { useEffect, useState } from 'react'
import { Alert, CircularProgress, Grid, Stack, Typography } from '@mui/material'

import { getDashboardData } from '@shared/api'
import type { DashboardData } from '@shared/types'

import { DashboardBreakdownCard } from '../components/DashboardBreakdownCard'
import { DashboardMetricCard } from '../components/DashboardMetricCard'
import { DashboardPageHeader } from './DashboardPageHeader'

export function DashboardPage() {
    const [dashboard, setDashboard] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isActive = true

        const loadDashboard = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await getDashboardData()

                if (!isActive) return

                setDashboard(response)
            } catch (loadError) {
                if (!isActive) return

                setError(loadError instanceof Error ? loadError.message : 'Не удалось загрузить дашборд.')
                setDashboard(null)
            } finally {
                if (isActive) setIsLoading(false)
            }
        }

        loadDashboard()

        return () => { isActive = false }
    }, [])

    return (
        <Stack spacing={4}>
            <DashboardPageHeader />

            {error ? <Alert severity="error">{error}</Alert> : null}

            {isLoading ? (
                <Stack alignItems="center" spacing={2} sx={{ py: 10 }}>
                    <CircularProgress size={32} />
                    <Typography color="text.secondary">Загрузка метрик дашборда...</Typography>
                </Stack>
            ) : null}

            {!isLoading && dashboard ? (
                <Stack spacing={3}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <DashboardMetricCard
                                label="Всего граждан"
                                value={String(dashboard.totalCitizens)}
                                caption="Текущий размер реестра по mock-данным"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <DashboardMetricCard
                                label="Средний возраст"
                                value={String(dashboard.averageAge)}
                                caption="Средний возраст по загруженным профилям"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <DashboardMetricCard
                                label="Требуют обновления"
                                value={String(dashboard.needsUpdateCitizens)}
                                caption="Профили, которым нужна актуализация данных"
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <DashboardBreakdownCard title="По регионам" items={dashboard.byRegion} />
                        </Grid>
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <DashboardBreakdownCard title="По статусам" items={dashboard.byStatus} />
                        </Grid>
                    </Grid>
                </Stack>
            ) : null}
        </Stack>
    )
}
