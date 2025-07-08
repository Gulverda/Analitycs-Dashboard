import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend Server is running!');
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string)
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access at http://localhost:${PORT}`);
});