import { useMemo } from 'react'
import { useReducers } from 'hooks'
import * as S from './Forecast.styles'

function Forecast() {
  const { current } = useReducers('weather')
  const temp = useMemo(() => Math.round(current?.temp), [current?.temp])

  return <S.Forecast>
    <S.H1>
      {temp}
      <S.Degrees>
        °C
      </S.Degrees>
    </S.H1>
    <S.Current>
      {current?.weather?.description}
    </S.Current>
  </S.Forecast>
}

export default Forecast