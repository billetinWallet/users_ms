const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id_user: Number,
  document_type: Number,
  document_number: String,
  first_name: String,
  last_name: String,
  sex: String,
  verified: Boolean
});

module.exports = mongoose.model('User', userSchema);
