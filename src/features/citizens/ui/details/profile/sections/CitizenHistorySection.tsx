import { Stack, Typography } from '@mui/material'

import { formatDate } from '@shared/lib/formatDate'

import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'
import { useCitizenProfileForm } from '../hooks/useCitizenProfileForm'

export const CitizenHistorySection = () => {
    const { citizen } = useCitizenProfileForm()
    const { history } = citizen

    return (
        <CitizenProfileSection title="История" caption="Журнал действий по выбранной записи.">
            <Stack spacing={2}>
                {history.map((historyItem, index) => (
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
                            name={`history.${index}.description`}
                            multiline
                            minRows={2}
                        />
                    </Stack>
                ))}
            </Stack>
        </CitizenProfileSection>
    )
}
