import { Navigate, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@app/layout/AppLayout'
import { CitizensPage } from '@features/citizens/pages/CitizensPage'
import { DashboardPage } from '@features/dashboard/pages/DashboardPage'

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
                element: <DashboardPage />,
            },
            {
                path: 'citizens',
                element: <CitizensPage />,
            },
        ],
    },
])
