/* eslint-disable no-undef */
import { connect } from 'mongoose';
import { mongoURI } from './env.js';

const connectDB = async () => {
  try {
    await connect(mongoURI, {});
    console.log('Connect MongoDB Successfully!');
  } catch (err) {
    console.error('Error connect!', err);
    process.exit(1);
  }
};

export default connectDB;
