import React from 'react'

import { Divider, Grid, Typography } from '@mui/material'

export const Header: React.FC = () => (
  <Grid item xs={12}>
    <Typography variant='body1' component='span'>
      On this page you can see the total number of cases of COVID19 in Belgium
    </Typography>
    <Divider sx={{ my: 3 }} />
  </Grid>
)
