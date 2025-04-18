import express from 'express'
import bcrypt, { compare }  from 'bcryptjs'
import { connectDB } from './config/db.js'
import jwt from 'jsonwebtoken'
const app = express()
const PORT = 3000

app.use(express.json())

await connectDB()

const users = []

app.get('/', (req, res) => {
  res.send('hello express')
})

// ✅ Register route
app.post('/register', async (req, res) => {
  const { username, password } = req.body
  const hashedPassword = await bcrypt.hash(password,10)
 users.push({ username, password:hashedPassword })
  res.send('User Registered')
})

// ✅ Login route (Fixed .find on `users` array)
app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username)
  if (!user || !(await bcrypt.compare(password,user.password))) {
    return res.send('Not Authorized')
  }
   const token = jwt.sign({username}, 'test#secret') // used to generate the token and sign it by test#secret
   res.json({token})
})

// ✅ Protected dashboard
app.get('/dashboard', (req, res) => {
   try {
    const token = req.header('Authorization')
    const decodedToken = jwt.verify(token,'test#secret') 
    if(decodedToken.username){
        res.send(`Welcome ,${decodedToken.username}`)
    } 
    else{
     res.send('Access Denied')
    }
   } catch (error) {
    res.send('Access Denied')

   }

})

// ✅ Page visit counter
app.get('/visit', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++
    res.send(`You visited this page ${req.session.page_views} times`)
  } else {
    req.session.page_views = 1
    res.send('Welcome to this page for the first time')
  }
})

// ✅ Remove session
app.get('/remove-visit', (req, res) => {
  req.session.destroy()
  res.send('Session is removed')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
  