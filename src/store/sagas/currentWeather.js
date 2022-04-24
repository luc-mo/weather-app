import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

import {
  GET_CURRENT_WEATHER_REQUEST,
  GET_CURRENT_WEATHER_SUCCESS,
  GET_CURRENT_WEATHER_FAILURE
} from 'store/actions/types'

function currentWeatherRequest({ lat, lon }) {
  const url = process.env.REACT_APP_API_URL || ''
  const headers = { 'Content-Type': 'application/json' }
  const params = { lat, lon }

  return axios(url + '/api/current', { headers, params })
}

function* workerSaga({ payload }) {
  try {
    const { data } = yield call(currentWeatherRequest, payload);
    const { current, daily } = data;
    yield put({ type: GET_CURRENT_WEATHER_SUCCESS, payload: { current, daily }});
  } catch(error) {
    yield put({ type: GET_CURRENT_WEATHER_FAILURE, payload: { error }});
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_CURRENT_WEATHER_REQUEST, workerSaga);
}