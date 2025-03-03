const redis = require("../config/redis");

class OtpStore {
  // Lưu OTP vào Redis (hết hạn sau 5 phút)
  static async saveOtp(phoneNumber, otp, ttl = 300) {
    const key = `otp:${phoneNumber}`;
    await redis.set(key, otp, "EX", ttl);
  }

  // Lấy OTP từ Redis
  static async getOtp(phoneNumber) {
    const key = `otp:${phoneNumber}`;
    return await redis.get(key);
  }

  // Xóa OTP khi xác minh thành công
  static async deleteOtp(phoneNumber) {
    const key = `otp:${phoneNumber}`;
    await redis.del(key);
  }
}

module.exports = OtpStore;
