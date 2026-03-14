import { Grid } from '@mui/material'

import type { DashboardData } from '@shared/types'

import { getDashboardInsights } from '../../model/dashboardInsights'
import { DashboardInsightsCard } from '../cards'
import { DashboardRegistrationsChart } from '../charts'

type DashboardAnalyticsSectionProps = {
    dashboard: DashboardData
}

export const DashboardAnalyticsSection = ({ dashboard }: DashboardAnalyticsSectionProps) => (
    <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
            <DashboardRegistrationsChart
                title="Динамика регистраций"
                caption="Помесячный срез по появлению новых карточек в реестре."
                items={dashboard.monthlyRegistrations}
            />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
            <DashboardInsightsCard items={getDashboardInsights(dashboard)} />
        </Grid>
    </Grid>
)
