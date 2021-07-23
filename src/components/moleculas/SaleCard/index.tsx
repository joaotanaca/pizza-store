import Image from 'next/image'
import React from 'react'
import styled, { useTheme } from 'styled-components'
import { VscAdd, VscRemove } from 'react-icons/vsc'

import Text from '../../atomos/Text'
import { TPizza } from '../../../../pages/api/pizza'
import mixin from '../../../styles/mixin'
import { motion } from 'framer-motion'
import { useCart } from '../../../context/cart'

const SaleCardContainer = styled.div`
  width: calc(25% - 30px);
  border: 2px solid #eceef7;
  border-radius: 15px;
  background-color: #fff;
  margin-bottom: 40px;
  ${mixin.lg`
    width: calc(33% - 30px);
  `}
  ${mixin.md`
    width: calc(50% - 30px);
  `}
  ${mixin.sm`
    width: 100%;
  `}
  img {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .text-container {
    padding: 15px 25px 0;
    display: flex;
    flex-flow: column;
    .title {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 6px;
    }
    .description {
      font-weight: normal;
      font-size: 13px;
      margin-bottom: 8px;
    }
    .price {
      text-align: center;
      font-weight: 300;
      font-size: 26px;
    }
  }
  .cart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
      .cart-button {
        .cart-svg-container {
          &:before {
            background-color: ${({ theme }) => theme.primary};
          }
        }
      }
    }
    .cart-button {
      cursor: pointer;
      margin: 0 auto;
      padding: 0 14px 14px;
      background-color: #fff;
      border-bottom-left-radius: 150%;
      border-bottom-right-radius: 150%;
      border-bottom: 4px solid #eceef7;
      .cart-svg-container {
        position: relative;
        transition: all cubic-bezier(0.4, 0, 0.2, 1) 150ms;
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
          transition: all cubic-bezier(0.4, 0, 0.2, 1) 150ms;
        }
      }
    }
  }
`

const SaleCard = ({ description, name, price, id }: TPizza) => {
  const { addCart, removeCart, items } = useCart()
  const { primary } = useTheme()
  const findItem = !!items.find((item) => item.id === id)

  const handleCart = () => {
    if (!findItem) addCart(id)
    else removeCart(id)
  }

  return (
    <SaleCardContainer>
      <Image
        src="/pizza.webp"
        alt="pizza"
        width={260}
        height={220}
        layout="responsive"
      />
      <div className="text-container">
        <Text className="title">{name}</Text>
        <Text className="description">{description}</Text>
        <Text className="price">R$ {price}</Text>
      </div>
      <div className={`cart-container ${findItem ? 'active' : ''}`}>
        <motion.button
          className="cart-button"
          style={{ y: '40%' }}
          onClick={handleCart}
        >
          <div className="cart-svg-container">
            {findItem ? (
              <VscRemove size={24} color="#fff" />
            ) : (
              <VscAdd size={24} color={primary} />
            )}
          </div>
        </motion.button>
      </div>
    </SaleCardContainer>
  )
}

export default SaleCard
