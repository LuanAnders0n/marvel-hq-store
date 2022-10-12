import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  .img {
    padding: 50px;
    width: 450px;
    height: 700px;
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

  .price {
    width: 500px;
    height: 100px;
    background-color: #413939;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 30px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export default Container
