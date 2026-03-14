import { TextField, type TextFieldProps } from '@mui/material'

export type FormDateFieldProps = Omit<
    TextFieldProps,
    'variant' | 'size' | 'fullWidth' | 'type' | 'slotProps'
>

export const FormDateField = (props: FormDateFieldProps) => (
    <TextField
        {...props}
        type="date"
        variant="outlined"
        size="small"
        fullWidth
        slotProps={{ inputLabel: { shrink: true } }}
    />
)
