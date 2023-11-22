const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://team-189-auction-system:snCdhZ9vZ9Iea7wd@online-auction-system.uubk77j.mongodb.net/Auction-production?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('==========Mongo DB connected...');
  } catch (err) {
    console.log(err);
    // Quit server if db connection fails
    process.exit(1);
  }
};

module.exports = connectDb;
