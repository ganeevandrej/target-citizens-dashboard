import type { CitizenListItem, CitizensQuery } from '@shared/types'

// Возвращает нужную страницу списка
export const applyCitizenPagination = (
    items: CitizenListItem[],
    query: CitizensQuery,
): CitizenListItem[] => {
    const safePage = Math.max(query.page, 1)
    const safePageSize = Math.max(query.pageSize, 1)
    const startIndex = (safePage - 1) * safePageSize

    return items.slice(startIndex, startIndex + safePageSize)
}
