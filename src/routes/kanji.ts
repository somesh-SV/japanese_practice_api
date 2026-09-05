import { Router } from 'express';
import { storage } from '../data/storage.js';

export const kanjiRouter = Router();

// GET all kanji with search, status filtering, and user knowledge status
kanjiRouter.get('/', async (req, res) => {
  try {
    const { jlpt, search, status } = req.query;

    const kanjiList = await storage.getKanji({
      jlptLevel: typeof jlpt === 'string' ? jlpt : undefined,
      search: typeof search === 'string' ? search : undefined,
    });

    const userKanjiProgress = await storage.getUserKanjiProgress('default_user');
    const statusMap = new Map(userKanjiProgress.map(p => [p.character, p.status]));

    let items = kanjiList.map(k => {
      const userStatus = statusMap.get(k.character) || 'unknown';
      return {
        ...k,
        userStatus
      };
    });

    items.sort((a, b) => (a.kanjiNumber || 0) - (b.kanjiNumber || 0));

    if (typeof status === 'string' && status !== 'all') {
      items = items.filter(i => i.userStatus === status);
    }

    res.json({ success: true, count: items.length, data: items });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update user status for a specific kanji (known / learning / unknown)
kanjiRouter.post('/:character/status', async (req, res) => {
  try {
    const { character } = req.params;
    const { status } = req.body;

    if (!['unknown', 'known'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status. Must be unknown or known' });
    }

    const updated = await storage.setKanjiStatus('default_user', character, status);
    res.json({ success: true, data: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});
