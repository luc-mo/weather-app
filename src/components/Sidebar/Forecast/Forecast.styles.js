import styled from 'styled-components'
import * as S from 'styles'

export const Forecast = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 4rem;
  text-align: center;
`

export const H1 = styled.h1`
  color: ${S.colors.white};
  font-size: 8rem;
  font-weight: bold;
`

export const Degrees = styled.span`
  color: ${S.colors.grey};
  font-size: 5rem;
  letter-spacing: 3px;
`

export const Current = styled.p`
  font-size: 2.6rem;
`