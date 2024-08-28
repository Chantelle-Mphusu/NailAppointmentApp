const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  Clientname: {
    type: String,
    required: true,
  },
  Service: {
    type: String,
    enum: ['Manicure', 'Pedicure', 'Combo'],
    required: true,
  },
  Designs: {
    type: Boolean, 
    required: true,
  },
  Charms: {
    type: Boolean, 
    required: true,
  },
  Datetime: {
    type: Date,
    required: true, 
  },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
