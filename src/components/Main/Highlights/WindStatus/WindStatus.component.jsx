import { useReducers } from 'hooks'
import { WindDirection } from 'components/WeatherIcons'
import * as S from './WindStatus.styles'
import { S as H } from 'components/Main/Highlights'

function WindStatus() {
  const { current } = useReducers('weather')

  return <S.WindStatus>
    <H.H3>Wind Status</H.H3>
    <H.Value>{current.windSpeed} m/s</H.Value>
    <WindDirection deg={current.windDeg}/>
  </S.WindStatus>
}

export default WindStatus