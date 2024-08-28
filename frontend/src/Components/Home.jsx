import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import glazenail from '../images/glazenail.png';
import Navigation from './Navigation';
import nailsback from '../images/nailsback.png';
import Footer from './Footer';


const Home = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'white' }}>
        <Navigation />
      </Box>

      <Box sx={{ backgroundImage: `url(${nailsback})`, backgroundSize: 'contain', backgroundPosition: 'center ',  height: '100vh'}}>
        <br></br>
        <Container sx={{
          width:'680px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: '2rem',
          marginTop: '20px',
          borderRadius: '8px', // Optional for rounded corners
        }} >
          <Stack alignItems="center" spacing={4}>
            <Typography variant="h3" fontFamily="'Dancing Script', cursive" align="center">
              Welcome
            </Typography>
            <Avatar src={glazenail} alt="logo" sx={{ width: 240, height: 240, border: '2px solid black' }} />
            <Button variant="outlined" href="/Appointment" sx={{marginTop: '1rem', width: { xs: '80%', sm: '40%', md: '30%' } }}>
              Book Appointment
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
