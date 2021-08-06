import React from 'react'
import { CartProvider } from '../../../context/cart'
import { CustomThemeProvider } from '../../../context/theme'

const GlobalContext: React.FC = ({ children }) => (
  <CustomThemeProvider>
    <CartProvider>{children}</CartProvider>
  </CustomThemeProvider>
)

export default GlobalContext
