const mongoose = require('mongoose');

const connect = async function () {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mvpip');
    console.log("database connection success")
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connect }