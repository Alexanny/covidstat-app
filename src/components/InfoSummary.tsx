import React from 'react'
import { ISummary } from '../types'

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

interface IProps {
  summary: ISummary
}

type TSummaryContent = [string, { today: number; allTime: number }]

export const InfoSummary: React.FC<IProps> = ({ summary }) => (
  <TableContainer
    component={Box}
    sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', pt: 2 }}
  >
    <Table size='small' sx={{ width: '40%' }}>
      <TableHead>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell align='right'>(today/all time)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(summary).map(([label, props]: TSummaryContent) => (
          <TableRow key={label} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row'>
              {label}
            </TableCell>
            <TableCell align='right'>
              {props.today}/{props.allTime}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)
