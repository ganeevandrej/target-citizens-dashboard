import type { CitizensQuery } from '@shared/types'

export type SortOptionValue =
    | 'lastUpdatedAt:desc'
    | 'lastUpdatedAt:asc'
    | 'fullName:asc'
    | 'fullName:desc'
    | 'age:asc'
    | 'age:desc'

export const citizenSortOptions: Array<{ value: SortOptionValue; label: string }> = [
    { value: 'lastUpdatedAt:desc', label: 'Сначала новые' },
    { value: 'lastUpdatedAt:asc', label: 'Сначала старые' },
    { value: 'fullName:asc', label: 'Имя А-Я' },
    { value: 'fullName:desc', label: 'Имя Я-А' },
    { value: 'age:asc', label: 'Возраст по возрастанию' },
    { value: 'age:desc', label: 'Возраст по убыванию' },
]

export const getSortOptionValue = (query: CitizensQuery): SortOptionValue => {
    return `${query.sortBy}:${query.sortDirection}` as SortOptionValue
}

export const parseSortOptionValue = (value: SortOptionValue) => {
    const [sortBy, sortDirection] = value.split(':')

    return {
        sortBy: sortBy as CitizensQuery['sortBy'],
        sortDirection: sortDirection as CitizensQuery['sortDirection'],
    }
}
