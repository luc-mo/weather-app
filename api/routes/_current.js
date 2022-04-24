import { Router } from 'express'
import { getCurrentWeather } from '../controllers/_current'

const router = Router()

router.get('/', getCurrentWeather)

export default router