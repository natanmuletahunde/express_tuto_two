import express from 'express'
const app = express()
const PORT = 3000

app.use((req,res,next)=>{   // register middleware consist of req,res and next()  inside it 
    console.log('start')
    res.on('finish', ()=>{
        console.log('end')
    })
    next()
})
app.get('/', (req, res) => {
      console.log('middle') 
    res.send('Hello, this is piv')
})
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
 