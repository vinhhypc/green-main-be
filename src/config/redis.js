require("dotenv").config();
const Redis = require("ioredis");
const { redisHost, redisPort, redisPassword } = require("./env");

const redis = new Redis({
  host: redisHost,
  port: redisPort,
  password: redisPassword,
  tls: {},
});

redis.on("connect", () => console.log("✅ Connected to Redis Cloud!"));
redis.on("error", (err) => console.error("❌ Redis Error:", err));

module.exports = redis;
