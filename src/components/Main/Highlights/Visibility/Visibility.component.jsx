import { useMemo } from 'react'
import { useReducers } from 'hooks'
import * as S from './Visibility.styles'

function Visibility() {
  const { current } = useReducers('weather')
  const visibility = useMemo(() => current.visibility / 1000, [current])

  return <S.Visibility>
    <S.Title>Visibility</S.Title>
    <S.Value>
      {visibility} km
    </S.Value>
  </S.Visibility>
}

export default Visibility