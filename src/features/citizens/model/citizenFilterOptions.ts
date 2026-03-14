import type {
    CitizenFilters,
    CitizenGender,
    CitizenStatus,
    CitizensQuery,
} from '@shared/types'

import { getCitizenRegionOptions } from './citizensQuery'

export const defaultCitizenFilters: CitizenFilters = {
    search: '',
    statuses: [],
    regions: [],
    genders: [],
}

export const defaultCitizensQuery: CitizensQuery = {
    filters: defaultCitizenFilters,
    sortBy: 'lastUpdatedAt',
    sortDirection: 'desc',
    page: 1,
    pageSize: 10,
}

export const citizenStatusOptions: Array<{ value: CitizenStatus; label: string }> = [
    { value: 'active', label: 'Актуально' },
    { value: 'needs_update', label: 'Требует обновления' },
    { value: 'archived', label: 'В архиве' },
]

export const citizenGenderOptions: Array<{ value: CitizenGender; label: string }> = [
    { value: 'male', label: 'Мужчина' },
    { value: 'female', label: 'Женщина' },
]

export const citizenRegionOptions = getCitizenRegionOptions()
