import mongoose, { Schema, Document } from 'mongoose';
import { IKanji } from '../types/index.js';

export interface IKanjiDocument extends Omit<IKanji, '_id'>, Document {}

const KanjiExampleSchema = new Schema({
  japanese: { type: String, required: true },
  reading: { type: String, required: true },
  meaning: { type: String, required: true },
}, { _id: false });

const KanjiSchema = new Schema<IKanjiDocument>({
  character: { type: String, required: true, unique: true, index: true },
  meaning: [{ type: String, required: true }],
  onyomi: [{ type: String }],
  kunyomi: [{ type: String }],
  jlptLevel: { type: String, required: true, default: 'N5', index: true },
  strokeCount: { type: Number, default: 1 },
  examples: [KanjiExampleSchema],
}, { timestamps: true });

KanjiSchema.index({ character: 'text', meaning: 'text', onyomi: 'text', kunyomi: 'text' });

export const Kanji = mongoose.model<IKanjiDocument>('Kanji', KanjiSchema);
