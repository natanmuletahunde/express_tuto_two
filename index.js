import express from 'express'
import {connectDB} from './config/db.js'
import { Person } from './models/Person.js'

const app = express()
const PORT = 3000
await connectDB()

app.get('/', (req, res) => {
    res.send('hello express')
})

app.post('/person' , express.json(), async (req,res)=>{

    console.log(req.body)
    const {email,name,age} = req.body
    const newPreson = new Person(
        {
            name ,
            age,
            email
        }
    )
    await newPreson.save()
    res.send('Person Added')

})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
 
