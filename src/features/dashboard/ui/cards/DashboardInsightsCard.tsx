import { Card, CardContent, Divider, Stack, Typography } from '@mui/material'

type DashboardInsightsCardProps = {
    items: Array<{
        label: string
        value: string
        caption: string
    }>
}

export const DashboardInsightsCard = ({ items }: DashboardInsightsCardProps) => (
    <Card sx={{ height: '100%' }}>
        <CardContent sx={{ p: 3.5 }}>
            <Stack spacing={2.5}>
                <Stack spacing={0.75}>
                    <Typography variant="h6">Ключевые выводы</Typography>
                    <Typography color="text.secondary">
                        Быстрая интерпретация метрик для оператора реестра.
                    </Typography>
                </Stack>

                {items.map((item, index) => (
                    <Stack key={item.label} spacing={1.25}>
                        {index > 0 ? <Divider /> : null}
                        <Stack direction="row" justifyContent="space-between" spacing={2}>
                            <Typography color="text.secondary">{item.label}</Typography>
                            <Typography fontWeight={700}>{item.value}</Typography>
                        </Stack>
                        <Typography variant="body2" color="text.secondary">
                            {item.caption}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </CardContent>
    </Card>
)
