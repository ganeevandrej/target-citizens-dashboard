import { Alert, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import type { Citizen } from '@shared/types'

import { CitizensSectionState } from '../../states'
import { CitizenProfileEditor } from '../profile/CitizenProfileEditor'

const DetailsCard = styled(Card)({
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
})

type CitizenDetailsPanelProps = {
    citizen: Citizen | null
    selectedCitizenId: string | null
    isOutsideCurrentList: boolean
    isLoading: boolean
    error: string | null
    onResetFilters: () => void
}

export const CitizenDetailsPanel = ({
    citizen,
    selectedCitizenId,
    isOutsideCurrentList,
    isLoading,
    error,
    onResetFilters,
}: CitizenDetailsPanelProps) => (
    <DetailsCard variant="outlined">
        <CardContent sx={{ p: 0 }}>
            <Stack spacing={2.5}>
                <Stack spacing={0.5}>
                    <Typography variant="h6">Карточка гражданина</Typography>
                    <Typography color="text.secondary">
                        Детали выбранной записи из реестра граждан.
                    </Typography>
                </Stack>

                {error ? <CitizensSectionState kind="message" severity="error" message={error} /> : null}

                {!isLoading && !error && selectedCitizenId && citizen && isOutsideCurrentList ? (
                    <Alert
                        severity="info"
                        action={
                            <Button color="inherit" size="small" onClick={onResetFilters}>
                                Сбросить фильтры
                            </Button>
                        }
                    >
                        Карточка сохранена, но запись больше не отображается в текущем списке. Она могла выпасть из
                        выборки из-за активных фильтров или изменившейся сортировки.
                    </Alert>
                ) : null}

                {isLoading ? (
                    <CitizensSectionState kind="loading" message="Загрузка данных гражданина..." />
                ) : null}

                {!isLoading && !selectedCitizenId ? (
                    <CitizensSectionState
                        kind="message"
                        severity="info"
                        message="Выберите гражданина в списке, чтобы увидеть детали."
                    />
                ) : null}

                {!isLoading && selectedCitizenId && !error && !citizen ? (
                    <CitizensSectionState
                        kind="message"
                        severity="warning"
                        message="Детали по выбранной записи не найдены."
                    />
                ) : null}

                {!isLoading && citizen ? <CitizenProfileEditor key={citizen.id} citizen={citizen} /> : null}
            </Stack>
        </CardContent>
    </DetailsCard>
)
