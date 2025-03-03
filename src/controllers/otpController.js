const { sendOTP } = require("../services/twilioService");

const otpStore = {}; // Giả lập lưu OTP (nên dùng Redis)

const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

const sendOtpHandler = async (req, res) => {
  const { phone } = req.body;
  const otp = generateOTP();
  otpStore[phone] = otp;

  const response = await sendOTP(phone, otp);
  if (response.success) {
    res.json({ success: true, message: "OTP đã được gửi!" });
  } else {
    res.status(500).json({ success: false, message: response.error });
  }
};

const verifyOtpHandler = (req, res) => {
  const { phone, otp } = req.body;
  if (otpStore[phone] && otpStore[phone] === otp) {
    delete otpStore[phone];
    res.json({ success: true, message: "Xác thực thành công!" });
  } else {
    res.status(400).json({ success: false, message: "Mã OTP không đúng!" });
  }
};

module.exports = { sendOtpHandler, verifyOtpHandler };
