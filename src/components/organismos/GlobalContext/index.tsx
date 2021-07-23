import React from 'react'
import { CartProvider } from '../../../context/cart'

const GlobalContext: React.FC = ({ children }) => (
  <CartProvider>{children}</CartProvider>
)

export default GlobalContext
