const { sendOTP } = require("../services/twilioService");
const otpStore = require("../services/otpStore");

const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

const sendOtpHandler = async (req, res) => {
  const { phone } = req.body;
  if (!phone)
    return res.status(400).json({ error: "Số điện thoại không hợp lệ" });

  const otp = generateOTP();
  await otpStore.saveOtp(phone, otp);
  const response = await sendOTP(phone, otp);

  if (response.success) {
    res.json({ success: true, message: "OTP đã được gửi!" });
  } else {
    res.status(500).json({ success: false, message: response.error });
  }
};

const verifyOtpHandler = async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp)
    return res.status(400).json({ error: "Thiếu thông tin xác thực" });

  const storedOtp = await otpStore.getOtp(phone);
  if (!storedOtp)
    return res.status(400).json({ error: "OTP hết hạn hoặc không tồn tại" });

  if (storedOtp !== otp)
    return res.status(400).json({ error: "OTP không hợp lệ" });

  await otpStore.deleteOtp(phone);
  res.json({ message: "OTP hợp lệ, đăng nhập thành công" });
};

module.exports = { sendOtpHandler, verifyOtpHandler };
