import { useState } from 'react'
import { Stack, Tab, Tabs } from '@mui/material'

import { CitizenAddressesSection } from './sections/CitizenAddressesSection'
import { CitizenCommentsSection } from './sections/CitizenCommentsSection'
import { CitizenContactsSection } from './sections/CitizenContactsSection'
import { CitizenDocumentsSection } from './sections/CitizenDocumentsSection'
import { CitizenEducationSection } from './sections/CitizenEducationSection'
import { CitizenFamilySection } from './sections/CitizenFamilySection'
import { CitizenHistorySection } from './sections/CitizenHistorySection'
import { CitizenPersonalSection } from './sections/CitizenPersonalSection'
import { CitizenServiceSection } from './sections/CitizenServiceSection'

type CitizenProfileTab = 'profile' | 'related' | 'service'

export const CitizenProfileTabs = () => {
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
                    <CitizenPersonalSection />
                    <CitizenContactsSection />
                    <CitizenAddressesSection />
                </Stack>
            ) : null}

            {activeTab === 'related' ? (
                <Stack spacing={2}>
                    <CitizenDocumentsSection />
                    <CitizenFamilySection />
                    <CitizenEducationSection />
                </Stack>
            ) : null}

            {activeTab === 'service' ? (
                <Stack spacing={2}>
                    <CitizenServiceSection />
                    <CitizenCommentsSection />
                    <CitizenHistorySection />
                </Stack>
            ) : null}
        </Stack>
    )
}
