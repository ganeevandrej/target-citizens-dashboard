import { useEffect, useState } from 'react'

import { getDashboardData, subscribeToFakeApiStore } from '@shared/api'
import type { DashboardData } from '@shared/types'

export const useDashboardData = () => {
    const [dashboard, setDashboard] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [storeRevision, setStoreRevision] = useState(0)

    useEffect(() => {
        let isActive = true

        const loadDashboard = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await getDashboardData()

                if (!isActive) return

                setDashboard(response)
            } catch (loadError) {
                if (!isActive) return

                setError(loadError instanceof Error ? loadError.message : 'Не удалось загрузить дашборд.')
                setDashboard(null)
            } finally {
                if (isActive) setIsLoading(false)
            }
        }

        loadDashboard()

        return () => {
            isActive = false
        }
    }, [storeRevision])

    useEffect(() => {
        return subscribeToFakeApiStore(() => {
            setStoreRevision((currentValue) => currentValue + 1)
        })
    }, [])

    return {
        dashboard,
        isLoading,
        error,
    }
}
