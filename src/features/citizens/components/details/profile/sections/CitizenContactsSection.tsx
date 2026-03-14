import { Grid } from '@mui/material'

import type { Citizen } from '@shared/types'

import { FormTextField } from '../../fields/FormTextField'
import type { UpdateCitizenField } from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenContactsSectionProps = {
    citizen: Citizen
    updateCitizen: UpdateCitizenField
}

export const CitizenContactsSection = ({
    citizen,
    updateCitizen,
}: CitizenContactsSectionProps) => (
    <CitizenProfileSection title="Контакты" caption="Каналы связи и базовая локация.">
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <FormTextField
                    label="Телефон"
                    value={citizen.phone}
                    onChange={(event) => updateCitizen('phone', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <FormTextField
                    label="Email"
                    value={citizen.email ?? ''}
                    placeholder="Не указан"
                    onChange={(event) => updateCitizen('email', event.target.value || null)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <FormTextField
                    label="Регион"
                    value={citizen.region}
                    onChange={(event) => updateCitizen('region', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <FormTextField
                    label="Город"
                    value={citizen.city}
                    onChange={(event) => updateCitizen('city', event.target.value)}
                />
            </Grid>
        </Grid>
    </CitizenProfileSection>
)
