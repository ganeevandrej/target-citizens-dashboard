import { Chip, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { List, type RowComponentProps } from 'react-window'

import { formatDate } from '@shared/lib/formatDate'
import { citizenStatusLabels } from '@shared/model/citizenLabels'
import type { CitizenListItem } from '@shared/types'

type CitizensTableProps = {
    citizens: CitizenListItem[]
    selectedCitizenId: string | null
    onSelectCitizen: (id: string) => void
}

type CitizensVirtualRowData = {
    citizens: CitizenListItem[]
    selectedCitizenId: string | null
    onSelectCitizen: (id: string) => void
}

const rowHeight = 72
const maxVisibleRows = 7
const headerGridColumns = 'minmax(260px, 2.4fr) minmax(180px, 1.3fr) minmax(160px, 1.2fr) minmax(150px, 1fr) 88px 150px'

const TableRoot = styled('div')(({ theme }) => ({
    minWidth: 960,
    borderBottom: `1px solid ${theme.palette.divider}`,
}))

const TableHeader = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: headerGridColumns,
    gap: theme.spacing(2),
    alignItems: 'center',
    minHeight: 56,
    padding: theme.spacing(0, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background.paper,
}))

const HeaderCell = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: 13,
    fontWeight: 700,
}))

const ListViewport = styled('div')({
    overflowX: 'auto',
    overflowY: 'hidden',
})

const CitizenRowButton = styled('button', {
    shouldForwardProp: (prop) => prop !== 'isselected',
})<{ isselected: boolean }>(({ theme, isselected }) => ({
    display: 'grid',
    gridTemplateColumns: headerGridColumns,
    gap: theme.spacing(2),
    alignItems: 'center',
    width: '100%',
    minHeight: rowHeight,
    padding: theme.spacing(1.5, 3),
    border: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: isselected ? theme.palette.action.selected : theme.palette.background.paper,
    cursor: 'pointer',
    textAlign: 'left',
    font: 'inherit',
    '&:hover': {
        backgroundColor: isselected ? theme.palette.action.selected : theme.palette.action.hover,
    },
}))

const NumericCell = styled(Typography)({
    textAlign: 'right',
})

const getStatusChipColor = (status: CitizenListItem['status']) => {
    if (status === 'active') return 'success'
    if (status === 'needs_update') return 'warning'

    return 'default'
}

const CitizensVirtualRow = ({
    index,
    style,
    citizens,
    selectedCitizenId,
    onSelectCitizen,
}: RowComponentProps<CitizensVirtualRowData>) => {
    const citizen = citizens[index]

    return (
        <div style={style}>
            <CitizenRowButton
                type="button"
                isselected={citizen.id === selectedCitizenId}
                onClick={() => onSelectCitizen(citizen.id)}
            >
                <Stack spacing={0.25} minWidth={0}>
                    <Typography fontWeight={600} noWrap>
                        {citizen.fullName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        ID: {citizen.id}
                    </Typography>
                </Stack>

                <Typography noWrap>{citizen.region}</Typography>
                <Typography noWrap>{citizen.city}</Typography>

                <Chip
                    size="small"
                    label={citizenStatusLabels[citizen.status]}
                    color={getStatusChipColor(citizen.status)}
                    variant="outlined"
                    sx={{ justifySelf: 'start' }}
                />

                <NumericCell>{citizen.age}</NumericCell>
                <NumericCell>{formatDate(citizen.lastUpdatedAt)}</NumericCell>
            </CitizenRowButton>
        </div>
    )
}

CitizensVirtualRow.displayName = 'CitizensVirtualRow'

export const CitizensTable = ({
    citizens,
    selectedCitizenId,
    onSelectCitizen,
}: CitizensTableProps) => {
    const listHeight = Math.min(citizens.length, maxVisibleRows) * rowHeight

    return (
        <ListViewport>
            <TableRoot>
                <TableHeader>
                    <HeaderCell>Гражданин</HeaderCell>
                    <HeaderCell>Регион</HeaderCell>
                    <HeaderCell>Город</HeaderCell>
                    <HeaderCell>Статус</HeaderCell>
                    <HeaderCell align="right">Возраст</HeaderCell>
                    <HeaderCell align="right">Обновлено</HeaderCell>
                </TableHeader>

                <List<CitizensVirtualRowData>
                    style={{ height: listHeight, minWidth: 960, width: '100%' }}
                    rowCount={citizens.length}
                    rowHeight={rowHeight}
                    overscanCount={6}
                    rowComponent={CitizensVirtualRow}
                    rowProps={{
                        citizens,
                        selectedCitizenId,
                        onSelectCitizen,
                    }}
                />
            </TableRoot>
        </ListViewport>
    )
}
