import axios from 'axios'

export async function getLocationName(req, res) {
  try {
    const { lat, lon } = req.query
    const url = `${process.env.REACT_APP_API_REVERSE}&lat=${lat}&lon=${lon}`
    const headers = { 'Content-Type': 'application/json' }
    
    const { data } = await axios(url, { headers })
    const { name } = data[0]

    res.send({ name })
  } catch(error) {
    console.log(error)
    res.status(500).send({ error: error.message })
  }
}