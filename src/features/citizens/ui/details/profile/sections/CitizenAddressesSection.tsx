import { Grid, MenuItem, Stack } from '@mui/material'

import { FormSelectField } from '../../fields/FormSelectField'
import { FormTextField } from '../../fields/FormTextField'
import { addressLabelOptions } from '../model/citizenProfileOptions'
import { CitizenProfileSection } from '../CitizenProfileSection'
import { useCitizenProfileForm } from '../hooks/useCitizenProfileForm'

export const CitizenAddressesSection = () => {
    const { citizen } = useCitizenProfileForm()
    const { addresses } = citizen

    return (
        <CitizenProfileSection title="Адреса" caption="Адреса регистрации и проживания.">
            <Stack spacing={2}>
                {addresses.map((address, index) => (
                    <Grid container spacing={2} key={address.id}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormSelectField label="Тип адреса" name={`addresses.${index}.label`}>
                                {addressLabelOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </FormSelectField>
                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FormTextField label="Регион" name={`addresses.${index}.region`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <FormTextField label="Город" name={`addresses.${index}.city`} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 2 }}>
                            <FormTextField label="Улица" name={`addresses.${index}.street`} />
                        </Grid>
                        <Grid size={{ xs: 6, md: 1 }}>
                            <FormTextField label="Дом" name={`addresses.${index}.house`} />
                        </Grid>
                        <Grid size={{ xs: 6, md: 1 }}>
                            <FormTextField
                                label="Кв."
                                name={`addresses.${index}.apartment`}
                                format={(value) => String(value ?? '')}
                                parse={(value) => value || null}
                            />
                        </Grid>
                    </Grid>
                ))}
            </Stack>
        </CitizenProfileSection>
    )
}
