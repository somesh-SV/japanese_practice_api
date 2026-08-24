import { IVocabulary, IKanji, KanjiStatus } from '../types/index.js';

// Regex for CJK Unified Ideographs (Kanji)
export const KANJI_REGEX = /[\u4e00-\u9faf\u3400-\u4dbf]/g;

export function extractKanjiCharacters(text: string): string[] {
  const matches = text.match(KANJI_REGEX);
  if (!matches) return [];
  return Array.from(new Set(matches));
}

export interface KanjiEvaluation {
  isKanjiMasked: boolean;
  constituentKanji: {
    character: string;
    isKnown: boolean;
    meaning?: string[];
  }[];
}

export function evaluateVocabularyKanji(
  vocab: IVocabulary,
  knownKanjiSet: Set<string>,
  kanjiMap: Map<string, IKanji>
): KanjiEvaluation {
  const kanjiChars = extractKanjiCharacters(vocab.japanese);

  if (kanjiChars.length === 0) {
    return {
      isKanjiMasked: false,
      constituentKanji: []
    };
  }

  const constituentKanji = kanjiChars.map(char => {
    const isKnown = knownKanjiSet.has(char);
    const kanjiDoc = kanjiMap.get(char);
    return {
      character: char,
      isKnown,
      meaning: kanjiDoc ? kanjiDoc.meaning : undefined,
      isN5: kanjiDoc ? kanjiDoc.jlptLevel === 'N5' : false
    };
  });

  // If ALL constituent kanji are Known by the user, reading should be masked (user must read kanji)
  const allKnown = constituentKanji.every(k => k.isKnown);

  return {
    isKanjiMasked: allKnown,
    constituentKanji
  };
}
