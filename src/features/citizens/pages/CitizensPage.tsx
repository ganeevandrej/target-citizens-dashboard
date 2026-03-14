import { Stack } from '@mui/material'

import { CitizensDetailsDrawer, CitizensFiltersBar, CitizensListCard } from '../ui'
import { useCitizenDetails } from '../hooks/useCitizenDetails'
import { useCitizensList } from '../hooks/useCitizensList'
import { CitizensPageHeader } from './CitizensPageHeader'

export function CitizensPage() {
    const {
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
    } = useCitizensList()

    const {
        selectedCitizenId,
        selectedCitizen,
        isDetailsOpen,
        isDetailsLoading,
        detailsError,
        handleSelectCitizen,
        handleCloseDetails,
    } = useCitizenDetails({
        availableCitizenIds: citizens.map((citizen) => citizen.id),
    })

    return (
        <Stack spacing={4}>
            <CitizensPageHeader />

            <CitizensFiltersBar
                query={query}
                onFiltersChange={handleFiltersChange}
                onSortChange={handleSortChange}
                onReset={handleResetFilters}
            />

            <CitizensListCard
                citizens={citizens}
                total={total}
                page={query.page}
                pageSize={query.pageSize}
                selectedCitizenId={selectedCitizenId}
                isLoading={isListLoading}
                error={listError}
                onSelectCitizen={handleSelectCitizen}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
            />

            <CitizensDetailsDrawer
                open={isDetailsOpen}
                selectedCitizenId={selectedCitizenId}
                citizen={selectedCitizen}
                isLoading={isDetailsLoading}
                error={detailsError}
                onClose={handleCloseDetails}
            />
        </Stack>
    )
}
