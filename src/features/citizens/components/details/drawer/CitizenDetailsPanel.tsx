import { Card, CardContent, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import type { Citizen } from '@shared/types'

import { CitizensSectionState } from '../../CitizensSectionState'
import { CitizenProfileEditor } from '../profile/CitizenProfileEditor'

const DetailsCard = styled(Card)({
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
})

type CitizenDetailsPanelProps = {
    citizen: Citizen | null
    selectedCitizenId: string | null
    isLoading: boolean
    error: string | null
}

export const CitizenDetailsPanel = ({
    citizen,
    selectedCitizenId,
    isLoading,
    error,
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
