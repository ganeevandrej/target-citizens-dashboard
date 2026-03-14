import { Stack, Typography } from '@mui/material'

import { formatDate } from '@shared/lib/formatDate'
import type { Citizen } from '@shared/types'

import { FormTextField } from '../../fields/FormTextField'
import { updateCollectionItem } from '../lib/updateCollectionItem'
import type { UpdateCitizenField } from '../types/editor'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenHistorySectionProps = {
    history: Citizen['history']
    updateCitizen: UpdateCitizenField
}

export const CitizenHistorySection = ({
    history,
    updateCitizen,
}: CitizenHistorySectionProps) => (
    <CitizenProfileSection title="История" caption="Журнал действий по выбранной записи.">
        <Stack spacing={2}>
            {history.map((historyItem) => (
                <Stack
                    key={historyItem.id}
                    spacing={1}
                    sx={{ p: 2, borderRadius: 1, backgroundColor: 'background.default' }}
                >
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1}
                        justifyContent="space-between"
                    >
                        <Typography fontWeight={600}>{historyItem.action}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {formatDate(historyItem.createdAt)}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        {historyItem.actor}
                    </Typography>
                    <FormTextField
                        label="Описание"
                        value={historyItem.description}
                        multiline
                        minRows={2}
                        onChange={(event) =>
                            updateCitizen(
                                'history',
                                updateCollectionItem(history, historyItem.id, {
                                    description: event.target.value,
                                }),
                            )
                        }
                    />
                </Stack>
            ))}
        </Stack>
    </CitizenProfileSection>
)
