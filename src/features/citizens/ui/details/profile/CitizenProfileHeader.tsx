import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { Alert, Button, Chip, Grid, Stack, Typography } from '@mui/material'

import { formatDate } from '@shared/lib/formatDate'
import {
    citizenGenderLabels,
    citizenRiskLevelLabels,
    citizenStatusLabels,
} from '@shared/model/citizenLabels'
import type { Citizen } from '@shared/types'

import { FormTextField } from '../fields/FormTextField'
import type { UpdateServiceMetaField } from './types/editor'
import { getRiskChipColor, getStatusChipColor } from './model/citizenProfileOptions'

type CitizenProfileHeaderProps = {
    citizen: Citizen
    hasUnsavedChanges: boolean
    saveMessage: string | null
    onReset: () => void
    onSave: () => void
    updateServiceMeta: UpdateServiceMetaField
}

export const CitizenProfileHeader = ({
    citizen,
    hasUnsavedChanges,
    saveMessage,
    onReset,
    onSave,
    updateServiceMeta,
}: CitizenProfileHeaderProps) => (
    <Stack spacing={2}>
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
        >
            <Stack spacing={1}>
                <Typography variant="h5">{citizen.fullName}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip
                        size="small"
                        label={citizenStatusLabels[citizen.status]}
                        color={getStatusChipColor(citizen.status)}
                    />
                    <Chip size="small" variant="outlined" label={citizenGenderLabels[citizen.gender]} />
                    <Chip
                        size="small"
                        variant="outlined"
                        color={getRiskChipColor(citizen.serviceMeta.riskLevel)}
                        label={citizenRiskLevelLabels[citizen.serviceMeta.riskLevel]}
                    />
                </Stack>
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button variant="outlined" onClick={onReset} disabled={!hasUnsavedChanges}>
                    Отменить
                </Button>
                <Button
                    variant="contained"
                    startIcon={<SaveOutlinedIcon />}
                    onClick={onSave}
                    disabled={!hasUnsavedChanges}
                >
                    Сохранить
                </Button>
            </Stack>
        </Stack>

        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField label="ID записи" value={citizen.id} disabled />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField
                    label="Обновлено"
                    value={formatDate(citizen.lastUpdatedAt)}
                    disabled
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField
                    label="Куратор"
                    value={citizen.serviceMeta.curator}
                    onChange={(event) => updateServiceMeta('curator', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField
                    label="Источник"
                    value={citizen.serviceMeta.sourceSystem}
                    onChange={(event) => updateServiceMeta('sourceSystem', event.target.value)}
                />
            </Grid>
        </Grid>

        {saveMessage ? <Alert severity="success">{saveMessage}</Alert> : null}
        {hasUnsavedChanges ? <Alert severity="info">Есть несохранённые изменения.</Alert> : null}
    </Stack>
)
