import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Heading from '../../atomos/Heading'
import CategoriesBar from '../../moleculas/CategoriesBar'
import FloatCart from '../../moleculas/FloatCart'
import SaleCards from '../../moleculas/SaleCards'

const SaleContainer = styled(motion.div)`
  margin-top: 31px;
  h2 {
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    margin-bottom: 50px;
    text-align: center;
  }
  .float_container {
  }
`

const SaleContent: React.FC = () => {
  return (
    <SaleContainer className="container grid grid-cols-12">
      <FloatCart />
      <Heading
        level="2"
        className="md:col-start-2 md:col-span-10 lg:col-start-5 lg:col-span-4 col-span-12"
      >
        Popular dishes
      </Heading>
      <CategoriesBar />
      <SaleCards />
    </SaleContainer>
  )
}

export default SaleContent
