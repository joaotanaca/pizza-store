import React from 'react'

interface THeading
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level: '1' | '2' | '3' | '4' | '5' | '6'
}

const Heading: React.FC<THeading> = ({ level, children, ...props }) => {
  const Heading = `h${level}`
  return <Heading {...props}>{children}</Heading>
}

export default Heading
