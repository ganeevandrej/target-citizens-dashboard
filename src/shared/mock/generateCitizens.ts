import type { Citizen } from '@shared/types'

import { buildCitizen } from './generator/buildCitizen'

export { buildCitizen } from './generator/buildCitizen'

// Генерирует список граждан
export const generateCitizens = (count: number): Citizen[] => {
    return Array.from({ length: Math.max(count, 0) }, (_, index) => buildCitizen(index))
}
