import express from 'express'
import {connectDB} from './config/db.js'
import { Person } from './models/Person.js'

const app = express()
const PORT = 3000
await connectDB()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello express')
})

app.post('/person' ,async (req,res)=>{

    const {email,name,age} = req.body
    const newPreson = new Person(
        {
            name ,
            age,
            email
        }
    )
    await newPreson.save()
    console.log(newPreson)
    res.send('Person Added')
})
// updating data in the mongodb
app.put('/person' , express.json() ,async (req,res)=>{

    const {id} = req.body

    const personData = await Person.findById(id)
    personData.save()
    console.log(personData) 

    res.send('Person updated')
})

// deleting Data from the mongodb
app.delete('/person/:id' , async (req,res)=>{
    const {id} = req.params
    await  Person.findByIdAndDelete(id)
    res.send('user deleted')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})