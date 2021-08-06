import React, { useRef } from 'react'
import { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { useCart } from '../../../context/cart'
import { useCustomTheme } from '../../../context/theme'
import Text from '../../atomos/Text'
import { FloatCartContainer, FloatContainer } from './style'

type TPropsCard = { handleClose: () => void }

const Card = ({ handleClose }: TPropsCard) => {
  const { toggleTheme } = useCustomTheme()

  const handleToggleTheme = () => {
    toggleTheme()
  }

  return (
    <>
      <button onClick={handleClose}>fechar</button>
      <br />
      <button onClick={handleToggleTheme}>clique aqui para mudar o tema</button>
    </>
  )
}

const FloatCart: React.FC = () => {
  const salesContainerRef = useRef(null)
  const [active, setActive] = useState(false)
  const { calc } = useCart()

  return (
    <FloatContainer
      ref={salesContainerRef}
      className={`float_container ${active ? 'active' : ''}`}
    >
      <FloatCartContainer
        dragMomentum={false}
        dragConstraints={salesContainerRef}
        drag={active ? false : 'x'}
        className="float_cart"
        onClick={() => !active && setActive(true)}
      >
        {active ? (
          <Card handleClose={() => setActive(false)} />
        ) : (
          <>
            <Text className="tooltiptext">R$ {calc}</Text>
            <FaPizzaSlice size={28} color="#F97242" />
          </>
        )}
      </FloatCartContainer>
    </FloatContainer>
  )
}

export default FloatCart