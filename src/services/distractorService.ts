import { IVocabulary, IPracticeOptionItem } from '../types/index.js';
import { evaluateVocabularyKanji } from './kanjiService.js';

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
  allPoolVocab: IVocabulary[],
  knownKanjiSet: Set<string> = new Set(),
  kanjiMap: Map<string, any> = new Map()
): { 
  options: string[]; 
  correctAnswer: string; 
  distractors: string[];
  richOptions: IPracticeOptionItem[];
} {
  const correctAnswer = direction === 'en-ja' 
    ? targetVocab.japanese 
    : targetVocab.english[0];

  const targetKanjiEval = evaluateVocabularyKanji(targetVocab, knownKanjiSet, kanjiMap);
  const targetOptionItem: IPracticeOptionItem = {
    text: correctAnswer,
    reading: direction === 'en-ja' ? targetVocab.reading : undefined,
    isKanjiMasked: targetKanjiEval.isKanjiMasked,
    constituentKanji: targetKanjiEval.constituentKanji
  };

  // Exclude current target
  const otherVocabs = allPoolVocab.filter(v => v._id !== targetVocab._id);

  // Group by priority: same part of speech first, then rest
  const samePos = otherVocabs.filter(v => v.partOfSpeech === targetVocab.partOfSpeech);
  const diffPos = otherVocabs.filter(v => v.partOfSpeech !== targetVocab.partOfSpeech);

  const candidatePool = [...shuffleArray(samePos), ...shuffleArray(diffPos)];
  const distractors: string[] = [];
  const distractorItems: IPracticeOptionItem[] = [];
  const seen = new Set<string>([correctAnswer.toLowerCase()]);

  for (const candidate of candidatePool) {
    const optionVal = direction === 'en-ja' 
      ? candidate.japanese 
      : candidate.english[0];

    if (!seen.has(optionVal.toLowerCase())) {
      seen.add(optionVal.toLowerCase());
      distractors.push(optionVal);

      const cEval = evaluateVocabularyKanji(candidate, knownKanjiSet, kanjiMap);
      distractorItems.push({
        text: optionVal,
        reading: direction === 'en-ja' ? candidate.reading : undefined,
        isKanjiMasked: cEval.isKanjiMasked,
        constituentKanji: cEval.constituentKanji
      });

      if (distractors.length >= 3) break;
    }
  }

  // Fallback distractors if pool is too small
  const fallbacksEn = ['Water', 'Teacher', 'Student', 'School', 'Book', 'Car', 'Station', 'Food', 'Clock', 'Friend'];
  const fallbacksJa = [
    { text: '水', reading: 'みず' },
    { text: '先生', reading: 'せんせい' },
    { text: '学生', reading: 'がくせい' },
    { text: '学校', reading: 'がっこう' },
    { text: '本', reading: 'ほん' },
    { text: '車', reading: 'くるま' },
    { text: '駅', reading: 'えき' },
    { text: '食べ物', reading: 'たべもの' },
    { text: '時計', reading: 'とけい' },
    { text: '友達', reading: 'ともだち' }
  ];

  if (direction === 'en-ja') {
    for (const fb of fallbacksJa) {
      if (distractors.length >= 3) break;
      if (!seen.has(fb.text.toLowerCase())) {
        seen.add(fb.text.toLowerCase());
        distractors.push(fb.text);
        distractorItems.push({
          text: fb.text,
          reading: fb.reading,
        });
      }
    }
  } else {
    for (const fb of fallbacksEn) {
      if (distractors.length >= 3) break;
      if (!seen.has(fb.toLowerCase())) {
        seen.add(fb.toLowerCase());
        distractors.push(fb);
        distractorItems.push({
          text: fb
        });
      }
    }
  }

  // Combine and shuffle together so options and richOptions align identically
  const combined = shuffleArray([targetOptionItem, ...distractorItems.slice(0, 3)]);
  const options = combined.map(c => c.text);

  return {
    options,
    correctAnswer,
    distractors: distractors.slice(0, 3),
    richOptions: combined
  };
}
