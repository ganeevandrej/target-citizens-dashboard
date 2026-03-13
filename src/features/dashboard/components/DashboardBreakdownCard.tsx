import { Card, CardContent, Stack, Typography } from '@mui/material'

import { citizenStatusLabels } from '@shared/model/citizenLabels'
import type { DashboardDistributionItem } from '@shared/types'

type DashboardBreakdownCardProps = {
    title: string
    items: DashboardDistributionItem[]
}

export const DashboardBreakdownCard = ({ title, items }: DashboardBreakdownCardProps) => (
    <Card>
        <CardContent sx={{ p: 3.5 }}>
            <Stack spacing={2}>
                <Typography variant="h6">{title}</Typography>
                {items.map((item) => (
                    <Stack key={item.label} direction="row" justifyContent="space-between" spacing={2}>
                        <Typography color="text.secondary">
                            {citizenStatusLabels[item.label as keyof typeof citizenStatusLabels] ?? item.label}
                        </Typography>
                        <Typography fontWeight={600}>{item.value}</Typography>
                    </Stack>
                ))}
            </Stack>
        </CardContent>
    </Card>
)
