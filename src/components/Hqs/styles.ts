import styled from 'styled-components'

export const Container = styled.main`
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
  }
`

export default Container
