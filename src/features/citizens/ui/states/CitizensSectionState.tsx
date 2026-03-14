import { Alert, Box, CircularProgress, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

type CitizensSectionStateProps = {
    kind: 'loading' | 'message'
    severity?: 'error' | 'info' | 'warning'
    message: string
    padding?: 'list' | 'details'
}

const StateBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'paddingvariant',
})<{ paddingvariant: 'list' | 'details' }>(({ theme, paddingvariant }) => ({
    padding: paddingvariant === 'list' ? theme.spacing(3) : 0,
}))

const LoadingStateRoot = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'paddingvariant',
})<{ paddingvariant: 'list' | 'details' }>(({ theme, paddingvariant }) => ({
    padding:
        paddingvariant === 'list'
            ? theme.spacing(8, 3)
            : theme.spacing(6, 0),
}))

export const CitizensSectionState = (props: CitizensSectionStateProps) => {
    const paddingVariant = props.padding ?? 'details'

    if (props.kind === 'loading') {
        return (
            <LoadingStateRoot alignItems="center" spacing={2} paddingvariant={paddingVariant}>
                <CircularProgress size={28} />
                <Typography color="text.secondary">{props.message}</Typography>
            </LoadingStateRoot>
        )
    }

    return <StateBox paddingvariant={paddingVariant}><Alert severity={props.severity ?? 'info'}>{props.message}</Alert></StateBox>
}
