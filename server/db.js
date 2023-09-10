import mongoose from 'mongoose';
import { DB_URI } from './config.js';

const uri = DB_URI;

export async function connectDB() {
  try {
    const db = await mongoose.connect(uri);
    console.log('Connected to', db.connection.name);
  } catch (error) {
    console.error(error);
  }
}
