import express from 'express'
const app = express() //  This line creates an instance of an Express application. 
const PORT = 3000

// define simple route
app.get('/' , (req,res)=>{
     res.send('Hello , this is piv ')
})
  // dynamic route of express 
app.get('/user/:username', (req,res)=>{
  const username = req.params.username;
  res.send(`welcome ${username}`)
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})