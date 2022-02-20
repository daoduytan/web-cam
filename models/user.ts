import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username for this user'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  passwordHash: {
    type: String,
    required: [true, 'Please provide a passwordHash for this user'],
  },
  type: {
    type: String,
    enum: ['super_admin', 'admin'],
    default: 'admin',
  },
  info: {
    type: String,
  },
  subInfo: {
    type: String,
  },
  socials: [
    {
      type: String,
      value: String,
    },
  ],
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export { User };
