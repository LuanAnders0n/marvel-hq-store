import styled from 'styled-components'

export const Container = styled.div`
  background: #efe9e9;
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    margin-top: 15px;
  }

  .buy {
    background: #ed1d24;
    color: #ffffff;
    width: 200px;
    height: 75px;
    border: none;
    border-radius: 30px 10px 30px 10px;
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
    background-color: #d7cfcf;
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

  .text {
    color: #000000;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`
export default Container
