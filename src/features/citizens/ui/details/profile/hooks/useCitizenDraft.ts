import { useEffect, useMemo, useState } from 'react'

import { updateCitizen } from '@shared/api'
import type { Citizen } from '@shared/types'

export const useCitizenDraft = (citizen: Citizen) => {
    const [draftCitizen, setDraftCitizen] = useState(citizen)
    const [saveMessage, setSaveMessage] = useState<string | null>(null)
    const [saveError, setSaveError] = useState<string | null>(null)
    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        setDraftCitizen(citizen)
    }, [citizen])

    const hasUnsavedChanges = useMemo(() => {
        return JSON.stringify(draftCitizen) !== JSON.stringify(citizen)
    }, [citizen, draftCitizen])

    const updateCitizenField = <K extends keyof Citizen>(field: K, value: Citizen[K]) => {
        setDraftCitizen((currentCitizen) => ({
            ...currentCitizen,
            [field]: value,
        }))
        setSaveMessage(null)
        setSaveError(null)
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
        setSaveMessage(null)
        setSaveError(null)
    }

    const handleSave = async () => {
        setIsSaving(true)
        setSaveMessage(null)
        setSaveError(null)

        try {
            const response = await updateCitizen(draftCitizen)

            if (!response.item) {
                throw new Error('Не удалось сохранить карточку гражданина.')
            }

            setDraftCitizen(response.item)
            setSaveMessage(`Изменения для "${response.item.fullName}" сохранены в fake API.`)
        } catch (error) {
            setSaveError(
                error instanceof Error ? error.message : 'Не удалось сохранить карточку гражданина.',
            )
        } finally {
            setIsSaving(false)
        }
    }

    const handleReset = () => {
        setDraftCitizen(citizen)
        setSaveMessage(null)
        setSaveError(null)
    }

    return {
        draftCitizen,
        hasUnsavedChanges,
        isSaving,
        saveMessage,
        saveError,
        updateCitizen: updateCitizenField,
        updateServiceMeta,
        handleSave,
        handleReset,
    }
}
