const mongoose = require('mongoose');
require('dotenv').config();

const dbURL = process.env.MY_MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
