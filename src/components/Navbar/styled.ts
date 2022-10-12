import styled from 'styled-components'

export const Container = styled.main`
  .navbar {
    background: #ed1d24;
    width: 100%;
  }

  .itens-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    height: 30px;
    width: 400px;
    margin-left: 30%;
  }

  .carrinho {
    margin-right: 10%;
  }
`

export default Container
