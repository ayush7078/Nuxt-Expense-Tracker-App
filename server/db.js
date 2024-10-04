const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();
console.log("process.env.MONGO_URL", process.env.MONGO_URL)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); 
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
