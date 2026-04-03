const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  jobid: { type: String, required: true },
  jobrole: { type: String, required: true },
  company: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
