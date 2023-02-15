const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: true },

  friendUsername: { 
    type: String, 
    required: true },
   
   createdAt: { 
    type: Date, 
    default: Date.now }
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
