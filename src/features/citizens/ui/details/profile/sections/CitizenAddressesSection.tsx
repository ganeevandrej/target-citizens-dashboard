import { Grid, MenuItem, Stack } from '@mui/material'

import type { Citizen } from '@shared/types'

import { FormSelectField } from '../../fields/FormSelectField'
import { FormTextField } from '../../fields/FormTextField'
import { updateCollectionItem } from '../lib/updateCollectionItem'
import type { UpdateCitizenField } from '../types/editor'
import { addressLabelOptions } from '../model/citizenProfileOptions'
import { CitizenProfileSection } from '../CitizenProfileSection'

type CitizenAddressesSectionProps = {
    addresses: Citizen['addresses']
    updateCitizen: UpdateCitizenField
}

export const CitizenAddressesSection = ({
    addresses,
    updateCitizen,
}: CitizenAddressesSectionProps) => (
    <CitizenProfileSection title="Адреса" caption="Адреса регистрации и проживания.">
        <Stack spacing={2}>
            {addresses.map((address) => (
                <Grid container spacing={2} key={address.id}>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormSelectField
                            label="Тип адреса"
                            value={address.label}
                            onChange={(event) =>
                                updateCitizen(
                                    'addresses',
                                    updateCollectionItem(addresses, address.id, {
                                        label: event.target.value as Citizen['addresses'][number]['label'],
                                    }),
                                )
                            }
                        >
                            {addressLabelOptions.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </FormSelectField>
                    </Grid>
                    <Grid size={{ xs: 12, md: 3 }}>
                        <FormTextField
                            label="Регион"
                            value={address.region}
                            onChange={(event) =>
                                updateCitizen(
                                    'addresses',
                                    updateCollectionItem(addresses, address.id, {
                                        region: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <FormTextField
                            label="Город"
                            value={address.city}
                            onChange={(event) =>
                                updateCitizen(
                                    'addresses',
                                    updateCollectionItem(addresses, address.id, {
                                        city: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 2 }}>
                        <FormTextField
                            label="Улица"
                            value={address.street}
                            onChange={(event) =>
                                updateCitizen(
                                    'addresses',
                                    updateCollectionItem(addresses, address.id, {
                                        street: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 6, md: 1 }}>
                        <FormTextField
                            label="Дом"
                            value={address.house}
                            onChange={(event) =>
                                updateCitizen(
                                    'addresses',
                                    updateCollectionItem(addresses, address.id, {
                                        house: event.target.value,
                                    }),
                                )
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 6, md: 1 }}>
                        <FormTextField
                            label="Кв."
                            value={address.apartment ?? ''}
                            onChange={(event) =>
                                updateCitizen(
                                    'addresses',
                                    updateCollectionItem(addresses, address.id, {
                                        apartment: event.target.value || null,
                                    }),
                                )
                            }
                        />
                    </Grid>
                </Grid>
            ))}
        </Stack>
    </CitizenProfileSection>
)
