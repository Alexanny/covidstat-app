import React, { useEffect, useState } from 'react'
import { getAllTimeTotal, getInfo } from '../api'
import { IDailyStat, IDateRange, ISummary, Statuses, TStatus } from '../types'

import { Grid } from '@mui/material'

import { Filter } from './Filter'
import { Info } from './Info'

export const Body: React.FC = () => {
  const [stats, setStats] = useState<IDailyStat[]>([])
  const [status, setStatus] = useState<TStatus>(Statuses.Confirmed)
  const [dateRange, setDateRange] = useState<IDateRange>({
    from: null,
    to: null,
  })
  const [summary, setSummary] = useState<ISummary>({
    Confirmed: {
      allTime: 0,
      today: 0,
    },
    Recovered: {
      allTime: 0,
      today: 0,
    },
    Deaths: {
      allTime: 0,
      today: 0,
    },
  })

  useEffect(() => {
    getAllTimeTotal().then((total) => {
      setSummary(total)
    })
    getInfo(status, dateRange).then((statList) => {
      setStats(statList)
    })
  }, [status, dateRange])

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Filter status={status} setStatus={setStatus} setDateRange={setDateRange} />
        <Info stats={stats} summary={summary} />
      </Grid>
    </Grid>
  )
}
