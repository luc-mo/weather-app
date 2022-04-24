import { Fragment } from 'react'
import { useReducers } from 'hooks'
import { Header, Image, Forecast, Data, Map } from 'components/Sidebar'
import * as S from './Sidebar.styles'

function Sidebar() {
  const { isSearchbarOpen } = useReducers('searchbar')

  return <S.Sidebar>
    <Header/>
    {isSearchbarOpen && <Map/>}
    {!isSearchbarOpen && <Fragment>
      <Image/>
      <Forecast/>
      <Data/>
    </Fragment>}
  </S.Sidebar>
}

export default Sidebar