import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'

export function CitizensPage() {
    return (
        <Stack spacing={4}>
            <Stack spacing={1}>
                <Typography variant="overline" color="primary.main">
                    Реестр
                </Typography>
                <Typography variant="h3">Граждане</Typography>
                <Typography maxWidth={760} color="text.secondary">
                    Здесь будут таблица граждан, фильтры, пагинация и карточка с подробной
                    информацией.
                </Typography>
            </Stack>

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, lg: 7 }}>
                    <Card>
                        <CardContent sx={{ p: 3.5 }}>
                            <Stack spacing={1.5}>
                                <Typography variant="h6">Список граждан</Typography>
                                <Typography color="text.secondary">
                                    Здесь появятся поиск, фильтры, таблица и выбор строки.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, lg: 5 }}>
                    <Card>
                        <CardContent sx={{ p: 3.5 }}>
                            <Stack spacing={1.5}>
                                <Typography variant="h6">Карточка гражданина</Typography>
                                <Typography color="text.secondary">
                                    Справа будет detail-panel с секциями, связанными данными и
                                    режимом редактирования.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    )
}
