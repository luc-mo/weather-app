import { useReducers } from 'hooks'
import { WindDirection } from 'components/WeatherIcons'
import * as S from './WindStatus.styles'

function WindStatus() {
  const { current } = useReducers('weather')

  return <S.WindStatus>
    <S.Title>Wind Status</S.Title>
    <S.Value>{current.windSpeed} m/s</S.Value>
    <WindDirection deg={current.windDeg}/>
  </S.WindStatus>
}

export default WindStatus