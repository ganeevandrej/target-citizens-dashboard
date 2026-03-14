import {
    Chip,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

import { formatDate } from '@shared/lib/formatDate'
import { citizenStatusLabels } from '@shared/model/citizenLabels'
import type { CitizenListItem } from '@shared/types'

type CitizensTableProps = {
    citizens: CitizenListItem[]
    selectedCitizenId: string | null
    onSelectCitizen: (id: string) => void
}

const CitizensTableRoot = styled(Table)({
    minWidth: 760,
})

const CitizenRow = styled(TableRow)({
    cursor: 'pointer',
    '& .MuiTableCell-root': {
        borderBottomColor: 'divider',
    },
})

const getStatusChipColor = (status: CitizenListItem['status']) => {
    if (status === 'active') return 'success'
    if (status === 'needs_update') return 'warning'

    return 'default'
}

export const CitizensTable = ({
    citizens,
    selectedCitizenId,
    onSelectCitizen,
}: CitizensTableProps) => (
    <TableContainer>
        <CitizensTableRoot>
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
                    <CitizenRow
                        key={citizen.id}
                        hover
                        selected={citizen.id === selectedCitizenId}
                        onClick={() => onSelectCitizen(citizen.id)}
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
                    </CitizenRow>
                ))}
            </TableBody>
        </CitizensTableRoot>
    </TableContainer>
)
