import { Grid, Stack } from '@mui/material'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'
import { useCitizenProfileForm } from '../hooks/useCitizenProfileForm'

export const CitizenFamilySection = () => {
    const { citizen } = useCitizenProfileForm()
    const { family } = citizen

    return (
        <CitizenProfileSection title="Семья" caption="Связанные люди в профиле гражданина.">
            <Stack spacing={2}>
                {family.map((familyMember, index) => (
                    <Grid container spacing={2} key={familyMember.id}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <FormTextField label="ФИО" name={`family.${index}.fullName`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormTextField label="Связь" name={`family.${index}.relation`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FormDateField label="Дата рождения" name={`family.${index}.birthDate`} />
                        </Grid>
                    </Grid>
                ))}
            </Stack>
        </CitizenProfileSection>
    )
}
