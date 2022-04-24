import { memo } from 'react'
import { handleDirection } from 'components/WeatherIcons'
import * as S from './WindDirection.styles'

function WindDirection({ deg = 0, ...rest }) {
  const { dir, name, arrow, size } = handleDirection(deg)
  return <S.WindDirection {...rest}>
    <S.Arrow
      src={arrow}
      alt={name}
      width={size}
    />
    <S.P children={dir}/>
  </S.WindDirection>
}

export default memo(WindDirection)