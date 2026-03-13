import { Stack, Typography } from '@mui/material'

import type { Citizen } from '@shared/types'

type CitizenAddressSectionProps = {
    citizen: Citizen
}

export const CitizenAddressSection = ({ citizen }: CitizenAddressSectionProps) => (
    <Stack spacing={1}>
        <Typography variant="subtitle2">Основной адрес</Typography>
        <Typography color="text.secondary">
            {citizen.addresses[0]
                ? `${citizen.addresses[0].region}, ${citizen.addresses[0].city}, ${citizen.addresses[0].street} ${citizen.addresses[0].house}`
                : 'Адрес не указан'}
        </Typography>
    </Stack>
)
