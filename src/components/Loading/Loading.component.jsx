import * as S from './Loading.styles'

function Loading({ message }) {
  return <S.Loading>
    <S.H1>{message}</S.H1>
    <S.Spinner/>
  </S.Loading>
}

export default Loading