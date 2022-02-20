import jwt from 'jsonwebtoken';
import get from 'lodash/get';
import { NextApiRequest, NextApiResponse } from 'next';
import { SERECT_KEY } from '../../../constants';
import { removeVietnameseTones } from '../../../helps';
import { dbConnect } from '../../../lib/dbConnect';
import { Project, User } from '../../../models';

export default async function project(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await dbConnect();

    const { method, headers } = req;

    switch (method) {
      case 'GET':
        const projects = await Project.find({}).populate({
          path: 'thumbnail',
        });

        return res.status(200).json({ status: true, data: projects });

      case 'POST':
        const token = get(headers, 'authorization', '').split(' ')[1];

        const data: any = jwt.verify(token, SERECT_KEY);
        const user = await User.findById(data._id as string);

        if (!user) {
          return res
            .status(404)
            .json({ status: false, message: 'User not login' });
        }

        const { title, description, content, thumbnail } = req.body;

        const dataProject = {
          title,
          description,
          content,
          thumbnail,
          slug: removeVietnameseTones(title).split(' ').join('-'),
        };

        const newProject = new Project(dataProject);

        const project = await newProject.save();

        return res.status(200).json({
          status: true,
          project,
        });
      default:
        res.status(200).json({
          status: true,
        });
        break;
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: false,
    });
  }
}
