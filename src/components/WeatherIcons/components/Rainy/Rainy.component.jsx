import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './Rainy.styles'
import './keyframes.css'


function Rainy({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.CloudOne
      src={icons.cloud}
      alt='cloud'
    />
    <S.CloudTwo
      src={icons.cloud}
      alt='cloud'
    />
    <S.RainOne
      src={icons.rain}
      alt='rain'
    />
    <S.RainTwo
      src={icons.rain}
      alt='rain'
    />
    <S.RainThree
      src={icons.rain}
      alt='rain'
    />
  </WeatherIcon>
}

export default memo(Rainy)