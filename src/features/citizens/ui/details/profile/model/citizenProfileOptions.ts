import type { Citizen } from '@shared/types'

export const addressLabelOptions: Array<{
    value: Citizen['addresses'][number]['label']
    label: string
}> = [
    { value: 'registration', label: 'Регистрация' },
    { value: 'residential', label: 'Проживание' },
]

export const getStatusChipColor = (status: Citizen['status']) => {
    if (status === 'active') return 'success'
    if (status === 'needs_update') return 'warning'

    return 'default'
}

export const getRiskChipColor = (riskLevel: Citizen['serviceMeta']['riskLevel']) => {
    if (riskLevel === 'low') return 'success'
    if (riskLevel === 'medium') return 'warning'

    return 'error'
}
