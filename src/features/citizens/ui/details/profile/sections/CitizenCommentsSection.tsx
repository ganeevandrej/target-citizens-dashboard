import { Grid, Stack } from '@mui/material'

import type { Citizen } from '@shared/types'

import { FormDateField } from '../../fields/FormDateField'
import { FormTextField } from '../../fields/FormTextField'
import { updateCollectionItem } from '../lib/updateCollectionItem'
import type { UpdateCitizenField } from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenCommentsSectionProps = {
    comments: Citizen['comments']
    updateCitizen: UpdateCitizenField
}

export const CitizenCommentsSection = ({
    comments,
    updateCitizen,
}: CitizenCommentsSectionProps) => (
    <CitizenProfileSection title="Комментарии" caption="Рабочие заметки операторов и кураторов.">
        <Stack spacing={2}>
            {comments.map((comment, index) => (
                <Grid container spacing={2} key={comment.id}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormTextField
                            label="Автор"
                            value={comment.author}
                            onChange={(event) =>
                                updateCitizen(
                                    'comments',
                                    updateCollectionItem(comments, comment.id, {
                                        author: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormDateField
                            label="Создан"
                            value={comment.createdAt.slice(0, 10)}
                            onChange={(event) =>
                                updateCitizen(
                                    'comments',
                                    updateCollectionItem(comments, comment.id, {
                                        createdAt: `${event.target.value}T10:00:00.000Z`,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <FormTextField
                            label={`Комментарий ${index + 1}`}
                            value={comment.text}
                            multiline
                            minRows={3}
                            onChange={(event) =>
                                updateCitizen(
                                    'comments',
                                    updateCollectionItem(comments, comment.id, {
                                        text: event.target.value,
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
