import type { ReactNode } from 'react'

import { useCitizenDetails } from '../hooks/useCitizenDetails'
import { CitizensSelectionContext } from './CitizensSelectionContext'

type CitizensSelectionProviderProps = {
    children: ReactNode
}

export const CitizensSelectionProvider = ({ children }: CitizensSelectionProviderProps) => {
    const citizensSelectionState = useCitizenDetails()

    return (
        <CitizensSelectionContext.Provider value={citizensSelectionState}>
            {children}
        </CitizensSelectionContext.Provider>
    )
}
