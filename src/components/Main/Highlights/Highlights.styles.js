import styled from 'styled-components'

export const Highlights = styled.section`
  display: grid;
  width: 100%;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(max(min(30rem, 100%), 100% / 2 - 3rem), 1fr));
`

export const H2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 730px) {
    text-align: center;
  }
`

export const H3 = styled.h3`
  font-size: 2.4rem;
`

export const Value = styled.p`
  font-size: 4.6rem;
  letter-spacing: 2px;
  text-align: center;
  @media (max-width: 730px) {
    font-size: 4rem;
  }
`