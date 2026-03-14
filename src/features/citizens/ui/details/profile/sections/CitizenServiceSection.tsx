import { Grid, MenuItem } from '@mui/material'

import {
    citizenProfileStatusLabels,
    citizenRiskLevelLabels,
    citizenStatusLabels,
    citizenVerificationStatusLabels,
} from '@shared/model/citizenLabels'
import type { Citizen } from '@shared/types'

import { FormDateField } from '../../fields/FormDateField'
import { FormSelectField } from '../../fields/FormSelectField'
import { FormTextField } from '../../fields/FormTextField'
import type {
    UpdateCitizenField,
    UpdateServiceMetaField,
} from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenServiceSectionProps = {
    status: Citizen['status']
    serviceMeta: Citizen['serviceMeta']
    updateCitizen: UpdateCitizenField
    updateServiceMeta: UpdateServiceMetaField
}

export const CitizenServiceSection = ({
    status,
    serviceMeta,
    updateCitizen,
    updateServiceMeta,
}: CitizenServiceSectionProps) => (
    <CitizenProfileSection
        title="Служебные статусы"
        caption="Операционные поля для операторов и кураторов."
        defaultExpanded
    >
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormSelectField
                    label="Статус карточки"
                    value={status}
                    onChange={(event) => updateCitizen('status', event.target.value as Citizen['status'])}
                >
                    {Object.entries(citizenStatusLabels).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </FormSelectField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormSelectField
                    label="Статус профиля"
                    value={serviceMeta.profileStatus}
                    onChange={(event) =>
                        updateServiceMeta(
                            'profileStatus',
                            event.target.value as Citizen['serviceMeta']['profileStatus'],
                        )
                    }
                >
                    {Object.entries(citizenProfileStatusLabels).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </FormSelectField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormSelectField
                    label="Верификация"
                    value={serviceMeta.verificationStatus}
                    onChange={(event) =>
                        updateServiceMeta(
                            'verificationStatus',
                            event.target.value as Citizen['serviceMeta']['verificationStatus'],
                        )
                    }
                >
                    {Object.entries(citizenVerificationStatusLabels).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </FormSelectField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormSelectField
                    label="Уровень риска"
                    value={serviceMeta.riskLevel}
                    onChange={(event) =>
                        updateServiceMeta(
                            'riskLevel',
                            event.target.value as Citizen['serviceMeta']['riskLevel'],
                        )
                    }
                >
                    {Object.entries(citizenRiskLevelLabels).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </FormSelectField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormDateField
                    label="Последняя проверка"
                    value={serviceMeta.lastReviewAt?.slice(0, 10) ?? ''}
                    onChange={(event) =>
                        updateServiceMeta(
                            'lastReviewAt',
                            event.target.value ? `${event.target.value}T09:00:00.000Z` : null,
                        )
                    }
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                    label="Исходная система"
                    value={serviceMeta.sourceSystem}
                    onChange={(event) => updateServiceMeta('sourceSystem', event.target.value)}
                />
            </Grid>
        </Grid>
    </CitizenProfileSection>
)
