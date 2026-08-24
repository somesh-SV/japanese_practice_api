import { IVocabulary } from '../types/index.js';

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function generateMultipleChoiceOptions(
  targetVocab: IVocabulary,
  direction: 'en-ja' | 'ja-en',
  allPoolVocab: IVocabulary[]
): { options: string[]; correctAnswer: string; distractors: string[] } {
  const correctAnswer = direction === 'en-ja' 
    ? targetVocab.japanese 
    : targetVocab.english[0];

  // Exclude current target
  const otherVocabs = allPoolVocab.filter(v => v._id !== targetVocab._id);

  // Group by priority: same part of speech first, then rest
  const samePos = otherVocabs.filter(v => v.partOfSpeech === targetVocab.partOfSpeech);
  const diffPos = otherVocabs.filter(v => v.partOfSpeech !== targetVocab.partOfSpeech);

  const candidatePool = [...shuffleArray(samePos), ...shuffleArray(diffPos)];
  const distractors: string[] = [];
  const seen = new Set<string>([correctAnswer.toLowerCase()]);

  for (const candidate of candidatePool) {
    const optionVal = direction === 'en-ja' 
      ? candidate.japanese 
      : candidate.english[0];

    if (!seen.has(optionVal.toLowerCase())) {
      seen.add(optionVal.toLowerCase());
      distractors.push(optionVal);
      if (distractors.length >= 3) break;
    }
  }

  // Fallback distractors if pool is too small
  const fallbacksEn = ['Water', 'Teacher', 'Student', 'School', 'Book', 'Car', 'Station', 'Food', 'Clock', 'Friend'];
  const fallbacksJa = ['水', '先生', '学生', '学校', '本', '車', '駅', '食べ物', '時計', '友達'];
  const fallbackList = direction === 'en-ja' ? fallbacksJa : fallbacksEn;

  for (const fallback of fallbackList) {
    if (distractors.length >= 3) break;
    if (!seen.has(fallback.toLowerCase())) {
      seen.add(fallback.toLowerCase());
      distractors.push(fallback);
    }
  }

  const options = shuffleArray([correctAnswer, ...distractors.slice(0, 3)]);

  return {
    options,
    correctAnswer,
    distractors: distractors.slice(0, 3)
  };
}
