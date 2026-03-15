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
import { getRiskChipColor, getStatusChipColor } from './model/citizenProfileOptions'

type CitizenProfileHeaderProps = {
    citizen: Citizen
    hasUnsavedChanges: boolean
    isSaving: boolean
    saveMessage: string | null
    saveError: string | null
    onReset: () => void
    onSave: () => Promise<void>
}

export const CitizenProfileHeader = ({
    citizen,
    hasUnsavedChanges,
    isSaving,
    saveMessage,
    saveError,
    onReset,
    onSave,
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
                <Button variant="outlined" onClick={onReset} disabled={!hasUnsavedChanges || isSaving}>
                    Отменить
                </Button>
                <Button
                    variant="contained"
                    startIcon={<SaveOutlinedIcon />}
                    onClick={onSave}
                    disabled={!hasUnsavedChanges || isSaving}
                >
                    {isSaving ? 'Сохранение...' : 'Сохранить'}
                </Button>
            </Stack>
        </Stack>

        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField label="ID записи" value={citizen.id} disabled />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField label="Обновлено" value={formatDate(citizen.lastUpdatedAt)} disabled />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField label="Куратор" name="serviceMeta.curator" />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <FormTextField label="Источник" name="serviceMeta.sourceSystem" />
            </Grid>
        </Grid>

        {saveMessage ? <Alert severity="success">{saveMessage}</Alert> : null}
        {saveError ? <Alert severity="error">{saveError}</Alert> : null}
        {hasUnsavedChanges ? <Alert severity="info">Есть несохраненные изменения.</Alert> : null}
    </Stack>
)
