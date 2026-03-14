import type { Citizen, CitizenListItem } from '@shared/types'

const buildServiceMeta = (
    serviceMeta: Citizen['serviceMeta'],
): Citizen['serviceMeta'] => serviceMeta

const buildComments = (comments: Citizen['comments']): Citizen['comments'] => comments

const buildHistory = (history: Citizen['history']): Citizen['history'] => history

export const mockCitizens: Citizen[] = [
    {
        id: 'citizen-001',
        fullName: 'Иван Петров',
        birthDate: '1989-04-12',
        age: 36,
        gender: 'male',
        status: 'active',
        region: 'Москва',
        city: 'Москва',
        lastUpdatedAt: '2026-03-05T10:12:00.000Z',
        phone: '+7 999 123-45-67',
        email: 'ivan.petrov@example.ru',
        maritalStatus: 'married',
        documents: [
            {
                id: 'doc-001',
                name: 'Паспорт',
                number: '4510 123456',
                issuedAt: '2015-06-20',
                issuedBy: 'ГУ МВД России по г. Москве',
            },
            {
                id: 'doc-002',
                name: 'Водительское удостоверение',
                number: '77 15 998877',
                issuedAt: '2021-11-03',
                issuedBy: 'Отделение ГИБДД',
            },
        ],
        addresses: [
            {
                id: 'addr-001',
                label: 'registration',
                region: 'Москва',
                city: 'Москва',
                street: 'Тверская улица',
                house: '18',
                apartment: '42',
            },
            {
                id: 'addr-002',
                label: 'residential',
                region: 'Москва',
                city: 'Москва',
                street: 'Профсоюзная улица',
                house: '91',
                apartment: '15',
            },
        ],
        family: [
            {
                id: 'family-001',
                fullName: 'Елена Петрова',
                relation: 'spouse',
                birthDate: '1990-09-16',
            },
            {
                id: 'family-002',
                fullName: 'Михаил Петров',
                relation: 'child',
                birthDate: '2017-02-01',
            },
        ],
        education: [
            {
                id: 'edu-001',
                institution: 'МГТУ им. Н. Э. Баумана',
                specialization: 'Информационные системы',
                graduatedAt: '2011-06-30',
            },
        ],
        serviceMeta: buildServiceMeta({
            profileStatus: 'verified',
            verificationStatus: 'verified',
            riskLevel: 'low',
            curator: 'Мария Соколова',
            sourceSystem: 'Федеральный реестр',
            lastReviewAt: '2026-03-06T09:30:00.000Z',
        }),
        comments: buildComments([
            {
                id: 'comment-001',
                author: 'Мария Соколова',
                createdAt: '2026-03-06T10:00:00.000Z',
                text: 'Профиль актуализирован после сверки паспортных данных.',
            },
        ]),
        history: buildHistory([
            {
                id: 'history-001',
                createdAt: '2026-03-06T09:30:00.000Z',
                actor: 'Мария Соколова',
                action: 'Проверка профиля',
                description: 'Подтверждены основные документы и контактные данные.',
            },
        ]),
    },
    {
        id: 'citizen-002',
        fullName: 'Анна Смирнова',
        birthDate: '1995-08-27',
        age: 30,
        gender: 'female',
        status: 'needs_update',
        region: 'Санкт-Петербург',
        city: 'Санкт-Петербург',
        lastUpdatedAt: '2026-02-28T14:20:00.000Z',
        phone: '+7 921 222-11-00',
        email: 'anna.smirnova@example.ru',
        maritalStatus: 'single',
        documents: [
            {
                id: 'doc-003',
                name: 'Паспорт',
                number: '4012 654321',
                issuedAt: '2016-09-15',
                issuedBy: 'ГУ МВД России по г. Санкт-Петербургу',
            },
        ],
        addresses: [
            {
                id: 'addr-003',
                label: 'registration',
                region: 'Санкт-Петербург',
                city: 'Санкт-Петербург',
                street: 'Невский проспект',
                house: '75',
                apartment: '18',
            },
        ],
        family: [],
        education: [
            {
                id: 'edu-002',
                institution: 'Университет ИТМО',
                specialization: 'Прикладная информатика',
                graduatedAt: '2018-07-05',
            },
        ],
        serviceMeta: buildServiceMeta({
            profileStatus: 'on_review',
            verificationStatus: 'needs_documents',
            riskLevel: 'medium',
            curator: 'Алексей Миронов',
            sourceSystem: 'МФЦ Северо-Запад',
            lastReviewAt: '2026-03-01T11:20:00.000Z',
        }),
        comments: buildComments([
            {
                id: 'comment-002',
                author: 'Алексей Миронов',
                createdAt: '2026-03-01T11:40:00.000Z',
                text: 'Ожидаются подтверждающие документы по месту проживания.',
            },
        ]),
        history: buildHistory([
            {
                id: 'history-002',
                createdAt: '2026-03-01T11:20:00.000Z',
                actor: 'Алексей Миронов',
                action: 'Запрос документов',
                description: 'Создан запрос на подтверждение адреса регистрации.',
            },
        ]),
    },
    {
        id: 'citizen-003',
        fullName: 'Сергей Иванов',
        birthDate: '1978-01-05',
        age: 48,
        gender: 'male',
        status: 'active',
        region: 'Новосибирская область',
        city: 'Новосибирск',
        lastUpdatedAt: '2026-03-01T08:45:00.000Z',
        phone: '+7 913 700-55-10',
        email: null,
        maritalStatus: 'divorced',
        documents: [
            {
                id: 'doc-004',
                name: 'Паспорт',
                number: '5001 112233',
                issuedAt: '2012-01-22',
                issuedBy: 'ГУ МВД России по Новосибирской области',
            },
        ],
        addresses: [
            {
                id: 'addr-004',
                label: 'registration',
                region: 'Новосибирская область',
                city: 'Новосибирск',
                street: 'Красный проспект',
                house: '120',
                apartment: '84',
            },
            {
                id: 'addr-005',
                label: 'residential',
                region: 'Новосибирская область',
                city: 'Бердск',
                street: 'улица Ленина',
                house: '9',
                apartment: null,
            },
        ],
        family: [
            {
                id: 'family-003',
                fullName: 'Николай Иванов',
                relation: 'parent',
                birthDate: '1954-12-11',
            },
        ],
        education: [
            {
                id: 'edu-003',
                institution: 'Новосибирский государственный университет',
                specialization: 'Экономика',
                graduatedAt: '2000-06-28',
            },
        ],
        serviceMeta: buildServiceMeta({
            profileStatus: 'verified',
            verificationStatus: 'verified',
            riskLevel: 'low',
            curator: 'Елена Власова',
            sourceSystem: 'Региональный сегмент СФО',
            lastReviewAt: '2026-03-02T08:10:00.000Z',
        }),
        comments: buildComments([
            {
                id: 'comment-003',
                author: 'Елена Власова',
                createdAt: '2026-03-02T08:12:00.000Z',
                text: 'Профиль синхронизирован с региональным сегментом без расхождений.',
            },
        ]),
        history: buildHistory([
            {
                id: 'history-003',
                createdAt: '2026-03-02T08:10:00.000Z',
                actor: 'Елена Власова',
                action: 'Синхронизация',
                description: 'Выполнена ночная синхронизация карточки.',
            },
        ]),
    },
    {
        id: 'citizen-004',
        fullName: 'Ольга Волкова',
        birthDate: '1984-11-19',
        age: 41,
        gender: 'female',
        status: 'archived',
        region: 'Краснодарский край',
        city: 'Сочи',
        lastUpdatedAt: '2025-12-19T17:31:00.000Z',
        phone: '+7 918 444-21-90',
        email: 'olga.volkova@example.ru',
        maritalStatus: 'married',
        documents: [
            {
                id: 'doc-005',
                name: 'Паспорт',
                number: '0309 777111',
                issuedAt: '2014-03-10',
                issuedBy: 'ГУ МВД России по Краснодарскому краю',
            },
        ],
        addresses: [
            {
                id: 'addr-006',
                label: 'registration',
                region: 'Краснодарский край',
                city: 'Сочи',
                street: 'Курортный проспект',
                house: '50',
                apartment: '9',
            },
        ],
        family: [
            {
                id: 'family-004',
                fullName: 'Алексей Волков',
                relation: 'spouse',
                birthDate: '1982-03-08',
            },
        ],
        education: [
            {
                id: 'edu-004',
                institution: 'Кубанский государственный университет',
                specialization: 'Государственное управление',
                graduatedAt: '2006-06-15',
            },
        ],
        serviceMeta: buildServiceMeta({
            profileStatus: 'new',
            verificationStatus: 'pending',
            riskLevel: 'high',
            curator: 'Наталья Орлова',
            sourceSystem: 'Импорт архива',
            lastReviewAt: null,
        }),
        comments: buildComments([
            {
                id: 'comment-004',
                author: 'Наталья Орлова',
                createdAt: '2026-02-20T15:10:00.000Z',
                text: 'Архивная запись требует ручной ревизии перед восстановлением.',
            },
        ]),
        history: buildHistory([
            {
                id: 'history-004',
                createdAt: '2026-02-20T15:00:00.000Z',
                actor: 'Наталья Орлова',
                action: 'Импорт из архива',
                description: 'Карточка перенесена в новый контур из архивного реестра.',
            },
        ]),
    },
    {
        id: 'citizen-005',
        fullName: 'Дарья Кузнецова',
        birthDate: '2001-06-14',
        age: 24,
        gender: 'female',
        status: 'active',
        region: 'Республика Татарстан',
        city: 'Казань',
        lastUpdatedAt: '2026-03-09T11:05:00.000Z',
        phone: '+7 987 100-20-30',
        email: 'daria.k@example.ru',
        maritalStatus: 'single',
        documents: [
            {
                id: 'doc-006',
                name: 'Паспорт',
                number: '9214 333222',
                issuedAt: '2021-07-01',
                issuedBy: 'ГУ МВД России по Республике Татарстан',
            },
        ],
        addresses: [
            {
                id: 'addr-007',
                label: 'registration',
                region: 'Республика Татарстан',
                city: 'Казань',
                street: 'улица Баумана',
                house: '13',
                apartment: '21',
            },
        ],
        family: [],
        education: [
            {
                id: 'edu-005',
                institution: 'Казанский федеральный университет',
                specialization: 'Социология',
                graduatedAt: null,
            },
        ],
        serviceMeta: buildServiceMeta({
            profileStatus: 'verified',
            verificationStatus: 'pending',
            riskLevel: 'medium',
            curator: 'Светлана Ермакова',
            sourceSystem: 'Единый личный кабинет',
            lastReviewAt: '2026-03-10T13:00:00.000Z',
        }),
        comments: buildComments([
            {
                id: 'comment-005',
                author: 'Светлана Ермакова',
                createdAt: '2026-03-10T13:05:00.000Z',
                text: 'Пользователь обновил контакты, ожидается повторная верификация.',
            },
        ]),
        history: buildHistory([
            {
                id: 'history-005',
                createdAt: '2026-03-10T13:00:00.000Z',
                actor: 'Светлана Ермакова',
                action: 'Обновление контактов',
                description: 'Изменены email и телефон через личный кабинет.',
            },
        ]),
    },
    {
        id: 'citizen-006',
        fullName: 'Павел Соколов',
        birthDate: '1967-02-22',
        age: 59,
        gender: 'male',
        status: 'needs_update',
        region: 'Свердловская область',
        city: 'Екатеринбург',
        lastUpdatedAt: '2026-01-17T09:55:00.000Z',
        phone: '+7 912 808-77-66',
        email: null,
        maritalStatus: 'married',
        documents: [
            {
                id: 'doc-007',
                name: 'Паспорт',
                number: '6508 991100',
                issuedAt: '2011-10-12',
                issuedBy: 'ГУ МВД России по Свердловской области',
            },
            {
                id: 'doc-008',
                name: 'СНИЛС',
                number: '112-233-445 95',
                issuedAt: '2003-04-18',
                issuedBy: 'Пенсионный фонд',
            },
        ],
        addresses: [
            {
                id: 'addr-008',
                label: 'registration',
                region: 'Свердловская область',
                city: 'Екатеринбург',
                street: 'улица Малышева',
                house: '44',
                apartment: '110',
            },
        ],
        family: [
            {
                id: 'family-005',
                fullName: 'Ирина Соколова',
                relation: 'spouse',
                birthDate: '1969-07-27',
            },
            {
                id: 'family-006',
                fullName: 'Роман Соколов',
                relation: 'child',
                birthDate: '1998-05-12',
            },
        ],
        education: [
            {
                id: 'edu-006',
                institution: 'Уральский федеральный университет',
                specialization: 'Машиностроение',
                graduatedAt: '1989-06-20',
            },
        ],
        serviceMeta: buildServiceMeta({
            profileStatus: 'on_review',
            verificationStatus: 'needs_documents',
            riskLevel: 'high',
            curator: 'Игорь Демин',
            sourceSystem: 'Call-центр',
            lastReviewAt: '2026-01-18T09:40:00.000Z',
        }),
        comments: buildComments([
            {
                id: 'comment-006',
                author: 'Игорь Демин',
                createdAt: '2026-01-18T09:42:00.000Z',
                text: 'Требуется дослать СНИЛС в читаемом виде и подтвердить семейный статус.',
            },
        ]),
        history: buildHistory([
            {
                id: 'history-006',
                createdAt: '2026-01-18T09:40:00.000Z',
                actor: 'Игорь Демин',
                action: 'Ручная проверка',
                description: 'Обнаружены неполные данные в связанных документах.',
            },
        ]),
    },
]

export const mockCitizenListItems: CitizenListItem[] = mockCitizens.map((citizen) => ({
    id: citizen.id,
    fullName: citizen.fullName,
    birthDate: citizen.birthDate,
    age: citizen.age,
    gender: citizen.gender,
    status: citizen.status,
    region: citizen.region,
    city: citizen.city,
    lastUpdatedAt: citizen.lastUpdatedAt,
}))
