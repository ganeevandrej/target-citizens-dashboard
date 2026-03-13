import { Stack, Typography } from '@mui/material'

export const CitizensPageHeader = () => (
    <Stack spacing={1}>
        <Typography variant="overline" color="primary.main">
            Реестр
        </Typography>
        <Typography variant="h3">Граждане</Typography>
        <Typography maxWidth={760} color="text.secondary">
            Здесь будут фильтры, сортировка и пагинация, но они будут добавлены позже
        </Typography>
    </Stack>
)
