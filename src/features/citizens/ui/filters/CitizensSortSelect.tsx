import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import type { CitizensQuery } from '@shared/types'

import {
    citizenSortOptions,
    getSortOptionValue,
    parseSortOptionValue,
    type SortOptionValue,
} from '../../model/citizensSort'

type CitizensSortSelectProps = {
    query: CitizensQuery
    onSortChange: (sortBy: CitizensQuery['sortBy'], sortDirection: CitizensQuery['sortDirection']) => void
}

const SortFieldControl = styled(FormControl)({
    flex: '0 0 auto',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    '& .MuiOutlinedInput-root': {
        minHeight: 40,
    },
    '@media (min-width:900px)': {
        width: 240,
        minWidth: 240,
        maxWidth: 240,
    },
})

export const CitizensSortSelect = ({ query, onSortChange }: CitizensSortSelectProps) => {
    const handleChange = (value: SortOptionValue) => {
        const nextSort = parseSortOptionValue(value)
        onSortChange(nextSort.sortBy, nextSort.sortDirection)
    }

    const renderSelectedValue = (selected: unknown) => {
        const currentOption = citizenSortOptions.find((option) => option.value === selected)

        if (!currentOption) {
            return <Typography color="text.secondary">Сортировка</Typography>
        }

        return <Typography noWrap>{currentOption.label}</Typography>
    }

    return (
        <SortFieldControl size="small">
            <Select
                displayEmpty
                value={getSortOptionValue(query)}
                size="small"
                renderValue={renderSelectedValue}
                onChange={(event) => handleChange(event.target.value as SortOptionValue)}
            >
                {citizenSortOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </SortFieldControl>
    )
}
