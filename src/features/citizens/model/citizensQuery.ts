import { mockCitizenListItems } from '@shared/mock'
import type { CitizenListItem, CitizensQuery } from '@shared/types'

const normalizeSearchValue = (value: string) => value.trim().toLocaleLowerCase('ru-RU')

const matchesSearchValue = (value: string, search: string) => {
    return value.toLocaleLowerCase('ru-RU').includes(search)
}

const matchesCitizenFilter = <T extends string>(filters: T[], value: T) => {
    return filters.length === 0 || filters.includes(value)
}

const matchesCitizenSearch = (citizen: CitizenListItem, search: string) => {
    if (search.length === 0) {
        return true
    }

    return (
        matchesSearchValue(citizen.fullName, search) ||
        matchesSearchValue(citizen.id, search) ||
        matchesSearchValue(citizen.city, search) ||
        matchesSearchValue(citizen.region, search)
    )
}

export const applyCitizenFilters = (
    items: CitizenListItem[],
    query: CitizensQuery,
): CitizenListItem[] => {
    const search = normalizeSearchValue(query.filters.search)

    return items.filter(
        (citizen) =>
            matchesCitizenSearch(citizen, search) &&
            matchesCitizenFilter(query.filters.statuses, citizen.status) &&
            matchesCitizenFilter(query.filters.regions, citizen.region) &&
            matchesCitizenFilter(query.filters.genders, citizen.gender),
    )
}

const compareCitizensByAge = (left: CitizenListItem, right: CitizenListItem) => left.age - right.age

const compareCitizensByLastUpdatedAt = (left: CitizenListItem, right: CitizenListItem) => {
    return new Date(left.lastUpdatedAt).getTime() - new Date(right.lastUpdatedAt).getTime()
}

const compareCitizensByFullName = (left: CitizenListItem, right: CitizenListItem) => {
    return left.fullName.localeCompare(right.fullName, 'ru-RU')
}

const citizenComparators = {
    age: compareCitizensByAge,
    lastUpdatedAt: compareCitizensByLastUpdatedAt,
    fullName: compareCitizensByFullName,
} satisfies Record<CitizensQuery['sortBy'], (left: CitizenListItem, right: CitizenListItem) => number>

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

export const applyCitizenPagination = (
    items: CitizenListItem[],
    query: CitizensQuery,
): CitizenListItem[] => {
    const safePage = Math.max(query.page, 1)
    const safePageSize = Math.max(query.pageSize, 1)
    const startIndex = (safePage - 1) * safePageSize

    return items.slice(startIndex, startIndex + safePageSize)
}

export const getCitizenRegionOptions = () => {
    return [...new Set(mockCitizenListItems.map((citizen) => citizen.region))].sort((left, right) =>
        left.localeCompare(right, 'ru-RU'),
    )
}
