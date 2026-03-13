import CloseIcon from '@mui/icons-material/Close'
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import type { Citizen } from '@shared/types'

import { CitizenDetailsCard } from './CitizenDetailsCard'

type CitizensDetailsDrawerProps = {
    open: boolean
    selectedCitizenId: string | null
    citizen: Citizen | null
    isLoading: boolean
    error: string | null
    onClose: () => void
}

const DrawerContent = styled(Stack)({
    height: '100%',
})

const DrawerScrollArea = styled(Box)({
    overflowY: 'auto',
    paddingRight: 4,
})

const drawerPaperSx = {
    width: { xs: '100%', sm: 480, lg: 560 },
    p: 3,
}

export const CitizensDetailsDrawer = ({
    open,
    selectedCitizenId,
    citizen,
    isLoading,
    error,
    onClose,
}: CitizensDetailsDrawerProps) => (
    <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: drawerPaperSx }}>
        <DrawerContent spacing={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="overline" color="text.secondary">
                    Детальная информация гражданина
                </Typography>
                <IconButton onClick={onClose} aria-label="Закрыть панель деталей">
                    <CloseIcon />
                </IconButton>
            </Stack>

            <DrawerScrollArea>
                <CitizenDetailsCard
                    citizen={citizen}
                    selectedCitizenId={selectedCitizenId}
                    isLoading={isLoading}
                    error={error}
                />
            </DrawerScrollArea>
        </DrawerContent>
    </Drawer>
)
