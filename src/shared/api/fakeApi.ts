import type {
    CitizenDetailsResponse,
    CitizensListResponse,
    DashboardData,
} from '@shared/types'

import { mockCitizens, mockCitizenListItems, mockDashboardData } from '@shared/mock'

const DELAY_MS = 600

const delay = (durationMs: number) => {
    return new Promise<void>((resolve) => {
        window.setTimeout(resolve, durationMs)
    })
}

// получение списка граждан /citizens
export const getCitizens = async (): Promise<CitizensListResponse> => {
    await delay(DELAY_MS)

    return { items: mockCitizenListItems }
}

// получение данных для карточки гражданина /citizens:id
export const getCitizenDetails = async (id: string): Promise<CitizenDetailsResponse> => {
    await delay(DELAY_MS)

    return {
        item: mockCitizens.find((citizen) => citizen.id === id) ?? null,
    }
}

// получение данных для /dashboard
export const getDashboardData = async (): Promise<DashboardData> => {
    await delay(DELAY_MS)

    return mockDashboardData
}
