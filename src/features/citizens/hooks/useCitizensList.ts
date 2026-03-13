import { useEffect, useState } from 'react'

import { getCitizens } from '@shared/api'
import type { CitizenFilters, CitizenListItem, CitizensQuery } from '@shared/types'

import { defaultCitizensQuery } from '../model/citizenFilterOptions'

export const useCitizensList = () => {
    const [citizens, setCitizens] = useState<CitizenListItem[]>([])
    const [total, setTotal] = useState(0)
    const [query, setQuery] = useState<CitizensQuery>(defaultCitizensQuery)
    const [isListLoading, setIsListLoading] = useState(true)
    const [listError, setListError] = useState<string | null>(null)

    useEffect(() => {
        let isActive = true

        const loadCitizens = async () => {
            setIsListLoading(true)
            setListError(null)

            try {
                const response = await getCitizens(query)

                if (!isActive) return

                setCitizens(response.items)
                setTotal(response.total)
            } catch (error) {
                if (!isActive) return

                setListError(error instanceof Error ? error.message : 'Не удалось загрузить список граждан.')
                setCitizens([])
                setTotal(0)
            } finally {
                if (isActive) setIsListLoading(false)
            }
        }

        loadCitizens()

        return () => {
            isActive = false
        }
    }, [query])

    const handleFiltersChange = (filters: CitizenFilters) => {
        setQuery((currentQuery) => ({
            ...currentQuery,
            filters,
            page: 1,
        }))
    }

    const handleSortChange = (
        sortBy: CitizensQuery['sortBy'],
        sortDirection: CitizensQuery['sortDirection'],
    ) => {
        setQuery((currentQuery) => ({
            ...currentQuery,
            sortBy,
            sortDirection,
            page: 1,
        }))
    }

    const handlePageChange = (page: number) => {
        setQuery((currentQuery) => ({
            ...currentQuery,
            page,
        }))
    }

    const handlePageSizeChange = (pageSize: number) => {
        setQuery((currentQuery) => ({
            ...currentQuery,
            pageSize,
            page: 1,
        }))
    }

    const handleResetFilters = () => {
        setQuery(defaultCitizensQuery)
    }

    return {
        citizens,
        total,
        query,
        isListLoading,
        listError,
        handleFiltersChange,
        handleSortChange,
        handlePageChange,
        handlePageSizeChange,
        handleResetFilters,
    }
}
