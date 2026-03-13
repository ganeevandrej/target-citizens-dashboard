import {
    Alert,
    Box,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Divider,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'

import { formatDate } from '@shared/lib/formatDate'
import { citizenStatusLabels } from '@shared/model/citizenLabels'
import type { CitizenListItem } from '@shared/types'

type CitizensListCardProps = {
    citizens: CitizenListItem[]
    selectedCitizenId: string | null
    isLoading: boolean
    error: string | null
    onSelectCitizen: (id: string) => void
}

const getStatusChipColor = (status: CitizenListItem['status']) => {
    if (status === 'active') return 'success'
    if (status === 'needs_update') return 'warning'

    return 'default'
}

export const CitizensListCard = ({
    citizens,
    selectedCitizenId,
    isLoading,
    error,
    onSelectCitizen,
}: CitizensListCardProps) => (
    <Card>
        <CardContent sx={{ p: 0 }}>
            <Stack spacing={0}>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1.5}
                    justifyContent="space-between"
                    sx={{ px: 3, py: 2.5 }}
                >
                    <Stack spacing={0.5}>
                        <Typography variant="h6">Реестр граждан</Typography>
                        <Typography color="text.secondary">
                            {isLoading
                                ? 'Загрузка данных реестра...'
                                : `Загружено записей из fake API: ${citizens.length}`}
                        </Typography>
                    </Stack>
                    <Chip
                        label={isLoading ? 'Загрузка' : `${citizens.length} записей`}
                        color="primary"
                        variant="outlined"
                    />
                </Stack>

                <Divider />

                {error ? (
                    <Box sx={{ p: 3 }}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                ) : null}

                {isLoading ? (
                    <Stack alignItems="center" spacing={2} sx={{ px: 3, py: 8 }}>
                        <CircularProgress size={28} />
                        <Typography color="text.secondary">Загрузка списка граждан...</Typography>
                    </Stack>
                ) : null}

                {!isLoading && !error && citizens.length === 0 ? (
                    <Box sx={{ p: 3 }}>
                        <Alert severity="info">Нет данных для отображения.</Alert>
                    </Box>
                ) : null}

                {!isLoading && !error && citizens.length > 0 ? (
                    <TableContainer>
                        <Table sx={{ minWidth: 760 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Гражданин</TableCell>
                                    <TableCell>Регион</TableCell>
                                    <TableCell>Город</TableCell>
                                    <TableCell>Статус</TableCell>
                                    <TableCell align="right">Возраст</TableCell>
                                    <TableCell align="right">Обновлено</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {citizens.map((citizen) => (
                                    <TableRow
                                        key={citizen.id}
                                        hover
                                        selected={citizen.id === selectedCitizenId}
                                        onClick={() => onSelectCitizen(citizen.id)}
                                        sx={{
                                            cursor: 'pointer',
                                            '& .MuiTableCell-root': {
                                                borderBottomColor: 'divider',
                                            },
                                        }}
                                    >
                                        <TableCell>
                                            <Stack spacing={0.25}>
                                                <Typography fontWeight={600}>{citizen.fullName}</Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    ID: {citizen.id}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>{citizen.region}</TableCell>
                                        <TableCell>{citizen.city}</TableCell>
                                        <TableCell>
                                            <Chip
                                                size="small"
                                                label={citizenStatusLabels[citizen.status]}
                                                color={getStatusChipColor(citizen.status)}
                                                variant="outlined"
                                            />
                                        </TableCell>
                                        <TableCell align="right">{citizen.age}</TableCell>
                                        <TableCell align="right">{formatDate(citizen.lastUpdatedAt)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : null}
            </Stack>
        </CardContent>
    </Card>
)
