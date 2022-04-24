import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './CloudyDay.styles'
import './keyframes.css'

function CloudyDay({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.Sun
      src={icons.sun}
      alt='sun'
    />
    <S.Cloud
      src={icons.cloud}
      alt='cloud'
    />
  </WeatherIcon>
}

export default memo(CloudyDay)