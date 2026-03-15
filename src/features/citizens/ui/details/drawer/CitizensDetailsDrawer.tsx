import CloseIcon from '@mui/icons-material/Close'
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useCitizensQueryContext, useCitizensSelectionContext } from '../../../context'
import { CitizenDetailsPanel } from './CitizenDetailsPanel'

const DrawerContent = styled(Stack)({
    height: '100%',
})

const DrawerScrollArea = styled(Box)({
    overflowY: 'auto',
    paddingRight: 4,
})

const drawerPaperSx = {
    width: { xs: '100%', sm: 780, lg: 920 },
    p: 3,
}

export const CitizensDetailsDrawer = () => {
    const { citizens, handleResetFilters } = useCitizensQueryContext()
    const {
        selectedCitizenId,
        selectedCitizen,
        isDetailsOpen,
        isDetailsLoading,
        detailsError,
        handleCloseDetails,
    } = useCitizensSelectionContext()
    const isOutsideCurrentList =
        selectedCitizenId !== null && !citizens.some((citizen) => citizen.id === selectedCitizenId)

    return (
        <Drawer anchor="right" open={isDetailsOpen} onClose={handleCloseDetails} PaperProps={{ sx: drawerPaperSx }}>
            <DrawerContent spacing={3}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <Typography variant="overline" color="text.secondary">
                        Детальная информация гражданина
                    </Typography>
                    <IconButton onClick={handleCloseDetails} aria-label="Закрыть панель деталей">
                        <CloseIcon />
                    </IconButton>
                </Stack>

                <DrawerScrollArea>
                    <CitizenDetailsPanel
                        citizen={selectedCitizen}
                        selectedCitizenId={selectedCitizenId}
                        isOutsideCurrentList={isOutsideCurrentList}
                        isLoading={isDetailsLoading}
                        error={detailsError}
                        onResetFilters={handleResetFilters}
                    />
                </DrawerScrollArea>
            </DrawerContent>
        </Drawer>
    )
}
