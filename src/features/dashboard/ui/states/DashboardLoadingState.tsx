import { CircularProgress, Stack, Typography } from '@mui/material'

const loadingStateSx = {
    py: 10,
}

export const DashboardLoadingState = () => (
    <Stack alignItems="center" spacing={2} sx={loadingStateSx}>
        <CircularProgress size={32} />
        <Typography color="text.secondary">Загрузка метрик дашборда...</Typography>
    </Stack>
)
