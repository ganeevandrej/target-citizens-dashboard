import type {
    Citizen,
    CitizenDetailsResponse,
    CitizensQuery,
    CitizensListResponse,
    DashboardData,
} from '@shared/types'

import { applyCitizenFilters, applyCitizenPagination, applyCitizenSort } from './query'

import {
    getAvailableCitizenRegions,
    getRuntimeCitizenById,
    getRuntimeCitizenListItems,
    getRuntimeDashboardData,
    subscribeToFakeApiStore,
    updateRuntimeCitizen,
} from './store'

const DELAY_MS = 600

// Пауза перед ответом API
const delay = (durationMs: number) => {
    return new Promise<void>((resolve) => {
        window.setTimeout(resolve, durationMs)
    })
}

// Возвращает список граждан по текущим параметрам
export const getCitizens = async (query: CitizensQuery): Promise<CitizensListResponse> => {
    await delay(DELAY_MS)

    const filteredItems = applyCitizenFilters(getRuntimeCitizenListItems(), query)
    const sortedItems = applyCitizenSort(filteredItems, query)
    const paginatedItems = applyCitizenPagination(sortedItems, query)

    return {
        items: paginatedItems,
        total: sortedItems.length,
        page: Math.max(query.page, 1),
        pageSize: Math.max(query.pageSize, 1),
    }
}

// Возвращает карточку гражданина по id
export const getCitizenDetails = async (id: string): Promise<CitizenDetailsResponse> => {
    await delay(DELAY_MS)

    return getRuntimeCitizenById(id)
}

// Сохраняет изменения в карточке гражданина
export const updateCitizen = async (citizen: Citizen): Promise<CitizenDetailsResponse> => {
    await delay(DELAY_MS)

    return {
        item: updateRuntimeCitizen(citizen),
    }
}

// Возвращает данные для аналитики
export const getDashboardData = async (): Promise<DashboardData> => {
    await delay(DELAY_MS)

    return getRuntimeDashboardData()
}

// Возвращает список регионов для фильтра
export const getCitizenRegionOptions = async (): Promise<string[]> => {
    await delay(DELAY_MS)

    return getAvailableCitizenRegions()
}

export { subscribeToFakeApiStore }
