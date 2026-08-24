import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { lessonRouter } from './routes/lessons.js';
import { vocabularyRouter } from './routes/vocabulary.js';
import { kanjiRouter } from './routes/kanji.js';
import { practiceRouter } from './routes/practice.js';
import { progressRouter } from './routes/progress.js';
import { settingsRouter } from './routes/settings.js';
import { storage } from './data/storage.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ensure MongoDB is connected (crucial for Serverless Vercel environment)
let isConnecting = false;
app.use(async (req, res, next) => {
  const isConnected = mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2;
  if (!isConnected && !isConnecting) {
    isConnecting = true;
    try {
      await storage.connectMongo();
    } catch (err) {
      console.error('Failed to connect to MongoDB in middleware:', err);
    } finally {
      isConnecting = false;
    }
  }
  next();
});

// Routes
app.use('/api/lessons', lessonRouter);
app.use('/api/vocabulary', vocabularyRouter);
app.use('/api/kanji', kanjiRouter);
app.use('/api/practice', practiceRouter);
app.use('/api/progress', progressRouter);
app.use('/api/settings', settingsRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString(), db: storage.getDbStatus() });
});

// Start server (only in local / non-Vercel environment)
async function start() {
  await storage.connectMongo();
  app.listen(PORT, () => {
    console.log(`🌸 Japanese Practice API Server running on port ${PORT}`);
  });
}

if (!process.env.VERCEL) {
  start().catch(err => {
    console.error('Failed to start server:', err);
  });
}

export default app;
