import type {
    CitizenDetailsResponse,
    CitizensQuery,
    CitizensListResponse,
    DashboardData,
} from '@shared/types'

import { mockCitizens, mockCitizenListItems, mockDashboardData } from '@shared/mock'
import {
    applyCitizenFilters,
    applyCitizenPagination,
    applyCitizenSort,
} from '@features/citizens/model/citizensQuery'

const DELAY_MS = 600

const delay = (durationMs: number) => {
    return new Promise<void>((resolve) => {
        window.setTimeout(resolve, durationMs)
    })
}

// получение списка граждан /citizens
export const getCitizens = async (query: CitizensQuery): Promise<CitizensListResponse> => {
    await delay(DELAY_MS)

    const filteredItems = applyCitizenFilters(mockCitizenListItems, query)
    const sortedItems = applyCitizenSort(filteredItems, query)
    const paginatedItems = applyCitizenPagination(sortedItems, query)

    return {
        items: paginatedItems,
        total: sortedItems.length,
        page: Math.max(query.page, 1),
        pageSize: Math.max(query.pageSize, 1),
    }
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
