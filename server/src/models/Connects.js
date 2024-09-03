const mongoose = require('mongoose');

const ConnectSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  connects: { type: Number, default: 40 }, // Default connects on registration
  purchasedConnects: [
    {
      amount: { type: Number, required: true },
      date: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model('Connect', ConnectSchema);
