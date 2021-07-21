import React from 'react'
import styled from 'styled-components'
import { useFetch } from '../../../hooks/useFetch'
import Pill from '../../atomos/Pill'

const CategoriesContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 31px;
`

const CategoriesBar: React.FC = () => {
  const { data = [], error } = useFetch<string[]>('/api/categories')
  return (
    <CategoriesContainer>
      {data?.map((category: string) => (
        <Pill id={category.toLowerCase()} key={category} active={false}>
          {category}
        </Pill>
      ))}
    </CategoriesContainer>
  )
}

export default CategoriesBar
