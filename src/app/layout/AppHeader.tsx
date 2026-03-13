import { Box, Chip, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const HeaderRoot = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'rgba(244, 247, 251, 0.88)',
    backdropFilter: 'blur(14px)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3, 4),
    },
}))

const HeaderRow = styled(Stack)(({ theme }) => ({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        alignItems: 'center',
    },
}))

export function AppHeader() {
    return (
        <HeaderRoot>
            <HeaderRow>
                <Stack spacing={0.5}>
                    <Typography variant="overline" color="primary.main">
                        Единая система
                    </Typography>
                    <Typography variant="h5">Реестр и аналитика</Typography>
                </Stack>

                <Chip
                    label="Демо-версия"
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
