import { Router } from 'express';
import { storage } from '../data/storage.js';

export const settingsRouter = Router();

// GET database and server settings
settingsRouter.get('/', async (req, res) => {
  try {
    const dbStatus = storage.getDbStatus();
    res.json({
      success: true,
      data: {
        database: dbStatus,
        defaults: {
          answerMode: 'multiple-choice',
          direction: 'en-ja',
          cardsPerSession: 'all',
          shuffle: true,
          showFuriganaHint: true
        }
      }
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Test MongoDB Atlas connection
settingsRouter.post('/connect-mongodb', async (req, res) => {
  try {
    const { mongoUri } = req.body;
    if (!mongoUri || typeof mongoUri !== 'string') {
      return res.status(400).json({ success: false, error: 'Valid MongoDB URI string is required' });
    }

    const connected = await storage.connectMongo(mongoUri);
    if (connected) {
      res.json({ success: true, message: 'Successfully connected to MongoDB Atlas and synchronized collections!' });
    } else {
      res.status(400).json({ success: false, error: 'Could not connect to MongoDB with the provided URI' });
    }
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});
