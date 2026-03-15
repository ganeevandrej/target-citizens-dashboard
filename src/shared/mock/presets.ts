import type { Citizen } from '@shared/types'

export type NamePreset = {
    firstName: string
    lastName: string
    middleName: string
    gender: Citizen['gender']
}

export type LocationPreset = {
    region: string
    city: string
    weight: number
}

export const namePresets: NamePreset[] = [
    { firstName: 'Александр', lastName: 'Иванов', middleName: 'Александрович', gender: 'male' },
    { firstName: 'Мария', lastName: 'Петрова', middleName: 'Дмитриевна', gender: 'female' },
    { firstName: 'Дмитрий', lastName: 'Смирнов', middleName: 'Сергеевич', gender: 'male' },
    { firstName: 'Екатерина', lastName: 'Кузнецова', middleName: 'Андреевна', gender: 'female' },
    { firstName: 'Сергей', lastName: 'Попов', middleName: 'Ильич', gender: 'male' },
    { firstName: 'Анна', lastName: 'Соколова', middleName: 'Максимовна', gender: 'female' },
    { firstName: 'Илья', lastName: 'Лебедев', middleName: 'Андреевич', gender: 'male' },
    { firstName: 'Наталья', lastName: 'Козлова', middleName: 'Сергеевна', gender: 'female' },
    { firstName: 'Андрей', lastName: 'Новиков', middleName: 'Дмитриевич', gender: 'male' },
    { firstName: 'Ольга', lastName: 'Морозова', middleName: 'Ильинична', gender: 'female' },
    { firstName: 'Максим', lastName: 'Волков', middleName: 'Максимович', gender: 'male' },
    { firstName: 'Дарья', lastName: 'Соловьева', middleName: 'Александровна', gender: 'female' },
]

export const locationPresets: LocationPreset[] = [
    { region: 'Москва', city: 'Москва', weight: 20 },
    { region: 'Санкт-Петербург', city: 'Санкт-Петербург', weight: 14 },
    { region: 'Республика Татарстан', city: 'Казань', weight: 10 },
    { region: 'Свердловская область', city: 'Екатеринбург', weight: 9 },
    { region: 'Новосибирская область', city: 'Новосибирск', weight: 8 },
    { region: 'Краснодарский край', city: 'Краснодар', weight: 7 },
    { region: 'Краснодарский край', city: 'Сочи', weight: 4 },
    { region: 'Самарская область', city: 'Самара', weight: 6 },
    { region: 'Нижегородская область', city: 'Нижний Новгород', weight: 5 },
    { region: 'Ростовская область', city: 'Ростов-на-Дону', weight: 4 },
    { region: 'Челябинская область', city: 'Челябинск', weight: 3 },
]

export const streetNames = [
    'Центральная улица',
    'Советская улица',
    'Лесная улица',
    'Парковый проспект',
    'Речная улица',
    'Промышленный проезд',
    'Северный проспект',
    'Молодежная улица',
]

export const universities = [
    { institution: 'Московский технический университет', specialization: 'Информационные системы' },
    { institution: 'Университет ИТМО', specialization: 'Прикладная информатика' },
    { institution: 'Казанский федеральный университет', specialization: 'Социология' },
    { institution: 'Уральский федеральный университет', specialization: 'Машиностроение' },
    { institution: 'Новосибирский государственный университет', specialization: 'Экономика' },
    { institution: 'Кубанский государственный университет', specialization: 'Государственное управление' },
]

export const sourceSystems = [
    'Федеральный реестр',
    'Региональный сегмент',
    'Шлюз МФЦ',
    'Портал гражданина',
    'Call-центр',
    'Архивный импорт',
]

export const curatorNames = [
    'Оператор 01',
    'Оператор 02',
    'Оператор 03',
    'Оператор 04',
    'Оператор 05',
    'Оператор 06',
]

export const documentIssuers = [
    'Министерство внутренних дел',
    'Региональный сервисный центр',
    'Отделение ГИБДД',
    'Пенсионный фонд',
]

export const historyActions = [
    'Проверка профиля',
    'Обновление данных',
    'Запрос документов',
    'Проверка завершена',
    'Ручная сверка',
]

export const commentTemplates = [
    'Профиль требует дополнительной проверки.',
    'Гражданин обновил контактные данные через портал.',
    'Данные синхронизированы с региональным сегментом.',
    'Ручная проверка завершена без критичных замечаний.',
]
