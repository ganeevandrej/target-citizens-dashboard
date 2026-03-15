import { createContext } from 'react'

import { useCitizensList } from '../hooks/useCitizensList'

export type CitizensQueryContextValue = ReturnType<typeof useCitizensList>

export const CitizensQueryContext = createContext<CitizensQueryContextValue | null>(null)
