import {
  GET_GEOLOCATION_REQUEST,
  GET_CURRENT_WEATHER_REQUEST,
  GET_HOURLY_WEATHER_REQUEST,
  TOGGLE_SEARCHBAR
} from 'store/actions/types'

export const getLocationName = (payload) => ({
  type: GET_GEOLOCATION_REQUEST,
  payload
})

export const getCurrentWeather = ({ lat, lon }) => ({
  type: GET_CURRENT_WEATHER_REQUEST,
  payload: { lat, lon }
})

export const getHourlyWeather = ({ lat, lon }) => ({
  type: GET_HOURLY_WEATHER_REQUEST,
  payload: { lat, lon }
})

export const toggleSearchbar = () => ({
  type: TOGGLE_SEARCHBAR
})