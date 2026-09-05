import { Router } from 'express';
import { storage } from '../data/storage.js';
import { evaluateVocabularyKanji } from '../services/kanjiService.js';

export const vocabularyRouter = Router();

// GET vocabulary with filtering, searching, and user progress
vocabularyRouter.get('/', async (req, res) => {
  try {
    const { lessons, jlpt, search, status, category } = req.query;

    let lessonNumbers: number[] | undefined;
    if (typeof lessons === 'string' && lessons.trim()) {
      lessonNumbers = lessons.split(',').map(n => parseInt(n.trim(), 10)).filter(n => !isNaN(n));
    }

    const vocabList = await storage.getVocabulary({
      lessonNumbers,
      jlptLevel: typeof jlpt === 'string' ? jlpt : undefined,
      search: typeof search === 'string' ? search : undefined,
      category: typeof category === 'string' ? category : undefined,
    });

    const userProgress = await storage.getUserVocabProgress('default_user');
    const progressMap = new Map(userProgress.map(p => [p.vocabularyId, p]));

    const knownKanjiSet = await storage.getKnownKanjiSet('default_user');
    const kanjiMap = await storage.getKanjiMap();

    let items = vocabList.map(v => {
      const prog = progressMap.get(v._id);
      const kanjiEval = evaluateVocabularyKanji(v, knownKanjiSet, kanjiMap);

      return {
        ...v,
        userStatus: prog?.status || 'new',
        attempts: prog?.attempts || 0,
        correct: prog?.correct || 0,
        incorrect: prog?.incorrect || 0,
        accuracy: prog?.accuracy || 0,
        lastPracticedAt: prog?.lastPracticedAt || null,
        isKanjiMasked: kanjiEval.isKanjiMasked,
        constituentKanji: kanjiEval.constituentKanji
      };
    });

    if (typeof status === 'string' && status !== 'all') {
      items = items.filter(i => i.userStatus === status);
    }

    res.json({ success: true, count: items.length, data: items });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single vocabulary item
vocabularyRouter.get('/:id', async (req, res) => {
  try {
    const item = await storage.getVocabularyById(req.params.id);
    if (!item) {
      return res.status(404).json({ success: false, error: 'Vocabulary item not found' });
    }

    const userProgress = await storage.getUserVocabProgress('default_user');
    const prog = userProgress.find(p => p.vocabularyId === item._id);

    const knownKanjiSet = await storage.getKnownKanjiSet('default_user');
    const kanjiMap = await storage.getKanjiMap();
    const kanjiEval = evaluateVocabularyKanji(item, knownKanjiSet, kanjiMap);

    res.json({
      success: true,
      data: {
        ...item,
        userStatus: prog?.status || 'new',
        attempts: prog?.attempts || 0,
        correct: prog?.correct || 0,
        accuracy: prog?.accuracy || 0,
        isKanjiMasked: kanjiEval.isKanjiMasked,
        constituentKanji: kanjiEval.constituentKanji
      }
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});
