import { useEffect, useState } from 'react'

import { getCitizenDetails, subscribeToFakeApiStore } from '@shared/api'
import type { Citizen } from '@shared/types'

export const useCitizenDetails = () => {
    const [selectedCitizenId, setSelectedCitizenId] = useState<string | null>(null)
    const [selectedCitizen, setSelectedCitizen] = useState<Citizen | null>(null)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [isDetailsLoading, setIsDetailsLoading] = useState(false)
    const [detailsError, setDetailsError] = useState<string | null>(null)
    const [storeRevision, setStoreRevision] = useState(0)

    useEffect(() => {
        if (!selectedCitizenId) {
            setSelectedCitizen(null)
            setDetailsError(null)

            return
        }

        let isActive = true

        const loadCitizenDetails = async () => {
            setIsDetailsLoading(true)
            setDetailsError(null)

            try {
                const response = await getCitizenDetails(selectedCitizenId)

                if (!isActive) return

                setSelectedCitizen(response.item)
            } catch (error) {
                if (!isActive) return

                setDetailsError(
                    error instanceof Error ? error.message : 'Не удалось загрузить данные гражданина.',
                )
                setSelectedCitizen(null)
            } finally {
                if (isActive) setIsDetailsLoading(false)
            }
        }

        loadCitizenDetails()

        return () => {
            isActive = false
        }
    }, [selectedCitizenId, storeRevision])

    useEffect(() => {
        return subscribeToFakeApiStore(() => {
            setStoreRevision((currentValue) => currentValue + 1)
        })
    }, [])

    const handleSelectCitizen = (id: string) => {
        setSelectedCitizenId(id)
        setIsDetailsOpen(true)
    }

    const handleCloseDetails = () => {
        setIsDetailsOpen(false)
    }

    return {
        selectedCitizenId,
        selectedCitizen,
        isDetailsOpen,
        isDetailsLoading,
        detailsError,
        handleSelectCitizen,
        handleCloseDetails,
    }
}
