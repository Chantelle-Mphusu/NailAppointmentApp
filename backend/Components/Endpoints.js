const Appointment = require('../Models/AppointmentModel');

module.exports.Create = async (req, res) => {
  try {
    const { Clientname, Service, Designs, Charms, Datetime } = req.body;

    // Check if the appointment time is already booked
    const existingAppointment = await Appointment.findOne({ Datetime });

    if (existingAppointment) {
      return res.status(400).json({ message: 'That appointment date is not available', success: false });
    }

    // Create the appointment
    const appointment = await Appointment.create({ Clientname, Service, Designs, Charms, Datetime });

    res.status(201).json({ message: 'Appointment booked successfully', success: true, appointment });

  } catch (error) {
    console.error('Appointment creation failed:', error);
    res.status(500).json({ message: 'Internal Server Error', success: false });
  }
};
