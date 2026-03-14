import { FormControl, MenuItem, Select, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

type FilterOption<T extends string> = {
    value: T
    label: string
}

type MultiFilterSelectProps<T extends string> = {
    placeholder: string
    value: T[]
    options: FilterOption<T>[]
    onChange: (value: T[]) => void
}

const FilterControl = styled(FormControl)({
    flex: '0 0 auto',
    width: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    '& .MuiOutlinedInput-root': {
        minHeight: 40,
    },
    '@media (min-width:900px)': {
        width: 180,
        minWidth: 180,
        maxWidth: 180,
    },
})

const SelectedValue = styled('span')({
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
})

const getSummaryLabel = <T extends string>(
    placeholder: string,
    value: T[],
    options: FilterOption<T>[],
) => {
    if (value.length === 0) {
        return null
    }

    const selectedLabels = options
        .filter((option) => value.includes(option.value))
        .map((option) => option.label)

    if (selectedLabels.length === 1) return selectedLabels[0]
    if (selectedLabels.length === 2) return selectedLabels.join(', ')

    return `${placeholder}: выбраны все`
}

export const MultiFilterSelect = <T extends string>({
    placeholder,
    value,
    options,
    onChange,
}: MultiFilterSelectProps<T>) => (
    <FilterControl size="small">
        <Select
            multiple
            displayEmpty
            value={value}
            size="small"
            renderValue={(selected) => {
                const summaryLabel = getSummaryLabel(placeholder, selected as T[], options)

                if (!summaryLabel) {
                    return <Typography color="text.secondary">{placeholder}</Typography>
                }

                return <SelectedValue>{summaryLabel}</SelectedValue>
            }}
            onChange={(event) => onChange(event.target.value as T[])}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </Select>
    </FilterControl>
)
