import dotenv from 'dotenv';
import Redis from 'ioredis';
import { redisHost, redisPort, redisPassword } from './env';
dotenv.config();

const redis = new Redis({
  host: redisHost,
  port: redisPort,
  password: redisPassword,
  tls: {},
});

redis.on('connect', () => console.log('✅ Connected to Redis Cloud!'));
redis.on('error', (err) => console.error('❌ Redis Error:', err));

export default redis;
