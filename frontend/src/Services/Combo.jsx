import React from 'react'
import {  Button, Container, Grid, Paper, Typography } from '@mui/material';

function Combo({openForm}) {
  return (
    <>
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4} sx={{mt:5, ml: 20}}>
          <Paper sx={{ p: 3, border: '2px solid black', borderRadius: 2, backgroundColor: 'rgb(240, 219, 229)' }}>
            <Typography variant="h4" gutterBottom>Press On + Gel</Typography>
            <Typography>French Tips, Plain, With Designs</Typography>
            <Typography>Tapered Square, Stilleto, Almond and Coffin</Typography>
            <Typography>Standard Price(French Tips: No designs or charms added): P300.00</Typography>
            <Typography>Design: P5.00 per nail</Typography>
            <Typography>Charm: P5.00 per nail</Typography>
            <Button variant="contained" onClick={() => openForm('Press On + Gel: Combo')} sx={{ mt: 2 }}>Book Now</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{mt:5, ml:10}}>
          <Paper sx={{ p: 4.5, border: '2px solid black', borderRadius: 2, backgroundColor: 'rgb(240, 219, 229)' }}>
            <Typography variant="h4" gutterBottom>Gel Overlay</Typography>
            <Typography>On natural nails with option to add designs or charms</Typography>
            <Typography>Standard Price(French Tips: No designs or charms added): P200.00</Typography>
            <Typography>Design: P5.00 per nail</Typography>
            <Typography>Charm: P5.00 per nail</Typography>
            <Button variant="contained" onClick={() => openForm('Gel Overlay: Combo')} sx={{ mt: 2 }}>Book Now</Button>
          </Paper>
        </Grid>
    </Grid>
    </Container>
    </>
  )
}

export default Combo