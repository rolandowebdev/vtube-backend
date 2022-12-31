import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// routes
import userRoutes from './routes/users.js';
import commentRoutes from './routes/comments.js';
import videosRoutes from './routes/videos.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config(); // for use .env file

const connect = () => {
  mongoose
    .set('strictQuery', false)
    .connect(process.env.MONGO_CONNECTION)
    .then(() => {
      console.log('Connect to MongoDB!');
    })
    .catch((error) => {
      throw error;
    });
};

// use cookie parser for user
app.use(cookieParser());

// parsing data to json
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/videos', videosRoutes);
app.use('/api/comments', commentRoutes);

// handling error
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something wen't wrong";
  return res.status(status).json({
    success: false,
    status,
    message
  });
});

app.listen(8800, () => {
  connect();
  console.log(`Server running on port ${8800}`);
});
