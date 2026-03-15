import { TextField, type TextFieldProps } from '@mui/material'
import { useController, type FieldPath } from 'react-hook-form'

import type { Citizen } from '@shared/types'

export type FormSelectFieldProps = Omit<
    TextFieldProps,
    'variant' | 'size' | 'fullWidth' | 'select' | 'name'
> & {
    name?: string
    parse?: (value: string) => unknown
}

type ControlledFormSelectFieldProps = Omit<FormSelectFieldProps, 'name'> & {
    name: string
}

const ControlledFormSelectField = ({
    name,
    parse,
    helperText,
    error,
    onChange,
    ...props
}: ControlledFormSelectFieldProps) => {
    const {
        field,
        fieldState: { error: fieldError },
    } = useController<Citizen>({ name: name as FieldPath<Citizen> })

    return (
        <TextField
            {...props}
            select
            name={field.name}
            value={field.value ?? ''}
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

export const FormSelectField = ({ name, ...props }: FormSelectFieldProps) => {
    if (name) {
        return <ControlledFormSelectField {...props} name={name} />
    }

    return <TextField {...props} select variant="outlined" size="small" fullWidth />
}
