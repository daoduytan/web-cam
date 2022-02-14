import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	filename: {
		type: String,
		required: [true, 'Please provide a filename for this image'],
	},
	delete_url: {
		type: String,
		required: [true, 'Please provide a delete_url for this image'],
	},
	url: {
		type: String,
		required: [true, 'Please provide a delete_url for this image'],
	},
});

const Image = mongoose.models.Image || mongoose.model('Image', ImageSchema);

export { Image };
