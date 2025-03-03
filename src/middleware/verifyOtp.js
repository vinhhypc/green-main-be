const otpStore = require("../controllers/otpController").otpStore;

const verifyOtpMiddleware = (req, res, next) => {
  const { phone, otp } = req.body;
  if (!otpStore[phone] || otpStore[phone] !== otp) {
    return res
      .status(400)
      .json({ success: false, message: "OTP không hợp lệ!" });
  }
  next();
};

module.exports = verifyOtpMiddleware;
