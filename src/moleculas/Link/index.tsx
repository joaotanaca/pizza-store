/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { HTMLAttributes } from 'react'
import NextLink, { LinkProps } from 'next/link'
import styled from 'styled-components'

const LinkTo = styled(NextLink)``

type TProps = LinkProps & HTMLAttributes<HTMLAnchorElement>

const Link = ({
  children,
  as,
  href,
  scroll,
  replace,
  shallow,
  passHref,
  prefetch,
  locale,
  ...props
}: React.PropsWithChildren<TProps>) => {
  return (
    <LinkTo {...{ href, scroll, replace, shallow, passHref, prefetch, locale }}>
      <a {...props}>{children}</a>
    </LinkTo>
  )
}

export default Link
