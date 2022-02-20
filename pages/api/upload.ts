import { NextApiRequest, NextApiResponse } from 'next';
import { Image } from '../../models';

export default async function upload(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { method } = req;

		if (method === 'POST') {
			const newImage = new Image(req.body);
			const image = await newImage.save();

			return res.status(200).json({
				status: true,
				data: image,
			});
		}
	} catch (error) {
		console.log(error);

		return res.status(500).json({
			status: false,
		});
	}
}
