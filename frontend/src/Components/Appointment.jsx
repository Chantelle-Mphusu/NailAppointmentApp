import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Pedicure from '../Services/Pedicure';
import Manicure from '../Services/Manicure';
import Combo from '../Services/Combo';
import Appointmentform from '../Forms/appointmentform';
import { Button, Container, Box, Modal } from '@mui/material';

const Appointment = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const serviceRender = (services) => {
    switch (services) {
      case 0:
        return <Pedicure openForm={handleOpenForm} />;
      case 1:
        return <Manicure openForm={handleOpenForm} />;
      case 2:
        return <Combo openForm={handleOpenForm} />;
      default:
        break;
    }
  };

  const handleOpenForm = (service) => {
    setSelectedService(service);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  

  const onButtonClick = (index) => {
    setCurrentService(index);
  };

  return (
    <>
    <Box className='bodycontainer1'>
      <Navigation />
    </Box>
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'black',
          mb: 2,
          '&:hover': {
            backgroundColor: 'lightpink',
          }
        }}
        onClick={() => onButtonClick(0)}
        disabled={currentService === 0}
      >
        Pedicure
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'black',
          ml: 2,
          mb: 2,
          '&:hover': {
            backgroundColor: 'lightpink',
          }
        }}
        onClick={() => onButtonClick(1)}
        disabled={currentService === 1}
      >
        Manicure
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'pink',
          color: 'black',
          ml: 2,
          mb: 2,
          '&:hover': {
            backgroundColor: 'lightpink',
          }
        }}
        onClick={() => onButtonClick(2)}
        disabled={currentService === 2}
      >
        Combo Service
      </Button>
    </Container>
    <Box className='bookservice'>
      {serviceRender(currentService)}
    </Box>
    <Modal open={isFormOpen} onClose={handleCloseForm}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 4, bgcolor: 'background.paper', boxShadow: 24 }}>
        <Appointmentform selectedService={selectedService} />
      </Box>
    </Modal>
    <Footer />
  </>
  );
};

export default Appointment;
