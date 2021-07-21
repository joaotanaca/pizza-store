// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = string[] | { error: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return res
        .status(200)
        .json(['Pizza', 'Sushi', 'Salad', 'Dessert', 'Drinks'])
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}
