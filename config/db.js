const mongoose = require("mongoose");
const { mongoURI } = require("./env");

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("Connect MongoDB Successfully!");
  } catch (err) {
    console.error("Error connect!", err);
    process.exit(1);
  }
};

module.exports = connectDB;
