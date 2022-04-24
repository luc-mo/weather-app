import { Router } from 'express'
import { getHourlyWeather } from '../controllers/_hourly'

const router = Router()

router.get('/', getHourlyWeather)

export default router