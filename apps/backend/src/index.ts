import express from 'express'

const port = process.env.PORT || '8000'

const app = express()

app.get('/', (_req, res) => {
  res.send('API is running 🚀')
})

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})

export default app
