import styled from 'styled-components'

export const Moon = styled.img`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  animation: clearNightMoon 8s linear infinite;  
`

const Star = styled.img`
  position: absolute;
  width: 8%;
`

export const StarOne = styled(Star)`
  top: 20%;
  left: 20%;
  animation: clearNightStar 2s linear infinite;
`

export const StarTwo = styled(Star)`
  top: 75%;
  left: 25%;
  animation: clearNightStar 2s linear 0.3s infinite;
`

export const StarThree = styled(Star)`
  top: 40%;
  left: 75%;
  animation: clearNightStar 2s linear 0.6s infinite;
`