import type { Citizen, CitizenDetailsResponse, CitizenListItem } from '@shared/types'

import { getRuntimeCitizens } from './runtimeState'

// Готовит запись для списка
const toCitizenListItem = (citizen: Citizen): CitizenListItem => ({
    id: citizen.id,
    fullName: citizen.fullName,
    birthDate: citizen.birthDate,
    age: citizen.age,
    gender: citizen.gender,
    status: citizen.status,
    region: citizen.region,
    city: citizen.city,
    lastUpdatedAt: citizen.lastUpdatedAt,
})

// Возвращает карточку по id
export const getRuntimeCitizenById = (id: string): CitizenDetailsResponse => ({
    item: structuredClone(getRuntimeCitizens().find((citizen) => citizen.id === id) ?? null),
})

// Возвращает список граждан
export const getRuntimeCitizenListItems = (): CitizenListItem[] => {
    return getRuntimeCitizens().map(toCitizenListItem)
}
