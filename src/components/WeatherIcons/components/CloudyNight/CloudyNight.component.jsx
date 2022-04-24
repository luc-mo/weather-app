import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './CloudyNight.styles'
import './keyframes.css'

function CloudyNight({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.Moon
      src={icons.moon}
      alt='moon'
    />
    <S.Cloud
      src={icons.cloud}
      alt='cloud'
    />
    <S.StarOne
      src={icons.star}
      alt='star'
    />
    <S.StarTwo
      src={icons.star}
      alt='star'
    />
    <S.StarThree
      src={icons.star}
      alt='star'
    />
    <S.StarFour
      src={icons.star}
      alt='star'
    />
  </WeatherIcon>
}

export default memo(CloudyNight)