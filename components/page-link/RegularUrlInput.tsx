import React, {useCallback} from 'react'
import {TextInput} from '@sanity/ui'
import {useId} from '@reach/auto-id' // hook to generate unique IDs
import {PatchEvent, set, unset, FormField, StringInputProps} from 'sanity'

export const RegularUrlInput = (props: StringInputProps) => {
  const {value, onChange, elementProps} = props
  const inputId = useId()
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.currentTarget.value
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()))
    },
    [onChange]
  )

  return <TextInput {...elementProps} id={inputId} onChange={handleChange} value={value || ''} />
}
