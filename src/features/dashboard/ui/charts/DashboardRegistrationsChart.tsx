import { Card, CardContent, Stack, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'

import type { DashboardTimeseriesPoint } from '@shared/types'

type DashboardRegistrationsChartProps = {
    title: string
    caption: string
    items: DashboardTimeseriesPoint[]
}

const chartHeight = 248
const chartWidth = 960
const gridSteps = [0.25, 0.5, 0.75, 1]
const chartTopPadding = 28
const chartBottomPadding = 22
const chartSidePadding = 28

const formatMonthLabel = (month: string) => {
    const [year, monthIndex] = month.split('-').map(Number)
    const date = new Date(year, monthIndex - 1, 1)

    return new Intl.DateTimeFormat('ru-RU', {
        month: 'short',
    }).format(date)
}

export const DashboardRegistrationsChart = ({
    title,
    caption,
    items,
}: DashboardRegistrationsChartProps) => {
    const safeItems = items.length > 0 ? items : [{ month: '1970-01', value: 0 }]
    const theme = useTheme()
    const maxValue = Math.max(...safeItems.map((item) => item.value), 1)
    const plotHeight = chartHeight - chartTopPadding - chartBottomPadding
    const plotWidth = chartWidth - chartSidePadding * 2

    const points = safeItems.map((item, index) => {
        const x =
            safeItems.length === 1
                ? chartWidth / 2
                : chartSidePadding + (index / (safeItems.length - 1)) * plotWidth
        const y = chartHeight - chartBottomPadding - (item.value / maxValue) * plotHeight

        return { ...item, x, y }
    })

    const polylinePoints = points.map((point) => `${point.x},${point.y}`).join(' ')
    const areaPoints = [
        `${chartSidePadding},${chartHeight}`,
        ...points.map((point) => `${point.x},${point.y}`),
        `${chartWidth - chartSidePadding},${chartHeight}`,
    ].join(' ')

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3.5 }}>
                <Stack spacing={3}>
                    <Stack spacing={0.75}>
                        <Typography variant="h6">{title}</Typography>
                        <Typography color="text.secondary">{caption}</Typography>
                    </Stack>

                    <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} width="100%" height={chartHeight}>
                        <defs>
                            <linearGradient id="registrations-area-gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor={alpha(theme.palette.primary.main, 0.28)} />
                                <stop offset="100%" stopColor={alpha(theme.palette.primary.main, 0.02)} />
                            </linearGradient>
                        </defs>

                        {gridSteps.map((step) => {
                            const y = chartHeight - chartBottomPadding - step * plotHeight

                            return (
                                <line
                                    key={step}
                                    x1={chartSidePadding}
                                    x2={chartWidth - chartSidePadding}
                                    y1={y}
                                    y2={y}
                                    stroke={alpha(theme.palette.text.primary, 0.1)}
                                    strokeDasharray="6 6"
                                />
                            )
                        })}

                        <polygon points={areaPoints} fill="url(#registrations-area-gradient)" />
                        <polyline
                            fill="none"
                            points={polylinePoints}
                            stroke={theme.palette.primary.main}
                            strokeWidth="4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        />

                        {points.map((point) => (
                            <g key={point.month}>
                                <circle
                                    cx={point.x}
                                    cy={point.y}
                                    r="6"
                                    fill={theme.palette.background.paper}
                                    stroke={theme.palette.primary.main}
                                    strokeWidth="3"
                                />
                                <text
                                    x={point.x}
                                    y={point.y - 14}
                                    textAnchor="middle"
                                    fill={theme.palette.text.primary}
                                    fontSize="12"
                                    fontWeight="700"
                                >
                                    {point.value}
                                </text>
                            </g>
                        ))}
                    </svg>

                    <Stack
                        direction="row"
                        spacing={1.5}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${safeItems.length}, minmax(0, 1fr))`,
                            alignItems: 'start',
                        }}
                    >
                        {safeItems.map((item) => (
                            <Stack key={item.month} spacing={0.25} sx={{ textAlign: 'center' }}>
                                <Typography variant="overline" color="text.secondary">
                                    {formatMonthLabel(item.month)}
                                </Typography>
                                <Typography fontWeight={700}>{item.value}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}
