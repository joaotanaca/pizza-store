/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useCallback } from 'react'

import Phone from '../../../../public/phone.svg'
import mixin from '../../../styles/mixin'
import Link from '../../atomos/Link'

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: background-color 0.3s linear;
  &.solid {
    background-color: rgba(255, 255, 255, 0.96);
  }
  &.transparent {
    background-color: transparent;
  }
  .container {
    padding-top: 12.5px;
    padding-bottom: 12.5px;
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
  .right-container {
    .phone {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 18px;
      img {
        margin-top: 2.5px !important;
      }
      ${mixin.md`
        font-size: 16px;
      `}
    }
  }
  .center-container {
    img {
      ${mixin.md`
        width: 100%;
        height: 50px;
    `}
    }
  }
  .left-container,
  .business_hours {
    display: inline-flex;
    align-items: center;
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
        <div className="center-container md:col-span-4 col-span-4 col-start-2 md:col-start-auto justify-self-start md:justify-self-center">
          <img width={112} height={67} src="/logo.webp" alt="logo" />
        </div>
        <div className="right-container md:col-span-4 col-span-6 justify-self-end">
          <Link className="business_hours" href="/about">
            Daily 11am - 9pm
          </Link>
          <Link className="phone" href="tel:+55130800330898">
            <Image width={49} height={40} src={Phone} alt="phone" /> 0 800 33 08
            98
          </Link>
        </div>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
