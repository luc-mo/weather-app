import { combineReducers } from 'redux'
import { geolocationReducer } from 'store/reducers/geolocation'
import { weatherReducer } from 'store/reducers/weather'
import { searchbarReducer } from 'store/reducers/searchbar'

const rootReducer = combineReducers({
  geolocation: geolocationReducer,
  weather: weatherReducer,
  searchbar: searchbarReducer
})

export default rootReducer