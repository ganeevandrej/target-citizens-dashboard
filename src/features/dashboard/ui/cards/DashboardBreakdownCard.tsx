import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import { citizenStatusLabels } from '@shared/model/citizenLabels'
import type { DashboardDistributionItem } from '@shared/types'

type DashboardBreakdownCardProps = {
    title: string
    items: DashboardDistributionItem[]
}

const getTrackSx = (backgroundColor: string) => ({
    height: 10,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor,
})

const getFillSx = (share: number) => ({
    width: `${share}%`,
    height: '100%',
    borderRadius: 999,
    background: 'linear-gradient(90deg, #175cd3 0%, #53b1fd 100%)',
})

export const DashboardBreakdownCard = ({ title, items }: DashboardBreakdownCardProps) => {
    const theme = useTheme()
    const total = items.reduce((sum, item) => sum + item.value, 0)
    const trackColor = alpha(theme.palette.primary.main, 0.08)

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={2.5}>
                    <Typography variant="h6">{title}</Typography>
                    {items.map((item) => {
                        const share = total === 0 ? 0 : Math.round((item.value / total) * 100)

                        return (
                            <Stack key={item.label} spacing={1}>
                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                    <Typography color="text.secondary">
                                        {citizenStatusLabels[item.label as keyof typeof citizenStatusLabels] ??
                                            item.label}
                                    </Typography>
                                    <Typography fontWeight={700}>
                                        {item.value} · {share}%
                                    </Typography>
                                </Stack>
                                <Box sx={getTrackSx(trackColor)}>
                                    <Box sx={getFillSx(share)} />
                                </Box>
                            </Stack>
                        )
                    })}
                </Stack>
            </CardContent>
        </Card>
    )
}
