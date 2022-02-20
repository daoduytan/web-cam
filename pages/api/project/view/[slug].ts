import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../../../lib/dbConnect';
import { Project } from '../../../../models';

export default async function project(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		await dbConnect();

		const { method, headers } = req;

		switch (method) {
			case 'GET':
				console.log('dasdasdasads', req.query.slug);

				const response = await Project.findOne({
					slug: req.query.slug,
				}).populate({
					path: 'thumbnail',
				});

				console.log('slug', response);

				return res.status(200).json({ status: true, data: response });

			default:
				return res.status(200).json({
					status: true,
				});
		}
	} catch (error) {
		console.log('error', error);
	}
}
