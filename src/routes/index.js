import { Router } from 'express'
import UserRouter from './users.js'

const router = Router()

router.use('/api', UserRouter)

export default router
