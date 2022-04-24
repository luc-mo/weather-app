import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './Fog.styles'
import './keyframes.css'


function Fog({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.FogOne
      src={icons.fog}
      alt='fog'
    />
    <S.FogTwo
      src={icons.fog}
      alt='fog'
    />
    <S.FogThree
      src={icons.fog}
      alt='fog'
    />
    <S.FogFour
      src={icons.fog}
      alt='fog'
    />
  </WeatherIcon>
}

export default memo(Fog)