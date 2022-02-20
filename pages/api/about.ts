import { NextApiResponse } from 'next';
import { Experience, PageSetting, Recognition } from '../../models';
import { dbConnect } from '../../lib/dbConnect';

export default async function about(
  req: NextApiResponse,
  res: NextApiResponse
) {
  try {
    await dbConnect();

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
    console.log('error about', error);
    return res.status(500).json({ status: false });
  }
}
