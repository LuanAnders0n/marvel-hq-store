import React from 'react'
import { Container } from './styles'
import marvel from '../../images/marvelBanner.png'

const Home = () => {
  return (
    <Container>
      <img src={marvel} alt="img" />
    </Container>
  )
}

export default Home
