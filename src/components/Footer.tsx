import React from 'react'

import { Divider, Grid, Stack, Typography } from '@mui/material'

export const Footer: React.FC = () => (
  <Grid item xs={12}>
    <Divider sx={{ my: 3 }} />
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
      <Typography variant='caption' component='span'>
        * you can select date range or status to see details
      </Typography>
      <Typography variant='caption' component='span'>
        {new Date().getFullYear()}
      </Typography>
    </Stack>
  </Grid>
)
