import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String
    },
    image: {
      type: String
    },
    subscribers: {
      type: Number,
      default: 0
    },
    subscribedUsers: {
      type: [String]
    },
    fromgoogle: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
