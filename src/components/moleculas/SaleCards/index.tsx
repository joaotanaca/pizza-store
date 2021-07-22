import React from 'react'
import styled from 'styled-components'
import { TPizza } from '../../../../pages/api/pizza'
import { useFetch } from '../../../hooks/useFetch'
import SaleCard from '../SaleCard'

const SaleCardsContainer = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  gap: 40px;
  margin-top: 50px;
`

const SaleCards: React.FC = () => {
  const { data } = useFetch<TPizza[]>('/api/pizza')
  return (
    <SaleCardsContainer className="col-start-2 col-span-10 md:col-start-1 md:col-span-12">
      {data?.map((props) => (
        <SaleCard key={props.name} {...props} />
      ))}
    </SaleCardsContainer>
  )
}

export default SaleCards
