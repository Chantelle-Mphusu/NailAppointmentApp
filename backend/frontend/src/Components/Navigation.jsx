import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{  color: 'black',fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>
          Glaze Nail Bar
        </Typography>
        <Box>
          <Button href="/Appointment" sx={{ color: 'black', fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>
            Appoint
          </Button>
          <Button href="/About" sx={{ color: 'black', fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>
            Us
          </Button>
          <Button href="./Home" sx={{ color: 'black', fontFamily: 'Dancing Script, cursive', fontWeight: 700 }}>
            Home
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
