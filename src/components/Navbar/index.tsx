import react from 'react'
import logo from '../../images/logo.png'
import Container from './styled'
import carrinho from '../../images/carrinho.svg'
import { Link } from 'react-router-dom'
import Shopping from '../../Pages/shopping'

const NavBar = () => {
  return (
    <Container>
      <div className="navbar">
        <div className="itens-container">
          <img src={logo} alt="" width={100} />
          <input className="search" type="search"></input>
          <Link to="/Shopping">
            <img className="carrinho" src={carrinho} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default NavBar
