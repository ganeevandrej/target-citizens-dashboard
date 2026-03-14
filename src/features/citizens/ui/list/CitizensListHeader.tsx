import { Chip, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

type CitizensListHeaderProps = {
    isLoading: boolean
    total: number
    currentCount: number
}

const ListHeaderRoot = styled(Stack)(({ theme }) => ({
    padding: theme.spacing(2.5, 3),
}))

export const CitizensListHeader = ({
    isLoading,
    total,
    currentCount,
}: CitizensListHeaderProps) => (
    <ListHeaderRoot direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="space-between">
        <Stack spacing={0.5}>
            <Typography variant="h6">Реестр граждан</Typography>
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
        />
    </ListHeaderRoot>
)
