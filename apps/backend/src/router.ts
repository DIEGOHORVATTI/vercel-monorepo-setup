import { Router } from 'express'

/* 
import { readdirSync } from 'node:fs'
import { join } from 'node:path' 
*/

const router = Router()

/* 
const routerModules = readdirSync(join(__dirname, 'features'))

;(async () => {
  for (const routerModule of routerModules) {
    router.use(`/${routerModule}`, (await import(join(__dirname, 'features', routerModule, 'router'))).default)
  }
})() 
*/

router.get('/', (_req, res) => {
  res.send('API is running 🚀')
})

export default router
