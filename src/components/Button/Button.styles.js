import styled, { css } from 'styled-components'
import * as S from 'styles'

const SquareButton = css`
  padding: 8px 10px;
  gap: 6px;
  border-radius: 4px;
  font-family: 'Raleway', sans-serif;
  letter-spacing: 1px;
  font-size: 1.6rem;
`

const RoundButton = css`
  width: 4rem;
  height: 4rem;
  padding: 8px;
  border-radius: 50%;
`

export const Button = styled.button`
  ${S.CenterContent}
  border: 0;
  background-color: ${S.colors.lightBlue};
  color: ${S.colors.white};
  box-shadow: 0px 1px 3px 0.5px rgba(0, 0, 0, 1);
  ${props => props.rounded ? RoundButton : SquareButton}
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.8;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.5);
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`

export const ButtonImage = styled.img`
  width: ${props => !props.rounded && '2rem'};
`