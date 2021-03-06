import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoute.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


dotenv.config()
const app = express()
connectDB()
app.use(express.json())

app.get('/', (req, res) => {

    res.send('API is running....')
})

app.use('/api/users', userRoutes)





// error handaling on postman
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('API is running'))