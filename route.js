import express from 'express'
import { userLogin, userSign } from './controller.js'

const router = express.Router()
router.get('/login',userLogin)
router.get('/sign_up',userSign)

export default router
