import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    width: 18.75rem;
  }

  .banner {
    width: 100vw;
    height: 100vh;
  }

  .landing {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    position: absolute;
    text-align: center;
    color: #ffffff;
    width: 100%;
    height: 100%;
  }

  .title {
    h1 {
      font-size: 64px;
    }
    h2 {
      font-size: 32px;
    }
  }

  .link {
    text-decoration: none;
    background: #ed1c24;
    width: 40rem;
    height: 5.62rem;
    border-radius: 70px;
    color: #ffffff;
    font-size: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
