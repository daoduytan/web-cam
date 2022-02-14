import { NextApiResponse } from 'next';
import { Experience, PageSetting, Recognition } from '../../models';

export default async function about(
  req: NextApiResponse,
  res: NextApiResponse
) {
  try {
    const experiences = await Experience.find({});
    const recognitions = await Recognition.find({});
    const pageSetting = await PageSetting.findOne({});

    return res.status(200).json({
      status: true,
      data: {
        experiences,
        recognitions,
        pageSetting,
      },
    });
  } catch (error) {
    return res.status(400).json({ status: false });
  }
}
