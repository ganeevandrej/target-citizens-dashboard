import { useContext } from 'react'

import { CitizensQueryContext } from './CitizensQueryContext'

export const useCitizensQueryContext = () => {
    const context = useContext(CitizensQueryContext)

    if (!context) {
        throw new Error('useCitizensQueryContext must be used within CitizensQueryProvider.')
    }

    return context
}
