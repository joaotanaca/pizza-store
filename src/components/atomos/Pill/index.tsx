import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

type TProps = HTMLAttributes<HTMLAnchorElement> & {
  active: boolean
  id: string
}

const PillContainer = styled.a`
  background-color: #eceef6;
  color: ${(props) => props.theme.text};
  border-radius: 45px;
  padding: 17px 40px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  &:target,
  &.active {
    background-color: ${(props) => props.theme.secondary};
    color: #fff;
  }
`

const Pill: React.FC<TProps> = ({ children, active, className, ...props }) => {
  return (
    <PillContainer
      href={`#${props.id}`}
      className={`${className ?? ''}${active ? 'active' : ''}`}
      {...props}
    >
      {children}
    </PillContainer>
  )
}

export default Pill
