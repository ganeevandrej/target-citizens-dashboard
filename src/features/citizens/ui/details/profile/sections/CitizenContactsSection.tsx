import { Grid } from '@mui/material'

import { FormTextField } from '../../fields/FormTextField'
import { CitizenProfileSection } from '../CitizenProfileSection'

export const CitizenContactsSection = () => (
        <CitizenProfileSection title="Контакты" caption="Каналы связи и базовая локация.">
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormTextField label="Телефон" name="phone" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormTextField
                        label="Email"
                        name="email"
                        placeholder="Не указан"
                        format={(value) => String(value ?? '')}
                        parse={(value) => value || null}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormTextField label="Регион" name="region" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormTextField label="Город" name="city" />
                </Grid>
            </Grid>
        </CitizenProfileSection>
)
