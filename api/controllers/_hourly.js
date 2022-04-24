import axios from 'axios'
import { hourlyResponse } from '../utils/_responses'

export async function getHourlyWeather(req, res) {
  try {
    const { lat, lon } = req.query
    const exclude = 'current,daily,minutely,alert'

    const url = `${process.env.REACT_APP_API_ONECALL}&lat=${lat}&lon=${lon}&exclude=${exclude}`
    const headers = { 'Content-Type': 'application/json' }
    
    const { data } = await axios(url, { headers })
    const hourly = hourlyResponse(data.hourly)

    res.send({ hourly })
  } catch(error) {
    console.log(error)
    res.status(500).send({ error: error.message })
  }
}