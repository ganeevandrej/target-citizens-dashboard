import type { Citizen, CitizenHistoryEntry } from '@shared/types'

import { getRuntimeCitizens, notifyRuntimeListeners, setRuntimeCitizens } from './runtimeState'

const OPERATOR_LABEL = 'Оператор'
const SAVE_ACTION = 'Сохранение карточки'
const SAVE_DESCRIPTION = 'обновлена через операторскую форму.'

// Создает id для новой записи
const createEntityId = (prefix: string) => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return `${prefix}-${crypto.randomUUID()}`
    }

    return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

// Формирует запись в истории изменений
const buildSaveHistoryEntry = (citizen: Citizen, timestamp: string): CitizenHistoryEntry => ({
    id: createEntityId('history'),
    createdAt: timestamp,
    actor: citizen.serviceMeta.curator || OPERATOR_LABEL,
    action: SAVE_ACTION,
    description: `Карточка "${citizen.fullName}" ${SAVE_DESCRIPTION}`,
})

// Обновляет карточку гражданина
export const updateRuntimeCitizen = (nextCitizen: Citizen): Citizen => {
    const currentCitizen = getRuntimeCitizens().find((citizen) => citizen.id === nextCitizen.id)

    if (!currentCitizen) {
        throw new Error(`Citizen "${nextCitizen.id}" not found.`)
    }

    const timestamp = new Date().toISOString()
    const savedCitizen: Citizen = {
        ...structuredClone(nextCitizen),
        lastUpdatedAt: timestamp,
        history: [buildSaveHistoryEntry(nextCitizen, timestamp), ...structuredClone(nextCitizen.history)],
    }

    setRuntimeCitizens(getRuntimeCitizens().map((citizen) => (citizen.id === savedCitizen.id ? savedCitizen : citizen)))
    notifyRuntimeListeners()

    return structuredClone(savedCitizen)
}
