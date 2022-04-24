import styled from 'styled-components'
import * as S from 'styles'

export const H1 = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 6rem;
`

export const Loading = styled.main`
  ${S.CenterContent}
  flex-direction: column;
  gap: 3rem;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
`

export const Spinner = styled.div`
  border: 8px solid ${S.colors.blue};
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border-left-color: ${S.colors.lightBlue};
  animation: spinLoading 1.5s linear infinite;

  @keyframes spinLoading {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`