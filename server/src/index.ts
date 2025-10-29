import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://your-domain.com'
    : 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Auth Routes (placeholder)
app.post('/api/auth/google', (req, res) => {
  res.json({ message: 'Google auth endpoint' })
})

app.post('/api/auth/logout', (req, res) => {
  res.json({ message: 'Logout endpoint' })
})

// Procedures Routes (placeholder)
app.get('/api/procedures', (req, res) => {
  res.json({ procedures: [] })
})

// Appointments Routes (placeholder)
app.get('/api/appointments', (req, res) => {
  res.json({ appointments: [] })
})

app.post('/api/appointments', (req, res) => {
  res.json({ message: 'Appointment created' })
})

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err)
  res.status(500).json({ error: 'Internal Server Error' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📝 API available at http://localhost:${PORT}/api`)
})
