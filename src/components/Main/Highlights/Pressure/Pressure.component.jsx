import { useReducers } from 'hooks'
import * as S from './Pressure.styles'
import { S as H } from 'components/Main/Highlights'

function Pressure() {
  const { current } = useReducers('weather')

  return <S.Pressure>
    <H.H3>Pressure</H.H3>
    <H.Value>{current.pressure} mb</H.Value>
  </S.Pressure>
}

export default Pressure