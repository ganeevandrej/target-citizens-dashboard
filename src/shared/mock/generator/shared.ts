import type { Citizen, CitizenStatus } from '@shared/types'

import { locationPresets, namePresets, type LocationPreset } from '../presets'

// соотношения для генерации
export const statuses: CitizenStatus[] = ['active', 'active', 'active', 'needs_update', 'needs_update', 'archived']
export const profileStatuses: Citizen['serviceMeta']['profileStatus'][] = ['new', 'verified', 'on_review']
export const verificationStatuses: Citizen['serviceMeta']['verificationStatus'][] = ['verified', 'needs_documents', 'pending']
export const riskLevels: Citizen['serviceMeta']['riskLevel'][] = ['low', 'medium', 'high']
export const maritalStatuses: Citizen['maritalStatus'][] = ['single', 'married', 'divorced']

const totalLocationWeight = locationPresets.reduce((sum, item) => sum + item.weight, 0)
const REFERENCE_NOW = new Date()
const RECENT_MONTHS_WINDOW = 15

// Форматирует число для id и дат
export const padNumber = (value: number, size = 2) => String(value).padStart(size, '0')

// Выбирает регион и город.
export const pickWeightedLocation = (index: number): LocationPreset => {
    let cursor = (index * 17 + Math.floor(index / 11) * 5) % totalLocationWeight

    for (const location of locationPresets) {
        if (cursor < location.weight) {
            return location
        }

        cursor -= location.weight
    }

    return locationPresets[0]
}

// Генерирует дату рождения
export const buildBirthDate = (index: number) => {
    const year = 1965 + (index % 38)
    const month = ((index * 5) % 12) + 1
    const day = ((index * 7) % 27) + 1

    return `${year}-${padNumber(month)}-${padNumber(day)}`
}

// Генерирует дату обновления
export const buildLastUpdatedAt = (index: number) => {
    const monthOffset = (index * 7 + Math.floor(index / 17) * 3) % RECENT_MONTHS_WINDOW
    const baseDate = new Date(
        Date.UTC(
            REFERENCE_NOW.getUTCFullYear(),
            REFERENCE_NOW.getUTCMonth() - monthOffset,
            1,
            0,
            0,
            0,
            0,
        ),
    )
    const maxDayInMonth = new Date(Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth() + 1, 0)).getUTCDate()
    const day = ((index * 13 + monthOffset * 5) % maxDayInMonth) + 1
    const hour = 8 + ((index * 3) % 10)
    const minute = (index * 11) % 60
    const candidateDate = new Date(
        Date.UTC(baseDate.getUTCFullYear(), baseDate.getUTCMonth(), day, hour, minute, 0, 0),
    )

    return candidateDate.getTime() > REFERENCE_NOW.getTime() ? REFERENCE_NOW.toISOString() : candidateDate.toISOString()
}

// Считает возраст
export const getAgeFromBirthDate = (birthDate: string) => 2026 - Number(birthDate.slice(0, 4))

// Собирает ФИО
export const buildFullName = (index: number) => {
    const preset = namePresets[index % namePresets.length]

    return `${preset.lastName} ${preset.firstName} ${preset.middleName}`
}
