import { fork } from 'redux-saga/effects'

import locationName from './locationName'
import currentWeather from './currentWeather'
import hourlyWeather from './hourlyWeather'

export default function* rootSaga() {
  yield fork(locationName)
  yield fork(currentWeather)
  yield fork(hourlyWeather)
}