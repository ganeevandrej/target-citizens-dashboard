import { Grid, Stack } from '@mui/material'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'
import { useCitizenProfileForm } from '../hooks/useCitizenProfileForm'

export const CitizenEducationSection = () => {
    const { citizen } = useCitizenProfileForm()
    const { education } = citizen

    return (
        <CitizenProfileSection title="Образование" caption="Записи об образовании и специализации.">
            <Stack spacing={2}>
                {education.map((educationItem, index) => (
                    <Grid container spacing={2} key={educationItem.id}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <FormTextField label="Учреждение" name={`education.${index}.institution`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FormTextField
                                label="Специализация"
                                name={`education.${index}.specialization`}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormDateField
                                label="Окончание"
                                name={`education.${index}.graduatedAt`}
                                format={(value) => String(value ?? '')}
                                parse={(value) => value || null}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Stack>
        </CitizenProfileSection>
    )
}
