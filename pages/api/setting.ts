import { NextApiRequest, NextApiResponse } from 'next';
import { PageSetting } from '../../models';

export default async function setting(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const { method } = req;

		if (method === 'GET') {
			const pageSetting = await PageSetting.findOne({});
			return res.status(200).json({ status: true, data: pageSetting });
		}

		if (method === 'POST') {
			const newPageSetting = new PageSetting(req.body);
			const pageSetting = await newPageSetting.save();

			return res.status(200).json({ status: true, data: pageSetting });
		}

		return res.status(404).json({ status: false });
	} catch (error) {
		return res.status(404).json({ status: false });
	}
}
