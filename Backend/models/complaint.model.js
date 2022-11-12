const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const complaintSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    vehicleDescription: { type: String, required: true },
  }, {
    timestamps: true,
  });
const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;