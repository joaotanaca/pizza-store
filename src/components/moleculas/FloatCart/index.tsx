import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import styled, { useTheme } from 'styled-components'

const FloatContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  place-content: left;
  place-items: left;
  width: 85%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 80;
`

const FloatCartContainer = styled(motion.div)`
  width: min-content;
  height: min-content;
  background-color: #fff;
  padding: 11px;
  border-radius: 50%;
  z-index: 80;
  cursor: pointer;
  cursor: hand;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const FloatCart: React.FC = () => {
  const salesContainerRef = useRef(null)
  const { primary } = useTheme()
  return (
    <FloatContainer ref={salesContainerRef} className="float_container">
      <FloatCartContainer
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={salesContainerRef}
        drag
      >
        <FaShoppingBag size={28} color={primary} />
      </FloatCartContainer>
    </FloatContainer>
  )
}

export default FloatCart
