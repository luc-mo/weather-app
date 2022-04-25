import styled from 'styled-components'

export const Highlights = styled.section`
  display: grid;
  width: 100%;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(max(30rem, 100% / 2 - 3rem), 1fr));
`

export const H2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`