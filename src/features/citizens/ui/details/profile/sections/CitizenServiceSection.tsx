import { Grid, MenuItem } from '@mui/material'

import {
    citizenProfileStatusLabels,
    citizenRiskLevelLabels,
    citizenStatusLabels,
    citizenVerificationStatusLabels,
} from '@shared/model/citizenLabels'

import { FormDateField } from '../../fields/FormDateField'
import { FormSelectField } from '../../fields/FormSelectField'
import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'

export const CitizenServiceSection = () => (
        <CitizenProfileSection
            title="Служебные статусы"
            caption="Операционные поля для операторов и кураторов."
            defaultExpanded
        >
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormSelectField label="Статус карточки" name="status">
                        {Object.entries(citizenStatusLabels).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </FormSelectField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormSelectField label="Статус профиля" name="serviceMeta.profileStatus">
                        {Object.entries(citizenProfileStatusLabels).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </FormSelectField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormSelectField label="Верификация" name="serviceMeta.verificationStatus">
                        {Object.entries(citizenVerificationStatusLabels).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </FormSelectField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormSelectField label="Уровень риска" name="serviceMeta.riskLevel">
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
                        name="serviceMeta.lastReviewAt"
                        format={(value) => String(value ?? '').slice(0, 10)}
                        parse={(value) => (value ? `${value}T09:00:00.000Z` : null)}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormTextField label="Исходная система" name="serviceMeta.sourceSystem" />
                </Grid>
            </Grid>
        </CitizenProfileSection>
)
