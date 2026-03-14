import { Grid, Stack } from '@mui/material'

import type { Citizen } from '@shared/types'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { updateCollectionItem } from '../lib/updateCollectionItem'
import type { UpdateCitizenField } from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenDocumentsSectionProps = {
    documents: Citizen['documents']
    updateCitizen: UpdateCitizenField
}

export const CitizenDocumentsSection = ({
    documents,
    updateCitizen,
}: CitizenDocumentsSectionProps) => (
    <CitizenProfileSection
        title="Документы"
        caption="Связанные документы с редактируемыми полями."
        defaultExpanded
    >
        <Stack spacing={2}>
            {documents.map((document) => (
                <Grid container spacing={2} key={document.id}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormTextField
                            label="Тип"
                            value={document.name}
                            onChange={(event) =>
                                updateCitizen(
                                    'documents',
                                    updateCollectionItem(documents, document.id, {
                                        name: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormTextField
                            label="Номер"
                            value={document.number}
                            onChange={(event) =>
                                updateCitizen(
                                    'documents',
                                    updateCollectionItem(documents, document.id, {
                                        number: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <FormDateField
                            label="Дата выдачи"
                            value={document.issuedAt}
                            onChange={(event) =>
                                updateCitizen(
                                    'documents',
                                    updateCollectionItem(documents, document.id, {
                                        issuedAt: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <FormTextField
                            label="Кем выдан"
                            value={document.issuedBy}
                            onChange={(event) =>
                                updateCitizen(
                                    'documents',
                                    updateCollectionItem(documents, document.id, {
                                        issuedBy: event.target.value,
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
