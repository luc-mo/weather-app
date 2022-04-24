import styled from 'styled-components'

const Fog = styled.img`
  position: absolute;
  width: 50%;
  height: 50%;
`

export const FogOne = styled(Fog)`
  top: 8%;
  left: 10%;
  animation: fogOneLeft 6s linear infinite;
`

export const FogTwo = styled(Fog)`
  top: 40%;
  left: 10%;
  z-index: 3;
  animation: fogTwoLeft 6s linear infinite;
`

export const FogThree = styled(Fog)`
  top: 16%;
  right: 10%;
  animation: fogThreeRight 6s linear infinite;
`

export const FogFour = styled(Fog)`
  top: 45%;
  right: 10%;
  animation: fogFourRight 6s linear infinite;
`