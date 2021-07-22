// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type TPizza = { name: string; description: string; price: string }

type Data = TPizza[] | { error: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json([
        {
          name: 'Quattro formaggi',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          name: 'Карбонараh',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          name: 'Філадельфія селмон',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },

        {
          name: 'Ді маре',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          name: 'Кватро формаджіо',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          name: 'Кватро формаджіо',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
      ])
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}
