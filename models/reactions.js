const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  }
}, {
  toJSON: {
    getters: true
  }
});

function dateFormat(timestamp) {
  return new Date(timestamp).toLocaleDateString();
}

module.exports = reactionSchema;
