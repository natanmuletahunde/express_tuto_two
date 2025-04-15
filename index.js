import express from 'express'
const app = express()
const PORT = 3000
// set the EJS as the view engine 
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
   
    const userName = 'Piv Nati'
    res.render('index' ,{userName})
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
 