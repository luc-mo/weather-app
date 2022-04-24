import styled from 'styled-components'

export const Sun = styled.img`
  position : absolute;
  width: 35%;
  height: 35%;
  top: 27%;
  left: 16%;
  z-index: 3;
  animation: cloudyDaySun 8s linear infinite;
`

export const Cloud = styled.img`
  position : absolute;
  width: 60%;
  height: 60%;
  top: 55%;
  left: 55%;
  z-index: 5;
  animation: cloudyDayCloud 6s linear infinite;
`