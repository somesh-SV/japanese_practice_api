import { IKanji } from '../types/index.js';

export const SEED_KANJI: Omit<IKanji, '_id'>[] = [
  {
    character: '一',
    meaning: ['one'],
    onyomi: ['イチ', 'イツ'],
    kunyomi: ['ひと', 'ひとつ', 'ひと-'],
    jlptLevel: 'N5',
    strokeCount: 1,
    examples: [
      { japanese: '一つ', reading: 'ひとつ', meaning: 'one thing' },
      { japanese: '一日', reading: 'ついたち', meaning: 'first day of month' },
      { japanese: '一人', reading: 'ひとり', meaning: 'one person' },
      { japanese: '一月', reading: 'いちがつ', meaning: 'January' }
    ]
  },
  {
    character: '二',
    meaning: ['two'],
    onyomi: ['ニ', 'ジ'],
    kunyomi: ['ふた', 'ふたつ', 'ふたたび'],
    jlptLevel: 'N5',
    strokeCount: 2,
    examples: [
      { japanese: '二つ', reading: 'ふたつ', meaning: 'two things' },
      { japanese: '二日', reading: 'ふつか', meaning: 'second day / 2 days' },
      { japanese: '二人', reading: 'ふたり', meaning: 'two people' },
      { japanese: '二月', reading: 'にがつ', meaning: 'February' },
      { japanese: '二十日', reading: 'はつか', meaning: '20th day of month' }
    ]
  },
  {
    character: '三',
    meaning: ['three'],
    onyomi: ['サン', 'ゾウ'],
    kunyomi: ['み', 'みっつ', 'みつ'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '三つ', reading: 'みっつ', meaning: 'three things' },
      { japanese: '三日', reading: 'みっか', meaning: 'third day / 3 days' },
      { japanese: '三人', reading: 'さんにん', meaning: 'three people' },
      { japanese: '三月', reading: 'さんがつ', meaning: 'March' }
    ]
  },
  {
    character: '四',
    meaning: ['four'],
    onyomi: ['シ'],
    kunyomi: ['よ', 'よん', 'よっつ', 'よつ'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '四つ', reading: 'よっつ', meaning: 'four things' },
      { japanese: '四日', reading: 'よっか', meaning: 'fourth day / 4 days' },
      { japanese: '四人', reading: 'よにん', meaning: 'four people' },
      { japanese: '四月', reading: 'しがつ', meaning: 'April' },
      { japanese: '四季', reading: 'しき', meaning: 'four seasons' }
    ]
  },
  {
    character: '五',
    meaning: ['five'],
    onyomi: ['ゴ'],
    kunyomi: ['いつ', 'いつつ'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '五つ', reading: 'いつつ', meaning: 'five things' },
      { japanese: '五日', reading: 'いつか', meaning: 'fifth day / 5 days' },
      { japanese: '五人', reading: 'ごにん', meaning: 'five people' },
      { japanese: '五月', reading: 'ごがつ', meaning: 'May' }
    ]
  },
  {
    character: '六',
    meaning: ['six'],
    onyomi: ['ロク', 'リク'],
    kunyomi: ['む', 'むっつ', 'むつ', 'むい'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '六つ', reading: 'むっつ', meaning: 'six things' },
      { japanese: '六日', reading: 'むいか', meaning: 'sixth day / 6 days' },
      { japanese: '六人', reading: 'ろくにん', meaning: 'six people' },
      { japanese: '六月', reading: 'ろくがつ', meaning: 'June' }
    ]
  },
  {
    character: '七',
    meaning: ['seven'],
    onyomi: ['シチ'],
    kunyomi: ['なな', 'ななつ', 'なの'],
    jlptLevel: 'N5',
    strokeCount: 2,
    examples: [
      { japanese: '七つ', reading: 'ななつ', meaning: 'seven things' },
      { japanese: '七日', reading: 'なのか', meaning: 'seventh day / 7 days' },
      { japanese: '七人', reading: 'しちにん / ななにん', meaning: 'seven people' },
      { japanese: '七月', reading: 'しちがつ', meaning: 'July' }
    ]
  },
  {
    character: '八',
    meaning: ['eight'],
    onyomi: ['ハチ', 'ハツ'],
    kunyomi: ['や', 'やっつ', 'やつ', 'よう'],
    jlptLevel: 'N5',
    strokeCount: 2,
    examples: [
      { japanese: '八つ', reading: 'やっつ', meaning: 'eight things' },
      { japanese: '八日', reading: 'ようか', meaning: 'eighth day / 8 days' },
      { japanese: '八人', reading: 'はちにん', meaning: 'eight people' },
      { japanese: '八月', reading: 'はちがつ', meaning: 'August' },
      { japanese: '八百屋', reading: 'やおや', meaning: 'greengrocer' }
    ]
  },
  {
    character: '九',
    meaning: ['nine'],
    onyomi: ['キュウ', 'ク'],
    kunyomi: ['ここの', 'ここのつ'],
    jlptLevel: 'N5',
    strokeCount: 2,
    examples: [
      { japanese: '九つ', reading: 'ここのつ', meaning: 'nine things' },
      { japanese: '九日', reading: 'ここのか', meaning: 'ninth day / 9 days' },
      { japanese: '九人', reading: 'きゅうにん', meaning: 'nine people' },
      { japanese: '九月', reading: 'くがつ', meaning: 'September' }
    ]
  },
  {
    character: '十',
    meaning: ['ten'],
    onyomi: ['ジュウ', 'ジッ', 'ジュッ'],
    kunyomi: ['とお', 'と'],
    jlptLevel: 'N5',
    strokeCount: 2,
    examples: [
      { japanese: '十日', reading: 'とおか', meaning: 'tenth day / 10 days' },
      { japanese: '十月', reading: 'じゅうがつ', meaning: 'October' },
      { japanese: '十分', reading: 'じゅっぷん', meaning: '10 minutes' },
      { japanese: '二十歳', reading: 'はたち', meaning: '20 years old' }
    ]
  },
  {
    character: '百',
    meaning: ['hundred'],
    onyomi: ['ヒャク', 'ビャク', 'ピャク'],
    kunyomi: ['もも'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '百円', reading: 'ひゃくえん', meaning: '100 yen' },
      { japanese: '三百', reading: 'さんびゃく', meaning: '300' },
      { japanese: '六百', reading: 'ろっぴゃく', meaning: '600' },
      { japanese: '八百', reading: 'はっぴゃく', meaning: '800' }
    ]
  },
  {
    character: '千',
    meaning: ['thousand'],
    onyomi: ['セン', 'ゼン'],
    kunyomi: ['ち'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '千円', reading: 'せんえん', meaning: '1,000 yen' },
      { japanese: '三千', reading: 'さんぜん', meaning: '3,000' },
      { japanese: '八千', reading: 'はっせん', meaning: '8,000' }
    ]
  },
  {
    character: '万',
    meaning: ['ten thousand'],
    onyomi: ['マン', 'バン'],
    kunyomi: ['よろず'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '一万円', reading: 'いちまんえん', meaning: '10,000 yen' },
      { japanese: '万国', reading: 'ばんこく', meaning: 'all nations' },
      { japanese: '万歳', reading: 'ばんざい', meaning: 'cheers / banzai' }
    ]
  },
  {
    character: '円',
    meaning: ['yen', 'circle', 'round'],
    onyomi: ['エン'],
    kunyomi: ['まる', 'まるい'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '千円', reading: 'せんえん', meaning: '1,000 yen' },
      { japanese: '円高', reading: 'えんだか', meaning: 'strong yen' },
      { japanese: '円い', reading: 'まるい', meaning: 'round / circular' }
    ]
  },
  {
    character: '日',
    meaning: ['sun', 'day'],
    onyomi: ['ニチ', 'ジツ'],
    kunyomi: ['ひ', 'か'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '日曜日', reading: 'にちようび', meaning: 'Sunday' },
      { japanese: '日本', reading: 'にほん', meaning: 'Japan' },
      { japanese: '毎日', reading: 'まいにち', meaning: 'every day' }
    ]
  },
  {
    character: '月',
    meaning: ['moon', 'month'],
    onyomi: ['ゲツ', 'ガツ'],
    kunyomi: ['つき'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '月曜日', reading: 'げつようび', meaning: 'Monday' },
      { japanese: '一月', reading: 'いちがつ', meaning: 'January' },
      { japanese: '今月', reading: 'こんげつ', meaning: 'this month' }
    ]
  },
  {
    character: '火',
    meaning: ['fire'],
    onyomi: ['カ'],
    kunyomi: ['ひ'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '火曜日', reading: 'かようび', meaning: 'Tuesday' },
      { japanese: '火事', reading: 'かじ', meaning: 'fire / blaze' }
    ]
  },
  {
    character: '水',
    meaning: ['water'],
    onyomi: ['スイ'],
    kunyomi: ['みず'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '水曜日', reading: 'すいようび', meaning: 'Wednesday' },
      { japanese: '水', reading: 'みず', meaning: 'water' },
      { japanese: 'お水', reading: 'おみず', meaning: 'water (polite)' }
    ]
  },
  {
    character: '木',
    meaning: ['tree', 'wood'],
    onyomi: ['モク', 'ボク'],
    kunyomi: ['き'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
      { japanese: '木', reading: 'き', meaning: 'tree' }
    ]
  },
  {
    character: '金',
    meaning: ['gold', 'money'],
    onyomi: ['キン', 'コン'],
    kunyomi: ['かね'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '金曜日', reading: 'きんようび', meaning: 'Friday' },
      { japanese: 'お金', reading: 'おかね', meaning: 'money' }
    ]
  },
  {
    character: '土',
    meaning: ['earth', 'soil'],
    onyomi: ['ド', 'ト'],
    kunyomi: ['つち'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '土曜日', reading: 'どようび', meaning: 'Saturday' },
      { japanese: '土地', reading: 'とち', meaning: 'land' }
    ]
  },
  {
    character: '曜',
    meaning: ['day of the week'],
    onyomi: ['ヨウ'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 18,
    examples: [
      { japanese: '何曜日', reading: 'なんようび', meaning: 'what day of week' },
      { japanese: '日曜日', reading: 'にちようび', meaning: 'Sunday' }
    ]
  },
  {
    character: '年',
    meaning: ['year'],
    onyomi: ['ネン'],
    kunyomi: ['とし'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '今年', reading: 'ことし', meaning: 'this year' },
      { japanese: '来年', reading: 'らいねん', meaning: 'next year' },
      { japanese: '去年', reading: 'きょねん', meaning: 'last year' }
    ]
  },
  {
    character: '人',
    meaning: ['person'],
    onyomi: ['ジン', 'ニン'],
    kunyomi: ['ひと'],
    jlptLevel: 'N5',
    strokeCount: 2,
    examples: [
      { japanese: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
      { japanese: 'あの人', reading: 'あのひと', meaning: 'that person' }
    ]
  },
  {
    character: '子',
    meaning: ['child'],
    onyomi: ['シ', 'ス'],
    kunyomi: ['こ'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '子供', reading: 'こども', meaning: 'child' },
      { japanese: '女の子', reading: 'おんなのこ', meaning: 'girl' }
    ]
  },
  {
    character: '女',
    meaning: ['woman', 'female'],
    onyomi: ['ジョ', 'ニョ'],
    kunyomi: ['おんな', 'め'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '女性', reading: 'じょせい', meaning: 'female' },
      { japanese: '女の人', reading: 'おんなのひと', meaning: 'woman' }
    ]
  },
  {
    character: '男',
    meaning: ['man', 'male'],
    onyomi: ['ダン', 'ナン'],
    kunyomi: ['おとこ'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '男性', reading: 'だんせい', meaning: 'male' },
      { japanese: '男の人', reading: 'おとこのひと', meaning: 'man' }
    ]
  },
  {
    character: '先',
    meaning: ['previous', 'ahead'],
    onyomi: ['セン'],
    kunyomi: ['さき'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '先生', reading: 'せんせい', meaning: 'teacher' },
      { japanese: '先月', reading: 'せんげつ', meaning: 'last month' },
      { japanese: '先週', reading: 'せんしゅう', meaning: 'last week' }
    ]
  },
  {
    character: '生',
    meaning: ['life', 'birth', 'student'],
    onyomi: ['セイ', 'ショウ'],
    kunyomi: ['い', 'う', 'なま'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '学生', reading: 'がくせい', meaning: 'student' },
      { japanese: '先生', reading: 'せんせい', meaning: 'teacher' },
      { japanese: '生まれる', reading: 'うまれる', meaning: 'to be born' }
    ]
  },
  {
    character: '学',
    meaning: ['study', 'learning'],
    onyomi: ['ガク'],
    kunyomi: ['まな'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '学校', reading: 'がっこう', meaning: 'school' },
      { japanese: '大学', reading: 'だいがく', meaning: 'university' },
      { japanese: '学生', reading: 'がくせい', meaning: 'student' }
    ]
  },
  {
    character: '校',
    meaning: ['school'],
    onyomi: ['コウ'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '学校', reading: 'がっこう', meaning: 'school' },
      { japanese: '高校', reading: 'こうこう', meaning: 'high school' }
    ]
  },
  {
    character: '本',
    meaning: ['book', 'origin', 'main'],
    onyomi: ['ホン'],
    kunyomi: ['もと'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '本', reading: 'ほん', meaning: 'book' },
      { japanese: '日本', reading: 'にほん', meaning: 'Japan' },
      { japanese: '本棚', reading: 'ほんだな', meaning: 'bookshelf' }
    ]
  },
  {
    character: '語',
    meaning: ['language', 'word'],
    onyomi: ['ゴ'],
    kunyomi: ['かた'],
    jlptLevel: 'N5',
    strokeCount: 14,
    examples: [
      { japanese: '日本語', reading: 'にほんご', meaning: 'Japanese language' },
      { japanese: '英語', reading: 'えいご', meaning: 'English language' },
      { japanese: '外国語', reading: 'がいこくご', meaning: 'foreign language' }
    ]
  },
  {
    character: '何',
    meaning: ['what'],
    onyomi: ['カ'],
    kunyomi: ['なに', 'なん'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '何', reading: 'なに', meaning: 'what' },
      { japanese: '何時', reading: 'なんじ', meaning: 'what time' },
      { japanese: '何人', reading: 'なんにん', meaning: 'how many people' }
    ]
  },
  {
    character: '時',
    meaning: ['time', 'hour'],
    onyomi: ['ジ'],
    kunyomi: ['とき'],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '時間', reading: 'じかん', meaning: 'time' },
      { japanese: '時計', reading: 'とけい', meaning: 'clock / watch' },
      { japanese: '一時', reading: 'いちじ', meaning: '1 o\'clock' }
    ]
  },
  {
    character: '分',
    meaning: ['minute', 'part', 'understand'],
    onyomi: ['ブン', 'フン', 'プン'],
    kunyomi: ['わ'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '五分', reading: 'ごふん', meaning: '5 minutes' },
      { japanese: '分かる', reading: 'わかる', meaning: 'to understand' },
      { japanese: '半分', reading: 'はんぶん', meaning: 'half' }
    ]
  },
  {
    character: '半',
    meaning: ['half'],
    onyomi: ['ハン'],
    kunyomi: ['なか'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '三時半', reading: 'さんじはん', meaning: '3:30' },
      { japanese: '半年', reading: 'はんとし', meaning: 'half year' }
    ]
  },
  {
    character: '今',
    meaning: ['now'],
    onyomi: ['コン', 'キン'],
    kunyomi: ['いま'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '今', reading: 'いま', meaning: 'now' },
      { japanese: '今日', reading: 'きょう', meaning: 'today' },
      { japanese: '今週', reading: 'こんしゅう', meaning: 'this week' }
    ]
  },
  {
    character: '大',
    meaning: ['big', 'large'],
    onyomi: ['ダイ', 'タイ'],
    kunyomi: ['おお', 'おおきい'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '大きい', reading: 'おおきい', meaning: 'big' },
      { japanese: '大学', reading: 'だいがく', meaning: 'university' },
      { japanese: '大人', reading: 'おとな', meaning: 'adult' }
    ]
  },
  {
    character: '小',
    meaning: ['small', 'little'],
    onyomi: ['ショウ'],
    kunyomi: ['ちい', 'ちいさい', 'こ', 'お'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '小さい', reading: 'ちいさい', meaning: 'small' },
      { japanese: '小学校', reading: 'しょうがっこう', meaning: 'elementary school' }
    ]
  },
  {
    character: '中',
    meaning: ['inside', 'middle'],
    onyomi: ['チュウ'],
    kunyomi: ['なか'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '中', reading: 'なか', meaning: 'inside' },
      { japanese: '一日中', reading: 'いちにちじゅう', meaning: 'all day long' },
      { japanese: '中国', reading: 'ちゅうごく', meaning: 'China' }
    ]
  },
  {
    character: '国',
    meaning: ['country'],
    onyomi: ['コク'],
    kunyomi: ['くに'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '外国', reading: 'がいこく', meaning: 'foreign country' },
      { japanese: '国', reading: 'くに', meaning: 'country' }
    ]
  },
  {
    character: '行',
    meaning: ['to go', 'carry out'],
    onyomi: ['コウ', 'ギョウ'],
    kunyomi: ['い', 'ゆ', 'おこな'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '行く', reading: 'いく', meaning: 'to go' },
      { japanese: '銀行', reading: 'ぎんこう', meaning: 'bank' },
      { japanese: '旅行', reading: 'りょこう', meaning: 'travel' }
    ]
  },
  {
    character: '来',
    meaning: ['to come', 'next'],
    onyomi: ['ライ'],
    kunyomi: ['く', 'き', 'こ'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '来る', reading: 'くる', meaning: 'to come' },
      { japanese: '来週', reading: 'らいしゅう', meaning: 'next week' },
      { japanese: '来月', reading: 'らいげつ', meaning: 'next month' }
    ]
  },
  {
    character: '帰',
    meaning: ['to return'],
    onyomi: ['キ'],
    kunyomi: ['かえ'],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '帰る', reading: 'かえる', meaning: 'to go back / return' },
      { japanese: '帰国', reading: 'きこく', meaning: 'returning to home country' }
    ]
  },
  {
    character: '見',
    meaning: ['to see', 'to look'],
    onyomi: ['ケン'],
    kunyomi: ['み'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '見る', reading: 'みる', meaning: 'to look / watch' },
      { japanese: '見せる', reading: 'みせる', meaning: 'to show' },
      { japanese: '見学', reading: 'けんがく', meaning: 'field trip / study by observation' }
    ]
  },
  {
    character: '聞',
    meaning: ['to hear', 'to listen', 'to ask'],
    onyomi: ['ブン', 'モン'],
    kunyomi: ['き'],
    jlptLevel: 'N5',
    strokeCount: 14,
    examples: [
      { japanese: '聞く', reading: 'きく', meaning: 'to listen / hear' },
      { japanese: '新聞', reading: 'しんぶん', meaning: 'newspaper' }
    ]
  },
  {
    character: '読',
    meaning: ['to read'],
    onyomi: ['ドク', 'トク'],
    kunyomi: ['よ'],
    jlptLevel: 'N5',
    strokeCount: 14,
    examples: [
      { japanese: '読む', reading: 'よむ', meaning: 'to read' },
      { japanese: '読書', reading: 'どくしょ', meaning: 'reading books' }
    ]
  },
  {
    character: '書',
    meaning: ['to write'],
    onyomi: ['ショ'],
    kunyomi: ['か'],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '書く', reading: 'かく', meaning: 'to write' },
      { japanese: '辞書', reading: 'じしょ', meaning: 'dictionary' },
      { japanese: '図書館', reading: 'としょかん', meaning: 'library' }
    ]
  },
  {
    character: '話',
    meaning: ['to speak', 'talk', 'story'],
    onyomi: ['ワ'],
    kunyomi: ['はな', 'はなし'],
    jlptLevel: 'N5',
    strokeCount: 13,
    examples: [
      { japanese: '話す', reading: 'はなす', meaning: 'to speak' },
      { japanese: '電話', reading: 'でんわ', meaning: 'telephone' },
      { japanese: '会話', reading: 'かいわ', meaning: 'conversation' }
    ]
  },
  {
    character: '食',
    meaning: ['to eat', 'food'],
    onyomi: ['ショク', 'ジキ'],
    kunyomi: ['た', 'く'],
    jlptLevel: 'N5',
    strokeCount: 9,
    examples: [
      { japanese: '食べる', reading: 'たべる', meaning: 'to eat' },
      { japanese: '食べ物', reading: 'たべもの', meaning: 'food' },
      { japanese: '食堂', reading: 'しょくどう', meaning: 'dining hall / cafeteria' }
    ]
  },
  {
    character: '飲',
    meaning: ['to drink'],
    onyomi: ['イン'],
    kunyomi: ['の'],
    jlptLevel: 'N5',
    strokeCount: 12,
    examples: [
      { japanese: '飲む', reading: 'のむ', meaning: 'to drink' },
      { japanese: '飲み物', reading: 'のみもの', meaning: 'beverage / drink' }
    ]
  },
  {
    character: '買',
    meaning: ['to buy'],
    onyomi: ['バイ'],
    kunyomi: ['か'],
    jlptLevel: 'N5',
    strokeCount: 12,
    examples: [
      { japanese: '買う', reading: 'かう', meaning: 'to buy' },
      { japanese: '買い物', reading: 'かいもの', meaning: 'shopping' }
    ]
  },
  {
    character: '物',
    meaning: ['thing', 'object'],
    onyomi: ['ブツ', 'モツ'],
    kunyomi: ['もの'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '食べ物', reading: 'たべもの', meaning: 'food' },
      { japanese: '飲み物', reading: 'のみもの', meaning: 'drink' },
      { japanese: '動物', reading: 'どうぶつ', meaning: 'animal' }
    ]
  },
  {
    character: '車',
    meaning: ['car', 'wheel'],
    onyomi: ['シャ'],
    kunyomi: ['くるま'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '車', reading: 'くるま', meaning: 'car' },
      { japanese: '電車', reading: 'でんしゃ', meaning: 'train' },
      { japanese: '自転車', reading: 'じてんしゃ', meaning: 'bicycle' }
    ]
  },
  {
    character: '電',
    meaning: ['electricity'],
    onyomi: ['デン'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 13,
    examples: [
      { japanese: '電車', reading: 'でんしゃ', meaning: 'train' },
      { japanese: '電話', reading: 'でんわ', meaning: 'telephone' },
      { japanese: '電気', reading: 'でんき', meaning: 'electricity / light' }
    ]
  },
  {
    character: '気',
    meaning: ['spirit', 'energy', 'air'],
    onyomi: ['キ', 'ケ'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '元気', reading: 'げんき', meaning: 'healthy / energetic' },
      { japanese: '天気', reading: 'てんき', meaning: 'weather' },
      { japanese: '気持ち', reading: 'きもち', meaning: 'feeling' }
    ]
  },
  {
    character: '天',
    meaning: ['heaven', 'sky'],
    onyomi: ['テン'],
    kunyomi: ['あめ', 'あま'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '天気', reading: 'てんき', meaning: 'weather' },
      { japanese: '天ぷら', reading: 'てんぷら', meaning: 'tempura' }
    ]
  },
  {
    character: '白',
    meaning: ['white'],
    onyomi: ['ハク', 'ビャク'],
    kunyomi: ['しろ', 'しろい'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '白い', reading: 'しろい', meaning: 'white' },
      { japanese: '面白', reading: 'おもしろい', meaning: 'interesting' }
    ]
  },
  {
    character: '黒',
    meaning: ['black'],
    onyomi: ['コク'],
    kunyomi: ['くろ', 'くろい'],
    jlptLevel: 'N5',
    strokeCount: 11,
    examples: [
      { japanese: '黒い', reading: 'くろい', meaning: 'black' },
      { japanese: '黒板', reading: 'こくばん', meaning: 'blackboard' }
    ]
  },
  {
    character: '赤',
    meaning: ['red'],
    onyomi: ['セキ', 'シャク'],
    kunyomi: ['あか', 'あかい'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '赤い', reading: 'あかい', meaning: 'red' },
      { japanese: '赤ちゃん', reading: 'あかちゃん', meaning: 'baby' }
    ]
  },
  {
    character: '青',
    meaning: ['blue'],
    onyomi: ['セイ', 'ショウ'],
    kunyomi: ['あお', 'あおい'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '青い', reading: 'あおい', meaning: 'blue' },
      { japanese: '青空', reading: 'あおぞら', meaning: 'blue sky' }
    ]
  },
  {
    character: '高',
    meaning: ['tall', 'high', 'expensive'],
    onyomi: ['コウ'],
    kunyomi: ['たか', 'たかい'],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '高い', reading: 'たかい', meaning: 'tall / expensive' },
      { japanese: '高校生', reading: 'こうこうせい', meaning: 'high school student' }
    ]
  },
  {
    character: '安',
    meaning: ['cheap', 'peaceful', 'safe'],
    onyomi: ['アン'],
    kunyomi: ['やす', 'やすい'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '安い', reading: 'やすい', meaning: 'cheap / inexpensive' },
      { japanese: '安心', reading: 'あんしん', meaning: 'peace of mind / relief' },
      { japanese: '安全', reading: 'あんぜん', meaning: 'safe' }
    ]
  },
  {
    character: '新',
    meaning: ['new'],
    onyomi: ['シン'],
    kunyomi: ['あたら', 'あたらし'],
    jlptLevel: 'N5',
    strokeCount: 13,
    examples: [
      { japanese: '新しい', reading: 'あたらしい', meaning: 'new' },
      { japanese: '新聞', reading: 'しんぶん', meaning: 'newspaper' },
      { japanese: '新年', reading: 'しんねん', meaning: 'New Year' }
    ]
  },
  {
    character: '古',
    meaning: ['old'],
    onyomi: ['コ'],
    kunyomi: ['ふる', 'ふるい'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '古い', reading: 'ふるい', meaning: 'old (things)' },
      { japanese: '中古', reading: 'ちゅうこ', meaning: 'used / secondhand' }
    ]
  },
  {
    character: '長',
    meaning: ['long', 'leader'],
    onyomi: ['チョウ'],
    kunyomi: ['なが', 'ながい'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '長い', reading: 'ながい', meaning: 'long' },
      { japanese: '社長', reading: 'しゃちょう', meaning: 'company president' },
      { japanese: '校長', reading: 'こうちょう', meaning: 'principal' }
    ]
  },
  {
    character: '短',
    meaning: ['short'],
    onyomi: ['タン'],
    kunyomi: ['みじか', 'みじかい'],
    jlptLevel: 'N5',
    strokeCount: 12,
    examples: [
      { japanese: '短い', reading: 'みじかい', meaning: 'short' },
      { japanese: '短所', reading: 'たんしょ', meaning: 'weak point' }
    ]
  },
  {
    character: '多',
    meaning: ['many', 'much'],
    onyomi: ['タ'],
    kunyomi: ['おお', 'おおい'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '多い', reading: 'おおい', meaning: 'many / numerous' },
      { japanese: '多分', reading: 'たぶん', meaning: 'probably' }
    ]
  },
  {
    character: '少',
    meaning: ['few', 'little'],
    onyomi: ['ショウ'],
    kunyomi: ['すく', 'すこ', 'すくない', 'すこし'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '少し', reading: 'すこし', meaning: 'a little' },
      { japanese: '少ない', reading: 'すくない', meaning: 'few / little' }
    ]
  },
  {
    character: '友',
    meaning: ['friend'],
    onyomi: ['ユウ'],
    kunyomi: ['とも'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '友達', reading: 'ともだち', meaning: 'friend' },
      { japanese: '友人', reading: 'ゆうじん', meaning: 'friend (formal)' }
    ]
  },
  {
    character: '父',
    meaning: ['father'],
    onyomi: ['フ'],
    kunyomi: ['ちち', 'とう'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '父', reading: 'ちち', meaning: 'my father' },
      { japanese: 'お父さん', reading: 'おとうさん', meaning: 'father (polite)' }
    ]
  },
  {
    character: '母',
    meaning: ['mother'],
    onyomi: ['ボ'],
    kunyomi: ['はは', 'かあ'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '母', reading: 'はは', meaning: 'my mother' },
      { japanese: 'お母さん', reading: 'おかあさん', meaning: 'mother (polite)' }
    ]
  },
  {
    character: '兄',
    meaning: ['older brother'],
    onyomi: ['ケイ', 'キョウ'],
    kunyomi: ['あに', 'にい'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '兄', reading: 'あに', meaning: 'my older brother' },
      { japanese: 'お兄さん', reading: 'おにいさん', meaning: 'older brother (polite)' }
    ]
  },
  {
    character: '姉',
    meaning: ['older sister'],
    onyomi: ['シ'],
    kunyomi: ['あね', 'ねえ'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '姉', reading: 'あね', meaning: 'my older sister' },
      { japanese: 'お姉さん', reading: 'おねえさん', meaning: 'older sister (polite)' }
    ]
  },
  {
    character: '弟',
    meaning: ['younger brother'],
    onyomi: ['テイ', 'ダイ'],
    kunyomi: ['おとうと'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '弟', reading: 'おとうと', meaning: 'younger brother' },
      { japanese: '兄弟', reading: 'きょうだい', meaning: 'siblings / brothers' }
    ]
  },
  {
    character: '妹',
    meaning: ['younger sister'],
    onyomi: ['マイ'],
    kunyomi: ['いもうと'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '妹', reading: 'いもうと', meaning: 'younger sister' },
      { japanese: '姉妹', reading: 'しまい', meaning: 'sisters' }
    ]
  },
  {
    character: '山',
    meaning: ['mountain'],
    onyomi: ['サン'],
    kunyomi: ['やま'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '富士山', reading: 'ふじさん', meaning: 'Mount Fuji' },
      { japanese: '山', reading: 'やま', meaning: 'mountain' }
    ]
  },
  {
    character: '川',
    meaning: ['river'],
    onyomi: ['セン'],
    kunyomi: ['かわ', 'がわ'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '川', reading: 'かわ', meaning: 'river' },
      { japanese: 'ナイル川', reading: 'ないるがわ', meaning: 'Nile River' }
    ]
  },
  {
    character: '花',
    meaning: ['flower'],
    onyomi: ['カ'],
    kunyomi: ['はな'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '花', reading: 'はな', meaning: 'flower' },
      { japanese: '花見', reading: 'はなみ', meaning: 'cherry blossom viewing' },
      { japanese: '花火', reading: 'はなび', meaning: 'fireworks' }
    ]
  },
  {
    character: '雨',
    meaning: ['rain'],
    onyomi: ['ウ'],
    kunyomi: ['あめ', 'あま'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '雨', reading: 'あめ', meaning: 'rain' },
      { japanese: '大雨', reading: 'おおあめ', meaning: 'heavy rain' }
    ]
  },
  {
    character: '魚',
    meaning: ['fish'],
    onyomi: ['ギョ'],
    kunyomi: ['さかな', 'うお'],
    jlptLevel: 'N5',
    strokeCount: 11,
    examples: [
      { japanese: '魚', reading: 'さかな', meaning: 'fish' },
      { japanese: '金魚', reading: 'きんぎょ', meaning: 'goldfish' }
    ]
  },
  {
    character: '肉',
    meaning: ['meat'],
    onyomi: ['ニク'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '牛肉', reading: 'ぎゅうにく', meaning: 'beef' },
      { japanese: '豚肉', reading: 'ぶたにく', meaning: 'pork' },
      { japanese: '鳥肉', reading: 'とりにく', meaning: 'chicken meat' }
    ]
  },
  {
    character: '茶',
    meaning: ['tea'],
    onyomi: ['チャ', 'サ'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 9,
    examples: [
      { japanese: 'お茶', reading: 'おちゃ', meaning: 'green tea' },
      { japanese: '紅茶', reading: 'こうちゃ', meaning: 'black tea' },
      { japanese: '喫茶店', reading: 'きっさてん', meaning: 'coffee shop / cafe' }
    ]
  },
  {
    character: '店',
    meaning: ['shop', 'store'],
    onyomi: ['テン'],
    kunyomi: ['みせ'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '店', reading: 'みせ', meaning: 'shop' },
      { japanese: '店員', reading: 'てんいん', meaning: 'store clerk' },
      { japanese: '書店', reading: 'しょてん', meaning: 'bookstore' }
    ]
  },
  {
    character: '駅',
    meaning: ['station'],
    onyomi: ['エキ'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 14,
    examples: [
      { japanese: '駅', reading: 'えき', meaning: 'train station' },
      { japanese: '駅前', reading: 'えきまえ', meaning: 'in front of station' },
      { japanese: '東京駅', reading: 'とうきょうえき', meaning: 'Tokyo Station' }
    ]
  },
  {
    character: '道',
    meaning: ['road', 'street', 'way'],
    onyomi: ['ドウ', 'トウ'],
    kunyomi: ['みち'],
    jlptLevel: 'N5',
    strokeCount: 12,
    examples: [
      { japanese: '道', reading: 'みち', meaning: 'road / path' },
      { japanese: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' }
    ]
  },
  {
    character: '社',
    meaning: ['company', 'shrine'],
    onyomi: ['シャ'],
    kunyomi: ['やしろ'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '会社', reading: 'かいしゃ', meaning: 'company' },
      { japanese: '社員', reading: 'しゃいん', meaning: 'company employee' },
      { japanese: '神社', reading: 'じんじゃ', meaning: 'Shinto shrine' }
    ]
  },
  {
    character: '会',
    meaning: ['to meet', 'society', 'gathering'],
    onyomi: ['カイ', 'エ'],
    kunyomi: ['あ'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '会う', reading: 'あう', meaning: 'to meet' },
      { japanese: '会社', reading: 'かいしゃ', meaning: 'company' },
      { japanese: '会話', reading: 'かいわ', meaning: 'conversation' }
    ]
  },
  {
    character: '員',
    meaning: ['member', 'employee'],
    onyomi: ['イン'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '会社員', reading: 'かいしゃいん', meaning: 'company employee' },
      { japanese: '銀行員', reading: 'ぎんこういん', meaning: 'bank employee' },
      { japanese: '店員', reading: 'てんいん', meaning: 'store clerk' }
    ]
  },
  {
    character: '銀',
    meaning: ['silver'],
    onyomi: ['ギン'],
    kunyomi: ['しろがね'],
    jlptLevel: 'N5',
    strokeCount: 14,
    examples: [
      { japanese: '銀行', reading: 'ぎんこう', meaning: 'bank' },
      { japanese: '銀色', reading: 'ぎんいろ', meaning: 'silver color' }
    ]
  },
  {
    character: '病',
    meaning: ['illness', 'sick'],
    onyomi: ['ビョウ', 'ヘイ'],
    kunyomi: ['や'],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '病院', reading: 'びょういん', meaning: 'hospital' },
      { japanese: '病気', reading: 'びょうき', meaning: 'illness / disease' }
    ]
  },
  {
    character: '院',
    meaning: ['institution'],
    onyomi: ['イン'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 10,
    examples: [
      { japanese: '病院', reading: 'びょういん', meaning: 'hospital' },
      { japanese: '大学院', reading: 'だいがくいん', meaning: 'graduate school' }
    ]
  },
  {
    character: '医',
    meaning: ['doctor', 'medicine'],
    onyomi: ['イ'],
    kunyomi: [],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { japanese: '医学', reading: 'いがく', meaning: 'medical science' }
    ]
  },
  {
    character: '者',
    meaning: ['person'],
    onyomi: ['シャ'],
    kunyomi: ['もの'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '医者', reading: 'いしゃ', meaning: 'doctor' },
      { japanese: '若者', reading: 'わかもの', meaning: 'young person' },
      { japanese: '学者', reading: 'がくしゃ', meaning: 'scholar' }
    ]
  },
  {
    character: '東',
    meaning: ['east'],
    onyomi: ['トウ'],
    kunyomi: ['ひがし'],
    jlptLevel: 'N5',
    strokeCount: 8,
    examples: [
      { japanese: '東京', reading: 'とうきょう', meaning: 'Tokyo' },
      { japanese: '東口', reading: 'ひがしぐち', meaning: 'east exit' }
    ]
  },
  {
    character: '西',
    meaning: ['west'],
    onyomi: ['セイ', 'サイ'],
    kunyomi: ['にし'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '西口', reading: 'にしぐち', meaning: 'west exit' },
      { japanese: '東西', reading: 'とうざい', meaning: 'east and west' }
    ]
  },
  {
    character: '南',
    meaning: ['south'],
    onyomi: ['ナン'],
    kunyomi: ['みなみ'],
    jlptLevel: 'N5',
    strokeCount: 9,
    examples: [
      { japanese: '南口', reading: 'みなみぐち', meaning: 'south exit' },
      { japanese: '南米', reading: 'なんべい', meaning: 'South America' }
    ]
  },
  {
    character: '北',
    meaning: ['north'],
    onyomi: ['ホク'],
    kunyomi: ['きた'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '北口', reading: 'きたぐち', meaning: 'north exit' },
      { japanese: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' }
    ]
  },
  {
    character: '口',
    meaning: ['mouth', 'entrance', 'exit'],
    onyomi: ['コウ', 'ク'],
    kunyomi: ['くち', 'ぐち'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '入口', reading: 'いりぐち', meaning: 'entrance' },
      { japanese: '出口', reading: 'でぐち', meaning: 'exit' },
      { japanese: '口', reading: 'くち', meaning: 'mouth' }
    ]
  },
  {
    character: '目',
    meaning: ['eye'],
    onyomi: ['モク'],
    kunyomi: ['め'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '目', reading: 'め', meaning: 'eye' },
      { japanese: '目的', reading: 'もくてき', meaning: 'purpose' }
    ]
  },
  {
    character: '耳',
    meaning: ['ear'],
    onyomi: ['ジ'],
    kunyomi: ['みみ'],
    jlptLevel: 'N5',
    strokeCount: 6,
    examples: [
      { japanese: '耳', reading: 'みみ', meaning: 'ear' }
    ]
  },
  {
    character: '手',
    meaning: ['hand'],
    onyomi: ['シュ'],
    kunyomi: ['て'],
    jlptLevel: 'N5',
    strokeCount: 4,
    examples: [
      { japanese: '手', reading: 'て', meaning: 'hand' },
      { japanese: '上手', reading: 'じょうず', meaning: 'skillful' },
      { japanese: '下手', reading: 'へた', meaning: 'unskillful' },
      { japanese: '手紙', reading: 'てがみ', meaning: 'letter' }
    ]
  },
  {
    character: '足',
    meaning: ['foot', 'leg', 'sufficient'],
    onyomi: ['ソク'],
    kunyomi: ['あし', 'た'],
    jlptLevel: 'N5',
    strokeCount: 7,
    examples: [
      { japanese: '足', reading: 'あし', meaning: 'foot / leg' },
      { japanese: '足りる', reading: 'たりる', meaning: 'to be sufficient' }
    ]
  },
  {
    character: '上',
    meaning: ['above', 'up', 'top'],
    onyomi: ['ジョウ'],
    kunyomi: ['うえ', 'あ', 'のぼ'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '上', reading: 'うえ', meaning: 'above / on top' },
      { japanese: '上手', reading: 'じょうず', meaning: 'skillful / good at' }
    ]
  },
  {
    character: '下',
    meaning: ['below', 'down', 'under'],
    onyomi: ['カ', 'ゲ'],
    kunyomi: ['した', 'さ', 'くだ'],
    jlptLevel: 'N5',
    strokeCount: 3,
    examples: [
      { japanese: '下', reading: 'した', meaning: 'below / under' },
      { japanese: '下手', reading: 'へた', meaning: 'unskillful / poor at' },
      { japanese: '地下鉄', reading: 'ちかてつ', meaning: 'subway' }
    ]
  },
  {
    character: '前',
    meaning: ['in front', 'before'],
    onyomi: ['ゼン'],
    kunyomi: ['まえ'],
    jlptLevel: 'N5',
    strokeCount: 9,
    examples: [
      { japanese: '前', reading: 'まえ', meaning: 'front / before' },
      { japanese: '午前', reading: 'ごぜん', meaning: 'morning / A.M.' },
      { japanese: '名前', reading: 'なまえ', meaning: 'name' }
    ]
  },
  {
    character: '後',
    meaning: ['behind', 'after', 'later'],
    onyomi: ['ゴ', 'コウ'],
    kunyomi: ['うし', 'あと', 'おく'],
    jlptLevel: 'N5',
    strokeCount: 9,
    examples: [
      { japanese: '後ろ', reading: 'うしろ', meaning: 'behind' },
      { japanese: '午後', reading: 'ごご', meaning: 'afternoon / P.M.' },
      { japanese: '後で', reading: 'あとで', meaning: 'afterwards / later' }
    ]
  },
  {
    character: '右',
    meaning: ['right'],
    onyomi: ['ウ', 'ユウ'],
    kunyomi: ['みぎ'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '右', reading: 'みぎ', meaning: 'right' },
      { japanese: '右手', reading: 'みぎて', meaning: 'right hand' },
      { japanese: '右側', reading: 'みぎがわ', meaning: 'right side' }
    ]
  },
  {
    character: '左',
    meaning: ['left'],
    onyomi: ['サ'],
    kunyomi: ['ひだり'],
    jlptLevel: 'N5',
    strokeCount: 5,
    examples: [
      { japanese: '左', reading: 'ひだり', meaning: 'left' },
      { japanese: '左手', reading: 'ひだりて', meaning: 'left hand' },
      { japanese: '左側', reading: 'ひだりがわ', meaning: 'left side' }
    ]
  }
];
