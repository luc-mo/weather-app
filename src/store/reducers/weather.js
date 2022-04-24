import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_FAILURE,
  GET_HOURLY_WEATHER_REQUEST,
  GET_HOURLY_WEATHER_SUCCESS,
  GET_HOURLY_WEATHER_FAILURE
} from 'store/actions/types'

const initialState = {
  current: {},
  daily: [],
  hourly: [],
  currentLoaded: false,
  hourlyLoaded: false,
  currentError: null,
  hourlyError: null
}

export function weatherReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case GET_CURRENT_WEATHER_REQUEST:
      return { ...state, currentLoaded: false, currentError: null }
    case GET_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        current: payload.current,
        daily: payload.daily,
        currentLoaded: true
      }
    case GET_CURRENT_WEATHER_FAILURE:
      return { ...state, currentLoaded: true, currentError: payload.error }
    
    case GET_HOURLY_WEATHER_REQUEST:
      return { ...state, hourlyLoaded: false, hourlyError: null }
    case GET_HOURLY_WEATHER_SUCCESS:
      return { ...state, hourlyLoaded: true, hourly: payload.hourly }
    case GET_HOURLY_WEATHER_FAILURE:
      return { ...state, hourlyLoaded: true, hourlyError: payload.error }

    default:
      return state
  }
}