import { useReducers } from 'hooks'
import * as S from './Humidity.styles'

function Humidity() {
  const { current } = useReducers('weather')

  return <S.Humidity>
    <S.Title>Humidity</S.Title>
    <S.Value>{current.humidity}%</S.Value>
    <S.Container>
      <S.Progress
        min={0}
        max={100}
        value={current.humidity}
      />
    </S.Container>
  </S.Humidity>
}

export default Humidity