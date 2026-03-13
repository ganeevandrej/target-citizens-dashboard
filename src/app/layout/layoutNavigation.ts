import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import type { SvgIconComponent } from '@mui/icons-material'

export type LayoutNavigationItem = {
    to: string
    label: string
    icon: SvgIconComponent
    disabled: boolean
}

export const layoutNavigationItems: LayoutNavigationItem[] = [
    {
        to: '/dashboard',
        label: 'Дашборд',
        icon: DashboardRoundedIcon,
        disabled: false,
    },
    {
        to: '/citizens',
        label: 'Граждане',
        icon: PeopleAltRoundedIcon,
        disabled: false,
    },
    {
        to: '#',
        label: 'Отчеты',
        icon: DescriptionRoundedIcon,
        disabled: true,
    },
    {
        to: '#',
        label: 'Настройки',
        icon: SettingsRoundedIcon,
        disabled: true,
    },
]
