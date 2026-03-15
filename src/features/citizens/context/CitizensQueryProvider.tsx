import type { ReactNode } from 'react'

import { useCitizensList } from '../hooks/useCitizensList'
import { CitizensQueryContext } from './CitizensQueryContext'

type CitizensQueryProviderProps = {
    children: ReactNode
}

export const CitizensQueryProvider = ({ children }: CitizensQueryProviderProps) => {
    const citizensQueryState = useCitizensList()

    return <CitizensQueryContext.Provider value={citizensQueryState}>{children}</CitizensQueryContext.Provider>
}
