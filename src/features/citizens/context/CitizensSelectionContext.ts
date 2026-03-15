import { createContext } from 'react'

import { useCitizenDetails } from '../hooks/useCitizenDetails'

export type CitizensSelectionContextValue = ReturnType<typeof useCitizenDetails>

export const CitizensSelectionContext = createContext<CitizensSelectionContextValue | null>(null)
