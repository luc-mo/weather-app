import { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { getLocationName } from 'store/actions/creators'
import { useReducers, useGeolocation } from 'hooks'
import { Home } from './pages'

function App() {
  const dispatch = useDispatch()
  const [location, error, loaded] = useGeolocation()
  const { geoLoaded } = useReducers('geolocation')

  useEffect(() => {
    if(loaded && !geoLoaded) {
      dispatch(getLocationName({ location, error }))
    }
  }, [dispatch, location, error, loaded, geoLoaded])

  return <Fragment>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </Fragment>
}

export default App