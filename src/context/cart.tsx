/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { useState } from 'react'
import { useEffect } from 'react'
import { createContext, useContext, ReactNode } from 'react'
import { TPizza } from '../../pages/api/pizza'
import { useFetch } from '../hooks/useFetch'

type TCart = {
  calc: number
  items: TPizza[]
  pizzas?: TPizza[]
  addCart: (id: string) => void
  removeCart: (id: string) => void
}

const CartContext = createContext({} as TCart)

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC = ({
  children,
}: {
  children?: ReactNode
}) => {
  const { data } = useFetch<TPizza[]>('/api/pizza')
  const [items, setItems] = useState<TPizza[]>([])
  const [calc, setCalc] = useState<number>(0)

  useEffect(() => {
    setCalc(
      Object.values(items).reduce(
        (accumulator: any | number, { price }) => accumulator + Number(price),
        0
      ) as unknown as number
    )
  }, [items])

  const addCart = (id_param: string) => {
    setItems((prev: TPizza[]) => {
      const pizza = data?.find(({ id }) => id === id_param)
      if (!!pizza) return [...prev, pizza]
      return prev
    })
  }

  const removeCart = (id_param: string) => {
    setItems((prevPizzas: TPizza[]) => {
      const pizzas = prevPizzas.filter((prevPizza) => prevPizza.id !== id_param)
      return pizzas
    })
  }

  return (
    <CartContext.Provider
      value={{ items, pizzas: data, addCart, removeCart, calc }}
    >
      {children}
    </CartContext.Provider>
  )
}
