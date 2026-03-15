import { Stack } from '@mui/material'

import { CitizensQueryProvider, CitizensSelectionProvider } from '../context'
import { CitizensDetailsDrawer, CitizensFiltersBar, CitizensListCard } from '../ui'

export function CitizensPage() {
    return (
        <CitizensQueryProvider>
            <CitizensSelectionProvider>
                <Stack spacing={3}>
                    <CitizensFiltersBar />
                    <CitizensListCard />
                    <CitizensDetailsDrawer />
                </Stack>
            </CitizensSelectionProvider>
        </CitizensQueryProvider>
    )
}
