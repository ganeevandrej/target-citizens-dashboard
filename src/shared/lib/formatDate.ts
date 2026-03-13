export const formatDate = (value: string, locale = 'ru-RU') =>
    new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(new Date(value))
