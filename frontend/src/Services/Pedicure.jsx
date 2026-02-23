import React from 'react';
import {  Button, Container, Grid, Paper, Typography } from '@mui/material';

const Pedicure = ({ openForm }) => {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4} sx={{mt:5}}>
          <Paper sx={{ p: 3, border: '2px solid black', borderRadius: 2, backgroundColor: 'rgb(240, 219, 229)' }}>
            <Typography variant="h4" gutterBottom>Press On + Gel</Typography>
            <Typography>French Tips, Plain, With Designs</Typography>
            <Typography>Tapered Square, Stilleto, Almond and Coffin</Typography>
            <Typography>Standard Price(French Tips: No designs or charms added): P120.00</Typography>
            <Typography>Design: P5.00 per nail</Typography>
            <Typography>Charm: P5.00 per nail</Typography>
            <Button variant="contained" onClick={() => openForm('Press On + Gel: Pedicure')} sx={{ mt: 2 }}>Book Now</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{mt:5}}>
          <Paper sx={{ p: 3, border: '2px solid black', borderRadius: 2, backgroundColor: 'rgb(240, 219, 229)' }}>
            <Typography variant="h4" gutterBottom>Gel Overlay</Typography>
            <Typography>On natural nails with option to add designs or charms</Typography>
            <Typography>With stick-on on big toe: P100.00</Typography>
            <Typography>Standard Price(French Tips: No designs or charms added): P80.00</Typography>
            <Typography>Design: P5.00 per nail</Typography>
            <Typography>Charm: P5.00 per nail</Typography>
            <Button variant="contained" onClick={() => openForm('Gel Overlay: Pedicure')} sx={{ mt: 2 }}>Book Now</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} sx={{mt:5}}>
          <Paper sx={{ p: 3, border: '2px solid black', borderRadius: 2, backgroundColor: 'rgb(240, 219, 229)' }}>
            <Typography variant="h4" gutterBottom>Acrylic</Typography>
            <Typography>French Tips, Plain, With Designs</Typography>
            <Typography>Tapered Square, Stilleto, Almond and Coffin</Typography>
            <Typography>Standard Price(French Tips: No designs or charms added): P200.00</Typography>
            <Typography>Design: P5.00 per nail</Typography>
            <Typography>Charm: P5.00 per nail</Typography>
            <Button variant="contained" onClick={() => openForm('Acrylic: Pedicure')} sx={{ mt: 2 }}>Book Now</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pedicure;
