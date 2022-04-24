import { Router } from 'express'
import { getLocationName } from '../controllers/_name'

const router = Router()

router.get('/', getLocationName)

export default router