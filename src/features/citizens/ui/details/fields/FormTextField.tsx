import { TextField, type TextFieldProps } from '@mui/material'

export type FormTextFieldProps = Omit<TextFieldProps, 'variant' | 'size' | 'fullWidth'>

export const FormTextField = (props: FormTextFieldProps) => (
    <TextField {...props} variant="outlined" size="small" fullWidth />
)
