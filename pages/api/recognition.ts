import { NextApiRequest, NextApiResponse } from 'next';
import { Recognition } from '../../models';

export default async function recognition(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { method } = req;

		if (method === 'POST') {
			const { title, description } = req.body;
			const newRecognition = new Recognition({
				title,
				description,
			});

			const recognition = await newRecognition.save();

			return res.status(200).json({
				status: true,
				data: recognition,
			});
		}

		if (method === 'PUT') {
			const { _id, ...rest } = req.body;

			const recognition = await Recognition.findByIdAndUpdate(_id, { ...rest });

			return res.status(200).json({
				status: true,
				data: recognition,
			});
		}

		if (method === 'DELETE') {
			const { _id } = req.query;

			const recognition = await Recognition.findByIdAndDelete(_id);

			return res.status(200).json({
				status: true,
			});
		}

		if (method === 'GET') {
			const recognitions = await Recognition.find({});

			return res.status(200).json({
				status: true,
				data: recognitions,
			});
		}
	} catch (error) {
		console.log('error', error);
	}
}
