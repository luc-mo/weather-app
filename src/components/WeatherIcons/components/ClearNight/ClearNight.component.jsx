import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './ClearNight.styles'
import './keyframes.css'

function ClearNight({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.Moon
      src={icons.moon}
      alt='moon'
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
  </WeatherIcon>
}

export default memo(ClearNight)