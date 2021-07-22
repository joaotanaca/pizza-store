import React from 'react'
import styled from 'styled-components'
import { useFetch } from '../../../hooks/useFetch'
import mixin from '../../../styles/mixin'
import Pill from '../../atomos/Pill'
import Text from '../../atomos/Text'

const CategoriesContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  ${mixin.md`
    overflow: hidden;
    height: 50px;
  `}
  .absolute {
    display: inline-flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 31px;
    ${mixin.md`
      width: 250%;
      top: 0;
      left: 0;
      gap: 15px;
      flex-flow: row nowrap;
    `}
  }
`

const CategoriesBar: React.FC = () => {
  const { data = [], error } = useFetch<string[]>('/api/categories')
  if (error) {
    return <Text>Ocorreu um erro!</Text>
  }
  return (
    <CategoriesContainer className="col-start-2 col-span-10 md:col-start-1 md:col-span-12 relative md:static">
      <div className="absolute md:static">
        {data?.map((category: string) => (
          <Pill id={category.toLowerCase()} key={category} active={false}>
            {category}
          </Pill>
        ))}
      </div>
    </CategoriesContainer>
  )
}

export default CategoriesBar
