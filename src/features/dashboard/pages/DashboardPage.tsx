import { Alert, Stack } from '@mui/material'

import { useDashboardData } from '../hooks/useDashboardData'
import {
    DashboardAnalyticsSection,
    DashboardDistributionsSection,
    DashboardLoadingState,
    DashboardMetricsSection,
} from '../ui'
import { DashboardPageHeader } from './DashboardPageHeader'

export function DashboardPage() {
    const { dashboard, isLoading, error } = useDashboardData()

    return (
        <Stack spacing={4}>
            <DashboardPageHeader />

            {error ? <Alert severity="error">{error}</Alert> : null}

            {isLoading ? <DashboardLoadingState /> : null}

            {!isLoading && dashboard ? (
                <Stack spacing={3}>
                    <DashboardMetricsSection dashboard={dashboard} />
                    <DashboardAnalyticsSection dashboard={dashboard} />
                    <DashboardDistributionsSection dashboard={dashboard} />
                </Stack>
            ) : null}
        </Stack>
    )
}
