import express from 'express'

import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import rateLimit from 'express-rate-limit'
import helmet from 'helmet'

import { exception, notFound } from './middlewares'

import router from './router'

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

app.use(limiter)
app.set('trust proxy', 1)
app.use(helmet())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(cookieParser())
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
)

app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal'])

app.use(router)

app.use(notFound)
app.use(exception)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})

export default app
