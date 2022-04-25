import { useMemo } from 'react'
import { useReducers } from 'hooks'
import * as S from './Visibility.styles'
import { S as H } from 'components/Main/Highlights'

function Visibility() {
  const { current } = useReducers('weather')
  const visibility = useMemo(() => current.visibility / 1000, [current])

  return <S.Visibility>
    <H.H3>Visibility</H.H3>
    <H.Value>
      {visibility} km
    </H.Value>
  </S.Visibility>
}

export default Visibility