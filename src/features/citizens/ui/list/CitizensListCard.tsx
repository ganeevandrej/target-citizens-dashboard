import { Card, CardContent, Divider, Stack, TablePagination } from '@mui/material'
import { styled } from '@mui/material/styles'

import type { CitizenListItem } from '@shared/types'

import { CitizensSectionState } from '../states'
import { CitizensListHeader } from './CitizensListHeader'
import { CitizensTable } from './CitizensTable'

type CitizensListCardProps = {
    citizens: CitizenListItem[]
    total: number
    page: number
    pageSize: number
    selectedCitizenId: string | null
    isLoading: boolean
    error: string | null
    onSelectCitizen: (id: string) => void
    onPageChange: (page: number) => void
    onPageSizeChange: (pageSize: number) => void
}

const ListCardContent = styled(CardContent)({
    padding: 0,
})

export const CitizensListCard = ({
    citizens,
    total,
    page,
    pageSize,
    selectedCitizenId,
    isLoading,
    error,
    onSelectCitizen,
    onPageChange,
    onPageSizeChange,
}: CitizensListCardProps) => (
    <Card>
        <ListCardContent>
            <Stack spacing={0}>
                <CitizensListHeader
                    isLoading={isLoading}
                    total={total}
                    currentCount={citizens.length}
                />

                <Divider />

                {error ? (
                    <CitizensSectionState
                        kind="message"
                        severity="error"
                        message={error}
                        padding="list"
                    />
                ) : null}

                {isLoading ? (
                    <CitizensSectionState
                        kind="loading"
                        message="Загрузка списка граждан..."
                        padding="list"
                    />
                ) : null}

                {!isLoading && !error && total === 0 ? (
                    <CitizensSectionState
                        kind="message"
                        severity="info"
                        message="По текущему запросу записи не найдены."
                        padding="list"
                    />
                ) : null}

                {!isLoading && !error && total > 0 ? (
                    <>
                        <CitizensTable
                            citizens={citizens}
                            selectedCitizenId={selectedCitizenId}
                            onSelectCitizen={onSelectCitizen}
                        />

                        <TablePagination
                            component="div"
                            count={total}
                            page={page - 1}
                            onPageChange={(_, nextPage) => onPageChange(nextPage + 1)}
                            rowsPerPage={pageSize}
                            onRowsPerPageChange={(event) => onPageSizeChange(Number(event.target.value))}
                            rowsPerPageOptions={[5, 10, 20]}
                            labelRowsPerPage="Записей на странице"
                        />
                    </>
                ) : null}
            </Stack>
        </ListCardContent>
    </Card>
)
