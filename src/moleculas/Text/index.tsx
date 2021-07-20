import React, { HTMLAttributes } from 'react'

const Text: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return <p {...props}>{children}</p>
}

export default Text
