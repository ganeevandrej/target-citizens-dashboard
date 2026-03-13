import { useEffect, useState } from 'react'
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { getCitizenDetails, getCitizens } from '@shared/api'
import type { Citizen, CitizenListItem } from '@shared/types'

import { CitizenDetailsCard } from '../components/CitizenDetailsCard'
import { CitizensListCard } from '../components/CitizensListCard'
import { CitizensPageHeader } from '../components/CitizensPageHeader'

export function CitizensPage() {
    const [citizens, setCitizens] = useState<CitizenListItem[]>([])
    const [selectedCitizenId, setSelectedCitizenId] = useState<string | null>(null)
    const [selectedCitizen, setSelectedCitizen] = useState<Citizen | null>(null)
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const [isListLoading, setIsListLoading] = useState(true)
    const [listError, setListError] = useState<string | null>(null)
    const [isDetailsLoading, setIsDetailsLoading] = useState(false)
    const [detailsError, setDetailsError] = useState<string | null>(null)

    useEffect(() => {
        let isActive = true

        const loadCitizens = async () => {
            setIsListLoading(true)
            setListError(null)

            try {
                const response = await getCitizens()

                if (!isActive) return

                setCitizens(response.items)
                setSelectedCitizenId(response.items[0]?.id ?? null)
            } catch (error) {
                if (!isActive) return

                setListError(error instanceof Error ? error.message : 'Не удалось загрузить список граждан.')
                setCitizens([])
                setSelectedCitizenId(null)
            } finally {
                if (isActive) setIsListLoading(false)
            }
        }

        loadCitizens()

        return () => { isActive = false }
    }, [])

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

        return () => { isActive = false }
    }, [selectedCitizenId])

    const handleSelectCitizen = (id: string) => {
        setSelectedCitizenId(id)
        setIsDetailsOpen(true)
    }

    const handleCloseDetails = () => {
        setIsDetailsOpen(false)
    }

    return (
        <Stack spacing={4}>
            <CitizensPageHeader />

            <CitizensListCard
                citizens={citizens}
                selectedCitizenId={selectedCitizenId}
                isLoading={isListLoading}
                error={listError}
                onSelectCitizen={handleSelectCitizen}
            />

            <Drawer
                anchor="right"
                open={isDetailsOpen}
                onClose={handleCloseDetails}
                PaperProps={{
                    sx: {
                        width: { xs: '100%', sm: 480, lg: 560 },
                        p: 3,
                    },
                }}
            >
                <Stack spacing={3} sx={{ height: '100%' }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                        <Typography variant="overline" color="text.secondary">
                            Детальная информация гражданина
                        </Typography>
                        <IconButton onClick={handleCloseDetails} aria-label="Закрыть панель деталей">
                            <CloseIcon />
                        </IconButton>
                    </Stack>

                    <Box sx={{ overflowY: 'auto', pr: 0.5 }}>
                        <CitizenDetailsCard
                            citizen={selectedCitizen}
                            selectedCitizenId={selectedCitizenId}
                            isLoading={isDetailsLoading}
                            error={detailsError}
                        />
                    </Box>
                </Stack>
            </Drawer>
        </Stack>
    )
}
