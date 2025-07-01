import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const PORT = 3001
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from backend')
})

// Health check with database connection
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', database: 'connected' })
  } catch (error) {
    res.status(500).json({ status: 'error', database: 'disconnected' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
