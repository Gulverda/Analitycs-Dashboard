import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string;

    if (!uri) {
      throw new Error('MONGO_URI Is not Defined in .env');
    }

    await mongoose.connect(uri);
    console.log('MongoDB MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error', error);
    process.exit(1);
  }
};

export default connectDB;
