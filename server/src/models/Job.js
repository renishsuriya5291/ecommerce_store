
const mongoose = require('mongoose');


const JobSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  budget: { type: Number },
  currency: { type: String },
  connectsRequired: { type: Number, required: true }, // Connects required for the job
  status: { type: String, enum: ['open', 'in_progress', 'closed', 'cancelled'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);
