import { pick } from 'lodash';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../lib/dbConnect';
import { User } from '../../models';
import { SERECT_KEY } from '../../constants';

interface IUserReponse {
  _id: string;
  username: string;
  token: string;
}

interface Data {
  status: boolean;
  error?: string;
  user?: IUserReponse;
}

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await dbConnect();

    const { method } = req;

    switch (method) {
      case 'POST':
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
          return res
            .status(400)
            .json({ status: false, error: 'User is not exist' });
        }

        const { passwordHash } = user;

        const isValidPassword = await argon2.verify(passwordHash, password);

        if (!isValidPassword) {
          return res
            .status(400)
            .json({ status: false, error: 'Password is not valid' });
        }
        const token = jwt.sign({ _id: user._id }, SERECT_KEY);

        const userRespone: IUserReponse = {
          ...pick(user, ['_id', 'username']),
          token,
        };

        res.status(200).json({ status: true, user: userRespone });
        break;

      default:
        res.status(400).json({ status: false });
        break;
    }
  } catch (error) {
    console.log('errror', error);
  }
}
