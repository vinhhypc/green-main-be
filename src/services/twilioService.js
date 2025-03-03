const twilio = require("twilio");
const { accountSid, authToken, phoneNumber } = require("../config/env");

const client = twilio(accountSid, authToken);

const sendOTP = async (phone, otp) => {
  try {
    await client.messages.create({
      body: `Mã OTP của bạn là: ${otp}`,
      from: phoneNumber,
      to: phone,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { sendOTP };
