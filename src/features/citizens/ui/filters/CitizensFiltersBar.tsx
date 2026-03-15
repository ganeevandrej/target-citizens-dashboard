import { Button, Card, CardContent, Stack, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useCitizensQueryContext } from '../../context'
import { citizenGenderOptions, citizenStatusOptions } from '../../model/citizenFilterOptions'
import { MultiFilterSelect } from './MultiFilterSelect'
import { CitizensSortSelect } from './CitizensSortSelect'

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

export const CitizensFiltersBar = () => {
    const {
        query,
        regionOptions,
        handleFiltersChange,
        handleSortChange,
        handleResetFilters,
    } = useCitizensQueryContext()

    return (
        <Card>
            <FiltersCardContent>
                <FiltersRow direction="row" spacing={2} useFlexGap>
                    <SearchField
                        placeholder="Поиск: ФИО, ID, город"
                        value={query.filters.search}
                        size="small"
                        onChange={(event) =>
                            handleFiltersChange({
                                ...query.filters,
                                search: event.target.value,
                            })
                        }
                    />

                    <CitizensSortSelect query={query} onSortChange={handleSortChange} />

                    <MultiFilterSelect
                        placeholder="Статус"
                        value={query.filters.statuses}
                        options={citizenStatusOptions}
                        onChange={(statuses) =>
                            handleFiltersChange({
                                ...query.filters,
                                statuses,
                            })
                        }
                    />

                    <MultiFilterSelect
                        placeholder="Регион"
                        value={query.filters.regions}
                        options={regionOptions.map((region) => ({ value: region, label: region }))}
                        onChange={(regions) =>
                            handleFiltersChange({
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
                            handleFiltersChange({
                                ...query.filters,
                                genders,
                            })
                        }
                    />

                    <ResetButton variant="text" size="small" onClick={handleResetFilters}>
                        Сбросить
                    </ResetButton>
                </FiltersRow>
            </FiltersCardContent>
        </Card>
    )
}
