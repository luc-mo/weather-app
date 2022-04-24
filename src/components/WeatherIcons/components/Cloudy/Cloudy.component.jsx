import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './Cloudy.styles'
import './keyframes.css'

function Cloudy({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.CloudOne
      src={icons.cloud}
      alt='Cloud'
    />
    <S.CloudTwo
      src={icons.cloud}
      alt='Cloud'
    />
  </WeatherIcon>
}

export default memo(Cloudy)