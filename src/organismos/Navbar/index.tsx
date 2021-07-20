import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from '../../moleculas/Link'
import Image from 'next/image'
import logo from '../../../public/logo.webp'

import styled from 'styled-components'
import { useCallback } from 'react'

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  &.solid {
    background-color: #fff;
  }
  &.transparent {
    background-color: transparent;
  }
  .container {
    padding: 12.5px 0;
  }
  .left-container,
  .right-container {
    display: inline-flex;
    gap: 40px;
    a {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
    }
  }
`

const Navbar: React.FC = () => {
  const [transparent, setTransparent] = useState(true)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) setTransparent(false)
    else setTransparent(true)
  }, [])

  useEffect(() => {
    document.addEventListener(`scroll`, handleScroll)
    return () => {
      document.removeEventListener(`scroll`, handleScroll)
    }
  }, [handleScroll])

  return (
    <NavbarContainer className={transparent ? 'transparent' : 'solid'}>
      <div className="container grid grid-cols-12 items-center">
        <div className="left-container col-start-1 col-end-5">
          <Link href="/about">Sobre nós</Link>
          <Link href="/contact">Contato</Link>
        </div>
        <div className="center-container col-start-5 col-end-9 justify-self-center">
          <Image width={112} height={67} src={logo} alt="logo" />
        </div>
        <div className="right-container col-start-10 col-end-13 justify-self-end">
          <Link href="/about">Daily 11am - 9pm</Link>
          <Link href="/contact">0 800 33 08 98</Link>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
