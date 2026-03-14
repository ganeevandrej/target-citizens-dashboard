export type CitizenStatus = 'active' | 'needs_update' | 'archived'

export type CitizenGender = 'male' | 'female'

export type CitizenMaritalStatus = 'single' | 'married' | 'divorced'

export type CitizenAddressLabel = 'registration' | 'residential'

export type FamilyRelation = 'spouse' | 'child' | 'parent' | 'other'

export type CitizenDocument = {
    id: string
    name: string
    number: string
    issuedAt: string
    issuedBy: string
}

export type CitizenAddress = {
    id: string
    label: CitizenAddressLabel
    region: string
    city: string
    street: string
    house: string
    apartment: string | null
}

export type FamilyMember = {
    id: string
    fullName: string
    relation: FamilyRelation
    birthDate: string
}

export type CitizenEducation = {
    id: string
    institution: string
    specialization: string
    graduatedAt: string | null
}

export type CitizenComment = {
    id: string
    author: string
    createdAt: string
    text: string
}

export type CitizenHistoryEntry = {
    id: string
    createdAt: string
    actor: string
    action: string
    description: string
}

export type CitizenProfileStatus = 'new' | 'verified' | 'on_review'

export type CitizenVerificationStatus = 'verified' | 'needs_documents' | 'pending'

export type CitizenRiskLevel = 'low' | 'medium' | 'high'

export type CitizenServiceMeta = {
    profileStatus: CitizenProfileStatus
    verificationStatus: CitizenVerificationStatus
    riskLevel: CitizenRiskLevel
    curator: string
    sourceSystem: string
    lastReviewAt: string | null
}

export type CitizenListItem = {
    id: string
    fullName: string
    birthDate: string
    age: number
    gender: CitizenGender
    status: CitizenStatus
    region: string
    city: string
    lastUpdatedAt: string
}

export type Citizen = CitizenListItem & {
    phone: string
    email: string | null
    maritalStatus: CitizenMaritalStatus
    documents: CitizenDocument[]
    addresses: CitizenAddress[]
    family: FamilyMember[]
    education: CitizenEducation[]
    serviceMeta: CitizenServiceMeta
    comments: CitizenComment[]
    history: CitizenHistoryEntry[]
}

export type CitizenFilters = {
    search: string
    statuses: CitizenStatus[]
    regions: string[]
    genders: CitizenGender[]
}

export type CitizensSortField = 'fullName' | 'age' | 'lastUpdatedAt'

export type SortDirection = 'asc' | 'desc'

export type CitizensQuery = {
    filters: CitizenFilters
    sortBy: CitizensSortField
    sortDirection: SortDirection
    page: number
    pageSize: number
}

export type CitizensListResponse = {
    items: CitizenListItem[]
    total: number
    page: number
    pageSize: number
}

export type CitizenDetailsResponse = {
    item: Citizen | null
}
