import { NextApiRequest, NextApiResponse } from 'next';
import { Experience } from '../../models';

export default async function experience(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;

	if (method === 'POST') {
		const newExperience = new Experience({
			...req.body,
		});

		const experience = await newExperience.save();

		return res.status(200).json({
			status: true,
			data: experience,
		});
	}

	if (method === 'PUT') {
		const { _id, ...rest } = req.body;

		const experience = await Experience.findByIdAndUpdate(_id, { ...rest });

		return res.status(200).json({
			status: true,
			data: experience,
		});
	}

	if (method === 'DELETE') {
		const { _id } = req.query;

		const experience = await Experience.findByIdAndDelete(_id);

		return res.status(200).json({
			status: true,
		});
	}

	if (method === 'GET') {
		const experiences = await Experience.find({});

		return res.status(200).json({
			status: true,
			data: experiences,
		});
	}
}
