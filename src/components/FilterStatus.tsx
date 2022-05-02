import React from 'react'
import { Statuses, TStatus } from '../types'
import { camelCaseToSentenceCase } from '../helpers'

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

const statuses = [
  {
    label: camelCaseToSentenceCase(Statuses.Confirmed),
    value: Statuses.Confirmed,
  },
  {
    label: camelCaseToSentenceCase(Statuses.Recovered),
    value: Statuses.Recovered,
  },
  {
    label: camelCaseToSentenceCase(Statuses.Deaths),
    value: Statuses.Deaths,
  },
] as TStatusContent[]

interface IProps {
  status: TStatus
  setStatus: (status: TStatus) => void
}

type TStatusContent = { label: string; value: TStatus }

export const FilterStatus: React.FC<IProps> = ({ status, setStatus }) => {
  const handleChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value as TStatus)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id='statusSelectLabel'>Status</InputLabel>
      <Select
        labelId='statusSelectLabel'
        id='statusSelect'
        value={status}
        label='Status'
        onChange={handleChange}
      >
        {statuses.map(({ label, value }: TStatusContent) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
