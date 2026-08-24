import { Router } from 'express';
import { storage } from '../data/storage.js';

export const lessonRouter = Router();

// GET all lessons with vocabulary count & progress
lessonRouter.get('/', async (req, res) => {
  try {
    const lessons = await storage.getLessons();
    const vocabProgress = await storage.getUserVocabProgress('default_user');
    const allVocab = await storage.getVocabulary();

    const progressMap = new Map<string, string>();
    vocabProgress.forEach(p => progressMap.set(p.vocabularyId, p.status));

    const lessonsWithProgress = lessons.map(lesson => {
      const lessonVocab = allVocab.filter(v => v.lessonNumbers.includes(lesson.lessonNumber));
      const total = lessonVocab.length;
      let known = 0;
      let learning = 0;

      lessonVocab.forEach(v => {
        const st = progressMap.get(v._id) || 'new';
        if (st === 'known') known++;
        else if (st === 'learning') learning++;
      });

      const percentage = total > 0 ? Math.round((known / total) * 100) : 0;

      return {
        ...lesson,
        totalVocabulary: total,
        knownVocabulary: known,
        learningVocabulary: learning,
        progressPercentage: percentage
      };
    });

    res.json({ success: true, data: lessonsWithProgress });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single lesson by number
lessonRouter.get('/:lessonNumber', async (req, res) => {
  try {
    const num = parseInt(req.params.lessonNumber, 10);
    const lesson = await storage.getLessonByNumber(num);
    if (!lesson) {
      return res.status(404).json({ success: false, error: 'Lesson not found' });
    }
    const vocabulary = await storage.getVocabulary({ lessonNumbers: [num] });
    res.json({ success: true, data: { lesson, vocabulary } });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});
