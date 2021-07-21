import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from '../../moleculas/Link'
import Image from 'next/image'
import logo from '../../../public/logo.webp'
import mixin from '../../styles/mixin'

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
  .business_hours {
    display: unset;
    ${mixin.md`
        display: none;
    `}
  }
  .left-container {
    display: inline-flex;
    ${mixin.md`
        display: none;
    `}
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
        <div className="left-container col-span-4">
          <Link href="/about">Sobre nós</Link>
          <Link href="/contact">Contato</Link>
        </div>
        <div className="center-container md:col-span-4 col-span-5 col-start-2 md:col-start-auto justify-self-center">
          <Image width={112} height={67} src={logo} alt="logo" />
        </div>
        <div className="right-container md:col-span-4 col-span-5 md:justify-self-end justify-center">
          <Link className="business_hours" href="/about">
            Daily 11am - 9pm
          </Link>
          <Link href="tel:+55130800330898">0 800 33 08 98</Link>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
