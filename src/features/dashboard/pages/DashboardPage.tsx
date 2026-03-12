import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'

const dashboardCards = [
    {
        title: 'Всего граждан',
        description:
            'Здесь появится ключевая метрика по общему количеству записей в реестре.',
    },
    {
        title: 'Средний возраст',
        description:
            'Карточка будет показывать агрегированную статистику по возрастной структуре.',
    },
    {
        title: 'Графики и аналитика',
        description: 'На этом месте появятся визуализации для распределений и динамики.',
    },
]

export function DashboardPage() {
    return (
        <Stack spacing={4}>
            <Stack spacing={1}>
                <Typography variant="overline" color="primary.main">
                    Обзор
                </Typography>
                <Typography variant="h3">Дашборд</Typography>
                <Typography maxWidth={760} color="text.secondary">
                    Здесь будут сводные метрики и графики с аналитикой по гражданам.
                </Typography>
            </Stack>

            <Grid container spacing={3}>
                {dashboardCards.map((card) => (
                    <Grid key={card.title} size={{ xs: 12, md: 4 }}>
                        <Card>
                            <CardContent sx={{ p: 3.5 }}>
                                <Stack spacing={1.5}>
                                    <Typography variant="h6">{card.title}</Typography>
                                    <Typography color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}
