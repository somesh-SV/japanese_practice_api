import { Router } from 'express';
import { storage } from '../data/storage.js';
import { evaluateVocabularyKanji } from '../services/kanjiService.js';
import { generateMultipleChoiceOptions, shuffleArray } from '../services/distractorService.js';
import { IPracticeQuestion, IVocabulary } from '../types/index.js';

export const practiceRouter = Router();

// Generate a practice session with rich question metadata, kanji awareness, and smart distractors
practiceRouter.post('/generate-session', async (req, res) => {
  try {
    const {
      lessonNumbers = [1],
      direction = 'mixed',
      answerMode = 'multiple-choice',
      cardCount = 20,
      statusFilter = 'all',
      shuffle = true,
      specificVocabIds
    } = req.body;

    let targetVocabs: IVocabulary[] = [];

    if (specificVocabIds && Array.isArray(specificVocabIds) && specificVocabIds.length > 0) {
      targetVocabs = await storage.getVocabularyByIds(specificVocabIds);
    } else {
      const lessons = Array.isArray(lessonNumbers) ? lessonNumbers.map(Number) : [1];
      targetVocabs = await storage.getVocabulary({ lessonNumbers: lessons });
    }

    if (targetVocabs.length === 0) {
      // If no words found in specific lessons, fallback to lesson 1
      targetVocabs = await storage.getVocabulary({ lessonNumbers: [1] });
    }

    // Filter by user status if requested
    const userProgress = await storage.getUserVocabProgress('default_user');
    const progressMap = new Map(userProgress.map(p => [p.vocabularyId, p.status]));

    if (statusFilter && statusFilter !== 'all') {
      targetVocabs = targetVocabs.filter(v => {
        const s = progressMap.get(v._id) || 'new';
        return s === statusFilter;
      });
      // If filtered to 0, provide all
      if (targetVocabs.length === 0) {
        targetVocabs = await storage.getVocabulary({ lessonNumbers });
      }
    }

    // Shuffle if requested
    if (shuffle) {
      targetVocabs = shuffleArray(targetVocabs);
    }

    // Limit card count
    let count = typeof cardCount === 'number' ? cardCount : parseInt(cardCount, 10);
    if (!isNaN(count) && count > 0 && count < targetVocabs.length) {
      targetVocabs = targetVocabs.slice(0, count);
    }

    // Fetch kanji knowledge for kanji-aware display
    const knownKanjiSet = await storage.getKnownKanjiSet('default_user');
    const kanjiMap = await storage.getKanjiMap();
    const allPoolVocab = await storage.getVocabulary(); // for distractor generation

    // Construct questions
    const questions: IPracticeQuestion[] = targetVocabs.map(vocab => {
      // Determine question direction
      let cardDirection: 'en-ja' | 'ja-en';
      if (direction === 'mixed') {
        cardDirection = Math.random() > 0.5 ? 'en-ja' : 'ja-en';
      } else {
        cardDirection = direction;
      }

      const kanjiEval = evaluateVocabularyKanji(vocab, knownKanjiSet, kanjiMap);

      let prompt = '';
      let promptSub = '';
      let expectedAnswer = '';

      if (cardDirection === 'en-ja') {
        prompt = vocab.english[0];
        promptSub = vocab.partOfSpeech;
        expectedAnswer = vocab.japanese;
      } else {
        prompt = vocab.japanese;
        // If not masked, we can show reading as helper hint or secondary
        promptSub = kanjiEval.isKanjiMasked ? 'Kanji Known' : vocab.reading;
        expectedAnswer = vocab.english[0];
      }

      let options: string[] | undefined;
      let distractors: string[] | undefined;

      if (answerMode === 'multiple-choice') {
        const mcResult = generateMultipleChoiceOptions(vocab, cardDirection, allPoolVocab);
        options = mcResult.options;
        distractors = mcResult.distractors;
      }

      return {
        vocabulary: vocab,
        direction: cardDirection,
        prompt,
        promptSub,
        expectedAnswer,
        readingAnswer: vocab.reading,
        allMeanings: vocab.english,
        distractors,
        options,
        isKanjiMasked: kanjiEval.isKanjiMasked,
        constituentKanji: kanjiEval.constituentKanji
      };
    });

    res.json({
      success: true,
      total: questions.length,
      lessonNumbers,
      direction,
      answerMode,
      questions
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Record an attempt during practice
practiceRouter.post('/record-attempt', async (req, res) => {
  try {
    const { vocabularyId, isCorrect, answerMode } = req.body;

    if (!vocabularyId) {
      return res.status(400).json({ success: false, error: 'vocabularyId is required' });
    }

    const updated = await storage.updateVocabProgress(
      'default_user',
      vocabularyId,
      Boolean(isCorrect),
      answerMode
    );

    res.json({ success: true, data: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Save complete practice session
practiceRouter.post('/save-session', async (req, res) => {
  try {
    const {
      lessonRange,
      direction,
      answerMode,
      totalCards,
      correctCount,
      incorrectCount,
      accuracy,
      durationSeconds,
      mistakes = []
    } = req.body;

    const saved = await storage.recordPracticeSession({
      userId: 'default_user',
      lessonRange: Array.isArray(lessonRange) ? lessonRange : [1],
      direction: direction || 'mixed',
      answerMode: answerMode || 'multiple-choice',
      totalCards: totalCards || 0,
      correctCount: correctCount || 0,
      incorrectCount: incorrectCount || 0,
      accuracy: accuracy || 0,
      durationSeconds: durationSeconds || 0,
      mistakes: Array.isArray(mistakes) ? mistakes : [],
      createdAt: new Date().toISOString()
    });

    res.json({ success: true, data: saved });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get recent practice history
practiceRouter.get('/history', async (req, res) => {
  try {
    const history = await storage.getPracticeSessions('default_user', 30);
    res.json({ success: true, count: history.length, data: history });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});
