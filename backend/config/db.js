const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  } finally {
    // Perform any necessary cleanup or tasks
    console.log('This will always execute, regardless of success or error.');
  }
};

module.exports = connectDB;
