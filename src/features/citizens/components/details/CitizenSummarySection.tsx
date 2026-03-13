import { Chip, Divider, Stack, Typography } from '@mui/material'

import {
    citizenGenderLabels,
    citizenStatusLabels,
} from '@shared/model/citizenLabels'
import type { Citizen } from '@shared/types'

type CitizenSummarySectionProps = {
    citizen: Citizen
}

export const CitizenSummarySection = ({ citizen }: CitizenSummarySectionProps) => (
    <>
        <Stack spacing={1}>
            <Typography variant="h5">{citizen.fullName}</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip
                    size="small"
                    label={citizenStatusLabels[citizen.status]}
                    color={
                        citizen.status === 'active'
                            ? 'success'
                            : citizen.status === 'needs_update'
                              ? 'warning'
                              : 'default'
                    }
                />
                <Chip
                    size="small"
                    variant="outlined"
                    label={`${citizenGenderLabels[citizen.gender]}, ${citizen.age} лет`}
                />
            </Stack>
        </Stack>

        <Divider />
    </>
)
