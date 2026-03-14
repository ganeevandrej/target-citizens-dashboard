import { Grid, Stack } from '@mui/material'

import type { Citizen } from '@shared/types'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { updateCollectionItem } from '../lib/updateCollectionItem'
import type { UpdateCitizenField } from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenEducationSectionProps = {
    education: Citizen['education']
    updateCitizen: UpdateCitizenField
}

export const CitizenEducationSection = ({
    education,
    updateCitizen,
}: CitizenEducationSectionProps) => (
    <CitizenProfileSection title="Образование" caption="Записи об образовании и специализации.">
        <Stack spacing={2}>
            {education.map((educationItem) => (
                <Grid container spacing={2} key={educationItem.id}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <FormTextField
                            label="Учреждение"
                            value={educationItem.institution}
                            onChange={(event) =>
                                updateCitizen(
                                    'education',
                                    updateCollectionItem(education, educationItem.id, {
                                        institution: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <FormTextField
                            label="Специализация"
                            value={educationItem.specialization}
                            onChange={(event) =>
                                updateCitizen(
                                    'education',
                                    updateCollectionItem(education, educationItem.id, {
                                        specialization: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormDateField
                            label="Окончание"
                            value={educationItem.graduatedAt ?? ''}
                            onChange={(event) =>
                                updateCitizen(
                                    'education',
                                    updateCollectionItem(education, educationItem.id, {
                                        graduatedAt: event.target.value || null,
                                    }),
                                )
                            }
                        />
                    </Grid>
                </Grid>
            ))}
        </Stack>
    </CitizenProfileSection>
)
