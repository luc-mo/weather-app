import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './Thunderstorm.styles'
import './keyframes.css'


function Thunderstorm({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.CloudOne
      src={icons.cloud}
      alt='cloud'
    />
    <S.CloudTwo
      src={icons.cloud}
      alt='cloud'
    />
    <S.Thunder
      src={icons.thunder}
      alt='thunder'
    />
  </WeatherIcon>
}

export default memo(Thunderstorm)