const mongoose = require('mongoose');
 
const connect = async function () {
  try {
    await mongoose.connect(process.env.MONGO_SECRETS);
    console.log("database connection success")
  } catch (err) {
    console.error(err);
  }
}
    
module.exports = { connect }