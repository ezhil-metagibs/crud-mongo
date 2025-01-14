import express from 'express'
import dataRouter from './routes/routes.js'
import connectDB from './libs/db.js'
import dotenv from 'dotenv'

const app = express()
const port = 3000

dotenv.config()

connectDB()

app.get('/', (req, res)=> {
    res.json({message: 'hello world from router'})
})

app.use('/api', dataRouter)


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`)
})
