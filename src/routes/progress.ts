import { Router } from 'express';
import { storage } from '../data/storage.js';

export const progressRouter = Router();

// GET comprehensive learning progress summary for the dashboard
progressRouter.get('/summary', async (req, res) => {
  try {
    const allVocab = await storage.getVocabulary();
    const allKanji = await storage.getKanji();
    const vocabProgress = await storage.getUserVocabProgress('default_user');
    const kanjiProgress = await storage.getUserKanjiProgress('default_user');
    const recentSessions = await storage.getPracticeSessions('default_user', 10);
    const lessons = await storage.getLessons();

    // Vocab stats
    const vocabStatusMap = new Map(vocabProgress.map(p => [p.vocabularyId, p]));
    let knownVocab = 0;
    let learningVocab = 0;
    let totalAttempts = 0;
    let totalCorrect = 0;

    allVocab.forEach(v => {
      const p = vocabStatusMap.get(v._id);
      if (p) {
        totalAttempts += p.attempts;
        totalCorrect += p.correct;
        if (p.status === 'known') knownVocab++;
        else if (p.status === 'learning') learningVocab++;
      }
    });

    const newVocab = allVocab.length - (knownVocab + learningVocab);
    const vocabMasteryPercentage = allVocab.length > 0 ? Math.round((knownVocab / allVocab.length) * 100) : 0;
    const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    // Kanji stats
    const kanjiStatusMap = new Map(kanjiProgress.map(p => [p.character, p.status]));
    let knownKanji = 0;

    allKanji.forEach(k => {
      const st = kanjiStatusMap.get(k.character) || 'unknown';
      if (st === 'known') knownKanji++;
    });

    const unknownKanji = allKanji.length - knownKanji;
    const kanjiMasteryPercentage = allKanji.length > 0 ? Math.round((knownKanji / allKanji.length) * 100) : 0;

    // Today's practice stats
    const todayStr = new Date().toISOString().split('T')[0];
    const todaySessions = recentSessions.filter(s => s.createdAt.startsWith(todayStr));
    const todayCards = todaySessions.reduce((sum, s) => sum + s.totalCards, 0);
    const todayCorrect = todaySessions.reduce((sum, s) => sum + s.correctCount, 0);
    const todayAccuracy = todayCards > 0 ? Math.round((todayCorrect / todayCards) * 100) : 0;

    // Calculate streak (consecutive days with at least 1 practice session)
    const uniqueSessionDates = Array.from(new Set(recentSessions.map(s => s.createdAt.split('T')[0]))).sort().reverse();
    let streak = 0;
    let checkDate = new Date();

    for (let i = 0; i < 30; i++) {
      const dateStr = checkDate.toISOString().split('T')[0];
      if (uniqueSessionDates.includes(dateStr)) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (i === 0) {
        // If today has no sessions yet, check if yesterday had sessions
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }
    // ensure at least 1 if practiced today
    if (todaySessions.length > 0 && streak === 0) streak = 1;

    res.json({
      success: true,
      data: {
        vocabulary: {
          total: allVocab.length,
          known: knownVocab,
          learning: learningVocab,
          new: newVocab,
          masteryPercentage: vocabMasteryPercentage,
          totalAttempts,
          overallAccuracy
        },
        kanji: {
          total: allKanji.length,
          known: knownKanji,
          unknown: unknownKanji,
          masteryPercentage: kanjiMasteryPercentage
        },
        today: {
          cards: todayCards,
          correct: todayCorrect,
          accuracy: todayAccuracy,
          sessionCount: todaySessions.length
        },
        streak: Math.max(streak, 1),
        recentSessions: recentSessions.slice(0, 5),
        databaseStatus: storage.getDbStatus()
      }
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update vocabulary status manually
progressRouter.post('/vocab-status', async (req, res) => {
  try {
    const { vocabularyId, status } = req.body;
    if (!vocabularyId || !['new', 'learning', 'known'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid vocabularyId or status' });
    }
    const updated = await storage.setVocabStatus('default_user', vocabularyId, status);
    res.json({ success: true, data: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Update kanji status manually
progressRouter.post('/kanji-status', async (req, res) => {
  try {
    const { character, status } = req.body;
    if (!character || !['unknown', 'known'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid character or status' });
    }
    const updated = await storage.setKanjiStatus('default_user', character, status);
    res.json({ success: true, data: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});
