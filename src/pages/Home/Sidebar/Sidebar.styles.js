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
  @media (min-aspect-ratio: 3/4) {
    max-width: 33rem;
    min-width: 30rem;
    flex-grow: 1;
  }
  @media (max-aspect-ratio: 3/4) {
    position: static;
    width: 100%;
  }
`