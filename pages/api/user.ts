import { get, pick } from 'lodash';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { SERECT_KEY } from '../../constants';
import { User } from '../../models';

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = get(req, 'headers.authorization').split(' ')[1];

    const data: any = jwt.verify(token, SERECT_KEY);

    const userResponse = await User.findById(data._id);

    const user = {
      ...pick(userResponse, ['_id', 'username']),
      token,
    };

    res.status(200).json({
      status: true,
      user,
    });

    return;
  } catch (error) {}
}
