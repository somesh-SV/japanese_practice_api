import mongoose, { Schema, Document } from 'mongoose';
import { ILesson } from '../types/index.js';

export interface ILessonDocument extends Omit<ILesson, '_id'>, Document {}

const LessonSchema = new Schema<ILessonDocument>({
  book: { type: String, required: true, default: 'Minna no Nihongo' },
  lessonNumber: { type: Number, required: true, unique: true, index: true },
  title: { type: String, required: true },
  jlptLevel: { type: String, required: true, default: 'N5' },
  vocabularyCount: { type: Number, default: 0 },
}, { timestamps: true });

export const Lesson = mongoose.model<ILessonDocument>('Lesson', LessonSchema);
