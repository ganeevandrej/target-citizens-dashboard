import { Grid, Stack } from '@mui/material'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'
import { useCitizenProfileForm } from '../hooks/useCitizenProfileForm'

export const CitizenDocumentsSection = () => {
    const { citizen } = useCitizenProfileForm()
    const { documents } = citizen

    return (
        <CitizenProfileSection
            title="Документы"
            caption="Связанные документы с редактируемыми полями."
            defaultExpanded
        >
            <Stack spacing={2}>
                {documents.map((document, index) => (
                    <Grid container spacing={2} key={document.id}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormTextField label="Тип" name={`documents.${index}.name`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormTextField label="Номер" name={`documents.${index}.number`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <FormDateField label="Дата выдачи" name={`documents.${index}.issuedAt`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FormTextField label="Кем выдан" name={`documents.${index}.issuedBy`} />
                        </Grid>
                    </Grid>
                ))}
            </Stack>
        </CitizenProfileSection>
    )
}
