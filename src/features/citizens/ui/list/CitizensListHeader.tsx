import { Chip, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

type CitizensListHeaderProps = {
    isLoading: boolean
    total: number
    currentCount: number
}

const ListHeaderRoot = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2, 3),
}))

export const CitizensListHeader = ({
    isLoading,
    total,
    currentCount,
}: CitizensListHeaderProps) => (
    <ListHeaderRoot direction={{ xs: 'column', sm: 'row' }} spacing={1.25} justifyContent="space-between">
        <Stack spacing={0.25}>
            <Typography variant="subtitle1" fontWeight={600}>
                Список записей
            </Typography>
            <Typography color="text.secondary">
                {isLoading
                    ? 'Загрузка данных реестра...'
                    : `Найдено записей: ${total}. На текущей странице: ${currentCount}.`}
            </Typography>
        </Stack>
        <Chip
            label={isLoading ? 'Загрузка' : `${total} найдено`}
            color="primary"
            variant="outlined"
            size="small"
        />
    </ListHeaderRoot>
)
