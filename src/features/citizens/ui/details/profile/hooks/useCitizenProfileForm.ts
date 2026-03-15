import { useFormContext } from 'react-hook-form'

import type { Citizen } from '@shared/types'

export const useCitizenProfileForm = () => {
    const form = useFormContext<Citizen>()
    const citizen = form.watch()

    return {
        ...form,
        citizen,
    }
}
