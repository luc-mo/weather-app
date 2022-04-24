import { Fragment } from 'react'
import { useReducers } from 'hooks'

import { Sidebar } from './Sidebar'
import { Main } from './Main'
import { Loading } from 'components/Loading'
import * as S from './Home.styles'

function Home() {
  const { geoLoaded } = useReducers('geolocation')
  const { currentLoaded } = useReducers('weather')
  const isLoaded = geoLoaded && currentLoaded

  return <Fragment>
    {isLoaded ? <S.Home>
      <Sidebar/>
      <Main/>
    </S.Home> : <Loading message='Loading weather...'/>}
  </Fragment>
}

export default Home