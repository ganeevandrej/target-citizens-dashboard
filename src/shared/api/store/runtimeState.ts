import type { Citizen } from '@shared/types'

import { generateCitizens } from '@shared/mock'

export type FakeApiListener = () => void

const DEFAULT_CITIZENS_COUNT = 5000

let citizensState: Citizen[] = generateCitizens(DEFAULT_CITIZENS_COUNT)
const listeners = new Set<FakeApiListener>()

// Возвращает текущий набор данных
export const getRuntimeCitizens = () => citizensState

// Обновляет текущий набор данных
export const setRuntimeCitizens = (nextCitizens: Citizen[]) => {
    citizensState = nextCitizens
}

// Сообщает об изменении данных
export const notifyRuntimeListeners = () => {
    listeners.forEach((listener) => listener())
}

// Подписывает UI на обновления данных
export const subscribeToFakeApiStore = (listener: FakeApiListener) => {
    listeners.add(listener)

    return () => {
        listeners.delete(listener)
    }
}
