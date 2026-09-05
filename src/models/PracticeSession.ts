import mongoose, { Schema, Document } from 'mongoose';
import { IPracticeSession } from '../types/index.js';

export interface IPracticeSessionDocument extends Omit<IPracticeSession, '_id'>, Document {}

const PracticeSessionSchema = new Schema<IPracticeSessionDocument>({
  userId: { type: String, required: true, default: 'default_user', index: true },
  lessonRange: [{ type: Number, required: true }],
  direction: { type: String, enum: ['en-ja', 'ja-en'], required: true },
  answerMode: { type: String, enum: ['type', 'flip', 'multiple-choice'], required: true },
  totalCards: { type: Number, required: true },
  correctCount: { type: Number, required: true },
  incorrectCount: { type: Number, required: true },
  accuracy: { type: Number, required: true },
  durationSeconds: { type: Number, default: 0 },
  mistakes: [{ type: String }],
  createdAt: { type: String, default: () => new Date().toISOString(), index: true }
}, { timestamps: true });

export const PracticeSession = mongoose.model<IPracticeSessionDocument>(
  'PracticeSession',
  PracticeSessionSchema
);
