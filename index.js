import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/videos', videosRoutes);
app.use('/api/comments', commentRoutes);

app.listen(8800, () => {
  connect();
  console.log(`Server running on port ${8800}`);
});
