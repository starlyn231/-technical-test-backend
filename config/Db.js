const mongoose = require('mongoose');

const connectToDatabase = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URL ?? '', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.log('DATABASE CONNECTION ERROR', err);
    process.exit(1);
  }
};

module.exports = connectToDatabase;