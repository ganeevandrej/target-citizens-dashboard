import { TextField, type TextFieldProps } from '@mui/material'
import { useController, type FieldPath } from 'react-hook-form'

import type { Citizen } from '@shared/types'

export type FormDateFieldProps = Omit<
    TextFieldProps,
    'variant' | 'size' | 'fullWidth' | 'type' | 'slotProps' | 'name'
> & {
    name?: string
    parse?: (value: string) => unknown
    format?: (value: unknown) => string
}

type ControlledFormDateFieldProps = Omit<FormDateFieldProps, 'name'> & {
    name: string
}

const ControlledFormDateField = ({
    name,
    parse,
    format,
    helperText,
    error,
    onChange,
    ...props
}: ControlledFormDateFieldProps) => {
    const {
        field,
        fieldState: { error: fieldError },
    } = useController<Citizen>({ name: name as FieldPath<Citizen> })

    return (
        <TextField
            {...props}
            type="date"
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
            slotProps={{ inputLabel: { shrink: true } }}
        />
    )
}

export const FormDateField = ({ name, ...props }: FormDateFieldProps) => {
    if (name) {
        return <ControlledFormDateField {...props} name={name} />
    }

    return (
        <TextField
            {...props}
            type="date"
            variant="outlined"
            size="small"
            fullWidth
            slotProps={{ inputLabel: { shrink: true } }}
        />
    )
}
