import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #EFE9E9;
    -webkit-font-smoothing: antialiased;
    color: #ffffff;
  }
  
  body, input, button {
    font: 400 16px 'Roboto', sans-serif;
  }

input{
  border: 0;
}

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }



`
