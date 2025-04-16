import express from 'express'
import multer from 'multer'
import path from 'path'

// Setup storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

const app = express()
const PORT = 3000

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Route with upload middleware inside the route (IMPORTANT!)
app.post('/form', upload.single('image'), (req, res) => {
  console.log(req.body)   // Text fields
  console.log(req.file)   // Uploaded file
  res.send('Form received')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
