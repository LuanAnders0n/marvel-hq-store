import React from 'react'
import { Container } from './styles'
import marvel from '../../images/marvelBanner.png'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      <img className="banner" src={marvel} alt="img" />

      <div className="landing">
        <img className="logo" src={logo} alt="" />
        <div className="title">
          <h1>O MULTIVERSO TE ESPERA.</h1>
          <h2>
            PARA SUA PRÓXIMA PARADA, UNIVERSOS CARREGADOS DE HISTÓRIAS! <br />{' '}
            EXPLORE AO MAXIMO O MULTIVERSO!
          </h2>
        </div>
        <Link to="/Store" className="link">
          <h3>CONHEÇA NOSSAS HISTORIAS!</h3>
        </Link>
      </div>
    </Container>
  )
}

export default Home
