import React from 'react'
import styled from 'styled-components'
import { useCart } from '../../../context/cart'
import SaleCard from '../SaleCard'

const SaleCardsContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundSales};
  display: inline-flex;
  flex-flow: row wrap;
  gap: 40px;
  margin-top: 50px;
`

const SaleCards: React.FC = () => {
  const { pizzas } = useCart()
  return (
    <SaleCardsContainer className="col-start-2 col-span-10 md:col-start-1 md:col-span-12">
      {pizzas?.map((props) => (
        <SaleCard key={props.id} {...props} />
      ))}
    </SaleCardsContainer>
  )
}

export default SaleCards
