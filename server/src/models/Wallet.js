
const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  balance: { type: Number, default: 0 },
  currency: { type: String, default: 'INR' },
  transactions: [
    {
      amount: { type: Number, required: true },
      type: { type: String, enum: ['credit', 'debit'], required: true },
      date: { type: Date, default: Date.now },
      status: { type: String, enum: ['completed', 'pending', 'failed'], default: 'pending' }
    }
  ]
});

module.exports = mongoose.model('Wallet', WalletSchema);
