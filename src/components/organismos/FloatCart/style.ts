import { motion } from 'framer-motion'
import styled from 'styled-components'

export const FloatContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  place-content: left;
  place-items: left;
  width: 85%;
  top: 200px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    display: none;
    transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  &.active {
    &:after {
      opacity: 1;
      display: unset;
    }
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(0);
    .float_cart {
      background: ${({ theme }) => theme.background};
      max-width: 500px;
      width: calc(100% - 30px);
      height: 500px;
      border-radius: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) !important;
    }
  }
`

export const FloatCartContainer = styled(motion.div)`
  position: relative;
  display: inline-block;
  width: min-content;
  height: min-content;
  background-color: #fff;
  padding: 11px;
  border-radius: 50%;
  z-index: 80;
  cursor: pointer;
  cursor: hand;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  .tooltiptext {
    position: absolute;
    width: max-content;
    background-color: #3f3f3f;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      bottom: -7px;
      left: 50%;
      transform: translateX(-50%) rotateZ(180deg);
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #3f3f3f transparent;
    }
  }
  &:active {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`
