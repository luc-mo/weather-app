import { useReducers } from 'hooks'
import * as S from './Humidity.styles'
import { S as H } from 'components/Main/Highlights'

function Humidity() {
  const { current } = useReducers('weather')

  return <S.Humidity>
    <H.H3>Humidity</H.H3>
    <H.Value>{current.humidity}%</H.Value>
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