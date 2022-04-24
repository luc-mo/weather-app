import {
  GET_GEOLOCATION_REQUEST,
  GET_GEOLOCATION_SUCCESS,
  GET_GEOLOCATION_FAILURE
} from 'store/actions/types'

const initialState = {
  lat: -33.44620,
  lon: -70.66040,
  name: 'Santiago',
  geoLoaded: false,
  geolocationError: null,
  locationNameError: null
}

export function geolocationReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case GET_GEOLOCATION_REQUEST:
      return { ...state, geolocationError: null }
    case GET_GEOLOCATION_SUCCESS:
      return {
        ...state,
        lat: payload.lat,
        lon: payload.lon,
        name: payload.name,
        geoLoaded: true
      }
    case GET_GEOLOCATION_FAILURE:
      return { ...state, geoLoaded: true, geolocationError: payload.error }

    default:
      return state
  }
}