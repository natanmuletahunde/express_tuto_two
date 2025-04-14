import express from 'express'
import router from './route.js'
const app = express() //  This line creates an instance of an Express application. 
const PORT = 3000

// define simple route
app.get('/' , (req,res)=>{
     res.send('Hello , this is piv ')
})
app.use('/user',router)
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
