import { memo } from 'react'
import { WeatherIcon, icons } from 'components/WeatherIcons'

import * as S from './ClearDay.styles'
import './keyframes.css'

function ClearDay({ size = '100%', ...rest }) {
  return <WeatherIcon size={size} {...rest}>
    <S.Sun
      src={icons.sun}
      alt='Sun'
    />
  </WeatherIcon>
}

export default memo(ClearDay)