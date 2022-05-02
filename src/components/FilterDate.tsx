import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { IDateRange } from '../types'

import { Button, Stack, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

interface IProps {
  setDateRange: (dateRange: IDateRange) => void
}

export const FilterDate: React.FC<IProps> = ({ setDateRange }) => {
  const [fromDate, setFromDate] = useState<Date | null>(null)
  const [toDate, setToDate] = useState<Date | null>(null)

  useEffect(() => {
    setDateRange({
      from: fromDate
        ? moment(fromDate).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toISOString()
        : null,
      to: toDate
        ? moment(toDate).set({ hour: 0, minute: 0, second: 0, millisecond: 0 }).toISOString()
        : null,
    })
  }, [fromDate, toDate, setDateRange])

  const onGetAll = () => {
    setFromDate(null)
    setToDate(null)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label='From'
          value={fromDate}
          onChange={(newDate) => {
            setFromDate(newDate)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label='To'
          value={toDate}
          onChange={(newValue) => {
            setToDate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <Button variant='outlined' onClick={() => onGetAll()}>
          All time
        </Button>
      </Stack>
    </LocalizationProvider>
  )
}
