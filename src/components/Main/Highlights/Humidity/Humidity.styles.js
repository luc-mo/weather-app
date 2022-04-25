import styled, { css } from 'styled-components'
import * as S from 'styles'

export const Humidity = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: ${S.colors.blue};
  border-radius: 6px;
  gap: 1rem;
`

const Content = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.6rem;
  color: ${S.colors.grey};
`

export const Container = styled.div`
  position: relative;
  width: 70%;
  height: 1rem;
  @media (min-width: 730px) {
    &::before {
      ${Content}
      left: -3rem;
      content: '0%';  
    }
    &::after {
      ${Content}
      right: -4.6rem;
      content: '100%';
    }
  }
  @media (max-width: 730px) {
    width: 80%;
  }
`

export const Progress = styled.progress`
  ${S.CenterContent}
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  &::-webkit-progress-bar {
    background-color: ${S.colors.grey};
  }
  &::-webkit-progress-value {
    border-radius: 0 10rem 10rem 0;
    background-color: ${S.colors.lightBlue};
  }
`