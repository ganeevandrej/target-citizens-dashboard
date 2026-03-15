import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'

import { AppHeader } from './AppHeader'
import { AppSidebar } from './AppSidebar'

const LayoutRoot = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    backgroundColor: theme.palette.background.default,
}))

const LayoutMain = styled(Box)({
    flexGrow: 1,
    minWidth: 0,
})

const LayoutContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2.5, 4),
    },
}))

export function AppLayout() {
    return (
        <LayoutRoot>
            <AppSidebar />

            <LayoutMain as="main">
                <AppHeader />

                <LayoutContent>
                    <Outlet />
                </LayoutContent>
            </LayoutMain>
        </LayoutRoot>
    )
}
