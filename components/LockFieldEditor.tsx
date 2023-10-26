import {Box, Card, Flex, Switch, Text} from '@sanity/ui'
import React, {useCallback} from 'react'
import {IoLockClosed, IoLockOpen} from 'react-icons/io5'
import {set, PatchEvent, StringInputProps} from 'sanity'

export const LockFieldEditor = (props: StringInputProps) => {
  const {value, onChange, elementProps} = props

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const flag = Boolean(event.target.checked)
      onChange(PatchEvent.from(set(flag)))
    },
    [onChange]
  )

  return (
    <Card padding={2} tone={value ? 'critical' : 'positive'} shadow={1}>
      <Flex direction={'row'} align={'center'} justify={'space-evenly'}>
        <Box marginRight={2}>{value ? <IoLockClosed /> : <IoLockOpen />}</Box>
        <Switch {...elementProps} onChange={handleChange} />
        <Text>{'This document can be locked or unlocked by an Administrator only.'}</Text>
      </Flex>
    </Card>
  )
}
