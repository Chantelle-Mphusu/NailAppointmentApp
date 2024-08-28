import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Container, TextField, Button, Box, Typography,
  FormControl, InputLabel, Select, MenuItem,
  FormControlLabel, Checkbox } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {  ToastContainer,toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Appointmentform = ({ selectedService }) => {

  const API_URL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate()

  const [appointmentDetails, setAppointmentDetails] = useState({
    Clientname: "",
    Service: selectedService || "",  // Default to selectedService if available
    Designs: false,
    Charms: false,
    Datetime: null,
  });

   // Handle input change
   const HandleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAppointmentDetails({
      ...appointmentDetails,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle date-time change
  const HandleDateChange = (newValue) => {
    setAppointmentDetails({
      ...appointmentDetails,
      Datetime: newValue,
    });
  };

  //Handling form submission
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(`${API_URL}Appoint`, appointmentDetails)
      console.log('Response', response.data);
      toast.success('Appointment booked successfully!', { position: "top-left" });
      setTimeout(() => {
        navigate('/Bookings');
      }, 2500);
    }catch(error){
      // Extract the error message from the response
    const errorMessage = error.response?.data?.message || error.message || "An unknown error occurred.";

    // Display the error message in a toast
    toast.error(`Submission failed: ${errorMessage}`, { position: "top-left" });
    
    }
  }



  return (
    <Container maxWidth="sm">
      <ToastContainer/>
      <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Booking for: {selectedService}
      </Typography>
        <form onSubmit={HandleSubmit}>
          <TextField
            fullWidth
            label="Clientname"
            name="Clientname"
            value={appointmentDetails.Clientname}
            onChange={HandleChange}
            margin="normal"
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="Service">Service</InputLabel>
            <Select
              labelId="Service"
              id="Service"
              name="Service"
              value={appointmentDetails.Service}
              onChange={HandleChange}
              label="Service"
            >
              <MenuItem value="Pedicure">Pedicure</MenuItem>
              <MenuItem value="Manicure">Manicure</MenuItem>
              <MenuItem value="Combo">Combo</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                name="Designs"
                checked={appointmentDetails.Designs}
                onChange={(e) => setAppointmentDetails({
                  ...appointmentDetails,
                  Designs: e.target.checked,
                })}
                color="primary"
              />
            }
            label="Does your set have designs"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="Charms"
                checked={appointmentDetails.Charms}
                onChange={(e) => setAppointmentDetails({
                  ...appointmentDetails,
                  Charms: e.target.checked,
                })}
                color="primary"
              />
            }
            label="Does your set have charms"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Appointment Date & Time"
              value={appointmentDetails.Datetime}
              onChange={HandleDateChange}
              renderInput={(params) => <TextField fullWidth  margin="normal"  sx={{ zIndex: 1000 }} {...params} />}
            />
          </LocalizationProvider>
          

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 , ml:4}}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default Appointmentform