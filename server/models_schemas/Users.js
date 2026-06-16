const { Schema, model } = require('mongoose');
const { ipSchema } = require('./ipSchema');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 5,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  searchHistory: {
    type: [ipSchema],
    default: []
  }
}, { timestamps: true });

const user = model('user', userSchema);

module.exports = { user };