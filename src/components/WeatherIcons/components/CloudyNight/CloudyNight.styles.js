import styled from 'styled-components'

export const Moon = styled.img`
  position: absolute;
  width: 30%;
  height: 30%;
  top: 27%;
  left: 20%;
  z-index: 3;
  animation: cloudyNightMoon 4s linear infinite;
`

export const Cloud = styled.img`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 55%;
  left: 55%;
  z-index: 5;
  animation: cloudyNightCloud 6s linear infinite;
`

export const Star = styled.img`
  position: absolute;
  width: 8%;
`

export const StarOne = styled(Star)`
  top: 33%;
  left: 15%;
  animation: cloudyNightStar 2s linear infinite;
`

export const StarTwo = styled(Star)`
  width: 10%;
  top: 22%;
  left: 60%;
  animation: cloudyNightStar 2s linear 0.3s infinite;
`

export const StarThree = styled(Star)`
  top: 40%;
  left: 85%;
  animation: cloudyNightStar 2s linear 0.6s infinite;
`

export const StarFour = styled(Star)`
  top: 60%;
  left: 8%;
  animation: cloudyNightStar 2s linear 0.9s infinite;
`