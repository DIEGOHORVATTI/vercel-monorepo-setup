import express from 'express'

import cors from 'cors'
import cookieParser from 'cookie-parser'

import rateLimit from 'express-rate-limit'
import helmet from 'helmet'

const port = process.env.PORT || '3000'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    status: 'error',
    message: 'Too many requests from this IP, please try again after 15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false
})

const app = express()

console.log(`Running in development mode ${process.env.NODE_ENV}`)

app.use(limiter)
app.set('trust proxy', 1)
app.use(helmet())
app.use('/images', express.static('./images'))
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://your-production-domain.com'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
    optionsSuccessStatus: 200
  })
)

app.use(express.json({ limit: '10kb' }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'this is vercel deploy message'
  })
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})

export default app
