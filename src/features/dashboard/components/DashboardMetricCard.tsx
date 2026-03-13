import { Card, CardContent, Stack, Typography } from '@mui/material'

type DashboardMetricCardProps = {
    label: string
    value: string
    caption: string
}

export const DashboardMetricCard = ({
    label,
    value,
    caption,
}: DashboardMetricCardProps) => (
    <Card>
        <CardContent sx={{ p: 3.5 }}>
            <Stack spacing={1.25}>
                <Typography variant="overline" color="primary.main">
                    {label}
                </Typography>
                <Typography variant="h4">{value}</Typography>
                <Typography color="text.secondary">{caption}</Typography>
            </Stack>
        </CardContent>
    </Card>
)
