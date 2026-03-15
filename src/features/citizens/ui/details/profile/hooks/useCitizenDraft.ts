import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import type { Resolver } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import { updateCitizen } from '@shared/api'
import type { Citizen } from '@shared/types'

import { citizenFormSchema } from '../model/citizenFormSchema'

const SAVE_ERROR_MESSAGE = 'Не удалось сохранить карточку гражданина.'
const FORM_ERROR_MESSAGE = 'Проверьте заполнение формы.'

const getFirstErrorMessage = (value: unknown): string | null => {
    if (!value || typeof value !== 'object') {
        return null
    }

    if ('message' in value && typeof value.message === 'string') {
        return value.message
    }

    for (const nestedValue of Object.values(value)) {
        const nestedMessage = getFirstErrorMessage(nestedValue)

        if (nestedMessage) {
            return nestedMessage
        }
    }

    return null
}

export const useCitizenDraft = (citizen: Citizen) => {
    const [saveMessage, setSaveMessage] = useState<string | null>(null)
    const [saveError, setSaveError] = useState<string | null>(null)
    const [isSaving, setIsSaving] = useState(false)
    const form = useForm<Citizen>({
        defaultValues: citizen,
        resolver: zodResolver(citizenFormSchema) as Resolver<Citizen>,
        mode: 'onChange',
    })
    const {
        watch,
        reset,
        setValue,
        getValues,
        trigger,
        formState: { isDirty, errors },
    } = form
    const draftCitizen = watch()

    useEffect(() => {
        reset(citizen)
        setSaveMessage(null)
        setSaveError(null)
    }, [citizen, reset])

    const updateCitizenField = <K extends keyof Citizen>(field: K, value: Citizen[K]) => {
        setValue(field as never, value as never, { shouldDirty: true, shouldValidate: true })
        setSaveMessage(null)
        setSaveError(null)
    }

    const updateServiceMeta = <K extends keyof Citizen['serviceMeta']>(
        field: K,
        value: Citizen['serviceMeta'][K],
    ) => {
        setValue(`serviceMeta.${field}` as never, value as never, { shouldDirty: true, shouldValidate: true })
        setSaveMessage(null)
        setSaveError(null)
    }

    const handleSave = async () => {
        setIsSaving(true)
        setSaveMessage(null)
        setSaveError(null)

        try {
            const isValid = await trigger()

            if (!isValid) {
                throw new Error(getFirstErrorMessage(errors) ?? FORM_ERROR_MESSAGE)
            }

            const response = await updateCitizen(getValues())

            if (!response.item) {
                throw new Error(SAVE_ERROR_MESSAGE)
            }

            reset(response.item)
            setSaveMessage(`Изменения для "${response.item.fullName}" сохранены в fake API.`)
        } catch (error) {
            setSaveError(error instanceof Error ? error.message : SAVE_ERROR_MESSAGE)
        } finally {
            setIsSaving(false)
        }
    }

    const handleReset = () => {
        reset(citizen)
        setSaveMessage(null)
        setSaveError(null)
    }

    return {
        form,
        draftCitizen,
        hasUnsavedChanges: isDirty,
        isSaving,
        saveMessage,
        saveError,
        updateCitizen: updateCitizenField,
        updateServiceMeta,
        handleSave,
        handleReset,
    }
}
