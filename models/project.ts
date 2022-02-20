import { model, models, Schema } from 'mongoose';

const ProjectSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Please provide a username for this user'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a passwordHash for this user'],
  },
  content: [
    {
      key: {
        type: String,
      },
      type: {
        type: String,
        enum: ['image', 'video', 'text'],
      },
      value: { type: String },
    },
  ],
  service: {
    type: String,
  },
  agency: {
    type: String,
  },
  credits: {
    type: String,
  },
  thumbnail: { type: Schema.Types.ObjectId, ref: 'Image' },
  pick: {
    type: Boolean,
  },
  no: {
    type: Number,
  },
  slug: {
    type: String,
    required: [true, 'Please provide a username for this user'],
    unique: true,
  },
});

const Project = models.Project || model('Project', ProjectSchema);

export { Project };
