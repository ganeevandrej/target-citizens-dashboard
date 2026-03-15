import { useContext } from 'react'

import { CitizensSelectionContext } from './CitizensSelectionContext'

export const useCitizensSelectionContext = () => {
    const context = useContext(CitizensSelectionContext)

    if (!context) {
        throw new Error('useCitizensSelectionContext must be used within CitizensSelectionProvider.')
    }

    return context
}
