require('dotenv').config();
const mongoose = require('mongoose');

const mongooseURL = process.env.MONGO_URI;

mongoose.connect(mongooseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connect with Mongobd"))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

module.exports = mongoose;
