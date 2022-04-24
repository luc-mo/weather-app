import styled from 'styled-components'
import { S } from 'components/Button'

export const Button = styled(S.Button)`
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 0.8rem;
  background-color: white;
  box-shadow: 0px 1px 4px -1px rgb(0, 0, 0, 0.3);
`

export const Image = styled(S.ButtonImage)`
  width: 2.4rem;
  filter: brightness(40%)
`