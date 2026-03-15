import type { CitizenListItem } from '@shared/types'

// Собирает список регионов из данных
export const getCitizenRegionOptions = (items: CitizenListItem[]) => {
    return [...new Set(items.map((citizen) => citizen.region))].sort((left, right) =>
        left.localeCompare(right, 'ru-RU'),
    )
}
