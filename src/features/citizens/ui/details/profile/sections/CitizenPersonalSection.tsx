import { Grid, MenuItem } from '@mui/material'

import {
    citizenGenderLabels,
    citizenMaritalStatusLabels,
} from '@shared/model/citizenLabels'

import { FormDateField } from '../../fields/FormDateField'
import { FormSelectField } from '../../fields/FormSelectField'
import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'

export const CitizenPersonalSection = () => (
        <CitizenProfileSection
            title="Персональные данные"
            caption="Основные атрибуты профиля гражданина."
            defaultExpanded
        >
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <FormTextField label="ФИО" name="fullName" />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormTextField
                        label="Возраст"
                        type="number"
                        name="age"
                        parse={(value) => (value === '' ? 0 : Number(value))}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormDateField label="Дата рождения" name="birthDate" />
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormSelectField label="Пол" name="gender">
                        {Object.entries(citizenGenderLabels).map(([value, label]) => (
                            <MenuItem key={value} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </FormSelectField>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <FormSelectField label="Семейное положение" name="maritalStatus">
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
