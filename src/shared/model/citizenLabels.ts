import type { Citizen, CitizenListItem } from '@shared/types'

export const citizenStatusLabels = {
    active: 'Актуально',
    needs_update: 'Требует обновления',
    archived: 'В архиве',
} satisfies Record<CitizenListItem['status'], string>

export const citizenGenderLabels = {
    male: 'Мужчина',
    female: 'Женщина',
} satisfies Record<Citizen['gender'], string>

export const citizenMaritalStatusLabels = {
    single: 'Холост / не замужем',
    married: 'В браке',
    divorced: 'В разводе',
} satisfies Record<Citizen['maritalStatus'], string>

export const citizenProfileStatusLabels = {
    new: 'Новый профиль',
    verified: 'Проверен',
    on_review: 'На ревью',
} satisfies Record<Citizen['serviceMeta']['profileStatus'], string>

export const citizenVerificationStatusLabels = {
    verified: 'Подтвержден',
    needs_documents: 'Нужны документы',
    pending: 'Ожидает проверки',
} satisfies Record<Citizen['serviceMeta']['verificationStatus'], string>

export const citizenRiskLevelLabels = {
    low: 'Низкий риск',
    medium: 'Средний риск',
    high: 'Высокий риск',
} satisfies Record<Citizen['serviceMeta']['riskLevel'], string>
