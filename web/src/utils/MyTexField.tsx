import { TextField } from '@material-ui/core'
import { FieldAttributes, useField } from 'formik'
import React from 'react'

type MyTextFieldProps = { label: string } & FieldAttributes<{}>

export const MyTextField: React.FC<MyTextFieldProps> = ({
  placeholder,
  label,
  type,
  ...props
}) => {
  const [field, meta] = useField<{}>(props)

  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
      margin="normal"
      required
      label={label}
      type={type}
      fullWidth
      InputLabelProps={{
        shrink: true
      }}
    />
  )
}
