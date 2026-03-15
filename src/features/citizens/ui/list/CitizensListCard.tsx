import { Card, CardContent, Divider, Stack, TablePagination } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useCitizensQueryContext, useCitizensSelectionContext } from '../../context'
import { CitizensSectionState } from '../states'
import { CitizensListHeader } from './CitizensListHeader'
import { CitizensTable } from './CitizensTable'

const ListCardContent = styled(CardContent)({
    padding: 0,
})

export const CitizensListCard = () => {
    const {
        citizens,
        total,
        query,
        isListLoading,
        listError,
        handlePageChange,
        handlePageSizeChange,
    } = useCitizensQueryContext()
    const { selectedCitizenId, handleSelectCitizen } = useCitizensSelectionContext()

    return (
        <Card>
            <ListCardContent>
                <Stack spacing={0}>
                    <CitizensListHeader
                        isLoading={isListLoading}
                        total={total}
                        currentCount={citizens.length}
                    />

                    <Divider />

                    {listError ? (
                        <CitizensSectionState
                            kind="message"
                            severity="error"
                            message={listError}
                            padding="list"
                        />
                    ) : null}

                    {isListLoading ? (
                        <CitizensSectionState
                            kind="loading"
                            message="Загрузка списка граждан..."
                            padding="list"
                        />
                    ) : null}

                    {!isListLoading && !listError && total === 0 ? (
                        <CitizensSectionState
                            kind="message"
                            severity="info"
                            message="По текущему запросу записи не найдены."
                            padding="list"
                        />
                    ) : null}

                    {!isListLoading && !listError && total > 0 ? (
                        <>
                            <CitizensTable
                                citizens={citizens}
                                selectedCitizenId={selectedCitizenId}
                                onSelectCitizen={handleSelectCitizen}
                            />

                            <TablePagination
                                component="div"
                                count={total}
                                page={query.page - 1}
                                onPageChange={(_, nextPage) => handlePageChange(nextPage + 1)}
                                rowsPerPage={query.pageSize}
                                onRowsPerPageChange={(event) => handlePageSizeChange(Number(event.target.value))}
                                rowsPerPageOptions={[5, 10, 20, 50, 100, 500, 1000]}
                                labelRowsPerPage="Записей на странице"
                            />
                        </>
                    ) : null}
                </Stack>
            </ListCardContent>
        </Card>
    )
}
