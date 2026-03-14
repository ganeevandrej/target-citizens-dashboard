import { Grid, MenuItem } from '@mui/material'

import {
    citizenGenderLabels,
    citizenMaritalStatusLabels,
} from '@shared/model/citizenLabels'
import type { Citizen } from '@shared/types'

import { FormDateField } from '../../fields/FormDateField'
import { FormSelectField } from '../../fields/FormSelectField'
import { FormTextField } from '../../fields/FormTextField'
import type { UpdateCitizenField } from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenPersonalSectionProps = {
    citizen: Citizen
    updateCitizen: UpdateCitizenField
}

export const CitizenPersonalSection = ({
    citizen,
    updateCitizen,
}: CitizenPersonalSectionProps) => (
    <CitizenProfileSection
        title="Персональные данные"
        caption="Основные атрибуты профиля гражданина."
        defaultExpanded
    >
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
                <FormTextField
                    label="ФИО"
                    value={citizen.fullName}
                    onChange={(event) => updateCitizen('fullName', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormTextField
                    label="Возраст"
                    type="number"
                    value={citizen.age}
                    onChange={(event) => updateCitizen('age', Number(event.target.value))}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormDateField
                    label="Дата рождения"
                    value={citizen.birthDate}
                    onChange={(event) => updateCitizen('birthDate', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormSelectField
                    label="Пол"
                    value={citizen.gender}
                    onChange={(event) => updateCitizen('gender', event.target.value as Citizen['gender'])}
                >
                    {Object.entries(citizenGenderLabels).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </FormSelectField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <FormSelectField
                    label="Семейное положение"
                    value={citizen.maritalStatus}
                    onChange={(event) =>
                        updateCitizen('maritalStatus', event.target.value as Citizen['maritalStatus'])
                    }
                >
                    {Object.entries(citizenMaritalStatusLabels).map(([value, label]) => (
                        <MenuItem key={value} value={value}>
                            {label}
                        </MenuItem>
                    ))}
                </FormSelectField>
            </Grid>
        </Grid>
    </CitizenProfileSection>
)
