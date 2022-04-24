import express from 'express'
import cors from 'cors'

import name from './routes/_name'
import current from './routes/_current'
import hourly from './routes/_hourly'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/name', name)
app.use('/api/current', current)
app.use('/api/hourly', hourly)

export default app