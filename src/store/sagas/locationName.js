import { takeLatest, call, put, select } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_GEOLOCATION_REQUEST,
  GET_GEOLOCATION_SUCCESS,
  GET_GEOLOCATION_FAILURE,
  GET_CURRENT_WEATHER_REQUEST
} from 'store/actions/types'

function locationNameRequest({ lat, lon }) {
  const url = process.env.REACT_APP_API_URL || ''
  const headers = { 'Content-Type': 'application/json' }
  const params = { lat, lon }

  return axios(url + '/api/name', { headers, params })
}

function* workerSaga({ payload }) {
  try {
    if(payload.error) throw payload.error
    const { lat, lon } = payload.location
    const { data: { name }} = yield call(locationNameRequest, { lat, lon })
    yield put({ type: GET_GEOLOCATION_SUCCESS, payload: { lat, lon, name }})
    yield put({ type: GET_CURRENT_WEATHER_REQUEST, payload: { lat, lon }})
  } catch(error) {
    const { lat, lon } = yield select(state => state.geolocation)
    yield put({ type: GET_GEOLOCATION_FAILURE, payload: { error }})
    yield put({ type: GET_CURRENT_WEATHER_REQUEST, payload: { lat, lon }})
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_GEOLOCATION_REQUEST, workerSaga)
}