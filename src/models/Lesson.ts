import mongoose, { Schema, Document } from 'mongoose';
import { ILesson } from '../types/index.js';

export interface ILessonDocument extends Omit<ILesson, '_id'>, Document {}

const LessonSchema = new Schema<ILessonDocument>({
  book: { type: String, required: true, default: 'Minna no Nihongo' },
  lessonNumber: { type: Number, required: true, unique: true, index: true },
  title: { type: String, required: true },
  jlptLevel: { type: String, required: true, default: 'N5' },
  vocabularyCount: { type: Number, default: 0 },
  sentencePatterns: [{ japanese: String, reading: String, english: String }],
  exampleSentences: [{ japanese: String, reading: String, english: String }],
  conversation: {
    title: String,
    situation: String,
    characters: [String],
    lines: [{ speaker: String, japanese: String, reading: String, english: String }]
  },
  renshuuPhrases: [{ japanese: String, reading: String, english: String, notes: String }],
  grammarNotes: [{
    title: String,
    explanation: String,
    examples: [{ japanese: String, reading: String, english: String }]
  }],
  usefulInfoTitle: String,
  usefulInfo: [{ japanese: String, reading: String, english: String, category: String }]
}, { timestamps: true });

export const Lesson = mongoose.model<ILessonDocument>('Lesson', LessonSchema);

