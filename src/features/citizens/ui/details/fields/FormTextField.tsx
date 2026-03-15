import { TextField, type TextFieldProps } from '@mui/material'
import { useController, type FieldPath } from 'react-hook-form'

import type { Citizen } from '@shared/types'

export type FormTextFieldProps = Omit<
    TextFieldProps,
    'variant' | 'size' | 'fullWidth' | 'name'
> & {
    name?: string
    parse?: (value: string) => unknown
    format?: (value: unknown) => string
}

type ControlledFormTextFieldProps = Omit<FormTextFieldProps, 'name'> & {
    name: string
}

const ControlledFormTextField = ({
    name,
    parse,
    format,
    helperText,
    error,
    onChange,
    ...props
}: ControlledFormTextFieldProps) => {
    const {
        field,
        fieldState: { error: fieldError },
    } = useController<Citizen>({ name: name as FieldPath<Citizen> })

    return (
        <TextField
            {...props}
            name={field.name}
            value={format ? format(field.value) : String(field.value ?? '')}
            onBlur={field.onBlur}
            inputRef={field.ref}
            onChange={(event) => {
                field.onChange(parse ? parse(event.target.value) : event.target.value)
                onChange?.(event)
            }}
            error={error ?? Boolean(fieldError)}
            helperText={helperText ?? fieldError?.message}
            variant="outlined"
            size="small"
            fullWidth
        />
    )
}

export const FormTextField = ({ name, ...props }: FormTextFieldProps) => {
    if (name) {
        return <ControlledFormTextField {...props} name={name} />
    }

    return <TextField {...props} variant="outlined" size="small" fullWidth />
}
