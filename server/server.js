import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'
import userRouter from './routes/userRouts.js'
import analyticalCategoryRouts from './routes/analyticalCategoryRouts.js'
import analyticalRouts from './routes/analyticalRouts.js'

const app = express()

await connectDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/api/users', userRouter)
app.use('/api/analyticalcategory', analyticalCategoryRouts)
app.use('/api/analytical', analyticalRouts)



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})