import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import { Box, Container, Typography } from '@mui/material';

function Bookings() {
  return (

    <>
    <Box>

          <Navigation />
    </Box>
    <Container sx={{ textAlign: 'center', mt: 8 , height:'65vh'}}>
      <Typography>
        Under construction
      </Typography>
    </Container>
    <Footer/>
    </>
  )
}

export default Bookings