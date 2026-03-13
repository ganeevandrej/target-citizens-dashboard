import { Stack, Typography } from '@mui/material'

export const DashboardPageHeader = () => (
    <Stack spacing={1}>
        <Typography variant="overline" color="primary.main">
            Обзор
        </Typography>
        <Typography variant="h3">Дашборд</Typography>
        <Typography maxWidth={760} color="text.secondary">
            Минимальный аналитический экран
        </Typography>
    </Stack>
)
