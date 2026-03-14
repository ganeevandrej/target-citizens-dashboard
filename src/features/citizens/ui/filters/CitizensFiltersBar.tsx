import { Button, Card, CardContent, Stack, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

import type { CitizenFilters, CitizensQuery } from '@shared/types'

import { MultiFilterSelect } from './MultiFilterSelect'
import { CitizensSortSelect } from './CitizensSortSelect'
import {
    citizenGenderOptions,
    citizenRegionOptions,
    citizenStatusOptions,
} from '../../model/citizenFilterOptions'

type CitizensFiltersBarProps = {
    query: CitizensQuery
    onFiltersChange: (filters: CitizenFilters) => void
    onSortChange: (sortBy: CitizensQuery['sortBy'], sortDirection: CitizensQuery['sortDirection']) => void
    onReset: () => void
}

const FiltersCardContent = styled(CardContent)({
    padding: 24,
})

const FiltersRow = styled(Stack)({
    flexWrap: 'wrap',
    alignItems: 'center',
})

const SearchField = styled(TextField)({
    flex: '1 1 260px',
    minWidth: 260,
    '& .MuiOutlinedInput-root': {
        minHeight: 40,
    },
})

const ResetButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        marginLeft: 'auto',
    },
}))

export const CitizensFiltersBar = ({
    query,
    onFiltersChange,
    onSortChange,
    onReset,
}: CitizensFiltersBarProps) => (
    <Card>
        <FiltersCardContent>
            <Stack spacing={2}>
                <FiltersRow direction="row" spacing={2} useFlexGap>
                    <SearchField
                        placeholder="Поиск: ФИО, ID, город"
                        value={query.filters.search}
                        size="small"
                        onChange={(event) =>
                            onFiltersChange({
                                ...query.filters,
                                search: event.target.value,
                            })
                        }
                    />

                    <CitizensSortSelect query={query} onSortChange={onSortChange} />

                    <MultiFilterSelect
                        placeholder="Статус"
                        value={query.filters.statuses}
                        options={citizenStatusOptions}
                        onChange={(statuses) =>
                            onFiltersChange({
                                ...query.filters,
                                statuses,
                            })
                        }
                    />

                    <MultiFilterSelect
                        placeholder="Регион"
                        value={query.filters.regions}
                        options={citizenRegionOptions.map((region) => ({ value: region, label: region }))}
                        onChange={(regions) =>
                            onFiltersChange({
                                ...query.filters,
                                regions,
                            })
                        }
                    />

                    <MultiFilterSelect
                        placeholder="Пол"
                        value={query.filters.genders}
                        options={citizenGenderOptions}
                        onChange={(genders) =>
                            onFiltersChange({
                                ...query.filters,
                                genders,
                            })
                        }
                    />

                    <ResetButton variant="text" size="small" onClick={onReset}>
                        Сбросить
                    </ResetButton>
                </FiltersRow>
            </Stack>
        </FiltersCardContent>
    </Card>
)
