import mongoose from 'mongoose';

const RecognitionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please provide a username for this user'],
	},
	description: {
		type: String,
	},
});

const Recognition =
	mongoose.models.Recognition ||
	mongoose.model('Recognition', RecognitionSchema);

export { Recognition };
