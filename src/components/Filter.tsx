import React from 'react'
import { IDateRange, TStatus } from '../types'

import { Grid, Stack } from '@mui/material'

import { FilterDate } from './FilterDate'
import { FilterStatus } from './FilterStatus'

interface IProps {
  status: TStatus
  setStatus: (status: TStatus) => void
  setDateRange: (dateRange: IDateRange) => void
}

export const Filter: React.FC<IProps> = ({ status, setStatus, setDateRange }) => {
  return (
    <Grid item xs={4}>
      <Stack spacing={3}>
        <FilterStatus status={status} setStatus={setStatus} />
        <FilterDate setDateRange={setDateRange} />
      </Stack>
    </Grid>
  )
}
