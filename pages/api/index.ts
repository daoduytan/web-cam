import { NextApiResponse } from 'next';
import { dbConnect } from '../../lib/dbConnect';
import { Project } from '../../models';

export default async function home(req: NextApiResponse, res: NextApiResponse) {
  try {
    await dbConnect();

    const projects = await Project.find({ pick: true })
      .populate({
        path: 'thumbnail',
      })
      .limit(4);

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
