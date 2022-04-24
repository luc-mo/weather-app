import { Fragment, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
  useReducers,
  useGeolocation,
  useMap,
  useMarker,
  useSearchBox
} from 'hooks'
import {
  getLocationName,
  toggleSearchbar
} from 'store/actions/creators'

import { Button as LocationButton, Image } from './Button'
import { gpsOn, search } from 'icons'

import * as S from './Map.styles'
import { SearchBox } from './SearchBox'
import { Button } from 'components/Button'

function Map() {
  const dispatch = useDispatch()
  const mapRef = useRef(null)
  const buttonRef = useRef(null)
  const searchBoxRef = useRef(null)

  const { map, marker, searchBox } = useMap(mapRef, buttonRef, searchBoxRef)
  const [location, setLocation] = useMarker({ map, marker })
  useSearchBox(map, searchBox, setLocation)
  
  const [geolocation, error] = useGeolocation()
  const { lat: currentLat, lon: currentLon, geolocationError } = useReducers('geolocation')
  const errorName = geolocationError?.constructor?.name
  const isGpsOn = !geolocationError || errorName !== 'GeolocationPositionError'

  const handleLocation = () => {
    if(isGpsOn && !error) {
      const { lat, lon: lng } = geolocation
      setLocation({ lat, lng })
      marker.setPosition({ lat, lng })
      map.setCenter({ lat, lng })
      map.setZoom(15)
    }
  }

  const handleSearch = () => {
    const { lat, lng: lon } = location
    const isEqual = currentLat === lat && currentLon === lon
    if(!isEqual) {
      dispatch(getLocationName({ location: { lat, lon }, error: null }))
      dispatch(toggleSearchbar())
    }
  }
  
  return <Fragment>
    <S.MapContainer>
      <S.Map ref={mapRef} className='map'>
        <SearchBox ref={searchBoxRef} type='text' placeholder='Search for a place'/>
        {isGpsOn && <LocationButton
          ref={buttonRef}
          onClick={handleLocation}>
          <Image src={gpsOn} alt='gps'/>
        </LocationButton>}
      </S.Map>
    </S.MapContainer>
    <S.ButtonContainer>
      <Button onClick={handleSearch} icon={search} children='Search'/>
    </S.ButtonContainer>
  </Fragment>
}

export default Map