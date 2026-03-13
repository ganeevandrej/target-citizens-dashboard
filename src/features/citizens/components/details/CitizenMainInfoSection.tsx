import { Divider, Grid, Stack, Typography } from '@mui/material'

import { formatDate } from '@shared/lib/formatDate'
import { citizenMaritalStatusLabels } from '@shared/model/citizenLabels'
import type { Citizen } from '@shared/types'

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <Stack spacing={0.5}>
        <Typography variant="caption" color="text.secondary">
            {label}
        </Typography>
        <Typography variant="body2">{value}</Typography>
    </Stack>
)

type CitizenMainInfoSectionProps = {
    citizen: Citizen
}

export const CitizenMainInfoSection = ({ citizen }: CitizenMainInfoSectionProps) => (
    <>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
                <DetailRow label="Дата рождения" value={formatDate(citizen.birthDate)} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <DetailRow label="Телефон" value={citizen.phone} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <DetailRow label="Email" value={citizen.email ?? 'Не указан'} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <DetailRow
                    label="Семейное положение"
                    value={citizenMaritalStatusLabels[citizen.maritalStatus]}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <DetailRow label="Документы" value={String(citizen.documents.length)} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
                <DetailRow label="Члены семьи" value={String(citizen.family.length)} />
            </Grid>
        </Grid>

        <Divider />
    </>
)
