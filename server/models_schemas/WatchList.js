const { Schema, model } = require('mongoose');
const { ipSchema } = require('./ipSchema')

const watchListSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  name: String,
  note: String,
  list: [ipSchema]
}, {  timestamps: true });

const watchList = model('watchList', watchListSchema);

module.exports = { watchList };