require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  phoneNumber: process.env.TWILIO_PHONE_NUMBER,
  port: process.env.PORT || 5000,
};
