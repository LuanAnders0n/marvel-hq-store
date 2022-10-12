import React from 'react'
import Hqs from '../../components/Hqs'
import NavBar from '../../components/Navbar'
import Container from './styled'

const Store = () => {
  return (
    <div>
      <NavBar />

      <Container>
        <div className="line"></div>
      </Container>
      <Hqs />
    </div>
  )
}

export default Store
