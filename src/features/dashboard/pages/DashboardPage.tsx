export function DashboardPage() {
    return (
        <section className="page-section">
            <header className="page-header">
                <p className="page-kicker">Обзор</p>
                <h2>Дашборд</h2>
                <p className="page-description">
                    Здесь будут сводные метрики и графики с аналитикой по
                    гражданам.
                </p>
            </header>

            <div className="placeholder-grid">
                <article className="placeholder-card">
                    <h3>Всего граждан</h3>
                    <p>Заглушка для карточки с метрикой</p>
                </article>
                <article className="placeholder-card">
                    <h3>Средний возраст</h3>
                    <p>Заглушка для карточки с метрикой</p>
                </article>
                <article className="placeholder-card">
                    <h3>Графики</h3>
                    <p>Заглушка для области визуализаций</p>
                </article>
            </div>
        </section>
    )
}
