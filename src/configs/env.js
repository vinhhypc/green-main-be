/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();

export const mongoURI = process.env.MONGO_URI;
export const port = process.env.PORT;
export const redisHost = process.env.REDIS_HOST;
export const redisPort = process.env.REDIS_PORT;
export const redisPassword = process.env.REDIS_PASSWORD;
