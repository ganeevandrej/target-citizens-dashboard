import type { CitizenListItem, CitizensQuery } from '@shared/types'

// Подготавливает текст для поиска
const normalizeSearchValue = (value: string) => value.trim().toLocaleLowerCase('ru-RU')

// Проверяет совпадение по тексту
const matchesSearchValue = (value: string, search: string) => {
    return value.toLocaleLowerCase('ru-RU').includes(search)
}

// Проверяет одно значение фильтра
const matchesCitizenFilter = <T extends string>(filters: T[], value: T) => {
    return filters.length === 0 || filters.includes(value)
}

// Проверяет, подходит ли запись под поиск
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

// Применяет фильтры к списку граждан
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
