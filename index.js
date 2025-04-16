import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 3000
const MONGOOSE_URI ='mongodb+srv://pivnati:piv123@cluster0.yqe9lij.mongodb.net/piv_express_two'

mongoose.connect(MONGOOSE_URI).then(()=>{
    console.log('db connected')
})
app.get('/', (req, res) => {
    res.send('hello express')
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
 