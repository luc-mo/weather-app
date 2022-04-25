import styled from 'styled-components'
import * as S from 'styles'

export const Sidebar = styled.aside`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${S.colors.blue};
  padding: 2rem 0;
  padding-bottom: 4rem;
  min-width: 30rem;
  max-width: 33rem;
  flex-grow: 1;
  @media (max-width: 730px) {
    position: static;
    min-width: 100%;
  }
`