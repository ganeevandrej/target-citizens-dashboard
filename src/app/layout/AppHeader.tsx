import { Box, Chip, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const HeaderRoot = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.25, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(244, 247, 251, 0.88)',
    backdropFilter: 'blur(14px)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(1.5, 4),
    },
}))

const HeaderRow = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
}))

export function AppHeader() {
    return (
        <HeaderRoot>
            <HeaderRow>
                <Typography variant="h6">Система учета граждан</Typography>

                <Chip
                    label="Демо-версия"
                    size="small"
                    sx={{
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                    }}
                />
            </HeaderRow>
        </HeaderRoot>
    )
}
