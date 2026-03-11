import { NavLink, Outlet } from 'react-router-dom'

const navigationItems = [
    { to: '/dashboard', label: 'Дашборд' },
    { to: '/citizens', label: 'Граждане' },
]

export function AppLayout() {
    return (
        <div className="layout">
            <header className="header">
                <h1>Тестовое задание</h1>
            </header>

            <nav className="nav" aria-label="Основная навигация">
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.to}
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                        to={item.to}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <main className="main">
                <Outlet />
            </main>
        </div>
    )
}
