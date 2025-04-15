import express from 'express'
import router from './route.js'
const app = express() //  This line creates an instance of an Express application. 
const PORT = 3000

// define simple route
app.get('/' , (req,res)=>{
     res.send('Hello , this is piv ')
})
app.use('/user',router)

app.post('/users',express.json(), (req,res)=>{
    const {name,email} = req.body
    res.json({
        message:`my my name is ${name} is  and my email is ${email}`
    })
})

app.put('/users/:id',express.json(),(req,res)=>{
    const userId = req.params.id
    const {name , email} = req.body
   res.json({
    message:`the updated name is ${name} and email is ${email}`
   })
})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
 