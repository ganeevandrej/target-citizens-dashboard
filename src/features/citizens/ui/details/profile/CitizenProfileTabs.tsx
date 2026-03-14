import { useState } from 'react'
import { Stack, Tab, Tabs } from '@mui/material'

import type { Citizen } from '@shared/types'

import type {
    CitizenProfileTab,
    UpdateCitizenField,
    UpdateServiceMetaField,
} from './types/editor'
import { CitizenAddressesSection } from './sections/CitizenAddressesSection'
import { CitizenCommentsSection } from './sections/CitizenCommentsSection'
import { CitizenContactsSection } from './sections/CitizenContactsSection'
import { CitizenDocumentsSection } from './sections/CitizenDocumentsSection'
import { CitizenEducationSection } from './sections/CitizenEducationSection'
import { CitizenFamilySection } from './sections/CitizenFamilySection'
import { CitizenHistorySection } from './sections/CitizenHistorySection'
import { CitizenPersonalSection } from './sections/CitizenPersonalSection'
import { CitizenServiceSection } from './sections/CitizenServiceSection'

type CitizenProfileTabsProps = {
    citizen: Citizen
    updateCitizen: UpdateCitizenField
    updateServiceMeta: UpdateServiceMetaField
}

export const CitizenProfileTabs = ({
    citizen,
    updateCitizen,
    updateServiceMeta,
}: CitizenProfileTabsProps) => {
    const [activeTab, setActiveTab] = useState<CitizenProfileTab>('profile')

    return (
        <Stack spacing={3}>
            <Tabs
                value={activeTab}
                onChange={(_event, value: CitizenProfileTab) => setActiveTab(value)}
                variant="scrollable"
                allowScrollButtonsMobile
            >
                <Tab label="Профиль" value="profile" />
                <Tab label="Связанные данные" value="related" />
                <Tab label="Сервис" value="service" />
            </Tabs>

            {activeTab === 'profile' ? (
                <Stack spacing={2}>
                    <CitizenPersonalSection citizen={citizen} updateCitizen={updateCitizen} />
                    <CitizenContactsSection citizen={citizen} updateCitizen={updateCitizen} />
                    <CitizenAddressesSection addresses={citizen.addresses} updateCitizen={updateCitizen} />
                </Stack>
            ) : null}

            {activeTab === 'related' ? (
                <Stack spacing={2}>
                    <CitizenDocumentsSection documents={citizen.documents} updateCitizen={updateCitizen} />
                    <CitizenFamilySection family={citizen.family} updateCitizen={updateCitizen} />
                    <CitizenEducationSection education={citizen.education} updateCitizen={updateCitizen} />
                </Stack>
            ) : null}

            {activeTab === 'service' ? (
                <Stack spacing={2}>
                    <CitizenServiceSection
                        status={citizen.status}
                        serviceMeta={citizen.serviceMeta}
                        updateCitizen={updateCitizen}
                        updateServiceMeta={updateServiceMeta}
                    />
                    <CitizenCommentsSection comments={citizen.comments} updateCitizen={updateCitizen} />
                    <CitizenHistorySection history={citizen.history} updateCitizen={updateCitizen} />
                </Stack>
            ) : null}
        </Stack>
    )
}
