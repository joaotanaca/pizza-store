import Image from 'next/image'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { FaShoppingBag } from 'react-icons/fa'

import Text from '../../atomos/Text'

const SaleCardContainer = styled.div`
  width: 260px;
  height: 400px;
  border: 2px solid #eceef7;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 40px;
  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .text-container {
    padding: 15px 25px 20px;
    display: flex;
    flex-flow: column;
    .title {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .description {
      font-weight: normal;
      font-size: 13px;
      margin-bottom: 10px;
    }
    .price {
      text-align: center;
      font-weight: 300;
      font-size: 26px;
    }
  }
  .cart-container {
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 14px 14px;
    background-color: #fff;
    border-bottom-left-radius: 150%;
    border-bottom-right-radius: 150%;
    border-bottom: 4px solid #eceef7;
    .cart-svg-container {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        border: 2px solid #eceef6;
        background-color: #fff;
        border-radius: 50%;
        z-index: -1;
      }
    }
  }
`

const SaleCard: React.FC = () => {
  const { primary } = useTheme()
  return (
    <SaleCardContainer className="relative">
      <Image
        src="https://img1.gratispng.com/20180525/euq/kisspng-chicago-style-pizza-pizza-ranch-pepperoni-ranch-dr-5b07ceddc243f6.9158448615272383657957.jpg"
        alt="pizza"
        width={260}
        height={220}
      />
      <div className="text-container">
        <Text className="title">Quattro formaggi</Text>
        <Text className="description">
          Dough, Mozzarella, Cheddar, Blue, Parmesan
        </Text>
        <Text className="price">119 UAH</Text>
      </div>
      <button className="absolute cart-container">
        <div className="cart-svg-container">
          <FaShoppingBag size={24} color={primary} />
        </div>
      </button>
    </SaleCardContainer>
  )
}

export default SaleCard
