import styled from 'styled-components'

export const CloudOne = styled.img`
  position: absolute;
  width: 60%;
  height: 60%;
  top: 45%;
  left: 58%;
  z-index: 5;
  animation: thunderstormCloudOne 6s linear infinite;
`

export const CloudTwo = styled.img`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 10%;
  left: 13%;
  opacity: 0.5;
  z-index: 3;
  animation: thunderstormCloudTwo 6s linear infinite;
`

export const Thunder = styled.img`
  position: absolute;
  height: 30%;
  top: 53%;
  left: 50%;
  z-index: 3;
  animation: thunderstormThunder 2s ease-in-out infinite;
`