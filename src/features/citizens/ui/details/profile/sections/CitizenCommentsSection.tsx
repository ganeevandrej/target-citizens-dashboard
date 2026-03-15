import { Grid, Stack } from '@mui/material'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'
import { useCitizenProfileForm } from '../hooks/useCitizenProfileForm'

export const CitizenCommentsSection = () => {
    const { citizen } = useCitizenProfileForm()
    const { comments } = citizen

    return (
        <CitizenProfileSection title="Комментарии" caption="Рабочие заметки операторов и кураторов.">
            <Stack spacing={2}>
                {comments.map((comment, index) => (
                    <Grid container spacing={2} key={comment.id}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormTextField label="Автор" name={`comments.${index}.author`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormDateField
                                label="Создан"
                                name={`comments.${index}.createdAt`}
                                format={(value) => String(value ?? '').slice(0, 10)}
                                parse={(value) => `${value}T10:00:00.000Z`}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <FormTextField
                                label={`Комментарий ${index + 1}`}
                                name={`comments.${index}.text`}
                                multiline
                                minRows={3}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Stack>
        </CitizenProfileSection>
    )
}
