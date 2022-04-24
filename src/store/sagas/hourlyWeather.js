import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import {
  GET_HOURLY_WEATHER_REQUEST,
  GET_HOURLY_WEATHER_SUCCESS,
  GET_HOURLY_WEATHER_FAILURE
} from 'store/actions/types'

function currentWeatherRequest({ lat, lon }) {
  const url = process.env.REACT_APP_API_URL || ''
  const headers = { 'Content-Type': 'application/json' }
  const params = { lat, lon }

  return axios(url + '/api/hourly', { headers, params })
}

function* workerSaga(action) {
  try {
    const { data } = yield call(currentWeatherRequest, action.payload);
    const { hourly } = data;
    yield put({ type: GET_HOURLY_WEATHER_SUCCESS, payload: { hourly }});
  } catch(error) {
    yield put({ type: GET_HOURLY_WEATHER_FAILURE, payload: { error }});
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_HOURLY_WEATHER_REQUEST, workerSaga);
}