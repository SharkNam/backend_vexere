const mongoose = require('mongoose');
const { seatSchema } = require('./Seat');

const tripSchema = new mongoose.Schema({
  fromStation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Station',
  },
  toStation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Station',
  },
  startTime: {
    type: Date,
    required: true,
    trim: true,
  },
  seats: [seatSchema],
  price: {
    type: Number,
    required: true,
    trim: true,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Price must be a postive number');
      }
    },
  },
  //false: con trong nguoc lai thi
});
const Trip = mongoose.model('Trip', tripSchema, 'Trip');

module.exports = Trip;
