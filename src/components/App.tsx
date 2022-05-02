import React from 'react'

import { Container, Grid, Paper } from '@mui/material'

import { Header } from './Header'
import { Footer } from './Footer'
import { Body } from './Body'

const App: React.FC = () => (
  <Container maxWidth='lg'>
    <Paper elevation={4} sx={{ p: 4, mt: 4 }}>
      <Grid container spacing={2}>
        <Header />
        <Body />
        <Footer />
      </Grid>
    </Paper>
  </Container>
)

export default App
