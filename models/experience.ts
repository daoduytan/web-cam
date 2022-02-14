import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please provide a username for this user'],
	},
	description: {
		type: String,
		required: [true, 'Please provide a passwordHash for this user'],
	},
});

const Experience =
	mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);

export { Experience };
