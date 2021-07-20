import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html{
    scroll-behavior: smooth;
    font-family: 'Montserrat', sans-serif;
  }
  p,h1,h2,h3,h4,h5,h6{
    color:${({ theme }) => theme.text}
  }
`
