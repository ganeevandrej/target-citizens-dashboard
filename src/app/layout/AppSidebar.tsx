import { Box, ButtonBase, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'

import { layoutNavigationItems } from './layoutNavigation'

const SidebarRoot = styled(Box)(({ theme }) => ({
    width: 0,
    flexShrink: 0,
    display: 'none',
    borderRight: `1px solid ${theme.palette.divider}`,
    background:
        'linear-gradient(180deg, rgba(10, 19, 34, 0.96) 0%, rgba(15, 23, 42, 0.98) 100%)',
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
        width: 296,
        display: 'block',
    },
}))

const SidebarInner = styled(Stack)(({ theme }) => ({
    height: '100vh',
    padding: theme.spacing(3),
    position: 'sticky',
    top: 0,
}))

const SidebarTitle = styled(Typography)({
    color: 'rgba(255,255,255,0.64)',
})

const SidebarNav = styled(Stack)({
    flexGrow: 1,
})

const StyledSidebarNavItem = styled('div', {
    shouldForwardProp: (prop) => prop !== 'navdisabled',
})<{ navdisabled?: boolean }>(({ navdisabled }) => ({
    width: '100%',
    '& .sidebar-nav-button': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    width: '100%',
    padding: '12px 14px',
    borderRadius: 12,
    font: 'inherit',
    fontWeight: 600,
    color: navdisabled ? 'rgba(255,255,255,0.42)' : 'rgba(255,255,255,0.72)',
    border: '1px solid transparent',
    opacity: navdisabled ? 0.72 : 1,
    },
    '& .sidebar-nav-button.active': {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#ffffff',
        borderColor: 'rgba(255,255,255,0.1)',
    },
    '& .sidebar-nav-button:hover': navdisabled
        ? undefined
        : {
              backgroundColor: 'rgba(255,255,255,0.06)',
          },
}))

export function AppSidebar() {
    return (
        <SidebarRoot as="aside">
            <SidebarInner spacing={4}>
                <Stack spacing={0.5}>
                    <SidebarTitle variant="overline">Тестовое задание</SidebarTitle>
                    <Typography variant="h6" sx={{ color: 'common.white' }}>
                        Картотека граждан
                    </Typography>
                </Stack>

                <SidebarNav spacing={1}>
                    {layoutNavigationItems.map(({ to, label, icon: Icon, disabled }) => (
                        <StyledSidebarNavItem key={label} navdisabled={disabled}>
                            <ButtonBase
                                className="sidebar-nav-button"
                                component={disabled ? 'button' : NavLink}
                                to={disabled ? undefined : to}
                                disabled={disabled}
                            >
                                <Icon fontSize="small" />
                                <span>{label}</span>
                            </ButtonBase>
                        </StyledSidebarNavItem>
                    ))}
                </SidebarNav>
            </SidebarInner>
        </SidebarRoot>
    )
}
