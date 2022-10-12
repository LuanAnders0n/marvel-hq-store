import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  padding: 10px;

  .hqs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  .img {
    width: 250px;
    height: 380px;
    border: transparent solid 3px;

    :hover {
      animation-name: floating;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;

      border: #000000 solid 3px;
      border-radius: 5px;

      @keyframes floating {
        0% {
          transform: translate(0, 0px);
        }
        50% {
          transform: translate(0, -15px);
        }
        100% {
          transform: translate(0, 0px);
        }
      }
    }
  }

  .comic {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin: 10px;
  }

  .title {
    color: #000000;
  }
  a {
    text-decoration: none;
  }

  .buy {
    background: #ed1d24;
    color: #ffffff;
    width: 200px;
    height: 75px;
    border: none;
    border-radius: 30px 10px 30px 10px;
    margin-top: 10px;
    font-size: 30px;
    font-weight: bold;

    :hover {
      background: #f54e53;
      transition-delay: 0.15s;
    }
  }
`

export default Container
