import { useReducers } from 'hooks'
import { getCurrentDate } from 'utils'
import { location } from 'icons'
import * as S from './Data.styles'

function Data() {
  const { name } = useReducers('geolocation')
  const { day, weekDay, month } = getCurrentDate()

  return <S.Data>
    <S.Date>Today • {weekDay}, {day} {month}</S.Date>
    <S.Location>
      <img src={location} alt='Location' />
      {name}
    </S.Location>
  </S.Data>
}

export default Data