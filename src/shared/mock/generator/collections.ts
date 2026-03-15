import type {
    CitizenAddress,
    CitizenComment,
    CitizenDocument,
    CitizenEducation,
    CitizenHistoryEntry,
    FamilyMember,
} from '@shared/types'

import {
    commentTemplates,
    curatorNames,
    documentIssuers,
    historyActions,
    streetNames,
    universities,
    type LocationPreset,
} from '../presets'
import { padNumber } from './shared'

// Собирает документы гражданина
export const buildDocuments = (index: number): CitizenDocument[] => {
    const passportNumber = `${padNumber((10 + index) % 99)}${padNumber((index * 13) % 1000, 3)} ${padNumber((index * 29) % 1000000, 6)}`
    const documents: CitizenDocument[] = [
        {
            id: `doc-${index + 1}-1`,
            name: 'Паспорт',
            number: passportNumber,
            issuedAt: `${2010 + (index % 12)}-${padNumber(((index * 3) % 12) + 1)}-${padNumber(((index * 5) % 27) + 1)}`,
            issuedBy: documentIssuers[index % documentIssuers.length],
        },
    ]

    if (index % 3 === 0) {
        documents.push({
            id: `doc-${index + 1}-2`,
            name: 'СНИЛС',
            number: `${padNumber((index * 7) % 1000, 3)}-${padNumber((index * 11) % 1000, 3)}-${padNumber((index * 13) % 1000, 3)} ${padNumber((index * 17) % 100, 2)}`,
            issuedAt: `${2001 + (index % 20)}-${padNumber(((index * 2) % 12) + 1)}-${padNumber(((index * 9) % 27) + 1)}`,
            issuedBy: 'Пенсионный фонд',
        })
    }

    return documents
}

// Собирает адреса гражданина
export const buildAddresses = (index: number, location: LocationPreset): CitizenAddress[] => {
    const addresses: CitizenAddress[] = [
        {
            id: `addr-${index + 1}-1`,
            label: 'registration',
            region: location.region,
            city: location.city,
            street: streetNames[index % streetNames.length],
            house: String((index % 180) + 1),
            apartment: String((index % 120) + 1),
        },
    ]

    if (index % 4 === 0) {
        addresses.push({
            id: `addr-${index + 1}-2`,
            label: 'residential',
            region: location.region,
            city: location.city,
            street: streetNames[(index + 3) % streetNames.length],
            house: String((index % 140) + 11),
            apartment: index % 8 === 0 ? null : String((index % 80) + 1),
        })
    }

    return addresses
}

// Собирает данные о семье
export const buildFamily = (index: number): FamilyMember[] => {
    const family: FamilyMember[] = []

    if (index % 2 === 0) {
        family.push({
            id: `family-${index + 1}-1`,
            fullName: `Родственник ${index + 1} A`,
            relation: 'spouse',
            birthDate: `${1970 + (index % 20)}-${padNumber(((index * 2) % 12) + 1)}-${padNumber(((index * 5) % 27) + 1)}`,
        })
    }

    if (index % 3 === 0) {
        family.push({
            id: `family-${index + 1}-2`,
            fullName: `Родственник ${index + 1} B`,
            relation: 'child',
            birthDate: `${2005 + (index % 15)}-${padNumber(((index * 4) % 12) + 1)}-${padNumber(((index * 6) % 27) + 1)}`,
        })
    }

    return family
}

// Собирает данные об образовании
export const buildEducation = (index: number): CitizenEducation[] => {
    const preset = universities[index % universities.length]

    return [
        {
            id: `edu-${index + 1}-1`,
            institution: preset.institution,
            specialization: preset.specialization,
            graduatedAt: index % 5 === 0 ? null : `${2004 + (index % 18)}-06-30`,
        },
    ]
}

// Собирает комментарии к карточке
export const buildComments = (index: number, timestamp: string): CitizenComment[] => [
    {
        id: `comment-${index + 1}-1`,
        author: curatorNames[index % curatorNames.length],
        createdAt: timestamp,
        text: commentTemplates[index % commentTemplates.length],
    },
]

// Собирает историю по карточке
export const buildHistory = (index: number, timestamp: string): CitizenHistoryEntry[] => [
    {
        id: `history-${index + 1}-1`,
        createdAt: timestamp,
        actor: curatorNames[index % curatorNames.length],
        action: historyActions[index % historyActions.length],
        description: `Запись ${index + 1} обработана в операторском контуре.`,
    },
]
