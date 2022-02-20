import { NextApiRequest, NextApiResponse } from 'next';
import { Image } from '../../models';

export default async function image(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { method } = req;

		if (method === 'POST') {
			const newImage = new Image({
				...req.body,
			});

			const img = await newImage.save();

			return res.status(200).json({
				status: true,
				data: img,
			});
		}

		if (method === 'PUT') {
			const { _id, ...rest } = req.body;

			const img = await Image.findByIdAndUpdate(_id, { ...rest });

			return res.status(200).json({
				status: true,
				data: img,
			});
		}

		if (method === 'DELETE') {
			const { _id } = req.query;

			const img = await Image.findByIdAndDelete(_id);

			return res.status(200).json({
				status: true,
			});
		}

		if (method === 'GET') {
			console.log('dasdasd');
			const imgs = await Image.find({});

			console.log('imgs', imgs);

			return res.status(200).json({
				status: true,
				data: imgs,
			});
		}
	} catch (error) {
		console.log('error', error);
		return res.status(500).json({
			status: false,
		});
	}
}
