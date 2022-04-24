import { useReducers } from 'hooks'
import { Forecast } from './Forecast'
import * as S from './WeeklyForecast.styles'

function WeeklyForecast() {
  const weather = useReducers('weather')
  const daily = weather?.daily?.filter((curr, index) => index < 5)

  return <S.WeeklyForecast>
    {daily.map((forecast, index) => <Forecast forecast={forecast} key={index}/>)}
  </S.WeeklyForecast>
}

export default WeeklyForecast