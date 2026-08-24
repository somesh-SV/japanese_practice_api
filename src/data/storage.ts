import mongoose from 'mongoose';
import {
  ILesson,
  IVocabulary,
  IKanji,
  IUserVocabularyProgress,
  IUserKanjiProgress,
  IPracticeSession,
  VocabStatus,
  KanjiStatus
} from '../types/index.js';
import { Lesson, Vocabulary, Kanji, UserVocabularyProgress, UserKanjiProgress, PracticeSession } from '../models/index.js';
import { SEED_LESSONS } from './seedLessons.js';
import { SEED_KANJI } from './seedKanji.js';
import { SEED_VOCABULARY } from './seedVocabulary.js';
import fs from 'fs';
import path from 'path';

// Memory/Local Cache
class StorageService {
  private isMongoConnected = false;
  private lessons: ILesson[] = [];
  private vocabulary: IVocabulary[] = [];
  private kanji: IKanji[] = [];
  private userVocabProgress: Map<string, IUserVocabularyProgress> = new Map();
  private userKanjiProgress: Map<string, IUserKanjiProgress> = new Map();
  private practiceSessions: IPracticeSession[] = [];
  private dataDir = path.resolve(process.cwd(), '.data');

  constructor() {
    this.initLocalData();
  }

  private initLocalData() {
    // Populate in-memory seed
    this.lessons = SEED_LESSONS.map((l, i) => ({ ...l, _id: `lesson_${l.lessonNumber}` }));
    this.kanji = SEED_KANJI.map((k, i) => ({ ...k, _id: `kanji_${i + 1}` }));
    this.vocabulary = SEED_VOCABULARY.map((v, i) => ({ ...v, _id: `vocab_${i + 1}` }));

    // Count vocab per lesson
    const counts: Record<number, number> = {};
    this.vocabulary.forEach(v => {
      v.lessonNumbers.forEach(lNum => {
        counts[lNum] = (counts[lNum] || 0) + 1;
      });
    });
    this.lessons.forEach(l => {
      l.vocabularyCount = counts[l.lessonNumber] || 0;
    });

    // Default progress for some sample kanji (like 水, 日, 月, 一, 二, etc.)
    const sampleKnownKanji = ['水', '日', '月', '一', '二', '三', '四', '五', '人', '先', '生', '学', '校', '本', '語', '何', '時', '分', '今', '大', '小', '中', '国', '行', '来', '見', '食', '飲', '車', '電', '気', '天', '白', '金', '手'];
    sampleKnownKanji.forEach(char => {
      const k = this.kanji.find(item => item.character === char);
      if (k) {
        this.userKanjiProgress.set(`default_user_${k._id}`, {
          userId: 'default_user',
          kanjiId: k._id,
          character: k.character,
          status: 'known',
          lastPracticedAt: new Date().toISOString()
        });
      }
    });

    // Load persisted local user progress if exists
    try {
      if (!fs.existsSync(this.dataDir)) {
        fs.mkdirSync(this.dataDir, { recursive: true });
      }
      const progressPath = path.join(this.dataDir, 'user_progress.json');
      if (fs.existsSync(progressPath)) {
        const data = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
        if (data.vocabProgress) {
          data.vocabProgress.forEach((p: IUserVocabularyProgress) => {
            this.userVocabProgress.set(`${p.userId}_${p.vocabularyId}`, p);
          });
        }
        if (data.kanjiProgress) {
          data.kanjiProgress.forEach((p: IUserKanjiProgress) => {
            this.userKanjiProgress.set(`${p.userId}_${p.kanjiId}`, p);
          });
        }
        if (data.sessions) {
          this.practiceSessions = data.sessions;
        }
      }
    } catch (e) {
      console.warn('Could not load local progress fallback file:', e);
    }
  }

  private saveLocalData() {
    try {
      if (!fs.existsSync(this.dataDir)) {
        fs.mkdirSync(this.dataDir, { recursive: true });
      }
      const progressPath = path.join(this.dataDir, 'user_progress.json');
      fs.writeFileSync(progressPath, JSON.stringify({
        vocabProgress: Array.from(this.userVocabProgress.values()),
        kanjiProgress: Array.from(this.userKanjiProgress.values()),
        sessions: this.practiceSessions
      }, null, 2));
    } catch (e) {
      console.error('Error saving local progress:', e);
    }
  }

  public async connectMongo(uri?: string): Promise<boolean> {
    const mongoUri = uri || process.env.MONGODB_URI;
    if (!mongoUri) {
      console.log('No MONGODB_URI found. Running in high-performance local/in-memory mode with full persistence.');
      this.isMongoConnected = false;
      return false;
    }

    try {
      await mongoose.connect(mongoUri);
      this.isMongoConnected = true;
      console.log('Successfully connected to MongoDB Atlas!');
      await this.syncToMongo();
      return true;
    } catch (error) {
      console.error('Failed to connect to MongoDB Atlas:', error);
      this.isMongoConnected = false;
      return false;
    }
  }

  public getDbStatus() {
    return {
      connected: this.isMongoConnected,
      mode: this.isMongoConnected ? 'MongoDB Atlas' : 'Local Storage Fallback',
      totalLessons: this.lessons.length,
      totalVocabulary: this.vocabulary.length,
      totalKanji: this.kanji.length,
    };
  }

  private async syncToMongo() {
    if (!this.isMongoConnected) return;

    try {
      const lessonCount = await Lesson.countDocuments();
      if (lessonCount === 0) {
        console.log('Seeding Lessons into MongoDB Atlas...');
        await Lesson.insertMany(SEED_LESSONS);
      }

      const kanjiCount = await Kanji.countDocuments();
      if (kanjiCount === 0) {
        console.log('Seeding Kanji into MongoDB Atlas...');
        await Kanji.insertMany(SEED_KANJI);
      }

      const vocabCount = await Vocabulary.countDocuments();
      if (vocabCount === 0) {
        console.log('Seeding Vocabulary into MongoDB Atlas...');
        await Vocabulary.insertMany(SEED_VOCABULARY);
      }

      // Reload references from Mongo
      const mongoLessons = await Lesson.find().lean();
      const mongoKanji = await Kanji.find().lean();
      const mongoVocab = await Vocabulary.find().lean();

      this.lessons = mongoLessons.map(l => ({ ...l, _id: l._id.toString() } as unknown as ILesson));
      this.kanji = mongoKanji.map(k => ({ ...k, _id: k._id.toString() } as unknown as IKanji));
      this.vocabulary = mongoVocab.map(v => ({ ...v, _id: v._id.toString() } as unknown as IVocabulary));

      // Calculate lesson counts
      const counts: Record<number, number> = {};
      this.vocabulary.forEach(v => {
        v.lessonNumbers.forEach(lNum => {
          counts[lNum] = (counts[lNum] || 0) + 1;
        });
      });
      this.lessons.forEach(l => {
        l.vocabularyCount = counts[l.lessonNumber] || 0;
      });

      console.log(`MongoDB Atlas Synced: ${this.lessons.length} lessons, ${this.kanji.length} kanji, ${this.vocabulary.length} vocab.`);
    } catch (e) {
      console.error('Error during MongoDB Atlas sync:', e);
    }
  }

  // --- Lessons ---
  public async getLessons(): Promise<ILesson[]> {
    return this.lessons;
  }

  public async getLessonByNumber(num: number): Promise<ILesson | undefined> {
    return this.lessons.find(l => l.lessonNumber === num);
  }

  // --- Vocabulary ---
  public async getVocabulary(filter?: {
    lessonNumbers?: number[];
    jlptLevel?: string;
    search?: string;
  }): Promise<IVocabulary[]> {
    let result = [...this.vocabulary];

    if (filter?.lessonNumbers && filter.lessonNumbers.length > 0) {
      const targetLessons = new Set(filter.lessonNumbers);
      result = result.filter(v => v.lessonNumbers.some(l => targetLessons.has(l)));
    }

    if (filter?.jlptLevel) {
      result = result.filter(v => v.jlptLevel === filter.jlptLevel);
    }

    if (filter?.search) {
      const q = filter.search.toLowerCase().trim();
      result = result.filter(v => 
        v.japanese.toLowerCase().includes(q) ||
        v.reading.toLowerCase().includes(q) ||
        v.english.some(e => e.toLowerCase().includes(q)) ||
        (v.kanji && v.kanji.some(k => k.includes(q)))
      );
    }

    return result;
  }

  public async getVocabularyById(id: string): Promise<IVocabulary | undefined> {
    return this.vocabulary.find(v => v._id === id);
  }

  public async getVocabularyByIds(ids: string[]): Promise<IVocabulary[]> {
    const idSet = new Set(ids);
    return this.vocabulary.filter(v => idSet.has(v._id));
  }

  // --- Kanji ---
  public async getKanji(filter?: {
    jlptLevel?: string;
    search?: string;
  }): Promise<IKanji[]> {
    let result = [...this.kanji];

    if (filter?.jlptLevel) {
      result = result.filter(k => k.jlptLevel === filter.jlptLevel);
    }

    if (filter?.search) {
      const q = filter.search.toLowerCase().trim();
      result = result.filter(k => 
        k.character.includes(q) ||
        k.meaning.some(m => m.toLowerCase().includes(q)) ||
        k.onyomi.some(o => o.includes(q)) ||
        k.kunyomi.some(u => u.includes(q))
      );
    }

    return result;
  }

  public async getKanjiMap(): Promise<Map<string, IKanji>> {
    const map = new Map<string, IKanji>();
    this.kanji.forEach(k => map.set(k.character, k));
    return map;
  }

  // --- User Progress ---
  public async getUserVocabProgress(userId = 'default_user'): Promise<IUserVocabularyProgress[]> {
    if (this.isMongoConnected) {
      const docs = await UserVocabularyProgress.find({ userId }).lean();
      return docs.map(d => ({ ...d, _id: d._id.toString(), vocabularyId: d.vocabularyId.toString() } as unknown as IUserVocabularyProgress));
    }
    return Array.from(this.userVocabProgress.values()).filter(p => p.userId === userId);
  }

  public async updateVocabProgress(
    userId = 'default_user',
    vocabularyId: string,
    isCorrect: boolean,
    method?: 'type' | 'flip' | 'multiple-choice'
  ): Promise<IUserVocabularyProgress> {
    const key = `${userId}_${vocabularyId}`;
    let progress = this.userVocabProgress.get(key);

    if (!progress) {
      progress = {
        userId,
        vocabularyId,
        status: 'new',
        attempts: 0,
        correct: 0,
        incorrect: 0,
        accuracy: 0,
        lastPracticedAt: new Date().toISOString(),
        methodStats: {
          type: { attempts: 0, correct: 0 },
          flip: { attempts: 0, correct: 0 },
          multipleChoice: { attempts: 0, correct: 0 }
        }
      };
    }

    progress.attempts += 1;
    if (isCorrect) {
      progress.correct += 1;
    } else {
      progress.incorrect += 1;
    }

    progress.accuracy = Math.round((progress.correct / progress.attempts) * 100);
    progress.lastPracticedAt = new Date().toISOString();

    // Auto promote status based on correct answers
    if (progress.correct >= 3 && progress.accuracy >= 75) {
      progress.status = 'known';
    } else if (progress.attempts > 0) {
      progress.status = 'learning';
    }

    if (method && progress.methodStats) {
      const mKey = method === 'multiple-choice' ? 'multipleChoice' : method;
      progress.methodStats[mKey].attempts += 1;
      if (isCorrect) {
        progress.methodStats[mKey].correct += 1;
      }
    }

    this.userVocabProgress.set(key, progress);
    this.saveLocalData();

    if (this.isMongoConnected) {
      try {
        await UserVocabularyProgress.findOneAndUpdate(
          { userId, vocabularyId },
          progress,
          { upsert: true, new: true }
        );
      } catch (e) {
        console.error('Mongo error updating vocab progress:', e);
      }
    }

    return progress;
  }

  public async setVocabStatus(
    userId = 'default_user',
    vocabularyId: string,
    status: VocabStatus
  ): Promise<IUserVocabularyProgress> {
    const key = `${userId}_${vocabularyId}`;
    let progress = this.userVocabProgress.get(key);

    if (!progress) {
      progress = {
        userId,
        vocabularyId,
        status,
        attempts: 0,
        correct: 0,
        incorrect: 0,
        accuracy: 0,
        lastPracticedAt: new Date().toISOString()
      };
    } else {
      progress.status = status;
    }

    this.userVocabProgress.set(key, progress);
    this.saveLocalData();

    if (this.isMongoConnected) {
      try {
        await UserVocabularyProgress.findOneAndUpdate(
          { userId, vocabularyId },
          { status },
          { upsert: true, new: true }
        );
      } catch (e) {
        console.error('Mongo error setting vocab status:', e);
      }
    }

    return progress;
  }

  // --- Kanji Progress ---
  public async getUserKanjiProgress(userId = 'default_user'): Promise<IUserKanjiProgress[]> {
    if (this.isMongoConnected) {
      const docs = await UserKanjiProgress.find({ userId }).lean();
      return docs.map(d => ({ ...d, _id: d._id.toString(), kanjiId: d.kanjiId.toString() } as unknown as IUserKanjiProgress));
    }
    return Array.from(this.userKanjiProgress.values()).filter(p => p.userId === userId);
  }

  public async getKnownKanjiSet(userId = 'default_user'): Promise<Set<string>> {
    const knownSet = new Set<string>();
    const allProgress = await this.getUserKanjiProgress(userId);
    allProgress.forEach(p => {
      if (p.status === 'known') {
        knownSet.add(p.character);
      }
    });
    return knownSet;
  }

  public async setKanjiStatus(
    userId = 'default_user',
    character: string,
    status: KanjiStatus
  ): Promise<IUserKanjiProgress> {
    const kanjiDoc = this.kanji.find(k => k.character === character);
    const kanjiId = kanjiDoc ? kanjiDoc._id : `kanji_custom_${character}`;
    const key = `${userId}_${kanjiId}`;

    const progress: IUserKanjiProgress = {
      userId,
      kanjiId,
      character,
      status,
      lastPracticedAt: new Date().toISOString()
    };

    this.userKanjiProgress.set(key, progress);
    this.saveLocalData();

    if (this.isMongoConnected) {
      try {
        await UserKanjiProgress.findOneAndUpdate(
          { userId, character },
          { status, kanjiId, lastPracticedAt: progress.lastPracticedAt },
          { upsert: true, new: true }
        );
      } catch (e) {
        console.error('Mongo error updating kanji status:', e);
      }
    }

    return progress;
  }

  // --- Practice Sessions & History ---
  public async recordPracticeSession(session: Omit<IPracticeSession, '_id'>): Promise<IPracticeSession> {
    const newSession: IPracticeSession = {
      ...session,
      _id: `session_${Date.now()}`,
      createdAt: session.createdAt || new Date().toISOString()
    };

    this.practiceSessions.unshift(newSession);
    this.saveLocalData();

    if (this.isMongoConnected) {
      try {
        const created = await PracticeSession.create(newSession);
        newSession._id = created._id.toString();
      } catch (e) {
        console.error('Mongo error saving practice session:', e);
      }
    }

    return newSession;
  }

  public async getPracticeSessions(userId = 'default_user', limit = 20): Promise<IPracticeSession[]> {
    if (this.isMongoConnected) {
      const docs = await PracticeSession.find({ userId }).sort({ createdAt: -1 }).limit(limit).lean();
      return docs.map(d => ({ ...d, _id: d._id.toString() } as unknown as IPracticeSession));
    }
    return this.practiceSessions.filter(s => s.userId === userId).slice(0, limit);
  }
}

export const storage = new StorageService();
