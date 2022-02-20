import { NextApiRequest, NextApiResponse } from 'next';

export default async function admin(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ status: true });
}
