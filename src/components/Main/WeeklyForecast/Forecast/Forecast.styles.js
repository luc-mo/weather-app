import styled from 'styled-components'
import * as S from 'styles'

export const Forecast = styled.article`
  ${S.CenterContent}
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  background-color: ${S.colors.blue};
  border-radius: 6px;
`

export const H3 = styled.h3`
  font-size: 2rem;
`

export const Temp = styled.div`
  ${S.CenterContent}
  justify-content: space-evenly;
  gap: 1rem;
  width: 100%;
  font-size: 2rem;
`

export const Max = styled.p`
  color: ${S.colors.white};
  font-size: 2.2rem;
  letter-spacing: 1px;
`

export const Min = styled.p`
  color: ${S.colors.grey};
  font-size: 2.2rem;
  letter-spacing: 1px;
`