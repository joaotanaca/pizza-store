import React from 'react'
import styled from 'styled-components'
import Heading from '../../moleculas/Heading'
import Text from '../../moleculas/Text'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 40px;
  .color {
    height: 80%;
    background-color: #f0f5fb;
    z-index: -1;
  }
  .background {
    width: 100%;
    height: 100%;
    background: url('/hero_background.webp') no-repeat bottom;
    background-size: contain;
    z-index: 1;
  }
  .information-hero {
    margin-top: 150px;
    h1 {
      font-weight: bold;
      font-size: 48px;
      line-height: 59px;
      margin-bottom: 18px;
    }
    p {
      font-size: 18px;
      line-height: 25px;
      font-weight: normal;
    }
  }
`

const Hero: React.FC = () => {
  return (
    <Container className="relative grid grid-cols-12">
      <div className="color absolute inset-x-0" />
      <div className="background absolute inset-x-0" />
      <div className="col-start-4 col-end-10 text-center information-hero">
        <Heading level="1">Food delivery in Kovel</Heading>
        <Text>
          If you decide to relax or have unexpected guests, call us. We make
          sure that your vacation is comfortable, enjoyable and delicious
        </Text>
      </div>
    </Container>
  )
}

export default Hero
