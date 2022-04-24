import { useMemo } from 'react'
import { WeatherIcons } from 'components/WeatherIcons'
import { getUTCDate } from 'utils'
import * as S from './Forecast.styles'

function Forecast({ forecast }) {
  const { temp, weather, date } = forecast
  const { weekDay } = getUTCDate(date)
  const max = useMemo(() => Math.round(temp.max), [temp.max])
  const min = useMemo(() => Math.round(temp.min), [temp.min])
  return <S.Forecast>
    <S.H3>{weekDay}</S.H3>
    <WeatherIcons
      main={weather.main}
      icon={weather.icon}
      size='80%'
    />
    <S.Temp>
      <S.Max>{max}°C</S.Max>
      <S.Min>{min}°C</S.Min>
    </S.Temp>
  </S.Forecast>
}

export default Forecast