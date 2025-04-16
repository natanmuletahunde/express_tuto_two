import express from 'express'
import {connectDB} from './config/db.js'
import cookieParser from 'cookie-parser'
const app = express()
const PORT = 3000
await connectDB()

app.use(cookieParser())

app.get('/', (req, res) => {
    res.cookie('name','express-app')
    res.send('hello express')
})
app.get('/fetch', (req,res)=>{
    console.log(req.cookies);
    res.send('API Called') 
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})