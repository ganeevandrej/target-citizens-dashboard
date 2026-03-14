import { TextField, type TextFieldProps } from '@mui/material'

export type FormSelectFieldProps = Omit<
    TextFieldProps,
    'variant' | 'size' | 'fullWidth' | 'select'
>

export const FormSelectField = (props: FormSelectFieldProps) => (
    <TextField {...props} select variant="outlined" size="small" fullWidth />
)
