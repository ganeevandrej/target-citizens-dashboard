import { useMemo, useState } from 'react'

import type { Citizen } from '@shared/types'

export const useCitizenDraft = (citizen: Citizen) => {
    const [draftCitizen, setDraftCitizen] = useState(citizen)
    const [saveMessage, setSaveMessage] = useState<string | null>(null)

    const hasUnsavedChanges = useMemo(() => {
        return JSON.stringify(draftCitizen) !== JSON.stringify(citizen)
    }, [citizen, draftCitizen])

    const updateCitizen = <K extends keyof Citizen>(field: K, value: Citizen[K]) => {
        setDraftCitizen((currentCitizen) => ({
            ...currentCitizen,
            [field]: value,
        }))
    }

    const updateServiceMeta = <K extends keyof Citizen['serviceMeta']>(
        field: K,
        value: Citizen['serviceMeta'][K],
    ) => {
        setDraftCitizen((currentCitizen) => ({
            ...currentCitizen,
            serviceMeta: {
                ...currentCitizen.serviceMeta,
                [field]: value,
            },
        }))
    }

    const handleSave = () => {
        setSaveMessage(`Изменения для "${draftCitizen.fullName}" сохранены в mock-форме.`)
    }

    const handleReset = () => {
        setDraftCitizen(citizen)
        setSaveMessage(null)
    }

    return {
        draftCitizen,
        hasUnsavedChanges,
        saveMessage,
        updateCitizen,
        updateServiceMeta,
        handleSave,
        handleReset,
    }
}
