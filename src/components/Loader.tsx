import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export const Loader: React.FC = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
    <CircularProgress />
  </Box>
)
