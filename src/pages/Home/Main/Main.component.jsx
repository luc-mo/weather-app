import { WeeklyForecast, Highlights } from 'components/Main'
import * as S from './Main.styles'

function Main() {
  return <S.Main>
    <WeeklyForecast/>
    <Highlights/>
  </S.Main>
}

export default Main