// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type TPizza = {
  id: string
  name: string
  description: string
  price: string
}

type Data = TPizza[] | { error: string }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json([
        {
          id: 'Quattro formaggi-1',
          name: 'Quattro formaggi',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          id: 'Карбонараh-2',
          name: 'Карбонараh',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          id: 'Філадельфія-3',
          name: 'Філадельфія селмон',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },

        {
          id: 'маре-4',
          name: 'Ді маре',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          id: 'формаджіо-5',
          name: 'Кватро формаджіо',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          id: 'формаджіо-6',
          name: 'Кватро формаджіо',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          id: 'формаджіо-7',
          name: 'Кватро формаджіо',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
        {
          id: 'формаджіо-8',
          name: 'Кватро формаджіо',
          description: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
          price: '119',
        },
      ])
    default:
      return res.status(405).json({ error: 'Method not allowed' })
  }
}
