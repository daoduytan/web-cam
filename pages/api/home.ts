import { NextApiResponse } from 'next';
import { Project } from '../../models';

export default async function home(req: NextApiResponse, res: NextApiResponse) {
  try {
    const projects = await Project.find({}).populate({
      path: 'thumbnail',
    });

    return res.status(200).json({
      status: true,
      data: {
        projects,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: false });
  }
}
