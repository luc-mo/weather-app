import styled from 'styled-components'

export const CloudOne = styled.img`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 45%;
  left: 60%;
  z-index: 5;
  transform: translate(-50%, -50%);
`

export const CloudTwo = styled.img`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 10%;
  left: 13%;
  opacity: 0.5;
  z-index: 3;
  animation: snowyCloud 6s linear infinite;
`

const Snow = styled.img`
  position: absolute;
  width: 7%;
  top: 55%;
`

export const SnowOne = styled(Snow)`
  left: 46%;
  animation: snowySnow 4s linear 1.7s infinite;
`

export const SnowTwo = styled(Snow)`
  left: 56%;
  animation: snowySnow 4s linear infinite;
`

export const SnowThree = styled(Snow)`
  left: 66%;
  animation: snowySnow 4s linear 1.7s infinite;
`
