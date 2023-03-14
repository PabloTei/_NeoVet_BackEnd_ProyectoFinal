const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      trim: true,
    },
    reason: {
      type: String,
      required: true,
      trim: true,
    },
    comments: {
      type: String,
      required: false,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    validate: {
      type: Boolean,
      required: true,
      trim: true,
      default: false,
    },
  },
  { timestamps: true }
)

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment