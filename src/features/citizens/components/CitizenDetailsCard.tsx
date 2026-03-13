import {
    Alert,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Divider,
    Grid,
    Stack,
    Typography,
} from '@mui/material'

import { formatDate } from '@shared/lib/formatDate'
import {
    citizenGenderLabels,
    citizenMaritalStatusLabels,
    citizenStatusLabels,
} from '@shared/model/citizenLabels'
import type { Citizen } from '@shared/types'

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <Stack spacing={0.5}>
        <Typography variant="caption" color="text.secondary">
            {label}
        </Typography>
        <Typography variant="body2">{value}</Typography>
    </Stack>
)

type CitizenDetailsCardProps = {
    citizen: Citizen | null
    selectedCitizenId: string | null
    isLoading: boolean
    error: string | null
}

export const CitizenDetailsCard = ({
    citizen,
    selectedCitizenId,
    isLoading,
    error,
}: CitizenDetailsCardProps) => (
    <Card variant="outlined" sx={{ border: 'none', borderRadius: 0, boxShadow: 'none' }}>
        <CardContent sx={{ p: 0 }}>
            <Stack spacing={2.5}>
                <Stack spacing={0.5}>
                    <Typography variant="h6">Карточка гражданина</Typography>
                    <Typography color="text.secondary">
                        Детали выбранной записи из реестра граждан.
                    </Typography>
                </Stack>

                {error ? <Alert severity="error">{error}</Alert> : null}

                {isLoading ? (
                    <Stack alignItems="center" spacing={2} sx={{ py: 6 }}>
                        <CircularProgress size={28} />
                        <Typography color="text.secondary">Загрузка данных гражданина...</Typography>
                    </Stack>
                ) : null}

                {!isLoading && !selectedCitizenId ? (
                    <Alert severity="info">Выберите гражданина в списке, чтобы увидеть детали.</Alert>
                ) : null}

                {!isLoading && selectedCitizenId && !error && !citizen ? (
                    <Alert severity="warning">Детали по выбранной записи не найдены.</Alert>
                ) : null}

                {!isLoading && citizen ? (
                    <Stack spacing={2.5}>
                        <Stack spacing={1}>
                            <Typography variant="h5">{citizen.fullName}</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                <Chip
                                    size="small"
                                    label={citizenStatusLabels[citizen.status]}
                                    color={
                                        citizen.status === 'active'
                                            ? 'success'
                                            : citizen.status === 'needs_update'
                                              ? 'warning'
                                              : 'default'
                                    }
                                />
                                <Chip
                                    size="small"
                                    variant="outlined"
                                    label={`${citizenGenderLabels[citizen.gender]}, ${citizen.age} лет`}
                                />
                            </Stack>
                        </Stack>

                        <Divider />

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <DetailRow label="Дата рождения" value={formatDate(citizen.birthDate)} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <DetailRow label="Телефон" value={citizen.phone} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <DetailRow label="Email" value={citizen.email ?? 'Не указан'} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <DetailRow
                                    label="Семейное положение"
                                    value={citizenMaritalStatusLabels[citizen.maritalStatus]}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <DetailRow label="Документы" value={String(citizen.documents.length)} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <DetailRow label="Члены семьи" value={String(citizen.family.length)} />
                            </Grid>
                        </Grid>

                        <Divider />

                        <Stack spacing={1}>
                            <Typography variant="subtitle2">Основной адрес</Typography>
                            <Typography color="text.secondary">
                                {citizen.addresses[0]
                                    ? `${citizen.addresses[0].region}, ${citizen.addresses[0].city}, ${citizen.addresses[0].street} ${citizen.addresses[0].house}`
                                    : 'Адрес не указан'}
                            </Typography>
                        </Stack>
                    </Stack>
                ) : null}
            </Stack>
        </CardContent>
    </Card>
)
