import mongoose, { Schema, Document } from 'mongoose';
import { IUserKanjiProgress } from '../types/index.js';

export interface IUserKanjiProgressDocument extends Omit<IUserKanjiProgress, '_id'>, Document {}

const UserKanjiProgressSchema = new Schema<IUserKanjiProgressDocument>({
  userId: { type: String, required: true, default: 'default_user', index: true },
  kanjiId: { type: String, required: true, index: true },
  character: { type: String, required: true, index: true },
  status: { type: String, enum: ['unknown', 'learning', 'known'], default: 'unknown', index: true },
  lastPracticedAt: { type: String, default: () => new Date().toISOString() }
}, { timestamps: true });

UserKanjiProgressSchema.index({ userId: 1, kanjiId: 1 }, { unique: true });
UserKanjiProgressSchema.index({ userId: 1, character: 1 });

export const UserKanjiProgress = mongoose.model<IUserKanjiProgressDocument>(
  'UserKanjiProgress',
  UserKanjiProgressSchema
);
