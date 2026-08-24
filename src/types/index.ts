export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export type VocabStatus = 'new' | 'learning' | 'known';
export type KanjiStatus = 'unknown' | 'learning' | 'known';

export type PracticeDirection = 'en-ja' | 'ja-en' | 'mixed';
export type AnswerMode = 'type' | 'flip' | 'multiple-choice';

export interface ILesson {
  _id?: string;
  book: string;
  lessonNumber: number;
  title: string;
  jlptLevel: JLPTLevel;
  vocabularyCount?: number;
}

export interface IExample {
  japanese: string;
  reading: string;
  english: string;
}

export interface IVocabulary {
  _id: string;
  japanese: string;
  reading: string;
  english: string[];
  lessonNumbers: number[];
  jlptLevel: JLPTLevel;
  kanji: string[];
  partOfSpeech: string;
  acceptedAnswers: string[];
  examples?: IExample[];
  notes?: string;
  audioUrl?: string;
}

export interface IKanjiExample {
  japanese: string;
  reading: string;
  meaning: string;
}

export interface IKanji {
  _id: string;
  character: string;
  meaning: string[];
  onyomi: string[];
  kunyomi: string[];
  jlptLevel: JLPTLevel;
  strokeCount: number;
  examples?: IKanjiExample[];
}

export interface IUserVocabularyProgress {
  _id?: string;
  userId: string;
  vocabularyId: string;
  status: VocabStatus;
  attempts: number;
  correct: number;
  incorrect: number;
  accuracy: number;
  lastPracticedAt: string;
  methodStats?: {
    type: { attempts: number; correct: number };
    flip: { attempts: number; correct: number };
    multipleChoice: { attempts: number; correct: number };
  };
}

export interface IUserKanjiProgress {
  _id?: string;
  userId: string;
  kanjiId: string;
  character: string;
  status: KanjiStatus;
  lastPracticedAt: string;
}

export interface IPracticeSession {
  _id?: string;
  userId: string;
  lessonRange: number[];
  direction: PracticeDirection;
  answerMode: AnswerMode;
  totalCards: number;
  correctCount: number;
  incorrectCount: number;
  accuracy: number;
  durationSeconds: number;
  mistakes: string[]; // vocabularyIds
  createdAt: string;
}

export interface IPracticeQuestion {
  vocabulary: IVocabulary;
  direction: 'en-ja' | 'ja-en';
  prompt: string;
  promptSub?: string;
  expectedAnswer: string;
  readingAnswer: string;
  allMeanings: string[];
  distractors?: string[]; // for multiple choice (3 distractors)
  options?: string[]; // exactly 4 choices, shuffled
  isKanjiMasked: boolean;
  constituentKanji: {
    character: string;
    isKnown: boolean;
    meaning?: string[];
    isN5?: boolean;
    onyomi?: string[];
    kunyomi?: string[];
  }[];
}
