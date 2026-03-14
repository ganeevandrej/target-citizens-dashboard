import { Stack } from '@mui/material'

import type { Citizen } from '@shared/types'

import { useCitizenDraft } from './hooks/useCitizenDraft'
import { CitizenProfileHeader } from './CitizenProfileHeader'
import { CitizenProfileTabs } from './CitizenProfileTabs'

type CitizenProfileEditorProps = {
    citizen: Citizen
}

export const CitizenProfileEditor = ({ citizen }: CitizenProfileEditorProps) => {
    const {
        draftCitizen,
        hasUnsavedChanges,
        saveMessage,
        updateCitizen,
        updateServiceMeta,
        handleSave,
        handleReset,
    } = useCitizenDraft(citizen)

    return (
        <Stack spacing={3}>
            <CitizenProfileHeader
                citizen={draftCitizen}
                hasUnsavedChanges={hasUnsavedChanges}
                saveMessage={saveMessage}
                onReset={handleReset}
                onSave={handleSave}
                updateServiceMeta={updateServiceMeta}
            />

            <CitizenProfileTabs
                citizen={draftCitizen}
                updateCitizen={updateCitizen}
                updateServiceMeta={updateServiceMeta}
            />
        </Stack>
    )
}
