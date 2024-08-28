import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import glazelogo from '../images/glazelogo.png';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', top: 'auto', bottom: 0, boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={glazelogo} width="40" height="40" alt="LOGO" style={{ borderRadius: '18px' }} />
        </Box>
        <Box>
          <Button href="/About" sx={{ color: 'black', fontFamily: 'Dancing Script, cursive', fontWeight: 500 }}>
            Facebook
          </Button>
          <Button href="./Home" sx={{ color: 'black', fontFamily: 'Dancing Script, cursive', fontWeight: 500 }}>
            Instagram
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
