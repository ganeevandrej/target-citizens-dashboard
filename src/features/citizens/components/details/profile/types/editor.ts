import type { Citizen } from '@shared/types'

export type CitizenProfileTab = 'profile' | 'related' | 'service'

export type UpdateCitizenField = <K extends keyof Citizen>(field: K, value: Citizen[K]) => void

export type UpdateServiceMetaField = <K extends keyof Citizen['serviceMeta']>(
    field: K,
    value: Citizen['serviceMeta'][K],
) => void
