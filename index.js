import express from 'express'
import { connectDB } from './config/db.js'
import session from 'express-session'

const app = express()
const PORT = 3000

app.use(express.json())

// ✅ Move this before any routes that use sessions
app.use(session({
  secret: 'sample-secret',
  resave: false,
  saveUninitialized: false
}))

await connectDB()

const users = []

app.get('/', (req, res) => {
  res.send('hello express')
})

// ✅ Register route
app.post('/register', async (req, res) => {
  const { username, password } = req.body
  users.push({ username, password })
  res.send('User Registered')
})

// ✅ Login route (Fixed .find on `users` array)
app.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = users.find(u => u.username === username)

  if (!user || user.password !== password) {
    return res.send('Not Authorized')
  }

  req.session.user = user
  res.send('User Logged in')
})

// ✅ Protected dashboard
app.get('/dashboard', (req, res) => {
  if (!req.session.user) {
    return res.send('Unauthorized')
  }
  res.send(`Welcome, ${req.session.user.username}`)
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
