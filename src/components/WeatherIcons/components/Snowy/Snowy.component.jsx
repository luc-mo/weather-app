import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './Snowy.styles'
import './keyframes.css'

function Snowy({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.CloudOne
      src={icons.cloud}
      alt='moon'
    />
    <S.CloudTwo
      src={icons.cloud}
      alt='cloud'
    />
    <S.SnowOne
      src={icons.snow}
      alt='snow'
    />
    <S.SnowTwo
      src={icons.snow}
      alt='snow'
    />
    <S.SnowThree
      src={icons.snow}
      alt='snow'
    />
  </WeatherIcon>
}

export default memo(Snowy)