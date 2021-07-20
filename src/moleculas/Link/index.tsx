/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import NextLink, { LinkProps } from 'next/link'
import styled from 'styled-components'

const LinkTo = styled(NextLink)``

const Link = ({
  children,
  as,
  ...props
}: React.PropsWithChildren<LinkProps>) => (
  <LinkTo {...props}>
    <a>{children}</a>
  </LinkTo>
)

export default Link
