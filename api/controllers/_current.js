import axios from 'axios'
import { currentResponse, dailyResponse } from '../utils/_responses'

export async function getCurrentWeather(req, res) {
  try {
    const { lat, lon } = req.query
    const exclude = 'hourly,minutely,alert'

    const url = `${process.env.REACT_APP_API_ONECALL}&lat=${lat}&lon=${lon}&exclude=${exclude}`
    const headers = { 'Content-Type': 'application/json' }
    
    const { data } = await axios(url, { headers })
    const current = currentResponse(data.current)
    const daily = dailyResponse(data.daily)

    res.send({ current, daily })
  } catch(error) {
    console.log(error)
    res.status(500).send({ error: error.message })
  }
}