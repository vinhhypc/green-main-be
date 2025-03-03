const express = require("express");
const {
  sendOtpHandler,
  verifyOtpHandler,
} = require("../controllers/otpController");

const router = express.Router();

router.post("/send-otp", sendOtpHandler);
router.post("/verify-otp", verifyOtpHandler);

module.exports = router;
