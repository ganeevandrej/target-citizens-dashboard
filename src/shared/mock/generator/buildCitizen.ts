import type { Citizen } from '@shared/types'

import { curatorNames, namePresets, sourceSystems } from '../presets'
import { buildAddresses, buildComments, buildDocuments, buildEducation, buildFamily, buildHistory } from './collections'
import {
    buildBirthDate,
    buildFullName,
    buildLastUpdatedAt,
    getAgeFromBirthDate,
    maritalStatuses,
    padNumber,
    pickWeightedLocation,
    profileStatuses,
    riskLevels,
    statuses,
    verificationStatuses,
} from './shared'

// Собирает одну карточку гражданина
export const buildCitizen = (index: number): Citizen => {
    const preset = namePresets[index % namePresets.length]
    const location = pickWeightedLocation(index)
    const birthDate = buildBirthDate(index)
    const lastUpdatedAt = buildLastUpdatedAt(index)

    return {
        id: `citizen-${padNumber(index + 1, 4)}`,
        fullName: buildFullName(index),
        birthDate,
        age: getAgeFromBirthDate(birthDate),
        gender: preset.gender,
        status: statuses[(index + Math.floor(index / 8)) % statuses.length],
        region: location.region,
        city: location.city,
        lastUpdatedAt,
        phone: `+7 9${padNumber((index * 37) % 1000, 3)} ${padNumber((index * 17) % 100)}-${padNumber((index * 19) % 100)}-${padNumber((index * 23) % 100)}`,
        email: index % 7 === 0 ? null : `citizen.${index + 1}@example.ru`,
        maritalStatus: maritalStatuses[index % maritalStatuses.length],
        documents: buildDocuments(index),
        addresses: buildAddresses(index, location),
        family: buildFamily(index),
        education: buildEducation(index),
        serviceMeta: {
            profileStatus: profileStatuses[index % profileStatuses.length],
            verificationStatus: verificationStatuses[index % verificationStatuses.length],
            riskLevel: riskLevels[index % riskLevels.length],
            curator: curatorNames[index % curatorNames.length],
            sourceSystem: sourceSystems[index % sourceSystems.length],
            lastReviewAt: index % 6 === 0 ? null : lastUpdatedAt,
        },
        comments: buildComments(index, lastUpdatedAt),
        history: buildHistory(index, lastUpdatedAt),
    }
}
