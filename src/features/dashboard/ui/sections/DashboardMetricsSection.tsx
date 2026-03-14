import { Grid } from '@mui/material'

import type { DashboardData } from '@shared/types'

import { DashboardMetricCard } from '../cards'

type DashboardMetricsSectionProps = {
    dashboard: DashboardData
}

export const DashboardMetricsSection = ({ dashboard }: DashboardMetricsSectionProps) => (
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
)
