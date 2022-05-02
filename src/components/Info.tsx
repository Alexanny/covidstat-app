import React from 'react'
import { IDailyStat, ISummary } from '../types'

import { Divider, Grid, Stack } from '@mui/material'

import { InfoTotal } from './InfoTotal'
import { InfoSummary } from './InfoSummary'
import { Loader } from './Loader'

interface IProps {
  stats: IDailyStat[]
  summary: ISummary
}

export const Info: React.FC<IProps> = ({ stats, summary }) => (
  <Grid item xs={8}>
    {stats.length ? (
      <Stack spacing={1}>
        <InfoTotal stats={stats} />
        <Divider />
        <InfoSummary summary={summary} />
      </Stack>
    ) : (
      <Loader />
    )}
  </Grid>
)
