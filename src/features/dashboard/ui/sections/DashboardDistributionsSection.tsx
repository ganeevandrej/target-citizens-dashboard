import { Grid } from '@mui/material'

import type { DashboardData } from '@shared/types'

import { DashboardBreakdownCard } from '../cards'

type DashboardDistributionsSectionProps = {
    dashboard: DashboardData
}

export const DashboardDistributionsSection = ({
    dashboard,
}: DashboardDistributionsSectionProps) => (
    <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
            <DashboardBreakdownCard title="По регионам" items={dashboard.byRegion} />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
            <DashboardBreakdownCard title="По статусам" items={dashboard.byStatus} />
        </Grid>
    </Grid>
)
