import { Stack } from '@mui/material'
import { FormProvider } from 'react-hook-form'

import type { Citizen } from '@shared/types'

import { CitizenProfileHeader } from './CitizenProfileHeader'
import { CitizenProfileTabs } from './CitizenProfileTabs'
import { useCitizenDraft } from './hooks/useCitizenDraft'

type CitizenProfileEditorProps = {
    citizen: Citizen
}

export const CitizenProfileEditor = ({ citizen }: CitizenProfileEditorProps) => {
    const {
        form,
        draftCitizen,
        hasUnsavedChanges,
        isSaving,
        saveMessage,
        saveError,
        handleSave,
        handleReset,
    } = useCitizenDraft(citizen)

    return (
        <FormProvider {...form}>
            <Stack spacing={3}>
                <CitizenProfileHeader
                    citizen={draftCitizen}
                    hasUnsavedChanges={hasUnsavedChanges}
                    isSaving={isSaving}
                    saveMessage={saveMessage}
                    saveError={saveError}
                    onReset={handleReset}
                    onSave={handleSave}
                />

                <CitizenProfileTabs />
            </Stack>
        </FormProvider>
    )
}
