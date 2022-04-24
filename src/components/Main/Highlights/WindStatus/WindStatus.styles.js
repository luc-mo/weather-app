import styled from 'styled-components'
import * as S from 'styles'

export const WindStatus = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: ${S.colors.blue};
  border-radius: 6px;
  gap: 1rem;
`

export const Title = styled.h3`
  font-size: 2.4rem;
`

export const Value = styled.p`
  font-size: 4.6rem;
  letter-spacing: 2px;
`