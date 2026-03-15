import { z } from 'zod'

const requiredText = z.string().trim().min(1, 'Поле обязательно для заполнения.')
const optionalText = z.string().trim().min(1, 'Поле обязательно для заполнения.').nullable()
const requiredDate = z.string().min(1, 'Дата обязательна.')

const documentSchema = z.object({
    id: requiredText,
    name: requiredText,
    number: requiredText,
    issuedAt: requiredDate,
    issuedBy: requiredText,
})

const addressSchema = z.object({
    id: requiredText,
    label: z.enum(['registration', 'residential']),
    region: requiredText,
    city: requiredText,
    street: requiredText,
    house: requiredText,
    apartment: optionalText,
})

const familyMemberSchema = z.object({
    id: requiredText,
    fullName: requiredText,
    relation: z.enum(['spouse', 'child', 'parent', 'other']),
    birthDate: requiredDate,
})

const educationSchema = z.object({
    id: requiredText,
    institution: requiredText,
    specialization: requiredText,
    graduatedAt: optionalText,
})

const commentSchema = z.object({
    id: requiredText,
    author: requiredText,
    createdAt: requiredDate,
    text: requiredText,
})

const historySchema = z.object({
    id: requiredText,
    createdAt: requiredDate,
    actor: requiredText,
    action: requiredText,
    description: requiredText,
})

const serviceMetaSchema = z.object({
    profileStatus: z.enum(['new', 'verified', 'on_review']),
    verificationStatus: z.enum(['verified', 'needs_documents', 'pending']),
    riskLevel: z.enum(['low', 'medium', 'high']),
    curator: requiredText,
    sourceSystem: requiredText,
    lastReviewAt: optionalText,
})

export const citizenFormSchema = z.object({
    id: requiredText,
    fullName: requiredText,
    birthDate: requiredDate,
    age: z.number().int().min(0, 'Возраст не может быть отрицательным.'),
    gender: z.enum(['male', 'female']),
    status: z.enum(['active', 'needs_update', 'archived']),
    region: requiredText,
    city: requiredText,
    lastUpdatedAt: requiredDate,
    phone: requiredText,
    email: z.email('Укажите корректный email.').nullable(),
    maritalStatus: z.enum(['single', 'married', 'divorced']),
    documents: z.array(documentSchema),
    addresses: z.array(addressSchema),
    family: z.array(familyMemberSchema),
    education: z.array(educationSchema),
    serviceMeta: serviceMetaSchema,
    comments: z.array(commentSchema),
    history: z.array(historySchema),
})
