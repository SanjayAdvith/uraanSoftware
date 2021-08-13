import express from 'express'
const router = express.Router()
import { login, getUsers, registerUser, survey, getSurveys } from '../controllers/userController.js'



router.route('/').post(registerUser).get(getUsers)
router.post('/login', login)
router.post('/survey', survey)
router.get('/survey', getSurveys)


export default router
