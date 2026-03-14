import type { ReactNode } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material'

const detailSectionSx = {
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: 'none',
    '&::before': {
        display: 'none',
    },
}

type CitizenProfileSectionProps = {
    title: string
    caption: string
    children: ReactNode
    defaultExpanded?: boolean
}

export const CitizenProfileSection = ({
    title,
    caption,
    children,
    defaultExpanded = false,
}: CitizenProfileSectionProps) => (
    <Accordion disableGutters defaultExpanded={defaultExpanded} sx={detailSectionSx}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack spacing={0.5}>
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                    {caption}
                </Typography>
            </Stack>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
)
