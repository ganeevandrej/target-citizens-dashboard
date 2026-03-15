import type { CitizenListItem, CitizensQuery } from '@shared/types'

// Сравнивает возраст
const compareCitizensByAge = (left: CitizenListItem, right: CitizenListItem) => left.age - right.age

// Сравнивает дату обновления
const compareCitizensByLastUpdatedAt = (left: CitizenListItem, right: CitizenListItem) => {
    return new Date(left.lastUpdatedAt).getTime() - new Date(right.lastUpdatedAt).getTime()
}

// Сравнивает ФИО
const compareCitizensByFullName = (left: CitizenListItem, right: CitizenListItem) => {
    return left.fullName.localeCompare(right.fullName, 'ru-RU')
}

const citizenComparators = {
    age: compareCitizensByAge,
    lastUpdatedAt: compareCitizensByLastUpdatedAt,
    fullName: compareCitizensByFullName,
} satisfies Record<CitizensQuery['sortBy'], (left: CitizenListItem, right: CitizenListItem) => number>

// Сортирует список граждан
export const applyCitizenSort = (
    items: CitizenListItem[],
    query: CitizensQuery,
): CitizenListItem[] => {
    const directionMultiplier = query.sortDirection === 'asc' ? 1 : -1
    const compareCitizens = citizenComparators[query.sortBy]

    return [...items].sort((left, right) => {
        const compareResult = compareCitizens(left, right)

        return compareResult * directionMultiplier
    })
}
