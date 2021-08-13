import express from 'express'
const router = express.Router()
import { login, getUsers, registerUser } from '../controllers/userController.js'



router.route('/').post(registerUser).get(getUsers)
router.post('/login', login)


export default router
