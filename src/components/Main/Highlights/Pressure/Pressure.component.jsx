import { useReducers } from 'hooks'
import * as S from './Pressure.styles'

function Pressure() {
  const { current } = useReducers('weather')

  return <S.Pressure>
    <S.Title>Pressure</S.Title>
    <S.Value>{current.pressure} mb</S.Value>
  </S.Pressure>
}

export default Pressure