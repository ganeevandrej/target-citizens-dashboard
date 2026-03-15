import { lazy, Suspense, type ReactNode } from 'react'
import { CircularProgress, Stack } from '@mui/material'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@app/layout/AppLayout'

const DashboardPage = lazy(() =>
    import('@features/dashboard/pages/DashboardPage').then((module) => ({
        default: module.DashboardPage,
    })),
)

const CitizensPage = lazy(() =>
    import('@features/citizens/pages/CitizensPage').then((module) => ({
        default: module.CitizensPage,
    })),
)

const withSuspense = (node: ReactNode) => (
    <Suspense
        fallback={
            <Stack alignItems="center" justifyContent="center" sx={{ minHeight: '50vh' }}>
                <CircularProgress size={28} />
            </Stack>
        }
    >
        {node}
    </Suspense>
)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Navigate replace to="/dashboard" />,
            },
            {
                path: 'dashboard',
                element: withSuspense(<DashboardPage />),
            },
            {
                path: 'citizens',
                element: withSuspense(<CitizensPage />),
            },
        ],
    },
])
