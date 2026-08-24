import mongoose, { Schema, Document } from 'mongoose';
import { IVocabulary } from '../types/index.js';

export interface IVocabularyDocument extends Omit<IVocabulary, '_id'>, Document {}

const ExampleSchema = new Schema({
  japanese: { type: String, required: true },
  reading: { type: String, required: true },
  english: { type: String, required: true },
}, { _id: false });

const VocabularySchema = new Schema<IVocabularyDocument>({
  japanese: { type: String, required: true, index: true },
  reading: { type: String, required: true, index: true },
  english: [{ type: String, required: true }],
  lessonNumbers: [{ type: Number, required: true, index: true }],
  jlptLevel: { type: String, required: true, default: 'N5', index: true },
  kanji: [{ type: String }],
  partOfSpeech: { type: String, required: true, default: 'noun' },
  acceptedAnswers: [{ type: String }],
  examples: [ExampleSchema],
  notes: { type: String },
  audioUrl: { type: String },
}, { timestamps: true });

VocabularySchema.index({ japanese: 'text', reading: 'text', english: 'text' });

export const Vocabulary = mongoose.model<IVocabularyDocument>('Vocabulary', VocabularySchema);
