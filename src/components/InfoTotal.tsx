import React from 'react'
import { Stack, Typography } from '@mui/material'
import { IDailyStat } from '../types'

interface IProps {
  stats: IDailyStat[]
}

export const InfoTotal: React.FC<IProps> = ({ stats }) => (
  <Stack direction='row' justifyContent='flex-end' alignItems='flex-end' spacing={2}>
    <Typography variant='h3' component='span' sx={{ pb: 1 }}>
      Total:
    </Typography>
    <Typography variant='h1' component='span' gutterBottom>
      {stats[stats.length - 1]?.Cases - stats[0]?.Cases}
    </Typography>
  </Stack>
)
