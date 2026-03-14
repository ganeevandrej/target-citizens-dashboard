import { Grid, Stack } from '@mui/material'

import type { Citizen } from '@shared/types'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { updateCollectionItem } from '../lib/updateCollectionItem'
import type { UpdateCitizenField } from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenFamilySectionProps = {
    family: Citizen['family']
    updateCitizen: UpdateCitizenField
}

export const CitizenFamilySection = ({ family, updateCitizen }: CitizenFamilySectionProps) => (
    <CitizenProfileSection title="Семья" caption="Связанные люди в профиле гражданина.">
        <Stack spacing={2}>
            {family.map((familyMember) => (
                <Grid container spacing={2} key={familyMember.id}>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <FormTextField
                            label="ФИО"
                            value={familyMember.fullName}
                            onChange={(event) =>
                                updateCitizen(
                                    'family',
                                    updateCollectionItem(family, familyMember.id, {
                                        fullName: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormTextField
                            label="Связь"
                            value={familyMember.relation}
                            onChange={(event) =>
                                updateCitizen(
                                    'family',
                                    updateCollectionItem(family, familyMember.id, {
                                        relation: event.target.value as Citizen['family'][number]['relation'],
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <FormDateField
                            label="Дата рождения"
                            value={familyMember.birthDate}
                            onChange={(event) =>
                                updateCitizen(
                                    'family',
                                    updateCollectionItem(family, familyMember.id, {
                                        birthDate: event.target.value,
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
