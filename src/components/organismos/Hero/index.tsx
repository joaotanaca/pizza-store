import React from 'react'
import styled from 'styled-components'
import Heading from '../../atomos/Heading'
import Text from '../../atomos/Text'
import mixin from '../../../styles/mixin'

const Container = styled.div`
  width: 100%;
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
    ${mixin.md`
      background-size: cover;
    `}
  }
  .information-hero {
    position: relative;
    z-index: 2;
    margin-top: 200px;
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
    ${mixin.md`
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 20px;
        left: 0;
        background-color: rgba(240, 245, 251, 0.8);
        filter: blur(8px);
        z-index: -1;
      }
    `}
  }
`

const Hero: React.FC = () => {
  return (
    <Container className="relative">
      <div className="container grid grid-cols-12">
        <div className="color absolute inset-x-0" />
        <div className="background absolute inset-x-0" />
        <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 text-center information-hero">
          <Heading level="1">Food delivery in Kovel</Heading>
          <Text>
            If you decide to relax or have unexpected guests, call us. We make
            sure that your vacation is comfortable, enjoyable and delicious
          </Text>
        </div>
      </div>
    </Container>
  )
}

export default Hero
