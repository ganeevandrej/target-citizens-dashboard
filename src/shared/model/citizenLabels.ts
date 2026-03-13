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
