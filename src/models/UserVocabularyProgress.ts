import mongoose, { Schema, Document } from 'mongoose';
import { IUserVocabularyProgress } from '../types/index.js';

export interface IUserVocabularyProgressDocument extends Omit<IUserVocabularyProgress, '_id'>, Document {}

const UserVocabularyProgressSchema = new Schema<IUserVocabularyProgressDocument>({
  userId: { type: String, required: true, default: 'default_user', index: true },
  vocabularyId: { type: String, required: true, index: true },
  status: { type: String, enum: ['new', 'learning', 'known'], default: 'new', index: true },
  attempts: { type: Number, default: 0 },
  correct: { type: Number, default: 0 },
  incorrect: { type: Number, default: 0 },
  accuracy: { type: Number, default: 0 },
  lastPracticedAt: { type: String, default: () => new Date().toISOString() },
  methodStats: {
    type: {
      attempts: { type: Number, default: 0 },
      correct: { type: Number, default: 0 }
    },
    flip: {
      attempts: { type: Number, default: 0 },
      correct: { type: Number, default: 0 }
    },
    multipleChoice: {
      attempts: { type: Number, default: 0 },
      correct: { type: Number, default: 0 }
    }
  }
}, { timestamps: true });

UserVocabularyProgressSchema.index({ userId: 1, vocabularyId: 1 }, { unique: true });

export const UserVocabularyProgress = mongoose.model<IUserVocabularyProgressDocument>(
  'UserVocabularyProgress',
  UserVocabularyProgressSchema
);
