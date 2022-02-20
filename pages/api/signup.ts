import argon2 from 'argon2';
import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '../../lib/dbConnect';
import { User } from '../../models';

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    await dbConnect();

    const { method } = req;

    switch (method) {
      case 'POST':
        const { username, password } = req.body;

        const userExist = await User.findOne({ username });

        if (userExist) {
          return res
            .status(400)
            .json({ success: false, messsage: 'User is exist' });
        }

        const passwordHash = await argon2.hash(password);

        const userNew = new User({
          username,
          passwordHash,
        });

        const user = await userNew.save();

        res.status(200).json({ user: user });

        break;

      default:
        return res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log('errror', error);
  }
}
