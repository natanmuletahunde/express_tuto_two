import express from 'express'
const app = express()
const PORT = 3000

// define simple route
app.get('/' , (req,res)=>{
     res.send('Hello , this is Express')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})