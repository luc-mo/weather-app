import styled from 'styled-components'

export const CloudOne = styled.img`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 45%;
  left: 58%;
  transform: translate(-50%, -50%);
  z-index: 5;
`

export const CloudTwo = styled.img`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 10%;
  left: 13%;
  opacity: 0.5;
  z-index: 3;
  animation: rainyCloud 6s linear infinite;
`

const Rain = styled.img`
  position: absolute;
  width: 5%;
  top: 53%;
`

export const RainOne = styled(Rain)`
  left: 48%;
  animation: rainyRain 1.4s linear infinite;
`

export const RainTwo = styled(Rain)`
  left: 58%;
  animation: rainyRain 1.4s linear 0.7s infinite;
`

export const RainThree = styled(Rain)`
  left: 68%;
  animation: rainyRain 1.4s linear infinite;
`