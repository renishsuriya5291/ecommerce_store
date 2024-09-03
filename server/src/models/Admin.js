const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  permissions: { type: [String], default: ['manage_users', 'manage_jobs', 'view_reports'] }
});

module.exports = mongoose.model('Admin', AdminSchema);
