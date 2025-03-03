const express = require("express");
const otpRoutes = require("./otpRoutes");

const router = express.Router();

// Định nghĩa tất cả routes
router.use("/otp", otpRoutes); // /api/otp/

module.exports = router;
