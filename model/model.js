const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  display_location: {
    type: String,
    required: true,
    enum: ['list', 'single'],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['string', 'number', 'date', 'date-time'],
  },
  default: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

module.exports = mongoose.model('feilddata', fieldSchema);
