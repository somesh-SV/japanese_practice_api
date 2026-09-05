import { ILesson } from '../types/index.js';

export const SEED_LESSONS: ILesson[] = [
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 1,
    "title": "Self Introductions, People & Occupations",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "わたしは マイク・ミラーです。",
        "reading": "わたしは まいく・みらーです。",
        "english": "I'm Mike Miller."
      },
      {
        "japanese": "サントスさんは 学生じゃ ありません。",
        "reading": "さんとすさんは がくせいじゃ ありません。",
        "english": "Mr. Santos isn't a student."
      },
      {
        "japanese": "ミラーさんは 会社員ですか。",
        "reading": "みらーさんは かいしゃいんですか。",
        "english": "Is Mr. Miller a company employee?"
      },
      {
        "japanese": "サントスさんも 会社員です。",
        "reading": "さんとすさんも かいしゃいんです。",
        "english": "Mr. Santos is also a company employee."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "［あなたは］マイク・ミラーさんですか。……はい、［わたしは］マイク・ミラーです。",
        "reading": "［あなたは］まいく・みらーさんですか。……はい、［わたしは］まいく・みらーです。",
        "english": "Are you [Mr.] Mike Miller? ……Yes, I am [Mike Miller]."
      },
      {
        "japanese": "ミラーさんは 学生ですか。……いいえ、学生じゃ ありません。",
        "reading": "みらーさんは がくせいですか。……いいえ、がくせいじゃ ありません。",
        "english": "Are you a student, Mr. Miller? ……No, I'm not [a student]."
      },
      {
        "japanese": "ワンさんは 銀行員ですか。……いいえ、銀行員じゃ ありません。医者です。",
        "reading": "わんさんは ぎんこういんですか。……いいえ、ぎんこういんじゃ ありません。いしゃです。",
        "english": "Is Mr. Wang a bank employee? ……No, he isn't [a bank employee]. He's a doctor."
      },
      {
        "japanese": "あの 方は どなたですか。……ワット先生です。さくら大学の 先生です。",
        "reading": "あの かたは どなたですか。……わっとせんせいです。さくらだいがくの せんせいです。",
        "english": "Who's that [person]? ……That's Professor Watt. He's at Sakura University."
      },
      {
        "japanese": "グプタさんは 会社員ですか。……はい、会社員です。カリナさんも 会社員ですか。……いいえ、学生です。",
        "reading": "ぐぷたさんは かいしゃいんですか。……はい、かいしゃいんです。かりなさんも かいしゃいんですか。……いいえ、がくせいです。",
        "english": "Is Mr. Gupta a company employee? ……Yes, he is [a company employee]. Is Karina a company employee, too? ……No, she's a student."
      },
      {
        "japanese": "テレーザちゃんは 何歳ですか。……9歳です。",
        "reading": "てれーざちゃんは なんさいですか。……きゅうさいです。",
        "english": "How old is Teresa? ……She's nine [years old]."
      }
    ],
    "conversation": {
      "title": "初めまして (How do you do?)",
      "situation": "Mr. Miller is introduced to Ms. Sato at IMC",
      "characters": [
        "佐藤",
        "山田",
        "ミラー"
      ],
      "lines": [
        {
          "speaker": "佐藤",
          "japanese": "おはよう ございます。",
          "reading": "おはよう ございます。",
          "english": "Good morning."
        },
        {
          "speaker": "山田",
          "japanese": "おはよう ございます。佐藤さん、こちらは マイク・ミラーさんです。",
          "reading": "おはよう ございます。さとうさん、こちらは まいく・みらーさんです。",
          "english": "Good morning. Ms. Sato, this is Mike Miller."
        },
        {
          "speaker": "ミラー",
          "japanese": "初めまして。マイク・ミラーです。アメリカから 来ました。どうぞ よろしく。",
          "reading": "はじめまして。まいく・みらーです。あめりかから きました。どうぞ よろしく。",
          "english": "How do you do? I'm Mike Miller. I'm from America. Pleased to meet you."
        },
        {
          "speaker": "佐藤",
          "japanese": "佐藤けい子です。どうぞ よろしく。",
          "reading": "さとうけいこです。どうぞ よろしく。",
          "english": "I'm Keiko Sato. Nice to meet you."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "初めまして。",
        "reading": "はじめまして。",
        "english": "How do you do? (first meeting)"
      },
      {
        "japanese": "～から 来ました。",
        "reading": "～から きました。",
        "english": "I'm from ~ (country)."
      },
      {
        "japanese": "［どうぞ］よろしく［お願いします］。",
        "reading": "［どうぞ］よろしく［おねがいします］。",
        "english": "Pleased to meet you."
      },
      {
        "japanese": "失礼ですが",
        "reading": "しつれいですが",
        "english": "Excuse me, but..."
      },
      {
        "japanese": "お名前は？",
        "reading": "おなまえは？",
        "english": "May I have your name?"
      },
      {
        "japanese": "こちらは ～さんです。",
        "reading": "こちらは ～さんです。",
        "english": "This is Mr./Ms. ~."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. N1 は N2 です",
        "explanation": "Particle は marks N1 as the topic. です is the polite predicate asserting identity.",
        "examples": [
          {
            "japanese": "わたしは マイク・ミラーです。",
            "reading": "わたしは まいく・みらーです。",
            "english": "I'm Mike Miller."
          }
        ]
      },
      {
        "title": "2. N1 は N2 じゃ（では）ありません",
        "explanation": "Negative form of です. じゃ ありません is conversational; では ありません is formal.",
        "examples": [
          {
            "japanese": "サントスさんは 学生じゃ ありません。",
            "reading": "さんとすさんは がくせいじゃ ありません。",
            "english": "Mr. Santos isn't a student."
          }
        ]
      },
      {
        "title": "3. N1 は N2 ですか",
        "explanation": "Question particle か added to the end of a sentence with rising intonation.",
        "examples": [
          {
            "japanese": "ミラーさんは アメリカ人ですか。",
            "reading": "みらーさんは あめりかじんですか。",
            "english": "Is Mr. Miller an American?"
          }
        ]
      },
      {
        "title": "4. N も",
        "explanation": "Replaces は to mean \"also / too\" when stating the same predicate.",
        "examples": [
          {
            "japanese": "グプタさんも 会社員です。",
            "reading": "ぐぷたさんも かいしゃいんです。",
            "english": "Mr. Gupta is also a company employee."
          }
        ]
      },
      {
        "title": "5. N1 の N2",
        "explanation": "Connective particle の shows that N1 modifies N2 (e.g. organization, company, or possession).",
        "examples": [
          {
            "japanese": "ミラーさんは IMCの 社員です。",
            "reading": "みらーさんは IMCの しゃいんです。",
            "english": "Mr. Miller is an IMC employee."
          }
        ]
      },
      {
        "title": "6. ～さん",
        "explanation": "Polite honorific title added to others’ names. Never attach to your own name.",
        "examples": [
          {
            "japanese": "あの方は ミラーさんです。",
            "reading": "あのかたは みらーさんです。",
            "english": "That's Mr. Miller."
          }
        ]
      }
    ],
    "usefulInfoTitle": "国・人・ことば (Countries, People and Languages)",
    "usefulInfo": [
      {
        "japanese": "アメリカ",
        "reading": "あめりか",
        "english": "U.S.A.",
        "category": "Country"
      },
      {
        "japanese": "アメリカ人",
        "reading": "あめりかじん",
        "english": "American",
        "category": "People"
      },
      {
        "japanese": "英語",
        "reading": "えいご",
        "english": "English language",
        "category": "Language"
      },
      {
        "japanese": "イギリス",
        "reading": "いぎりす",
        "english": "U.K.",
        "category": "Country"
      },
      {
        "japanese": "イタリア",
        "reading": "いたりあ",
        "english": "Italy",
        "category": "Country"
      },
      {
        "japanese": "インド",
        "reading": "いんど",
        "english": "India",
        "category": "Country"
      },
      {
        "japanese": "インドネシア",
        "reading": "いんどねしあ",
        "english": "Indonesia",
        "category": "Country"
      },
      {
        "japanese": "韓国",
        "reading": "かんこく",
        "english": "South Korea",
        "category": "Country"
      },
      {
        "japanese": "タイ",
        "reading": "たい",
        "english": "Thailand",
        "category": "Country"
      },
      {
        "japanese": "中国",
        "reading": "ちゅうごく",
        "english": "China",
        "category": "Country"
      },
      {
        "japanese": "ドイツ",
        "reading": "どいつ",
        "english": "Germany",
        "category": "Country"
      },
      {
        "japanese": "日本",
        "reading": "にほん",
        "english": "Japan",
        "category": "Country"
      },
      {
        "japanese": "フランス",
        "reading": "ふらんす",
        "english": "France",
        "category": "Country"
      },
      {
        "japanese": "ブラジル",
        "reading": "ぶらじる",
        "english": "Brazil",
        "category": "Country"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 2,
    "title": "Everyday Objects & Demonstratives (これ/それ/あれ)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "これは 辞書です。",
        "reading": "これは じしょです。",
        "english": "This is a dictionary."
      },
      {
        "japanese": "それは わたしの 傘です。",
        "reading": "それは わたしの かさです。",
        "english": "That's my umbrella."
      },
      {
        "japanese": "この 本は わたしのです。",
        "reading": "この ほんは わたしのです。",
        "english": "This book is mine."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "これは ボールペンですか。……はい、そうです。",
        "reading": "これは ぼーるぺんですか。……はい、そうです。",
        "english": "Is this a ballpoint pen? ……Yes, it is."
      },
      {
        "japanese": "それは 手帳ですか。……いいえ、違います。ノートです。",
        "reading": "それは てちょうですか。……いいえ、ちがいます。のーとです。",
        "english": "Is that a notebook? ……No, it's a personal organiser."
      },
      {
        "japanese": "それは 何ですか。……名刺です。",
        "reading": "それは なんですか。……めいしです。",
        "english": "What's that? ……It's a business card."
      },
      {
        "japanese": "これは 「9」ですか、「7」ですか。……「9」です。",
        "reading": "これは 「きゅう」ですか、「なな」ですか。……「きゅう」です。",
        "english": "Is this a 9, or a 7? ……It's a 9."
      },
      {
        "japanese": "それは 何の 雑誌ですか。……自動車の 雑誌です。",
        "reading": "それは なんの ざっしですか。……じどうしゃの ざっしです。",
        "english": "What kind of magazine is that? ……It's a car magazine."
      },
      {
        "japanese": "あれは だれの かばんですか。……佐藤さんのです。",
        "reading": "あれは だれの かばんですか。……さとうさんのです。",
        "english": "Whose bag is that? ……It's Ms. Sato's [bag]."
      },
      {
        "japanese": "この 傘は あなたのですか。……いいえ、わたしのじゃ ありません。",
        "reading": "この かさは あなたのですか。……いいえ、わたしのじゃ ありません。",
        "english": "Is this yours, Mr. Miller? ……No, it's not [mine]."
      },
      {
        "japanese": "この 鍵は だれのですか。……わたしのです。",
        "reading": "この かぎは だれのですか。……わたしのです。",
        "english": "Whose is this key? ……It's mine."
      }
    ],
    "conversation": {
      "title": "これから お世話に なります (Thank you in advance for your kindness)",
      "situation": "Santos visits Ichiro Yamada after moving into the apartment",
      "characters": [
        "山田一郎",
        "サントス"
      ],
      "lines": [
        {
          "speaker": "山田一郎",
          "japanese": "はい。どなたですか。",
          "reading": "はい。どなたですか。",
          "english": "Yes, who is it?"
        },
        {
          "speaker": "サントス",
          "japanese": "408の サントスです。",
          "reading": "よんまるはちの さんとすです。",
          "english": "It's Jose Santos, from 408."
        },
        {
          "speaker": "サントス",
          "japanese": "こんにちは、サントスです。これから お世話に なります。どうぞ よろしく お願いします。",
          "reading": "こんにちは、さんとすです。これから おせわに なります。どうぞ よろしく おねがいします。",
          "english": "Hello, I'm Jose Santos. I've just moved in here. Nice to meet you."
        },
        {
          "speaker": "山田一郎",
          "japanese": "こちらこそ よろしく。",
          "reading": "こちらこそ よろしく。",
          "english": "Pleased to meet you, too."
        },
        {
          "speaker": "サントス",
          "japanese": "あのう、これ、コーヒーです。どうぞ。",
          "reading": "あのう、これ、こーひーです。どうぞ。",
          "english": "Here's some coffee for you. Please take it."
        },
        {
          "speaker": "山田一郎",
          "japanese": "どうも ありがとう ございます。",
          "reading": "どうも ありがとう ございます。",
          "english": "Thank you very much."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "あのう",
        "reading": "あのう",
        "english": "Er... (showing hesitation)"
      },
      {
        "japanese": "えっ",
        "reading": "えっ",
        "english": "Oh? What! (surprise)"
      },
      {
        "japanese": "どうぞ。",
        "reading": "どうぞ。",
        "english": "Here you are."
      },
      {
        "japanese": "［どうも］ありがとう［ございます］。",
        "reading": "［どうも］ありがとう［ございます］。",
        "english": "Thank you [very much]."
      },
      {
        "japanese": "そうですか。",
        "reading": "そうですか。",
        "english": "I see."
      },
      {
        "japanese": "違います。",
        "reading": "ちがいます。",
        "english": "No, it isn't. / You are wrong."
      },
      {
        "japanese": "あ",
        "reading": "あ",
        "english": "Oh! (becoming aware of something)"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. これ／それ／あれ",
        "explanation": "Demonstrative pronouns pointing to things based on distance to speaker & listener.",
        "examples": [
          {
            "japanese": "それは 辞書ですか。",
            "reading": "それは じしょですか。",
            "english": "Is that a dictionary?"
          }
        ]
      },
      {
        "title": "2. この N ／その N ／あの N",
        "explanation": "Demonstratives modifying following nouns directly.",
        "examples": [
          {
            "japanese": "この 本は わたしのです。",
            "reading": "この ほんは わたしのです。",
            "english": "This book is mine."
          }
        ]
      },
      {
        "title": "3. そうです／違います",
        "explanation": "Affirmative response with noun sentence uses そうです; negative uses 違います.",
        "examples": [
          {
            "japanese": "はい、そうです。",
            "reading": "はい、そうです。",
            "english": "Yes, it is."
          }
        ]
      },
      {
        "title": "4. ～か、～か",
        "explanation": "Alternative question between two or more options.",
        "examples": [
          {
            "japanese": "これは「9」ですか、「7」ですか。",
            "reading": "これは「きゅう」ですか、「なな」ですか。",
            "english": "Is this a 9 or a 7?"
          }
        ]
      },
      {
        "title": "5. の substituting for a noun",
        "explanation": "Noun omission using の when context is obvious (e.g. 佐藤さんのです).",
        "examples": [
          {
            "japanese": "あれは 佐藤さんのです。",
            "reading": "あれは さとうさんのです。",
            "english": "That's Ms. Sato's."
          }
        ]
      }
    ],
    "usefulInfoTitle": "名前 (Common Family Names)",
    "usefulInfo": [
      {
        "japanese": "佐藤",
        "reading": "さとう",
        "english": "Sato",
        "category": "Surname"
      },
      {
        "japanese": "鈴木",
        "reading": "すずき",
        "english": "Suzuki",
        "category": "Surname"
      },
      {
        "japanese": "高橋",
        "reading": "たかはし",
        "english": "Takahashi",
        "category": "Surname"
      },
      {
        "japanese": "田中",
        "reading": "たなか",
        "english": "Tanaka",
        "category": "Surname"
      },
      {
        "japanese": "渡辺",
        "reading": "わたなべ",
        "english": "Watanabe",
        "category": "Surname"
      },
      {
        "japanese": "伊藤",
        "reading": "いとう",
        "english": "Ito",
        "category": "Surname"
      },
      {
        "japanese": "山本",
        "reading": "やまもと",
        "english": "Yamamoto",
        "category": "Surname"
      },
      {
        "japanese": "中村",
        "reading": "なかむら",
        "english": "Nakamura",
        "category": "Surname"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 3,
    "title": "Places, Locations & Directions (ここ/そこ/あそこ)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "ここは 食堂です。",
        "reading": "ここは しょくどうです。",
        "english": "This is the cafeteria."
      },
      {
        "japanese": "エレベーターは あそこです。",
        "reading": "えれべーたーは あそこです。",
        "english": "The elevator's over there."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "ここは 新大阪ですか。……はい、そうです。",
        "reading": "ここは しんおおさかですか。……はい、そうです。",
        "english": "Is this Shin-Osaka? ……Yes, it is."
      },
      {
        "japanese": "お手洗いは どこですか。……あそこです。",
        "reading": "おてあらいは どこですか。……あそこです。",
        "english": "Where's the toilet? ……It's over there."
      },
      {
        "japanese": "山田さんは どこですか。……会議室です。",
        "reading": "やまださんは どこですか。……かいぎしつです。",
        "english": "Where's Mr. Yamada? ……He's in the meeting room."
      },
      {
        "japanese": "事務所は どちらですか。……あちらです。",
        "reading": "じむしょは どちらですか。……あちらです。",
        "english": "Where's the office? ……It's over there."
      },
      {
        "japanese": "お国は どちらですか。……アメリカです。",
        "reading": "おくには どちらですか。……あめりかです。",
        "english": "Which country are you from? ……America."
      },
      {
        "japanese": "それは どこの 靴ですか。……イタリアの 靴です。",
        "reading": "それは どこの くつですか。……いたりあの くつです。",
        "english": "Where are those shoes from? ……They're Italian [shoes]."
      },
      {
        "japanese": "この 時計は いくらですか。……18,600円です。",
        "reading": "この とけいは いくらですか。……いちはっせんろっぴゃくえんです。",
        "english": "How much is this watch? ……It's 18,600 yen."
      }
    ],
    "conversation": {
      "title": "これ ください (I’ll take it, please)",
      "situation": "Maria shops for wine at a department store",
      "characters": [
        "店員A",
        "店員B",
        "マリア"
      ],
      "lines": [
        {
          "speaker": "店員A",
          "japanese": "いらっしゃいませ。",
          "reading": "いらっしゃいませ。",
          "english": "Good afternoon. (lit: Welcome.)"
        },
        {
          "speaker": "マリア",
          "japanese": "すみません。ワイン売り場は どこですか。",
          "reading": "すみません。わいんうりばは どこですか。",
          "english": "[Excuse me.] Where's the wine department?"
        },
        {
          "speaker": "店員A",
          "japanese": "地下1階で ございます。",
          "reading": "ちかいっかいで ございます。",
          "english": "It's on Basement Level 1."
        },
        {
          "speaker": "マリア",
          "japanese": "どうも。",
          "reading": "どうも。",
          "english": "Thanks."
        },
        {
          "speaker": "マリア",
          "japanese": "すみません。その ワインを 見せて ください。",
          "reading": "すみません。その わいんを みせて ください。",
          "english": "Excuse me. Could you show me that bottle of wine, please?"
        },
        {
          "speaker": "店員B",
          "japanese": "はい、どうぞ。",
          "reading": "はい、どうぞ。",
          "english": "Yes, here you are."
        },
        {
          "speaker": "マリア",
          "japanese": "これは どこの ワインですか。",
          "reading": "これは どこの わいんですか。",
          "english": "Where's this wine from?"
        },
        {
          "speaker": "店員B",
          "japanese": "日本の ワインです。",
          "reading": "にほんの わいんです。",
          "english": "It's from Japan."
        },
        {
          "speaker": "マリア",
          "japanese": "いくらですか。",
          "reading": "いくらですか。",
          "english": "How much is it?"
        },
        {
          "speaker": "店員B",
          "japanese": "2,500円です。",
          "reading": "にせんごひゃくえんです。",
          "english": "It's 2,500 yen."
        },
        {
          "speaker": "マリア",
          "japanese": "じゃ、これを ください。",
          "reading": "じゃ、これを ください。",
          "english": "OK, I'll take it, please."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "すみません。",
        "reading": "すみません。",
        "english": "Excuse me."
      },
      {
        "japanese": "どうも。",
        "reading": "どうも。",
        "english": "Thanks."
      },
      {
        "japanese": "［～を］見せて ください。",
        "reading": "［～を］みせて ください。",
        "english": "Please show me [~]."
      },
      {
        "japanese": "じゃ",
        "reading": "じゃ",
        "english": "well, then, in that case"
      },
      {
        "japanese": "［～を］ください。",
        "reading": "［～を］ください。",
        "english": "Give me [~], please."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. ここ／そこ／あそこ／こちら／そちら／あちら",
        "explanation": "Demonstratives for place and direction. こちら/そちら/あちら are polite forms.",
        "examples": [
          {
            "japanese": "お手洗いは あそこです。",
            "reading": "おてあらいは あそこです。",
            "english": "The toilet is over there."
          }
        ]
      },
      {
        "title": "2. N は place です",
        "explanation": "States where a place, item, or person is.",
        "examples": [
          {
            "japanese": "電話は 2階です。",
            "reading": "でんわは にかいです。",
            "english": "The telephone is on the second floor."
          }
        ]
      },
      {
        "title": "3. どこ／どちら",
        "explanation": "どこ asks \"where\", どちら is polite or asks \"which direction\" or organizational belonging.",
        "examples": [
          {
            "japanese": "お国は どちらですか。",
            "reading": "おくには どちらですか。",
            "english": "What country are you from?"
          }
        ]
      }
    ],
    "usefulInfoTitle": "デパート (Department Store)",
    "usefulInfo": [
      {
        "japanese": "屋上",
        "reading": "おくじょう",
        "english": "amusement area / roof",
        "category": "Floor"
      },
      {
        "japanese": "レストラン",
        "reading": "れすとらん",
        "english": "restaurants",
        "category": "Floor"
      },
      {
        "japanese": "催し物会場",
        "reading": "もよおしものかいじょう",
        "english": "event hall",
        "category": "Floor"
      },
      {
        "japanese": "時計・眼鏡",
        "reading": "とけい・めがね",
        "english": "watches, spectacles",
        "category": "Goods"
      },
      {
        "japanese": "スポーツ用品",
        "reading": "すぽーつようひん",
        "english": "sporting goods",
        "category": "Goods"
      },
      {
        "japanese": "旅行用品",
        "reading": "りょこうようひん",
        "english": "leisure goods",
        "category": "Goods"
      },
      {
        "japanese": "子ども服",
        "reading": "こどもふく",
        "english": "children's clothes",
        "category": "Goods"
      },
      {
        "japanese": "家具・食器",
        "reading": "かぐ・しょっき",
        "english": "furniture, kitchenware",
        "category": "Goods"
      },
      {
        "japanese": "食品",
        "reading": "しょくひん",
        "english": "food",
        "category": "Goods"
      },
      {
        "japanese": "駐車場",
        "reading": "ちゅうしゃじょう",
        "english": "car park",
        "category": "Facility"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 4,
    "title": "Time, Days of Week, Daily Routine Verbs",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "今 4時5分です。",
        "reading": "いま よじごふんです。",
        "english": "It's five past four now."
      },
      {
        "japanese": "わたしは 毎朝 6時に 起きます。",
        "reading": "わたしは まいあさ ろくじに おきます。",
        "english": "I get up at six [o'clock] every morning."
      },
      {
        "japanese": "わたしは きのう 勉強しました。",
        "reading": "わたしは きのう べんきょうしました。",
        "english": "I studied yesterday."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "今 何時ですか。……2時10分です。",
        "reading": "いま なんじですか。……にじじゅっぷんです。",
        "english": "What time is it now? ……It's ten past two."
      },
      {
        "japanese": "ニューヨークは 今 何時ですか。……午前 0時10分です。",
        "reading": "にゅーよーくは いま なんじですか。……ごぜん れいじじゅっぷんです。",
        "english": "What's the time in New York now? ……It's ten past midnight."
      },
      {
        "japanese": "休みは 何曜日ですか。……土曜日と 日曜日です。",
        "reading": "やすみは なんようびですか。……どようびと にちようびです。",
        "english": "What days are you off work? ……Saturdays and Sundays."
      },
      {
        "japanese": "アップル銀行は 何時から 何時までですか。……9時から 3時までです。",
        "reading": "あっぷるぎんこうは なんじから なんじまでですか。……くじから さんじまでです。",
        "english": "What are Apple Bank's opening hours? ……From nine till three."
      },
      {
        "japanese": "毎晩 何時に 寝ますか。……11時に 寝ます。",
        "reading": "まいばん なんじに ねますか。……じゅういちじに ねます。",
        "english": "What time do you usually go to bed? ……[I go to bed at] eleven o’clock."
      },
      {
        "japanese": "毎日 何時から 何時まで 勉強しますか。……朝 9時から 午後 3時まで 勉強します。",
        "reading": "まいにち なんじから なんじまで べんきょうしますか。……あさ くじから ごご さんじまで べんきょうします。",
        "english": "When do you start and finish studying every day? ……I study from nine am until three pm."
      },
      {
        "japanese": "土曜日 働きますか。……いいえ、働きません。",
        "reading": "どようび はたらきますか。……いいえ、はたらきません。",
        "english": "Do you work on Saturdays? ……No, I don't."
      },
      {
        "japanese": "きのう 勉強しましたか。……いいえ、勉強しませんでした。",
        "reading": "きのう べんきょうしましたか。……いいえ、べんきょうしませんでした。",
        "english": "Did you study yesterday? ……No, I didn't."
      }
    ],
    "conversation": {
      "title": "何時まで ですか (What time are you open to?)",
      "situation": "Miller calls Asuka restaurant to ask their hours",
      "characters": [
        "ミラー",
        "佐藤",
        "あすかの人"
      ],
      "lines": [
        {
          "speaker": "ミラー",
          "japanese": "すみません。あすかの 電話番号は 何番ですか。",
          "reading": "すみません。あすかの でんわばんごうは なんばんですか。",
          "english": "Excuse me, what is Asuka's phone number?"
        },
        {
          "speaker": "佐藤",
          "japanese": "あすかですか。5275の 2725です。",
          "reading": "あすかですか。ごーにーななごーの にーななにーごーです。",
          "english": "Asuka? It's 5275-2725."
        },
        {
          "speaker": "ミラー",
          "japanese": "どうも ありがとう ございます。",
          "reading": "どうも ありがとう ございます。",
          "english": "Thank you very much."
        },
        {
          "speaker": "あすかの人",
          "japanese": "はい、あすかで ございます。",
          "reading": "はい、あすかで ございます。",
          "english": "Hello, Asuka here."
        },
        {
          "speaker": "ミラー",
          "japanese": "すみません。そちらは 何時までですか。",
          "reading": "すみません。そちらは なんじまでですか。",
          "english": "Excuse me. What time are you open to?"
        },
        {
          "speaker": "あすかの人",
          "japanese": "10時までです。",
          "reading": "じゅうじまでです。",
          "english": "Until ten."
        },
        {
          "speaker": "ミラー",
          "japanese": "休みは 何曜日ですか。",
          "reading": "やすみは なんようびですか。",
          "english": "What days of the week are you closed?"
        },
        {
          "speaker": "あすかの人",
          "japanese": "日曜日です。",
          "reading": "にちようびです。",
          "english": "Sundays."
        },
        {
          "speaker": "ミラー",
          "japanese": "そうですか。どうも。",
          "reading": "そうですか。どうも。",
          "english": "I see. Thank you."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "大変ですね。",
        "reading": "たいへんですね。",
        "english": "That's tough, isn't it? (expressing sympathy)"
      },
      {
        "japanese": "番号",
        "reading": "ばんごう",
        "english": "number"
      },
      {
        "japanese": "何番",
        "reading": "なんばん",
        "english": "what number"
      },
      {
        "japanese": "そちら",
        "reading": "そちら",
        "english": "your place"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. 今 －時 －分 です",
        "explanation": "Counter suffixes 時 (o’clock) and 分 (minutes) attached to numbers.",
        "examples": [
          {
            "japanese": "今 7時10分です。",
            "reading": "いま しちじじゅっぷんです。",
            "english": "It's 7:10."
          }
        ]
      },
      {
        "title": "2. Vます／Vません／Vました／Vませんでした",
        "explanation": "Polite verb inflection in present/future and past tense.",
        "examples": [
          {
            "japanese": "毎朝 6時に 起きます。",
            "reading": "まいあさ ろくじに おきます。",
            "english": "I get up at six every morning."
          }
        ]
      },
      {
        "title": "3. N（time）に V",
        "explanation": "Particle に appended to a specific time noun to indicate when action happens.",
        "examples": [
          {
            "japanese": "6時半に 起きます。",
            "reading": "ろくじはんに おきます。",
            "english": "I get up at six-thirty."
          }
        ]
      },
      {
        "title": "4. N1から N2まで",
        "explanation": "から indicates start point and まで indicates finish point.",
        "examples": [
          {
            "japanese": "9時から 5時まで 勉強します。",
            "reading": "くじから ごじまで べんきょうします。",
            "english": "I study from 9 to 5."
          }
        ]
      }
    ],
    "usefulInfoTitle": "電話・手紙 (Telephone and Letters)",
    "usefulInfo": [
      {
        "japanese": "警察署 (110)",
        "reading": "けいさつしょ",
        "english": "police (110)",
        "category": "Emergency"
      },
      {
        "japanese": "消防署 (119)",
        "reading": "しょうぼうしょ",
        "english": "fire/ambulance (119)",
        "category": "Emergency"
      },
      {
        "japanese": "時報 (117)",
        "reading": "じほう",
        "english": "time service (117)",
        "category": "Info"
      },
      {
        "japanese": "天気予報 (177)",
        "reading": "てんきよほう",
        "english": "weather forecast (177)",
        "category": "Info"
      },
      {
        "japanese": "電話番号案内 (104)",
        "reading": "でんわばんごうあんない",
        "english": "directory inquiries (104)",
        "category": "Info"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 5,
    "title": "Going, Coming, Returning & Transportation",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "わたしは 京都へ 行きます。",
        "reading": "わたしは きょうとへ いきます。",
        "english": "I [am going to] go to Kyoto."
      },
      {
        "japanese": "わたしは タクシーで 帰ります。",
        "reading": "わたしは たくしーで かえります。",
        "english": "I [am going to] go home by taxi."
      },
      {
        "japanese": "わたしは 家族と 日本へ 来ました。",
        "reading": "わたしは かぞくと にほんへ きました。",
        "english": "I came to Japan with my family."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "あした どこへ 行きますか。……奈良へ 行きます。",
        "reading": "あした どこへ いきますか。……ならへ いきます。",
        "english": "Where are you going tomorrow? ……[I'm going] to Nara."
      },
      {
        "japanese": "日曜日 どこへ 行きましたか。……どこ［へ］も 行きませんでした。",
        "reading": "にちようび どこへ いきましたか。……どこ［へ］も いきませんでした。",
        "english": "Where did you go on Sunday? ……I didn't go anywhere."
      },
      {
        "japanese": "何で 東京へ 行きますか。……新幹線で 行きます。",
        "reading": "なんで とうきょうへ いきますか。……しんかんせんで いきます。",
        "english": "How are you getting to Tokyo? ……[I'm going] on the bullet train."
      },
      {
        "japanese": "だれと 東京へ 行きますか。……山田さんと 行きます。",
        "reading": "だれと とうきょうへ いきますか。……やまださんと いきます。",
        "english": "Who are you going to Tokyo with? ……[I'm going with] Mr. Yamada."
      },
      {
        "japanese": "いつ 日本へ 来ましたか。……3月25日に 来ました。",
        "reading": "いつ にほんへ きましたか。……さんがつにじゅうごにちに きました。",
        "english": "When did you arrive in Japan? ……[I arrived] on the twenty-fifth of March."
      },
      {
        "japanese": "誕生日は いつですか。……6月13日です。",
        "reading": "たんじょうびは いつですか。……ろくがつじゅうさんにちです。",
        "english": "When's your birthday? ……[It's on] the thirteenth of June."
      }
    ],
    "conversation": {
      "title": "甲子園へ 行きますか (Does this train go to Koshien?)",
      "situation": "Santos inquires about train fare and platform to Koshien",
      "characters": [
        "サントス",
        "女性",
        "駅員",
        "男性"
      ],
      "lines": [
        {
          "speaker": "サントス",
          "japanese": "すみません。甲子園まで いくらですか。",
          "reading": "すみません。こうしえんまで いくらですか。",
          "english": "Excuse me. How much is it to Koshien?"
        },
        {
          "speaker": "女性",
          "japanese": "350円です。",
          "reading": "さんびゃくごじゅうえんです。",
          "english": "It's 350 yen."
        },
        {
          "speaker": "サントス",
          "japanese": "350円ですね。ありがとう ございました。",
          "reading": "さんびゃくごじゅうえんですね。ありがとう ございました。",
          "english": "350 yen? Thank you."
        },
        {
          "speaker": "女性",
          "japanese": "どう いたしまして。",
          "reading": "どう いたしまして。",
          "english": "You're welcome."
        },
        {
          "speaker": "サントス",
          "japanese": "すみません。甲子園は 何番線ですか。",
          "reading": "すみません。こうしえんは なんばんせんですか。",
          "english": "Excuse me, which platform for Koshien, please?"
        },
        {
          "speaker": "駅員",
          "japanese": "5番線です。",
          "reading": "ごばんせんです。",
          "english": "Number 5."
        },
        {
          "speaker": "サントス",
          "japanese": "どうも。",
          "reading": "どうも。",
          "english": "Thanks."
        },
        {
          "speaker": "サントス",
          "japanese": "あのう、この 電車は 甲子園へ 行きますか。",
          "reading": "あのう、この でんしゃは こうしえんへ いきますか。",
          "english": "Excuse me, does this train go to Koshien?"
        },
        {
          "speaker": "男性",
          "japanese": "いいえ、行きません。次の「普通」ですよ。",
          "reading": "いいえ、いきません。つぎの「ふつう」ですよ。",
          "english": "No, the next local train does."
        },
        {
          "speaker": "サントス",
          "japanese": "そうですか。どうも。",
          "reading": "そうですか。どうも。",
          "english": "Oh, I see. Thanks."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "そうですね。",
        "reading": "そうですね。",
        "english": "Yes, it is."
      },
      {
        "japanese": "［どうも］ありがとう ございました。",
        "reading": "［どうも］ありがとう ございました。",
        "english": "Thank you very much."
      },
      {
        "japanese": "どう いたしまして。",
        "reading": "どう いたしまして。",
        "english": "You're welcome./Don't mention it."
      },
      {
        "japanese": "－番線",
        "reading": "－ばんせん",
        "english": "platform －"
      },
      {
        "japanese": "次の",
        "reading": "つぎの",
        "english": "next"
      },
      {
        "japanese": "普通",
        "reading": "ふつう",
        "english": "local (train)"
      },
      {
        "japanese": "急行",
        "reading": "きゅうこう",
        "english": "rapid"
      },
      {
        "japanese": "特急",
        "reading": "とっきゅう",
        "english": "express"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. N（place）へ 行きます／来ます／帰ります",
        "explanation": "Particle へ indicates direction of movement.",
        "examples": [
          {
            "japanese": "京都へ 行きます。",
            "reading": "きょうとへ いきます。",
            "english": "I'm going to Kyoto."
          }
        ]
      },
      {
        "title": "2. どこ［へ］も 行きません",
        "explanation": "Interrogative + も + negative verb to deny everything.",
        "examples": [
          {
            "japanese": "どこへも 行きません。",
            "reading": "どこへも いきません。",
            "english": "I'm not going anywhere."
          }
        ]
      },
      {
        "title": "3. N（vehicle）で 行きます",
        "explanation": "Particle で indicates means of transport (except あるいて on foot).",
        "examples": [
          {
            "japanese": "電車で 行きます。",
            "reading": "でんしゃで いきます。",
            "english": "I'm going by train."
          }
        ]
      },
      {
        "title": "4. N（person）と V",
        "explanation": "Particle と marks the person done with (or ひとりで for alone).",
        "examples": [
          {
            "japanese": "家族と 日本へ 来ました。",
            "reading": "かぞくと にほんへ きました。",
            "english": "I came to Japan with my family."
          }
        ]
      }
    ],
    "usefulInfoTitle": "祝祭日 (National Holidays)",
    "usefulInfo": [
      {
        "japanese": "元日",
        "reading": "がんじつ",
        "english": "New Year's Day (Jan 1)",
        "category": "Holiday"
      },
      {
        "japanese": "成人の日",
        "reading": "せいじんのひ",
        "english": "Coming-of-Age Day (Jan 2nd Mon)",
        "category": "Holiday"
      },
      {
        "japanese": "建国記念の日",
        "reading": "けんこくきねんのひ",
        "english": "National Foundation Day (Feb 11)",
        "category": "Holiday"
      },
      {
        "japanese": "憲法記念日",
        "reading": "けんぽうきねんび",
        "english": "Constitution Memorial Day (May 3)",
        "category": "Holiday"
      },
      {
        "japanese": "みどりの日",
        "reading": "みどりのひ",
        "english": "Greenery Day (May 4)",
        "category": "Holiday"
      },
      {
        "japanese": "こどもの日",
        "reading": "こどものひ",
        "english": "Children's Day (May 5)",
        "category": "Holiday"
      },
      {
        "japanese": "海の日",
        "reading": "うみのひ",
        "english": "Marine Day (Jul 3rd Mon)",
        "category": "Holiday"
      },
      {
        "japanese": "山の日",
        "reading": "やまのひ",
        "english": "Mountain Day (Aug 11)",
        "category": "Holiday"
      },
      {
        "japanese": "文化の日",
        "reading": "ぶんかのひ",
        "english": "Culture Day (Nov 3)",
        "category": "Holiday"
      },
      {
        "japanese": "勤労感謝の日",
        "reading": "きんろうかんしゃのひ",
        "english": "Labour Thanksgiving Day (Nov 23)",
        "category": "Holiday"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 6,
    "title": "Daily Actions, Food, Drink & Places of Action",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "わたしは 本を 読みます。",
        "reading": "わたしは ほんを よみます。",
        "english": "I [am going to] read a book."
      },
      {
        "japanese": "わたしは 駅で 新聞を 買います。",
        "reading": "わたしは えきで しんぶんを かいます。",
        "english": "I [am going to] buy a newspaper at the station."
      },
      {
        "japanese": "いっしょに 神戸へ 行きませんか。",
        "reading": "いっしょに こうべへ いきませんか。",
        "english": "Shall we go to Kobe together?"
      },
      {
        "japanese": "ちょっと 休 みましょう。",
        "reading": "ちょっと やすみましょう。",
        "english": "Let's take a bit of a break."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "お酒を 飲みますか。……いいえ、飲みません。",
        "reading": "おさけを のみますか。……いいえ、のみません。",
        "english": "Do you drink alcohol? ……No, I don't."
      },
      {
        "japanese": "毎朝 何を 食べますか。……パンと 卵を 食べます。",
        "reading": "まいあさ なにを たべますか。……ぱんと たまごを たべます。",
        "english": "What do you usually have to eat in the morning? ……I have bread and eggs."
      },
      {
        "japanese": "けさ 何を 食べましたか。……何も 食べませんでした。",
        "reading": "けさ なにを たべましたか。……なにも たべませんでした。",
        "english": "What did you have to eat this morning? ……I didn't have anything."
      },
      {
        "japanese": "土曜日 何を しましたか。……日本語を 勉強しました。それから 友達と 映画を 見ました。",
        "reading": "どようび なにを しましたか。……にほんごを べんきょうしました。それから ともだちと えいがを みました。",
        "english": "What did you do on Saturday? ……I studied Japanese, then I watched a film with some friends."
      },
      {
        "japanese": "どこで その かばんを 買いましたか。……メキシコで 買いました。",
        "reading": "どこで その かばんを かいましたか。……めきしこで かいました。",
        "english": "Where did you buy that bag? ……[I bought it] in Mexico."
      },
      {
        "japanese": "あした テニスを しませんか。……ええ、いいですね。",
        "reading": "あした てにすを しませんか。……ええ、いいですね。",
        "english": "Shall we play tennis tomorrow? ……Yes, that would be great."
      },
      {
        "japanese": "あした 10時に 駅で 会いましょう。……わかりました。",
        "reading": "あした じゅうじに えきで あいましょう。……わかりました。",
        "english": "Let's meet at the station tomorrow at ten o’clock. ……OK."
      }
    ],
    "conversation": {
      "title": "いっしょに 行きませんか (Shall we go together?)",
      "situation": "Ms. Sato invites Mr. Miller to go cherry-blossom viewing at Osaka Castle",
      "characters": [
        "佐藤",
        "ミラー"
      ],
      "lines": [
        {
          "speaker": "佐藤",
          "japanese": "ミラーさん！",
          "reading": "みらーさん！",
          "english": "Mr. Miller!"
        },
        {
          "speaker": "ミラー",
          "japanese": "何ですか。",
          "reading": "なんですか。",
          "english": "Yes?"
        },
        {
          "speaker": "佐藤",
          "japanese": "あした 友達と お花見を します。ミラーさんも いっしょに 行きませんか。",
          "reading": "あした ともだちと おはなみを します。みらーさんも いっしょに いきませんか。",
          "english": "I'm going to see the cherry blossoms tomorrow with some friends. Would you like to come with us, Mr. Miller?"
        },
        {
          "speaker": "ミラー",
          "japanese": "いいですね。どこへ 行きますか。",
          "reading": "いいですね。どこへ いきますか。",
          "english": "That sounds good. Where are you going?"
        },
        {
          "speaker": "佐藤",
          "japanese": "大阪城です。",
          "reading": "おおさかじょうです。",
          "english": "Osaka Castle."
        },
        {
          "speaker": "ミラー",
          "japanese": "何時に 行きますか。",
          "reading": "なんじに いきますか。",
          "english": "What time shall we go?"
        },
        {
          "speaker": "佐藤",
          "japanese": "10時に 大阪駅で 会いましょう。",
          "reading": "じゅうじに おおさかえきで あいましょう。",
          "english": "Let's meet at Osaka Station at ten o’clock."
        },
        {
          "speaker": "ミラー",
          "japanese": "じゃ、また あした。",
          "reading": "じゃ、また あした。",
          "english": "See you tomorrow, then."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "ええ",
        "reading": "ええ",
        "english": "yes"
      },
      {
        "japanese": "いいですね。",
        "reading": "いいですね。",
        "english": "That's good."
      },
      {
        "japanese": "わかりました。",
        "reading": "わかりました。",
        "english": "I see."
      },
      {
        "japanese": "何ですか。",
        "reading": "なんですか。",
        "english": "Yes? (What is it?)"
      },
      {
        "japanese": "じゃ、また［あした］。",
        "reading": "じゃ、また［あした］。",
        "english": "See you [tomorrow]."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. N を V（transitive）",
        "explanation": "The particle を indicates the direct object of a transitive verb.",
        "examples": [
          {
            "japanese": "ジュースを 飲みます。",
            "reading": "じゅーすを のみます。",
            "english": "I drink juice."
          }
        ]
      },
      {
        "title": "2. N を します",
        "explanation": "Used for sports, events, homework, and work (サッカーをします、パーティーをします).",
        "examples": [
          {
            "japanese": "サッカーを します。",
            "reading": "さっかーを します。",
            "english": "Play soccer."
          }
        ]
      },
      {
        "title": "3. N（place）で V",
        "explanation": "Particle で indicates the place where an action occurs.",
        "examples": [
          {
            "japanese": "駅で 新聞を 買います。",
            "reading": "えきで しんぶんを かいます。",
            "english": "I'm going to buy a paper at the station."
          }
        ]
      },
      {
        "title": "4. V ませんか / V ましょう",
        "explanation": "Vませんか invites the listener politely (\"Won't you?\"). Vましょう positively invites or agrees (\"Let's\").",
        "examples": [
          {
            "japanese": "いっしょに 行きませんか。……ええ、行きましょう。",
            "reading": "いっしょに いきませんか。……ええ、いきましょう。",
            "english": "Shall we go together? ……Yes, let's go."
          }
        ]
      }
    ],
    "usefulInfoTitle": "食べ物 (Food: Vegetables, Fruit, Meat & Fish)",
    "usefulInfo": [
      {
        "japanese": "きゅうり",
        "reading": "きゅうり",
        "english": "cucumber",
        "category": "Vegetable"
      },
      {
        "japanese": "トマト",
        "reading": "とまと",
        "english": "tomato",
        "category": "Vegetable"
      },
      {
        "japanese": "なす",
        "reading": "なす",
        "english": "eggplant",
        "category": "Vegetable"
      },
      {
        "japanese": "キャベツ",
        "reading": "きゃべつ",
        "english": "cabbage",
        "category": "Vegetable"
      },
      {
        "japanese": "いちご",
        "reading": "いちご",
        "english": "strawberry",
        "category": "Fruit"
      },
      {
        "japanese": "りんご",
        "reading": "りんご",
        "english": "apple",
        "category": "Fruit"
      },
      {
        "japanese": "みかん",
        "reading": "みかん",
        "english": "mandarin orange",
        "category": "Fruit"
      },
      {
        "japanese": "ぎゅうにく",
        "reading": "ぎゅうにく",
        "english": "beef",
        "category": "Meat"
      },
      {
        "japanese": "とりにく",
        "reading": "とりにく",
        "english": "chicken",
        "category": "Meat"
      },
      {
        "japanese": "ぶたにく",
        "reading": "ぶたにく",
        "english": "pork",
        "category": "Meat"
      },
      {
        "japanese": "さけ",
        "reading": "さけ",
        "english": "salmon",
        "category": "Fish"
      },
      {
        "japanese": "まぐろ",
        "reading": "まぐろ",
        "english": "tuna",
        "category": "Fish"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 7,
    "title": "Tools, Means, Giving & Receiving (あげる/もらう)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "わたしは パソコンで 映画を 見ます。",
        "reading": "わたしは ぱそこんで えいがを みます。",
        "english": "I [am going to] watch a film on my PC."
      },
      {
        "japanese": "わたしは 木村さんに 花を あげます。",
        "reading": "わたしは きむらさんに はなを あげます。",
        "english": "I [am going to] give some flowers to Ms. Kimura."
      },
      {
        "japanese": "わたしは カリナさんに チョコレートを もらいました。",
        "reading": "わたしは かりなさんに ちょこれーとを もらいました。",
        "english": "Karina gave me some chocolates (lit. I received some chocolates from Karina)."
      },
      {
        "japanese": "わたしは もう メールを 送りました。",
        "reading": "わたしは もう めーるを おくりました。",
        "english": "I've already sent an e-mail."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "テレビで 日本語を 勉強しましたか。……いいえ、ラジオで 勉強しました。",
        "reading": "てれびで にほんごを べんきょうしましたか。……いいえ、らじおで べんきょうしました。",
        "english": "Did you study Japanese on the TV? ……No, I studied it on the radio."
      },
      {
        "japanese": "日本語で レポートを 書きますか。……いいえ、英語で 書きます。",
        "reading": "にほんごで れぽーとを かきますか。……いいえ、えいごで かきます。",
        "english": "Do you write your reports in Japanese? ……No, I write them in English."
      },
      {
        "japanese": "「Goodbye」は 日本語で 何ですか。……「さようなら」です。",
        "reading": "「Goodbye」は にほんごで なんですか。……「さようなら」です。",
        "english": "What's 'Goodbye' in Japanese? ……It's 'Sayonara'."
      },
      {
        "japanese": "だれに 年賀状を 書きますか。……先生と 友達に 書きます。",
        "reading": "だれに ねんがじょうを かきますか。……せんせいと ともだちに かきます。",
        "english": "Who do you write New Year's cards to? ……I write them to my teachers and friends."
      },
      {
        "japanese": "それは 何ですか。……手帳です。山田さんに もらいました。",
        "reading": "それは なんですか。……てちょうです。やまださんに もらいました。",
        "english": "What's that? ……It's a personal organiser. Mr. Yamada gave it to me."
      },
      {
        "japanese": "もう 新幹線の 切符を 買いましたか。……はい、もう 買いました。",
        "reading": "もう しんかんせんの きっぷを かいましたか。……はい、もう かいました。",
        "english": "Have you bought the tickets for the bullet train yet? ……Yes, I have [already bought them]."
      },
      {
        "japanese": "もう 昼ごはんを 食べましたか。……いいえ、まだです。これから 食べます。",
        "reading": "もう ひるごはんを たべましたか。……いいえ、まだです。これから たべます。",
        "english": "Have you had lunch yet? ……No, not yet. I'm just about to."
      }
    ],
    "conversation": {
      "title": "いらっしゃい (Welcome)",
      "situation": "Jose Santos and Maria visit the Yamada family",
      "characters": [
        "山田一郎",
        "サントス",
        "山田朋子",
        "マリア"
      ],
      "lines": [
        {
          "speaker": "山田一郎",
          "japanese": "はい？",
          "reading": "はい？",
          "english": "Yes?"
        },
        {
          "speaker": "サントス",
          "japanese": "サントスです。",
          "reading": "さんとすです。",
          "english": "It's Jose Santos."
        },
        {
          "speaker": "山田一郎",
          "japanese": "いらっしゃい。どうぞ お上がり ください。",
          "reading": "いらっしゃい。どうぞ おあがり ください。",
          "english": "Hello. (lit: Welcome.) Please come in."
        },
        {
          "speaker": "サントス",
          "japanese": "失礼します。",
          "reading": "しつれいします。",
          "english": "Thank you. (lit: I commit an incivility)"
        },
        {
          "speaker": "山田朋子",
          "japanese": "コーヒーは いかがですか。",
          "reading": "こーひーは いかがですか。",
          "english": "Would you like some coffee?"
        },
        {
          "speaker": "マリア",
          "japanese": "ありがとうございます。いただきます。",
          "reading": "ありがとうございます。いただきます。",
          "english": "Yes, please."
        },
        {
          "speaker": "山田朋子",
          "japanese": "どうぞ。",
          "reading": "どうぞ。",
          "english": "Here you are."
        },
        {
          "speaker": "マリア",
          "japanese": "すてきな スプーンですね。",
          "reading": "すてきな すぷーんですね。",
          "english": "This is a lovely spoon, isn't it?"
        },
        {
          "speaker": "山田朋子",
          "japanese": "ええ、会社の人に もらいました。メキシコのお土産です。",
          "reading": "ええ、かいしゃのひとに もらいました。めきしこのおみやげです。",
          "english": "Yes, I was given it by someone at work. It's a souvenir from Mexico."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "［～、］すてきですね。",
        "reading": "［～、］すてきですね。",
        "english": "What a nice [~]!"
      },
      {
        "japanese": "いらっしゃい。",
        "reading": "いらっしゃい。",
        "english": "Welcome / How nice of you to come."
      },
      {
        "japanese": "どうぞ お上がり ください。",
        "reading": "どうぞ おあがり ください。",
        "english": "Do come in."
      },
      {
        "japanese": "失礼します。",
        "reading": "しつれいします。",
        "english": "Excuse me (when entering)."
      },
      {
        "japanese": "［～は］いかがですか。",
        "reading": "［～は］いかがですか。",
        "english": "Would you like to have [~]?"
      },
      {
        "japanese": "いただきます。",
        "reading": "いただきます。",
        "english": "Thank you / I accept (before meal)."
      },
      {
        "japanese": "ごちそうさま［でした］。",
        "reading": "ごちそうさま［でした］。",
        "english": "That was delicious (after meal)."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. N（tool/means）で V",
        "explanation": "Particle で indicates method, instrument, or means (e.g. はしで食べます).",
        "examples": [
          {
            "japanese": "はしで 食べます。日本語で レポートを 書きます。",
            "reading": "はしで たべます。にほんごで れぽーとを かきます。",
            "english": "I eat with chopsticks. I write in Japanese."
          }
        ]
      },
      {
        "title": "2. \"Word\" は ～語で 何ですか",
        "explanation": "Asks how to say a word in another language.",
        "examples": [
          {
            "japanese": "「ありがとう」は 英語で 何ですか。",
            "reading": "「ありがとう」は えいごで なんですか。",
            "english": "What's 'Arigato' in English?"
          }
        ]
      },
      {
        "title": "3. N1（person）に N2を あげます",
        "explanation": "あげます indicates giving to someone (marked by に).",
        "examples": [
          {
            "japanese": "木村さんに 花を あげました。",
            "reading": "きむらさんに はなを あげました。",
            "english": "I gave Ms. Kimura some flowers."
          }
        ]
      },
      {
        "title": "4. N1（person）に N2を もらいます",
        "explanation": "もらいます indicates receiving from someone (marked by に or から).",
        "examples": [
          {
            "japanese": "山田さんに 花を もらいました。",
            "reading": "やまださんに はなを もらいました。",
            "english": "I received flowers from Mr. Yamada."
          }
        ]
      },
      {
        "title": "5. もう Vました",
        "explanation": "もう means \"already\". Answer in negative is いいえ、まだです.",
        "examples": [
          {
            "japanese": "もう 荷物を 送りましたか。……はい、もう 送りました。",
            "reading": "もう にもつを おくりましたか。……はい、もう おくりました。",
            "english": "Have you sent the luggage yet? ……Yes, already."
          }
        ]
      }
    ],
    "usefulInfoTitle": "家族 (Family Terms: My Family vs. Someone else’s Family)",
    "usefulInfo": [
      {
        "japanese": "祖父 / おじいさん",
        "reading": "そふ / おじいさん",
        "english": "grandfather",
        "category": "Family"
      },
      {
        "japanese": "祖母 / おばあさん",
        "reading": "そぼ / おばあさん",
        "english": "grandmother",
        "category": "Family"
      },
      {
        "japanese": "父 / お父さん",
        "reading": "ちち / おとうさん",
        "english": "father",
        "category": "Family"
      },
      {
        "japanese": "母 / お母さん",
        "reading": "はは / おかあさん",
        "english": "mother",
        "category": "Family"
      },
      {
        "japanese": "兄 / お兄さん",
        "reading": "あに / おにいさん",
        "english": "elder brother",
        "category": "Family"
      },
      {
        "japanese": "姉 / お姉さん",
        "reading": "あね / おねえさん",
        "english": "elder sister",
        "category": "Family"
      },
      {
        "japanese": "弟 / 弟さん",
        "reading": "おとうと / おとうとさん",
        "english": "younger brother",
        "category": "Family"
      },
      {
        "japanese": "妹 / 妹さん",
        "reading": "いもうと / いもうとさん",
        "english": "younger sister",
        "category": "Family"
      },
      {
        "japanese": "夫・主人 / ご主人",
        "reading": "おっと・しゅじん / ごしゅじん",
        "english": "husband",
        "category": "Family"
      },
      {
        "japanese": "妻・家内 / 奥さん",
        "reading": "つま・かない / おくさん",
        "english": "wife",
        "category": "Family"
      },
      {
        "japanese": "息子 / 息子さん",
        "reading": "むすこ / むすこさん",
        "english": "son",
        "category": "Family"
      },
      {
        "japanese": "娘 / 娘さん",
        "reading": "むすめ / むすめさん",
        "english": "daughter",
        "category": "Family"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 8,
    "title": "Adjectives (い-Adjectives & な-Adjectives)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "桜は きれいです。",
        "reading": "さくらは きれいです。",
        "english": "Cherry blossoms are beautiful."
      },
      {
        "japanese": "富士山は 高いです。",
        "reading": "ふじさんは たかいです。",
        "english": "Mt. Fuji is high."
      },
      {
        "japanese": "桜は きれいな 花です。",
        "reading": "さくらは きれいな はなです。",
        "english": "Cherry blossoms are beautiful flowers."
      },
      {
        "japanese": "富士山は 高い 山です。",
        "reading": "ふじさんは たかい やまです。",
        "english": "Mt. Fuji is a high mountain."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "大阪は にぎやかですか。……はい、にぎやかです。",
        "reading": "おおさかは にぎやかですか。……はい、にぎやかです。",
        "english": "Is Osaka lively? ……Yes, it is [lively]."
      },
      {
        "japanese": "さくら大学は 有名ですか。……いいえ、あまり 有名じゃ ありません。",
        "reading": "さくらだいがくは ゆうめいですか。……いいえ、あまり ゆうめいじゃ ありません。",
        "english": "Is Sakura University well-known? ……No, it's not [well-known]."
      },
      {
        "japanese": "ペキンは 今 寒いですか。……はい、とても 寒いです。シャンハイも 寒いですか。……いいえ、あまり 寒くないです。",
        "reading": "ぺきんは いま さむいですか。……はい、とても さむいです。しゃんはいも さむいですか。……いいえ、あまり さむくないです。",
        "english": "Is it cold in Beijing at the moment? ……Yes, it's very cold. Is it cold in Shanghai too? ……No, it isn't [very cold]."
      },
      {
        "japanese": "大学の 寮は どうですか。……古いですが、便利です。",
        "reading": "だいがくの りょうは どうですか。……ふるいですが、べんりです。",
        "english": "How's the university dormitory? ……It's old, but it's convenient."
      },
      {
        "japanese": "きのう 松本さんの うちへ 行きました。……どんな うちですか。きれいな うちです。そして、大きい うちです。",
        "reading": "きのう まつもとさんの うちへ いきました。……どんな うちですか。きれいな うちです。そして、おおきい うちです。",
        "english": "I went to Mr. Matsumoto's house yesterday. ……What's his house like? It's a beautiful house, and it's [a] big [house]."
      },
      {
        "japanese": "きのう おもしろい 映画を 見ました。……何を 見ましたか。「七人の 侍」です。",
        "reading": "きのう おもしろい えいがを みました。……なにを みましたか。「しちにんの さむらい」です。",
        "english": "I watched an interesting film yesterday. ……What did you watch? 'The Seven Samurai'."
      }
    ],
    "conversation": {
      "title": "そろそろ 失礼します (It’s time we were going)",
      "situation": "Yamada and Maria Santos enjoy evening conversation",
      "characters": [
        "山田一郎",
        "マリア",
        "サントス",
        "山田朋子"
      ],
      "lines": [
        {
          "speaker": "山田一郎",
          "japanese": "マリアさん、日本の 生活は どうですか。",
          "reading": "まりあさん、にほんの せいかつは どうですか。",
          "english": "Maria, how do you find living in Japan?"
        },
        {
          "speaker": "マリア",
          "japanese": "毎日 とても 楽しいです。",
          "reading": "まいにち とても たのしいです。",
          "english": "Every day is great fun."
        },
        {
          "speaker": "山田一郎",
          "japanese": "そうですか。サントスさん、お仕事は どうですか。",
          "reading": "そうですか。さんとすさん、おしごとは どうですか。",
          "english": "Really? Mr. Santos, how's your work going?"
        },
        {
          "speaker": "サントス",
          "japanese": "そうですね。忙しいですが、おもしろいです。",
          "reading": "そうですね。いそがしいですが、おもしろいです。",
          "english": "Well, it's busy, but it's interesting."
        },
        {
          "speaker": "山田朋子",
          "japanese": "コーヒー、もう 一杯 いかがですか。",
          "reading": "こーひー、もう いっぱい いかがですか。",
          "english": "Would you like another cup of coffee?"
        },
        {
          "speaker": "マリア",
          "japanese": "いいえ、けっこうです。",
          "reading": "いいえ、けっこうです。",
          "english": "No, I'm fine, thank you."
        },
        {
          "speaker": "サントス",
          "japanese": "ああ、もう 6時ですね。そろそろ 失礼します。",
          "reading": "ああ、もう ろくじですね。そろそろ しつれいします。",
          "english": "Oh, it's already six o'clock, isn't it? It's time we were going."
        },
        {
          "speaker": "山田一郎",
          "japanese": "そうですか。",
          "reading": "そうですか。",
          "english": "Really?"
        },
        {
          "speaker": "マリア",
          "japanese": "きょうは どうも ありがとう ございました。",
          "reading": "きょうは どうも ありがとう ございました。",
          "english": "Thank you very much for today."
        },
        {
          "speaker": "山田朋子",
          "japanese": "いいえ。また いらっしゃって ください。",
          "reading": "いいえ。また いらっしゃって ください。",
          "english": "Not at all. Please come again."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "お元気ですか。",
        "reading": "おげんきですか。",
        "english": "How are you?"
      },
      {
        "japanese": "そうですね。",
        "reading": "そうですね。",
        "english": "Well let me see... (pausing to think)"
      },
      {
        "japanese": "［～、］もう 一杯 いかがですか。",
        "reading": "［～、］もう いっぱい いかがですか。",
        "english": "Won’t you have another cup of [~]?"
      },
      {
        "japanese": "［いいえ、］けっこうです。",
        "reading": "［いいえ、］けっこうです。",
        "english": "No, thank you."
      },
      {
        "japanese": "そろそろ 失礼します。",
        "reading": "そろそろ しつれいします。",
        "english": "It's time I was going."
      },
      {
        "japanese": "また いらっしゃって ください。",
        "reading": "また いらっしゃって ください。",
        "english": "Please come again."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Adjective Classes (い-adj and な-adj)",
        "explanation": "い-adj end in い (たかい, さむい); な-adj drop な before です (しんせつです, きれいです).",
        "examples": [
          {
            "japanese": "富士山は 高いです。ワット先生は 親切です。",
            "reading": "ふじさんは たかいです。わっとせんせいは しんせつです。",
            "english": "Mt. Fuji is high. Prof. Watt is kind."
          }
        ]
      },
      {
        "title": "2. Negative of Adjectives",
        "explanation": "な-adj: ～じゃ ありません; い-adj: drop final い and add ～くないです (たかくないです). Exception: いいです → よくないです.",
        "examples": [
          {
            "japanese": "あまり 寒くないです。",
            "reading": "あまり さむくないです。",
            "english": "It's not very cold."
          }
        ]
      },
      {
        "title": "3. Modifying Nouns with Adjectives",
        "explanation": "な-adj keeps な before noun (きれいな花); い-adj directly precedes noun (高い山).",
        "examples": [
          {
            "japanese": "きれいな 花です。高い 山です。",
            "reading": "きれいな はなです。たかい やまです。",
            "english": "A beautiful flower. A high mountain."
          }
        ]
      },
      {
        "title": "4. ～が、～ (Conjunction: but)",
        "explanation": "が connects two clauses with contrasting meaning.",
        "examples": [
          {
            "japanese": "日本の 食べ物は おいしいですが、高いです。",
            "reading": "にほんの たべものは おいしいですが、たかいです。",
            "english": "Japanese food is delicious, but expensive."
          }
        ]
      }
    ],
    "usefulInfoTitle": "色・味 (Colours and Tastes)",
    "usefulInfo": [
      {
        "japanese": "白 / 白い",
        "reading": "しろ / しろい",
        "english": "white",
        "category": "Colour"
      },
      {
        "japanese": "黒 / 黒い",
        "reading": "くろ / くろい",
        "english": "black",
        "category": "Colour"
      },
      {
        "japanese": "赤 / 赤い",
        "reading": "あか / あかい",
        "english": "red",
        "category": "Colour"
      },
      {
        "japanese": "青 / 青い",
        "reading": "あお / あおい",
        "english": "blue",
        "category": "Colour"
      },
      {
        "japanese": "黄色 / 黄色い",
        "reading": "きいろ / きいろい",
        "english": "yellow",
        "category": "Colour"
      },
      {
        "japanese": "茶色 / 茶色い",
        "reading": "ちゃいろ / ちゃいろい",
        "english": "brown",
        "category": "Colour"
      },
      {
        "japanese": "甘い",
        "reading": "あまい",
        "english": "sweet",
        "category": "Taste"
      },
      {
        "japanese": "辛い",
        "reading": "からい",
        "english": "hot, spicy",
        "category": "Taste"
      },
      {
        "japanese": "苦い",
        "reading": "にがい",
        "english": "bitter",
        "category": "Taste"
      },
      {
        "japanese": "塩辛い",
        "reading": "しおからい",
        "english": "salty",
        "category": "Taste"
      },
      {
        "japanese": "酸っぱい",
        "reading": "すっぱい",
        "english": "sour",
        "category": "Taste"
      },
      {
        "japanese": "濃い",
        "reading": "こい",
        "english": "strong (taste/tea)",
        "category": "Taste"
      },
      {
        "japanese": "薄い",
        "reading": "うすい",
        "english": "weak, light",
        "category": "Taste"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 9,
    "title": "Likes, Dislikes, Skills & Possessions (好き/上手/ある)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "わたしは イタリア料理が 好きです。",
        "reading": "わたしは いたりありょうりが すきです。",
        "english": "I like Italian food."
      },
      {
        "japanese": "わたしは 日本語が 少し わかります。",
        "reading": "わたしは にほんごが すこし わかります。",
        "english": "I can understand a bit of Japanese."
      },
      {
        "japanese": "きょうは 子どもの 誕生日ですから、早く 帰ります。",
        "reading": "きょうは こどもの たんじょうびですから、はやく かえります。",
        "english": "It's my child's birthday today, so I'm going home early."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "お酒が 好きですか。……いいえ、好きじゃ ありません。",
        "reading": "おさけが すきですか。……いいえ、すきじゃ ありません。",
        "english": "Do you like alcohol? ……No, I don't [like it]."
      },
      {
        "japanese": "どんな スポーツが 好きですか。……サッカーが 好きです。",
        "reading": "どんな すぽーつが すきですか。……さっかーが すきです。",
        "english": "What sports do you like? ……I like soccer."
      },
      {
        "japanese": "カリナさんは 絵が 上手ですか。……はい、とても 上手です。",
        "reading": "かりなさんは えが じょうずですか。……はい、とても じょうずです。",
        "english": "Is Karina good at painting? ……Yes, she's very good."
      },
      {
        "japanese": "田中さんは インドネシア語が わかりますか。……いいえ、全然 わかりません。",
        "reading": "たなかさんは いんどねしあごが わかりますか。……いいえ、ぜんぜん わかりません。",
        "english": "Do you understand Indonesian, Ms. Tanaka? ……No, not at all."
      },
      {
        "japanese": "細かい お金が ありますか。……いいえ、ありません。",
        "reading": "こまかい おかねが ありますか。……いいえ、ありません。",
        "english": "Do you have any small change? ……No, I don't."
      },
      {
        "japanese": "毎朝 新聞を 読みますか。……いいえ、読みません。時間が ありませんから。",
        "reading": "まいあさ しんぶんを よみますか。……いいえ、よみません。じかんが ありませんから。",
        "english": "Do you read the newspaper every morning? ……No, I don't; I don't have time."
      },
      {
        "japanese": "どうして きのう 早く 帰りましたか。……用事が ありましたから。",
        "reading": "どうして きのう はやく かえりましたか。……ようじが ありましたから。",
        "english": "Why did you go home early yesterday? ……Because there was something I had to do."
      }
    ],
    "conversation": {
      "title": "残念です［が］ (It’s a pity......)",
      "situation": "Miller invites Ms. Kimura to a concert",
      "characters": [
        "木村",
        "ミラー"
      ],
      "lines": [
        {
          "speaker": "木村",
          "japanese": "はい？",
          "reading": "はい？",
          "english": "Yes?"
        },
        {
          "speaker": "ミラー",
          "japanese": "木村さんですか。マイク・ミラーです。",
          "reading": "きむらさんですか。まいく・みらーです。",
          "english": "Is that Ms. Kimura? This is Mike Miller."
        },
        {
          "speaker": "木村",
          "japanese": "ああ、ミラーさん。こんばんは。お元気ですか。",
          "reading": "ああ、みらーさん。こんばんは。おげんきですか。",
          "english": "Oh, Mr. Miller. Good evening. Are you well?"
        },
        {
          "speaker": "ミラー",
          "japanese": "ええ、元気です。あのう、木村さん、クラシックの コンサート、いっしょに いかがですか。",
          "reading": "ええ、げんきです。あのう、きむらさん、くらしっくの こんさーと、いっしょに いかがですか。",
          "english": "Yes, I’m fine. Umm... Ms. Kimura, would you like to come to a classical concert with me?"
        },
        {
          "speaker": "木村",
          "japanese": "いいですね。いつですか。",
          "reading": "いいですね。いつですか。",
          "english": "That sounds nice. When is it?"
        },
        {
          "speaker": "ミラー",
          "japanese": "来週の 金曜日の 晩です。",
          "reading": "らいしゅうの きんようびの ばんです。",
          "english": "Next week, on Friday evening."
        },
        {
          "speaker": "木村",
          "japanese": "金曜日ですか。金曜日の 晩は ちょっと……。",
          "reading": "きんようびですか。きんようびの ばんは ちょっと……。",
          "english": "Friday? Friday evening’s not so good for me..."
        },
        {
          "speaker": "ミラー",
          "japanese": "だめですか。",
          "reading": "だめですか。",
          "english": "So you can't come?"
        },
        {
          "speaker": "木村",
          "japanese": "ええ、残念ですが、友達と 約束が ありますから……。",
          "reading": "ええ、ざんねんですが、ともだちと やくそくが ありますから……。",
          "english": "No, it’s a pity, but I’ve arranged to meet some friends..."
        },
        {
          "speaker": "ミラー",
          "japanese": "そうですか。",
          "reading": "そうですか。",
          "english": "I see."
        },
        {
          "speaker": "木村",
          "japanese": "ええ。また 今度 お願いします。",
          "reading": "ええ。また こんど おねがいします。",
          "english": "Yes. Please ask me another time."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "貸して ください。",
        "reading": "かして ください。",
        "english": "Please lend (it to me)."
      },
      {
        "japanese": "いいですよ。",
        "reading": "いいですよ。",
        "english": "Sure / Certainly."
      },
      {
        "japanese": "残念です［が］",
        "reading": "ざんねんです［が］",
        "english": "I'm sorry [, but] / Unfortunately"
      },
      {
        "japanese": "いっしょに いかがですか。",
        "reading": "いっしょに いかがですか。",
        "english": "Won't you join me (us)?"
      },
      {
        "japanese": "［～は］ちょっと……。",
        "reading": "［～は］ちょっと……。",
        "english": "[~] is a bit difficult (declining politely)."
      },
      {
        "japanese": "また 今度 お願いします。",
        "reading": "また こんど おねがいします。",
        "english": "Please ask me again some other time."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. N が 好きです / 嫌いです / 上手です / 下手です / わかります / あります",
        "explanation": "The objects of feelings, abilities, and possession are marked with particle が.",
        "examples": [
          {
            "japanese": "イタリア料理が 好きです。日本語が わかります。車が あります。",
            "reading": "いたりありょうりが すきです。にほんごが わかります。くるまが あります。",
            "english": "I like Italian food. I understand Japanese. I have a car."
          }
        ]
      },
      {
        "title": "2. Degree Adverbs: よく / だいたい / たくさん / 少し / あまり / 全然",
        "explanation": "よく/だいたい/すこし with affirmative verbs; あまり/ぜんぜん with negative verbs.",
        "examples": [
          {
            "japanese": "英語が よく わかります。お金が 全然 ありません。",
            "reading": "えいごが よく わかります。おかねが ぜんぜん ありません。",
            "english": "I understand English well. I have no money at all."
          }
        ]
      },
      {
        "title": "3. ～から (Reason)",
        "explanation": "Statement + から gives the reason for the following statement or response.",
        "examples": [
          {
            "japanese": "時間が ありませんから、新聞を 読みません。",
            "reading": "じかんが ありませんから、しんぶんを よみません。",
            "english": "I don't read newspapers because I don't have time."
          }
        ]
      }
    ],
    "usefulInfoTitle": "音楽・スポーツ・映画 (Music, Sports and Films)",
    "usefulInfo": [
      {
        "japanese": "ポップス",
        "reading": "ぽっぷす",
        "english": "pop music",
        "category": "Music"
      },
      {
        "japanese": "クラシック",
        "reading": "くらしっく",
        "english": "classical music",
        "category": "Music"
      },
      {
        "japanese": "歌舞伎",
        "reading": "かぶき",
        "english": "Kabuki drama",
        "category": "Culture"
      },
      {
        "japanese": "SF",
        "reading": "えすえふ",
        "english": "science fiction",
        "category": "Film"
      },
      {
        "japanese": "ホラー",
        "reading": "ほらー",
        "english": "horror",
        "category": "Film"
      },
      {
        "japanese": "アニメ",
        "reading": "あにめ",
        "english": "animation",
        "category": "Film"
      },
      {
        "japanese": "野球",
        "reading": "やきゅう",
        "english": "baseball",
        "category": "Sports"
      },
      {
        "japanese": "サッカー",
        "reading": "さっかー",
        "english": "soccer",
        "category": "Sports"
      },
      {
        "japanese": "相撲",
        "reading": "すもう",
        "english": "sumo",
        "category": "Sports"
      },
      {
        "japanese": "柔道",
        "reading": "じゅうどう",
        "english": "judo",
        "category": "Sports"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 10,
    "title": "Existence & Position of People & Things (います/あります)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "あそこに コンビニが あります。",
        "reading": "あそこに こんびにが あります。",
        "english": "There's a convenience store over there."
      },
      {
        "japanese": "ロビーに 佐藤さんが います。",
        "reading": "ろびーに さとうさんが います。",
        "english": "Ms. Sato's in the lobby."
      },
      {
        "japanese": "東京ディズニーランドは 千葉県に あります。",
        "reading": "とうきょうでぃずにーらんどは ちばけんに あります。",
        "english": "Tokyo Disneyland's in Chiba prefecture."
      },
      {
        "japanese": "家族は ニューヨークに います。",
        "reading": "かぞくは にゅーよーくに います。",
        "english": "My family's in New York."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "この ビルに ATMが ありますか。……はい、2階に あります。",
        "reading": "この びるに えーてぃーえむが ありますか。……はい、にかいに あります。",
        "english": "Is there a cash machine in this building? ……Yes, it's on the second floor."
      },
      {
        "japanese": "あそこに 男の人が いますね。あの人は だれですか。……IMCの 松本さんです。",
        "reading": "あそこに おとこのひとが いますね。あのひとは だれですか。……IMCの まつもとさんです。",
        "english": "You see that man over there? Who is he? ……That's Mr. Matsumoto from IMC."
      },
      {
        "japanese": "庭に だれが いますか。……だれも いません。猫が います。",
        "reading": "にわに だれが いますか。……だれも いません。ねこが います。",
        "english": "Who's in the garden? ……Nobody. There's a cat there."
      },
      {
        "japanese": "箱の 中に 何が ありますか。……古い 手紙や 写真［など］が あります。",
        "reading": "はこの なかに なにが ありますか。……ふるい てがみや しゃしん［など］が あります。",
        "english": "What's in the box? ……Some old letters, photographs and other stuff."
      },
      {
        "japanese": "郵便局は どこに ありますか。……駅の 近くです。銀行の 前に あります。",
        "reading": "ゆうびんきょくは どこに ありますか。……えきの ちかくです。ぎんこうの まえに あります。",
        "english": "Where's the post office? ……It's near the station, in front of the bank."
      },
      {
        "japanese": "ミラーさんは どこに いますか。……会議室に います。",
        "reading": "みらーさんは どこに いますか。……かいぎしつに います。",
        "english": "Where's Mr. Miller? ……He's in the meeting room."
      }
    ],
    "conversation": {
      "title": "ナンプラーは ありますか (Do you have any nam pla?)",
      "situation": "Miller looks for Thai fish sauce in Asia Store",
      "characters": [
        "ミラー",
        "女性",
        "店員"
      ],
      "lines": [
        {
          "speaker": "ミラー",
          "japanese": "すみません。アジアストアは どこですか。",
          "reading": "すみません。あじあすとあは どこですか。",
          "english": "Excuse me, where's Asia Store?"
        },
        {
          "speaker": "女性",
          "japanese": "アジアストアですか。あの 白い ビルの 中です。",
          "reading": "あじあすとあですか。あの しろい びるの なかです。",
          "english": "Asia Store? You see that white building over there? It's in that building."
        },
        {
          "speaker": "ミラー",
          "japanese": "そうですか。どうも ありがとう ございます。",
          "reading": "そうですか。どうも ありがとう ございます。",
          "english": "I see. Thank you."
        },
        {
          "speaker": "女性",
          "japanese": "いいえ。",
          "reading": "いいえ。",
          "english": "Not at all."
        },
        {
          "speaker": "ミラー",
          "japanese": "すみません。ナンプラーは ありますか。",
          "reading": "すみません。なんぷらーは ありますか。",
          "english": "Excuse me, do you have any nam pla?"
        },
        {
          "speaker": "店員",
          "japanese": "はい。あちらに タイ料理の コーナーが あります。ナンプラーは いちばん 下です。",
          "reading": "はい。あちらに たいりょうりの こーなーが あります。なんぷらーは いちばん したです。",
          "english": "Yes. There's a Thai food section over there. The nam pla's right at the bottom."
        },
        {
          "speaker": "ミラー",
          "japanese": "わかりました。どうも。",
          "reading": "わかりました。どうも。",
          "english": "I see. Thanks."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "［どうも］すみません。",
        "reading": "［どうも］すみません。",
        "english": "Thank you / Excuse me."
      },
      {
        "japanese": "ナンプラー",
        "reading": "なんぷらー",
        "english": "nam pla (Thai fish sauce)"
      },
      {
        "japanese": "コーナー",
        "reading": "こーなー",
        "english": "corner, section"
      },
      {
        "japanese": "いちばん下",
        "reading": "いちばんした",
        "english": "the bottom-most"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. N が あります／います",
        "explanation": "あります is used for inanimate objects/plants; います is used for animate beings (people/animals).",
        "examples": [
          {
            "japanese": "コンピューターが あります。犬が います。",
            "reading": "こんぴゅーたーが あります。いぬが います。",
            "english": "There's a computer. There's a dog."
          }
        ]
      },
      {
        "title": "2. Place に N が あります／います",
        "explanation": "Particle に marks the location where a person or thing exists.",
        "examples": [
          {
            "japanese": "わたしの 部屋に 机が あります。",
            "reading": "わたしの へやに つくえが あります。",
            "english": "There's a desk in my room."
          }
        ]
      },
      {
        "title": "3. N は Place に あります／います",
        "explanation": "Focuses on the thing/person as the topic, stating where it is located.",
        "examples": [
          {
            "japanese": "東京ディズニーランドは 千葉県に あります。",
            "reading": "とうきょうでぃずにーらんどは ちばけんに あります。",
            "english": "Tokyo Disneyland is in Chiba."
          }
        ]
      },
      {
        "title": "4. N1（thing/place）の N2（position）",
        "explanation": "Position words: 上 (on), 下 (under), 前 (front), 後ろ (behind), 右 (right), 左 (left), 中 (inside), 隣 (next to), 近く (near), 間 (between).",
        "examples": [
          {
            "japanese": "机の 上に 写真が あります。",
            "reading": "つくえの うえに しゃしんが あります。",
            "english": "There's a photo on the desk."
          }
        ]
      }
    ],
    "usefulInfoTitle": "うちの 中 (Inside the House & Rooms)",
    "usefulInfo": [
      {
        "japanese": "玄関",
        "reading": "げんかん",
        "english": "entrance hall",
        "category": "House"
      },
      {
        "japanese": "居間",
        "reading": "いま",
        "english": "living room",
        "category": "House"
      },
      {
        "japanese": "台所",
        "reading": "だいどころ",
        "english": "kitchen",
        "category": "House"
      },
      {
        "japanese": "食堂",
        "reading": "しょくどう",
        "english": "dining room",
        "category": "House"
      },
      {
        "japanese": "寝室",
        "reading": "しんしつ",
        "english": "bedroom",
        "category": "House"
      },
      {
        "japanese": "廊下",
        "reading": "ろうか",
        "english": "hallway",
        "category": "House"
      },
      {
        "japanese": "ふろ場",
        "reading": "ふろば",
        "english": "bathroom",
        "category": "House"
      },
      {
        "japanese": "ベランダ",
        "reading": "べらんだ",
        "english": "balcony",
        "category": "House"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 11,
    "title": "Numbers, Quantities & Counting (Counters)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "会議室に テーブルが 7つ あります。",
        "reading": "かいぎしつに てーぶるが ななつ あります。",
        "english": "There are seven tables in the meeting room."
      },
      {
        "japanese": "わたしは 日本に 1年 います。",
        "reading": "わたしは にほんに いちねん います。",
        "english": "I'll be (I've been) in Japan for one year."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "りんごを いくつ 買いましたか。……4つ 買いました。",
        "reading": "りんごを いくつ かいましたか。……よっつ かいました。",
        "english": "How many apples did you buy? ……[I bought] four."
      },
      {
        "japanese": "80円の 切手を 5枚と はがきを 2枚 ください。……はい、全部で 500円です。",
        "reading": "はちじゅうえんの きってを ごまいと はがきを にまい ください。……はい、ぜんぶで ごひゃくえんです。",
        "english": "Five eighty-yen stamps and two postcards, please. ……Certainly. 500 yen altogether."
      },
      {
        "japanese": "富士大学に 外国人の 先生が いますか。……はい、3人 います。みんな アメリカ人です。",
        "reading": "ふじだいがくに がいこくじんの せんせいが いますか。……はい、さんにん います。みんな あめりかじんです。",
        "english": "Are there foreign teachers at Fuji University? ……Yes, there are three. All Americans."
      },
      {
        "japanese": "兄弟は 何人ですか。……4人です。姉が 2人と 兄が 1人 います。",
        "reading": "きょうだいは なんにんですか。……よにんです。あねが ふたりと あにが ひとり います。",
        "english": "How many siblings do you have? ……Four. Two older sisters and one older brother."
      },
      {
        "japanese": "1週間に 何回 テニスを しますか。……2回ぐらい します。",
        "reading": "いっしゅうかんに なんかい てにすを しますか。……にかいぐらい します。",
        "english": "How many times a week do you play tennis? ……About twice."
      },
      {
        "japanese": "田中さんは どのくらい スペイン語を 勉強しましたか。……3か月 勉強しました。",
        "reading": "たなかさんは どのくらい すぺいんごを べんきょうしましたか。……さんかげつ べんきょうしました。",
        "english": "How long did you study Spanish? ……For 3 months."
      },
      {
        "japanese": "大阪から 東京まで 新幹線で どのくらい かかりますか。……2時間半 かかります。",
        "reading": "おおさかから とうきょうまで しんかんせんで どのくらい かかりますか。……にじかんはん かかります。",
        "english": "How long does it take from Osaka to Tokyo by bullet train? ……Two and a half hours."
      }
    ],
    "conversation": {
      "title": "これ、お願い します ([I’d like to send] this, please)",
      "situation": "Wang Xue visits the post office to send a parcel to Australia",
      "characters": [
        "管理人",
        "ワン",
        "郵便局員"
      ],
      "lines": [
        {
          "speaker": "管理人",
          "japanese": "いい 天気ですね。お出かけですか。",
          "reading": "いい てんきですね。おでかけですか。",
          "english": "Lovely weather, isn't it? Are you going out?"
        },
        {
          "speaker": "ワン",
          "japanese": "ええ、ちょっと 郵便局まで。",
          "reading": "ええ、ちょっと ゆうびんきょくまで。",
          "english": "Yes, just to the post office."
        },
        {
          "speaker": "管理人",
          "japanese": "そうですか。行ってらっしゃい。",
          "reading": "そうですか。いってらっしゃい。",
          "english": "Are you? See you later."
        },
        {
          "speaker": "ワン",
          "japanese": "行って きます。",
          "reading": "いって きます。",
          "english": "See you."
        },
        {
          "speaker": "ワン",
          "japanese": "これ、オーストラリアまで お願いします。",
          "reading": "これ、おーすとらりあまで おねがいします。",
          "english": "I'd like to send this to Australia, please."
        },
        {
          "speaker": "郵便局員",
          "japanese": "はい。船便ですか、航空便ですか。",
          "reading": "はい。ふなびんですか、こうくうびんですか。",
          "english": "Of course. Sea mail, or airmail?"
        },
        {
          "speaker": "ワン",
          "japanese": "航空便は いくらですか。",
          "reading": "こうくうびんは いくらですか。",
          "english": "How much is airmail?"
        },
        {
          "speaker": "郵便局員",
          "japanese": "7,600円です。",
          "reading": "ななせんはっぴゃくえんです。",
          "english": "[It’s] ¥7,600."
        },
        {
          "speaker": "ワン",
          "japanese": "船便は？",
          "reading": "ふなびんは？",
          "english": "And sea mail?"
        },
        {
          "speaker": "郵便局員",
          "japanese": "3,450円です。どのくらい かかりますか。",
          "reading": "さんぜんよんひゃくごじゅうえんです。どのくらい かかりますか。",
          "english": "It is ¥3,450."
        },
        {
          "speaker": "郵便局員",
          "japanese": "航空便で 7日、船便で 2か月ぐらいです。",
          "reading": "こうくうびんで なのか、ふなびんで にかげつぐらいです。",
          "english": "Around 7 days by air, 2 months by sea."
        },
        {
          "speaker": "ワン",
          "japanese": "じゃ、船便で お願いします。",
          "reading": "じゃ、ふなびんで おねがいします。",
          "english": "All right, I'll send it by sea mail, please."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "かしこまりました。",
        "reading": "かしこまりました。",
        "english": "Certainly, Sir/Madam."
      },
      {
        "japanese": "いい［お］天気ですね。",
        "reading": "いい［お］てんきですね。",
        "english": "Nice weather, isn't it?"
      },
      {
        "japanese": "お出かけですか。",
        "reading": "おでかけですか。",
        "english": "Are you going out?"
      },
      {
        "japanese": "ちょっと ～まで。",
        "reading": "ちょっと ～まで。",
        "english": "I'm just going to ~."
      },
      {
        "japanese": "行ってらっしゃい。",
        "reading": "いってらっしゃい。",
        "english": "See you later / Take care."
      },
      {
        "japanese": "行って きます。",
        "reading": "いって きます。",
        "english": "I'm off / See you later."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Counters & Quantifiers (ひとつ, 人, 台, 枚, 回, 分, 時間, 日, か月, 年)",
        "explanation": "Quantifiers follow the particle determining their object (りんごを 4つ 買いました).",
        "examples": [
          {
            "japanese": "りんごを 4つ 買いました。外国人が 2人 います。",
            "reading": "りんごを よっつ かいました。がいこくじんが ふたり います。",
            "english": "I bought 4 apples. There are 2 foreigners."
          }
        ]
      },
      {
        "title": "2. Quantifier (time period) に －回 V",
        "explanation": "Indicates frequency within a timeframe (e.g. 1か月に2回).",
        "examples": [
          {
            "japanese": "1か月に 2回 映画を 見ます。",
            "reading": "いっかげつに にかい えいがを みます。",
            "english": "I watch movies twice a month."
          }
        ]
      },
      {
        "title": "3. Quantifier だけ / N だけ",
        "explanation": "だけ means \"only\" or \"just\".",
        "examples": [
          {
            "japanese": "休みは 日曜日だけです。",
            "reading": "やすみは にちようびだけです。",
            "english": "Sunday is my only day off."
          }
        ]
      }
    ],
    "usefulInfoTitle": "メニュー (Japanese Restaurant Menu)",
    "usefulInfo": [
      {
        "japanese": "定食",
        "reading": "ていしょく",
        "english": "set meal",
        "category": "Menu"
      },
      {
        "japanese": "ランチ",
        "reading": "らんち",
        "english": "lunch set",
        "category": "Menu"
      },
      {
        "japanese": "天どん",
        "reading": "てんどん",
        "english": "tempura rice bowl",
        "category": "Menu"
      },
      {
        "japanese": "親子どん",
        "reading": "おやこどん",
        "english": "chicken & egg rice bowl",
        "category": "Menu"
      },
      {
        "japanese": "牛どん",
        "reading": "ぎゅうどん",
        "english": "beef rice bowl",
        "category": "Menu"
      },
      {
        "japanese": "焼き肉",
        "reading": "やきにく",
        "english": "grilled meat",
        "category": "Menu"
      },
      {
        "japanese": "みそ汁",
        "reading": "みそしる",
        "english": "miso soup",
        "category": "Menu"
      },
      {
        "japanese": "おにぎり",
        "reading": "おにぎり",
        "english": "rice ball",
        "category": "Menu"
      },
      {
        "japanese": "すし",
        "reading": "すし",
        "english": "sushi",
        "category": "Menu"
      },
      {
        "japanese": "うどん",
        "reading": "うどん",
        "english": "udon wheat noodles",
        "category": "Menu"
      },
      {
        "japanese": "そば",
        "reading": "そば",
        "english": "soba buckwheat noodles",
        "category": "Menu"
      },
      {
        "japanese": "ラーメン",
        "reading": "らーめん",
        "english": "ramen noodles",
        "category": "Menu"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 12,
    "title": "Past Tense & Comparisons (〜より/一番)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "きのうは 雨でした。",
        "reading": "きのうは あめでした。",
        "english": "It was rainy yesterday."
      },
      {
        "japanese": "きのうは 寒かったです。",
        "reading": "きのうは さむかったです。",
        "english": "It was cold yesterday."
      },
      {
        "japanese": "北海道は 九州より 大きいです。",
        "reading": "ほっかいどうは きゅうしゅうより おおきいです。",
        "english": "Hokkaido is bigger than Kyushu."
      },
      {
        "japanese": "わたしは 1年で 夏が いちばん 好きです。",
        "reading": "わたしは いちねんで なつが いちばん すきです。",
        "english": "Summer is my favourite season."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "京都は 静かでしたか。……いいえ、静かじゃ ありませんでした。",
        "reading": "きょうとは しずかでしたか。……いいえ、しずかじゃ ありませんでした。",
        "english": "Was Kyoto quiet? ……No, it wasn't [quiet]."
      },
      {
        "japanese": "旅行は 楽しかったですか。……はい、とても 楽しかったです。",
        "reading": "りょこうは たのしかったですか。……はい、とても たのしかったです。",
        "english": "Did you enjoy your trip? ……Yes, I did [enjoy it]."
      },
      {
        "japanese": "昨日の パーティーは どうでしたか。……とても にぎやかでした。",
        "reading": "きのうの ぱーてぃーは どうでしたか。……とても にぎやかでした。",
        "english": "How was yesterday's party? ……It was very lively."
      },
      {
        "japanese": "ニューヨークは 大阪より 寒いですか。……はい、ずっと 寒いです。",
        "reading": "にゅーよーくは おおさかより さむいですか。……はい、ずっと さむいです。",
        "english": "Is New York colder than Osaka? ……Yes, it's much colder."
      },
      {
        "japanese": "空港まで 電車と バスと どちらが 速いですか。……電車の ほうが 速いです。",
        "reading": "くうこうまで でんしゃと ばすと どちらが はやいですか。……でんしゃの ほうが はやいです。",
        "english": "Which is faster to airport, train or bus? ……The train is faster."
      },
      {
        "japanese": "海と 山と どちらが 好きですか。……どちらも 好きです。",
        "reading": "うみと やまと どちらが すきですか。……どちらも すきです。",
        "english": "Which do you prefer, sea or mountain? ……I like both."
      },
      {
        "japanese": "日本料理［の 中］で 何が いちばん 好きですか。……てんぷらが いちばん 好きです。",
        "reading": "にほんりょうり［の なか］で なにが いちばん すきですか。……てんぷらが いちばん すきです。",
        "english": "Which Japanese dish do you like best? ……I like tempura best."
      }
    ],
    "conversation": {
      "title": "祇園祭は どうでしたか (How was the Gion Festival?)",
      "situation": "Miller returns from his Kyoto trip and describes the festival",
      "characters": [
        "ミラー",
        "管理人"
      ],
      "lines": [
        {
          "speaker": "ミラー",
          "japanese": "ただいま。",
          "reading": "ただいま。",
          "english": "I'm back!"
        },
        {
          "speaker": "管理人",
          "japanese": "お帰りなさい。",
          "reading": "おかえりなさい。",
          "english": "Welcome back."
        },
        {
          "speaker": "ミラー",
          "japanese": "これ、京都の お土産です。",
          "reading": "これ、きょうとの おみやげです。",
          "english": "Here's a souvenir from Kyoto."
        },
        {
          "speaker": "管理人",
          "japanese": "どうも ありがとう ございます。祇園祭は どうでしたか。",
          "reading": "どうも ありがとう ございます。ぎおんまつりは どうでしたか。",
          "english": "Thank you very much. How was the Gion Festival?"
        },
        {
          "speaker": "ミラー",
          "japanese": "とても おもしろかったです。人手が すごかったです。",
          "reading": "とても おもしろかったです。ひとでが すごかったです。",
          "english": "It was very interesting. The crowds were amazing."
        },
        {
          "speaker": "管理人",
          "japanese": "京都の 祭りで いちばん 有名ですからね。",
          "reading": "きょうとの まつりで いちばん ゆうめいseesですからね。",
          "english": "That's because it's the most famous festival in Kyoto."
        },
        {
          "speaker": "ミラー",
          "japanese": "写真を たくさん 撮りました。どうぞ。",
          "reading": "しゃしんを たくさん とりました。どうぞ。",
          "english": "I took a lot of photos. Take a look."
        },
        {
          "speaker": "管理人",
          "japanese": "わあ、すごい 人ですね。",
          "reading": "わあ、すごい ひとですね。",
          "english": "Wow! Look at all those people!"
        },
        {
          "speaker": "ミラー",
          "japanese": "ええ。ちょっと 疲れました。",
          "reading": "ええ。ちょっと つかれました。",
          "english": "Yes, it was a bit tiring."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "ただいま。",
        "reading": "ただいま。",
        "english": "I'm home / I'm back."
      },
      {
        "japanese": "お帰りなさい。",
        "reading": "おかえりなさい。",
        "english": "Welcome home."
      },
      {
        "japanese": "わあ、すごい 人ですね。",
        "reading": "わあ、すごい ひとですね。",
        "english": "Wow! Look at all those people!"
      },
      {
        "japanese": "疲れました。",
        "reading": "つかれました。",
        "english": "I'm tired."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Past Tense of Noun & な-adj: でした / じゃありませんでした",
        "explanation": "きのうは 雨でした。静かじゃ ありませんでした。",
        "examples": [
          {
            "japanese": "きのうは 雨でした。",
            "reading": "きのうは あめでした。",
            "english": "It was rainy yesterday."
          }
        ]
      },
      {
        "title": "2. Past Tense of い-adj: ～かったです / ～くなかったです",
        "explanation": "あつかったです (was hot), さむくなかったです (was not cold).",
        "examples": [
          {
            "japanese": "きのうは 暑かったです。",
            "reading": "きのうは あつかったです。",
            "english": "It was hot yesterday."
          }
        ]
      },
      {
        "title": "3. N1 は N2 より Adj です (Comparisons)",
        "explanation": "N1 is more Adj than N2.",
        "examples": [
          {
            "japanese": "この車は あの車より 大きいです。",
            "reading": "このくるまは あのくるまより おおきいです。",
            "english": "This car is bigger than that one."
          }
        ]
      },
      {
        "title": "4. N1 と N2 と どちらが Adj ですか ……N1の ほうが Adj です",
        "explanation": "Asks which of two items is more Adj.",
        "examples": [
          {
            "japanese": "サッカーと 野球と どちらが おもしろいですか。",
            "reading": "さっかーと やきゅうと どちらが おもしろいですか。",
            "english": "Which is more interesting, soccer or baseball?"
          }
        ]
      },
      {
        "title": "5. N［の中］で 何／どこ／だれ／いつ が いちばん Adj ですか",
        "explanation": "Superlative questioning the top choice within a category.",
        "examples": [
          {
            "japanese": "日本料理の中で てんぷらが いちばん 好きです。",
            "reading": "にほんりょうりのなかで てんぷらが いちばん すきです。",
            "english": "I like tempura best among Japanese dishes."
          }
        ]
      }
    ],
    "usefulInfoTitle": "祭りと名所 (Festivals and Famous Sights)",
    "usefulInfo": [
      {
        "japanese": "祇園祭",
        "reading": "ぎおんまつり",
        "english": "Gion Festival (Kyoto)",
        "category": "Festival"
      },
      {
        "japanese": "天神祭",
        "reading": "てんじんまつり",
        "english": "Tenjin Festival (Osaka)",
        "category": "Festival"
      },
      {
        "japanese": "神田祭",
        "reading": "かんだまつり",
        "english": "Kanda Festival (Tokyo)",
        "category": "Festival"
      },
      {
        "japanese": "金閣寺",
        "reading": "きんかくじ",
        "english": "Kinkaku-ji Golden Pavilion",
        "category": "Sight"
      },
      {
        "japanese": "富士山",
        "reading": "ふじさん",
        "english": "Mt. Fuji",
        "category": "Sight"
      },
      {
        "japanese": "姫路城",
        "reading": "ひめじじょう",
        "english": "Himeji Castle",
        "category": "Sight"
      },
      {
        "japanese": "東大寺",
        "reading": "とうだいじ",
        "english": "Todai-ji Great Buddha Temple",
        "category": "Sight"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 13,
    "title": "Desires & Purpose of Movement (欲しい/〜たい)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "わたしは 車が 欲しいです。",
        "reading": "わたしは くるまが ほしいです。",
        "english": "I want a car."
      },
      {
        "japanese": "わたしは すしを 食べたいです。",
        "reading": "わたしは すしを たべたいです。",
        "english": "I want to eat some sushi."
      },
      {
        "japanese": "わたしは フランスへ 料理を 習いに 行きます。",
        "reading": "わたしは ふらんすへ りょうりを ならいに いきます。",
        "english": "I'm going to France to learn cooking."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "今 何が いちばん 欲しいですか。……新しい ケータイが 欲しいです。",
        "reading": "いま なにが いちばん ほしいですか。……あたらしい けーたいが ほしいです。",
        "english": "What do you want most right now? ……[I want] a new mobile phone."
      },
      {
        "japanese": "夏休みに どこへ 行きたいですか。……沖縄へ 行きたいです。",
        "reading": "なつやすみに どこへ いきたいですか。……おきなわへ いきたいです。",
        "english": "Where do you want to go for summer vacation? ……Okinawa."
      },
      {
        "japanese": "きょうは 疲れましたから、何も したくないです。……そうですね。",
        "reading": "きょうは つかれましたから、なにも したくないです。……そうですね。",
        "english": "I'm tired today, so I don't want to do anything. ……Understandable."
      },
      {
        "japanese": "週末は 何を しますか。……子どもと 神戸へ 船を 見に 行きます。",
        "reading": "しゅうまつは なにを しますか。……こどもと こうべへ ふねを みに いきます。",
        "english": "What are you doing this weekend? ……I'm going to Kobe with my child to see ships."
      },
      {
        "japanese": "日本へ 何の 勉強に 来ましたか。……美術の 勉強に 来ました。",
        "reading": "にほんへ なんの べんきょうに きましたか。……びじゅつの べんきょうに きました。",
        "english": "What did you come to Japan to study? ……I came to study art."
      },
      {
        "japanese": "冬休み どこか 行きましたか。……はい、北海道へ スキーに 行きました。",
        "reading": "ふゆやすみ どこか いきましたか。……はい、ほっかいどうへ すきーに いきます。",
        "english": "Did you go anywhere during winter break? ……Yes, skiing in Hokkaido."
      }
    ],
    "conversation": {
      "title": "別々に お願いします (Separately, please)",
      "situation": "Yamada and Miller order lunch at Tsuruya restaurant",
      "characters": [
        "山田",
        "ミラー",
        "店員",
        "レジ係"
      ],
      "lines": [
        {
          "speaker": "山田",
          "japanese": "もう 12時ですよ。昼ごはんを 食べに 行きませんか。",
          "reading": "もう じゅうにじですよ。ひるごはんを たべに いきませんか。",
          "english": "It's 12 o'clock already. Shall we go and have lunch?"
        },
        {
          "speaker": "ミラー",
          "japanese": "ええ。何が いいですか。",
          "reading": "ええ。なにが いいですか。",
          "english": "Yes. What would you like?"
        },
        {
          "speaker": "山田",
          "japanese": "そうですね。日本料理が いいですね。つるやへ 行きましょう。",
          "reading": "そうですね。にほんりょうりが いいですね。つるやへ いきましょう。",
          "english": "Let's see. Japanese food sounds nice. Let's go to Tsuruya."
        },
        {
          "speaker": "店員",
          "japanese": "ご注文は？",
          "reading": "ごちゅうもんは？",
          "english": "May I take your order?"
        },
        {
          "speaker": "ミラー",
          "japanese": "わたしは 天ぷら定食を お願いします。",
          "reading": "わたしは てんぷらていしょくを おねがいします。",
          "english": "The tempura special for me, please."
        },
        {
          "speaker": "山田",
          "japanese": "わたしは 牛どんを ください。",
          "reading": "わたしは ぎゅうどんを ください。",
          "english": "And I'll have the beef bowl."
        },
        {
          "speaker": "レジ係",
          "japanese": "1,680円で ございます。",
          "reading": "せんろっぴゃくはちじゅうえんで ございます。",
          "english": "That's 1,680 yen."
        },
        {
          "speaker": "ミラー",
          "japanese": "すみません、別々に お願いします。",
          "reading": "すみません、べつべつに おねがいします。",
          "english": "Excuse me, could we pay separately, please?"
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "のどが かわきます（かわきました）",
        "reading": "のどが かわきます",
        "english": "get thirsty (I am thirsty)"
      },
      {
        "japanese": "おなかが すきます（すきました）",
        "reading": "おなかが すきます",
        "english": "get hungry (I am hungry)"
      },
      {
        "japanese": "そう しましょう。",
        "reading": "そう しましょう。",
        "english": "Let's do that."
      },
      {
        "japanese": "ご注文は？",
        "reading": "ごちゅうもんは？",
        "english": "May I take your order?"
      },
      {
        "japanese": "別々に",
        "reading": "べつべつに",
        "english": "separately"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. N が 欲しいです",
        "explanation": "Expresses desire for a noun (marked by が). Negative: 欲しくないです.",
        "examples": [
          {
            "japanese": "車が 欲しいです。",
            "reading": "くるまが ほしいです。",
            "english": "I want a car."
          }
        ]
      },
      {
        "title": "2. Vます-form たいです",
        "explanation": "Expresses desire to do an action. Direct object can take を or が.",
        "examples": [
          {
            "japanese": "すしを 食べたいです。",
            "reading": "すしを たべたいです。",
            "english": "I want to eat sushi."
          }
        ]
      },
      {
        "title": "3. N（place）へ Vます-form / N に 行きます／来ます／帰ります",
        "explanation": "Indicates the purpose of going/coming/returning.",
        "examples": [
          {
            "japanese": "神戸へ インド料理を 食べに 行きます。",
            "reading": "こうべへ いんどりょうりを たべに いきます。",
            "english": "I'm going to Kobe to eat Indian food."
          }
        ]
      }
    ],
    "usefulInfoTitle": "町の中 (Town & Facilities)",
    "usefulInfo": [
      {
        "japanese": "市役所",
        "reading": "しやくしょ",
        "english": "city hall",
        "category": "Town"
      },
      {
        "japanese": "交番",
        "reading": "こうばん",
        "english": "police box",
        "category": "Town"
      },
      {
        "japanese": "映画館",
        "reading": "えいがかん",
        "english": "cinema",
        "category": "Town"
      },
      {
        "japanese": "動物園",
        "reading": "どうぶつえん",
        "english": "zoo",
        "category": "Town"
      },
      {
        "japanese": "植物園",
        "reading": "しょくぶつえん",
        "english": "botanical garden",
        "category": "Town"
      },
      {
        "japanese": "お寺",
        "reading": "おてら",
        "english": "Buddhist temple",
        "category": "Town"
      },
      {
        "japanese": "神社",
        "reading": "じんじゃ",
        "english": "Shinto shrine",
        "category": "Town"
      },
      {
        "japanese": "肉屋",
        "reading": "にくや",
        "english": "butcher's",
        "category": "Shop"
      },
      {
        "japanese": "八百屋",
        "reading": "やおや",
        "english": "greengrocer's",
        "category": "Shop"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 14,
    "title": "Te-Form Verbs & Requests (〜てください)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "ちょっと 待って ください。",
        "reading": "ちょっと まって ください。",
        "english": "Just a moment, please."
      },
      {
        "japanese": "荷物を 持ちましょうか。",
        "reading": "にもつを もちましょうか。",
        "english": "Shall I carry your bag?"
      },
      {
        "japanese": "ミラーさんは 今 電話を かけて います。",
        "reading": "みらーさんは いま でんわを かけて います。",
        "english": "Mr. Miller's making a phone call now."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "ボールペンで 名前を 書いて ください。……はい、わかりました。",
        "reading": "ぼーるぺんで なまえを かいて ください。……はい、わかりました。",
        "english": "Please write your name with a ballpoint pen. ……Yes, OK."
      },
      {
        "japanese": "すみませんが、この 漢字の 読み方を 教えて ください。……「じゅうしょ」ですよ。",
        "reading": "すみませんが、この かんじの よみかたを おしえて ください。……「じゅうしょ」ですよ。",
        "english": "Could you tell me how to read this kanji? ……It's 'jusho'."
      },
      {
        "japanese": "暑いですね。窓を 開けましょうか。……ええ、お願いします。",
        "reading": "あついですね。まどを あけましょうか。……ええ、おねがいします。",
        "english": "Hot, isn’t it? Shall I open the window? ……Yes, please."
      },
      {
        "japanese": "駅まで 迎えに 行きましょうか。……いいえ、けっこうです。タクシーで 行きますから。",
        "reading": "えきまで むかえに いきましょうか。……いいえ、けっこうです。たくしーで いきますから。",
        "english": "Shall I come meet you at the station? ……No, it's fine. I'll take a taxi."
      },
      {
        "japanese": "佐藤さんは どこですか。……今 会議室で 松本さんと 話して います。",
        "reading": "さとうさんは どこですか。……いま かいぎしつで まつもとさんと はなして います。",
        "english": "Where's Ms. Sato? ……She's in the meeting room talking to Mr. Matsumoto."
      },
      {
        "japanese": "今 雨が 降って いますか。……いいえ、降って いません。",
        "reading": "いま あめが ふって いますか。……いいえ、ふって いません。",
        "english": "Is it raining now? ……No, it isn't."
      }
    ],
    "conversation": {
      "title": "みどり町まで お願いします (To Midoricho, please)",
      "situation": "Karina directs a taxi driver to her destination",
      "characters": [
        "カリナ",
        "運転手"
      ],
      "lines": [
        {
          "speaker": "カリナ",
          "japanese": "みどり町まで お願いします。",
          "reading": "みどりちょうまで おねがいします。",
          "english": "To Midoricho, please."
        },
        {
          "speaker": "運転手",
          "japanese": "はい。",
          "reading": "はい。",
          "english": "OK."
        },
        {
          "speaker": "カリナ",
          "japanese": "すみません。あの 信号を 右へ 曲がって ください。",
          "reading": "すみません。あの しんごうを みぎへ まがって ください。",
          "english": "Excuse me. Please turn right at those traffic lights."
        },
        {
          "speaker": "運転手",
          "japanese": "右ですね。",
          "reading": "みぎですね。",
          "english": "Right, yes?"
        },
        {
          "speaker": "カリナ",
          "japanese": "ええ。まっすぐ 行って ください。あの 花屋の前で 止めて ください。",
          "reading": "ええ。まっすぐ いって ください。あの はなやのまえで とめて ください。",
          "english": "Yes. Go straight on, please. Please stop in front of that flower shop."
        },
        {
          "speaker": "運転手",
          "japanese": "はい。1,800円です。",
          "reading": "はい。せんはっぴゃくえんです。",
          "english": "OK. It's 1,800 yen."
        },
        {
          "speaker": "カリナ",
          "japanese": "これで お願いします。",
          "reading": "これで おねがいします。",
          "english": "I'd like to pay with this (5,000 yen)."
        },
        {
          "speaker": "運転手",
          "japanese": "3,200円の お釣りです。ありがとう ございました。",
          "reading": "さんぜんにひゃくえんの おつりです。ありがとう ございました。",
          "english": "Here's 3,200 yen change. Thank you."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "さあ",
        "reading": "さあ",
        "english": "right / come on (encouraging action)"
      },
      {
        "japanese": "あれ？",
        "reading": "あれ？",
        "english": "Oh? Eh? (in surprise)"
      },
      {
        "japanese": "これで お願いします。",
        "reading": "これで おねがいします。",
        "english": "I'd like to pay with this."
      },
      {
        "japanese": "お釣り",
        "reading": "おつり",
        "english": "change (money)"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Verb Groups & Te-form (て形)",
        "explanation": "Group 1: い/ち/り→って, み/び/に→んで, き→いて, ぎ→いで, し→して, 行く→いって. Group 2: drop ます + て. Group 3: して, きて.",
        "examples": [
          {
            "japanese": "かきます→かいて、たべます→たべて、きます→きて",
            "reading": "かきます→かいて、たべます→たべて、きます→きて",
            "english": "write, eat, come in te-form"
          }
        ]
      },
      {
        "title": "2. Vて-form ください",
        "explanation": "Polite request to do an action (\"Please do...\").",
        "examples": [
          {
            "japanese": "名前を 書いて ください。",
            "reading": "なまえを かいて ください。",
            "english": "Please write your name."
          }
        ]
      },
      {
        "title": "3. Vて-form います (Action in Progress)",
        "explanation": "Action currently in progress (e.g. 電話をかけています).",
        "examples": [
          {
            "japanese": "雨が 降って います。",
            "reading": "あめが ふって います。",
            "english": "It's raining."
          }
        ]
      },
      {
        "title": "4. Vます-form ましょうか (Shall I...?)",
        "explanation": "Offering assistance to the listener.",
        "examples": [
          {
            "japanese": "荷物を 持ちましょうか。",
            "reading": "にもつを もちましょうか。",
            "english": "Shall I carry your luggage?"
          }
        ]
      }
    ],
    "usefulInfoTitle": "駅 (Train Station)",
    "usefulInfo": [
      {
        "japanese": "切符売り場",
        "reading": "きっぷうりば",
        "english": "ticket office",
        "category": "Station"
      },
      {
        "japanese": "自動券売機",
        "reading": "じどうけんばいき",
        "english": "ticket vending machine",
        "category": "Station"
      },
      {
        "japanese": "改札口",
        "reading": "かいさつぐち",
        "english": "ticket barrier / gate",
        "category": "Station"
      },
      {
        "japanese": "精算機",
        "reading": "せいさんき",
        "english": "fare adjustment machine",
        "category": "Station"
      },
      {
        "japanese": "時刻表",
        "reading": "じこくひょう",
        "english": "timetable",
        "category": "Station"
      },
      {
        "japanese": "定期券",
        "reading": "ていきけん",
        "english": "commuter pass",
        "category": "Station"
      },
      {
        "japanese": "往復",
        "reading": "おうふく",
        "english": "round trip",
        "category": "Station"
      },
      {
        "japanese": "片道",
        "reading": "かたみち",
        "english": "one way",
        "category": "Station"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 15,
    "title": "Permission & Prohibition (〜てもいいです/〜てはいけません)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "写真を 撮っても いいですか。",
        "reading": "しゃしんを とっても いいですか。",
        "english": "Is it all right to take photographs?"
      },
      {
        "japanese": "サントスさんは 電子辞書を 持って います。",
        "reading": "さんとすさんは でんしじしょを もって います。",
        "english": "Mr. Santos has an electronic dictionary."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "この カタログを もらっても いいですか。……ええ、いいですよ。どうぞ。",
        "reading": "この かたろぐを もらっても いいですか。……ええ、いいですよ。どうぞ。",
        "english": "May I have this catalogue? ……Yes, help yourself."
      },
      {
        "japanese": "この 辞書を 借りても いいですか。……すみません、今 使って いますから……。",
        "reading": "この じしょを かりても いいですか。……すみません、いま つかって いますから……。",
        "english": "May I borrow this dictionary? ……Sorry, I'm using it now."
      },
      {
        "japanese": "ここで 遊んでは いけません。……はい、わかりました。",
        "reading": "ここで あそんでは いけません。……はい、わかりました。",
        "english": "You mustn't play here. ……Yes, understood."
      },
      {
        "japanese": "市役所の 電話番号を 知って いますか。……いいえ、知りません。",
        "reading": "しやくしょの でんわばんごうを しって いますか。……いいえ、しりません。",
        "english": "Do you know City Hall's number? ……No, I don't."
      },
      {
        "japanese": "マリアさんは どこに 住んで いますか。……大阪に 住んで います。",
        "reading": "まりあさんは どこに すんで いますか。……おおさかに すんで います。",
        "english": "Where does Maria live? ……She lives in Osaka."
      },
      {
        "japanese": "ワンさんは 結婚して いますか。……いいえ、独身です。",
        "reading": "わんさんは けっこんして いますか。……いいえ、どくしんです。",
        "english": "Is Mr. Wang married? ……No, he's single."
      },
      {
        "japanese": "お仕事は 何を して いますか。……高校の 先生です。英語を 教えて います。",
        "reading": "おしごとは なにを して いますか。……こうこうの せんせいです。えいごを おしえて います。",
        "english": "What work do you do? ……I'm a high school teacher teaching English."
      }
    ],
    "conversation": {
      "title": "ご家族は？ (What family do you have?)",
      "situation": "Miller and Kimura talk about their families",
      "characters": [
        "木村",
        "ミラー"
      ],
      "lines": [
        {
          "speaker": "木村",
          "japanese": "おもしろい 映画でしたね。",
          "reading": "おもしろい えいがでしたね。",
          "english": "Good film, wasn't it?"
        },
        {
          "speaker": "ミラー",
          "japanese": "ええ。家族を 思い出しました。",
          "reading": "ええ。かぞくを おもいだしました。",
          "english": "Yes. It made me think of my family."
        },
        {
          "speaker": "木村",
          "japanese": "そうですか。ミラーさんの ご家族は？",
          "reading": "そうですか。みらーさんの ごかぞくは？",
          "english": "Oh? What family do you have, Mr. Miller?"
        },
        {
          "speaker": "ミラー",
          "japanese": "両親と 姉が 1人 います。",
          "reading": "りょうしんと あねが ひとり います。",
          "english": "My parents and one elder sister."
        },
        {
          "speaker": "木村",
          "japanese": "どちらに いらっしゃいますか。",
          "reading": "どちらに いらっしゃいますか。",
          "english": "Where are they?"
        },
        {
          "speaker": "ミラー",
          "japanese": "両親は ニューヨークの 近くに 住んで います。姉は ロンドンで 働いて います。",
          "reading": "りょうしんは にゅーよーくの ちかくに すんで います。あねは ろんどんで はたらいて います。",
          "english": "My parents live near New York. My sister works in London."
        },
        {
          "speaker": "木村",
          "japanese": "わたしの 父は 銀行員で、母は 高校で 英語を 教えて います。",
          "reading": "わたしの ちちは ぎんこういんで、ははは こうこうで えいごを おしえて います。",
          "english": "My father is a bank official, and my mother teaches English."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "皆さん",
        "reading": "みなさん",
        "english": "Ladies and Gentlemen, everyone"
      },
      {
        "japanese": "思い出します",
        "reading": "おもいだします",
        "english": "remember, recall"
      },
      {
        "japanese": "いらっしゃいます",
        "reading": "いらっしゃいます",
        "english": "be (honorific equivalent of います)"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Vて-form も いいですか (May I...?)",
        "explanation": "Asking for permission to perform an action.",
        "examples": [
          {
            "japanese": "写真を 撮っても いいですか。",
            "reading": "しゃしんを とっても いいですか。",
            "english": "May I take a photo?"
          }
        ]
      },
      {
        "title": "2. Vて-form は いけません (Prohibition)",
        "explanation": "Expresses strong prohibition (\"You must not...\").",
        "examples": [
          {
            "japanese": "ここで たばこを 吸っては いけません。",
            "reading": "ここで たばこを すっては いけません。",
            "english": "You must not smoke here."
          }
        ]
      },
      {
        "title": "3. Vて-form います (Resulting State / Habitual Action)",
        "explanation": "Used for enduring states: 結婚しています, 住んでいます, 知っています (neg: 知りません).",
        "examples": [
          {
            "japanese": "大阪に 住んで います。",
            "reading": "おおさかに すんで います。",
            "english": "I live in Osaka."
          }
        ]
      }
    ],
    "usefulInfoTitle": "職業 (Occupations)",
    "usefulInfo": [
      {
        "japanese": "会社員",
        "reading": "かいしゃいん",
        "english": "company employee",
        "category": "Occupation"
      },
      {
        "japanese": "公務員",
        "reading": "こうむいん",
        "english": "civil servant",
        "category": "Occupation"
      },
      {
        "japanese": "駅員",
        "reading": "えきいん",
        "english": "station attendant",
        "category": "Occupation"
      },
      {
        "japanese": "銀行員",
        "reading": "ぎんこういん",
        "english": "bank employee",
        "category": "Occupation"
      },
      {
        "japanese": "調理師",
        "reading": "ちょうりし",
        "english": "cook, chef",
        "category": "Occupation"
      },
      {
        "japanese": "弁護士",
        "reading": "べんごし",
        "english": "lawyer",
        "category": "Occupation"
      },
      {
        "japanese": "医者 / 看護師",
        "reading": "いしゃ / かんごし",
        "english": "doctor / nurse",
        "category": "Occupation"
      },
      {
        "japanese": "運転手",
        "reading": "うんてんしゅ",
        "english": "driver",
        "category": "Occupation"
      },
      {
        "japanese": "警察官",
        "reading": "けいさつかん",
        "english": "police officer",
        "category": "Occupation"
      },
      {
        "japanese": "エンジニア",
        "reading": "えんじにあ",
        "english": "engineer",
        "category": "Occupation"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 16,
    "title": "Connecting Actions, After Doing (〜てから)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "朝 ジョギングを して、シャワーを 浴びて、会社へ 行きます。",
        "reading": "あさ じょぎんぐを して、しゃわーを あびて、かいしゃへ いきます。",
        "english": "In the mornings, I go jogging, have a shower, and then go to work."
      },
      {
        "japanese": "コンサートが 終わってから、レストランで 食事しました。",
        "reading": "こんさーとが おわってから、れすとらんで しょくじしました。",
        "english": "After the concert was over, we had a meal in a restaurant."
      },
      {
        "japanese": "大阪は 食べ物が おいしいです。",
        "reading": "おおさかは たべものが おいしいです。",
        "english": "The food in Osaka is very good."
      },
      {
        "japanese": "この 部屋は 広くて、明るいです。",
        "reading": "この へやは ひろくて、あかるいです。",
        "english": "This room is big and bright."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "きのう 何を しましたか。……図書館へ 行って、本を 借りて、友達に 会いました。",
        "reading": "きのう なにを しましたか。……としょかんへ いって、ほんを かりて、ともだちに あいました。",
        "english": "What did you do yesterday? ……I went to library, borrowed a book, and met friends."
      },
      {
        "japanese": "大学まで どうやって 行きますか。……京都駅から 16番の バスに 乗って、大学前で 降ります。",
        "reading": "だいがくまで どうやって いきますか。……きょうとえきから じゅうろくばんの ばすに のって、だいがくまえで おります。",
        "english": "How do you get to University? ……Take No. 16 bus from Kyoto Station and get off at Daigakumae."
      },
      {
        "japanese": "マリアさんは どの 人ですか。……あの 髪が 長い 人です。",
        "reading": "まりあさんは どの ひとですか。……あの かみが ながい ひとです。",
        "english": "Which is Maria? ……She's the one with long hair over there."
      },
      {
        "japanese": "奈良は どんな 町ですか。……静かで、きれいな 町です。",
        "reading": "ならは どんな まちですか。……しずかで、きれいな まちです。",
        "english": "What sort of city is Nara? ……It's a quiet, beautiful city."
      }
    ],
    "conversation": {
      "title": "使い方を 教えて ください (Please show me how to use it)",
      "situation": "Maria learns how to use a cash machine (ATM)",
      "characters": [
        "マリア",
        "銀行員"
      ],
      "lines": [
        {
          "speaker": "マリア",
          "japanese": "すみません。これの 使い方を 教えて ください。",
          "reading": "すみません。これの つかいかたを おしえて ください。",
          "english": "Excuse me, could you show me how to use this, please?"
        },
        {
          "speaker": "銀行員",
          "japanese": "お引き出しですか。",
          "reading": "おひきだしですか。",
          "english": "Are you making a withdrawal?"
        },
        {
          "speaker": "マリア",
          "japanese": "そうです。",
          "reading": "そうです。",
          "english": "Yes."
        },
        {
          "speaker": "銀行員",
          "japanese": "まず ここを 押して ください。キャッシュカードを 入れて、暗証番号を 押して ください。",
          "reading": "まず ここを おして ください。きゃっしゅかーどを いれて、あんしょうばんごうを おして ください。",
          "english": "First press here. Insert your cash card and type your PIN."
        },
        {
          "speaker": "マリア",
          "japanese": "はい。",
          "reading": "はい。",
          "english": "OK."
        },
        {
          "speaker": "銀行員",
          "japanese": "金額を 押して、「円」ボタンを 押して ください。そして 「確認」を 押します。",
          "reading": "きんがくを おして、「えん」ぼたんを おして ください。そして 「かくにん」を おします。",
          "english": "Press the amount, press 'Yen', then press 'Confirm'."
        },
        {
          "speaker": "マリア",
          "japanese": "わかりました。どうも ありがとう ございます。",
          "reading": "わかりました。どうも ありがとう ございます。",
          "english": "I understand. Thank you very much."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "すごいですね。",
        "reading": "すごいですね。",
        "english": "That's amazing!"
      },
      {
        "japanese": "［いいえ、］まだまだです。",
        "reading": "［いいえ、］まだまだです。",
        "english": "[No,] I still have a long way to go."
      },
      {
        "japanese": "お引き出し",
        "reading": "おひきだし",
        "english": "withdrawal"
      },
      {
        "japanese": "暗証番号",
        "reading": "あんしょうばんごう",
        "english": "PIN (personal identification number)"
      },
      {
        "japanese": "確認",
        "reading": "かくにん",
        "english": "confirmation"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. V1て、V2て、V3 (Successive Actions)",
        "explanation": "Lists actions in chronological order.",
        "examples": [
          {
            "japanese": "ジョギングをして、シャワーを浴びます。",
            "reading": "じょぎんぐをして、しゃわーをあびます。",
            "english": "I jog and take a shower."
          }
        ]
      },
      {
        "title": "2. い-adj (～くて) / な-adj (～で) / N で",
        "explanation": "Connecting adjectives and nouns: やすくて おいしい (cheap and delicious), しずかで きれい (quiet and clean).",
        "examples": [
          {
            "japanese": "若くて、元気です。",
            "reading": "わかくて、げんきです。",
            "english": "Young and energetic."
          }
        ]
      },
      {
        "title": "3. V1 て-form から、V2 (After doing V1)",
        "explanation": "Action V2 is done after completing V1 as precondition.",
        "examples": [
          {
            "japanese": "お金を 入れてから、ボタンを 押して ください。",
            "reading": "おかねを いれてから、ぼたんを おして ください。",
            "english": "Put money in, and then press button."
          }
        ]
      },
      {
        "title": "4. N1 は N2 が Adj",
        "explanation": "Topic N1 has feature N2 that is Adj (e.g. マリアさんは 髪が 長いです).",
        "examples": [
          {
            "japanese": "マリアさんは 髪が 長いです。",
            "reading": "まりあさんは かみが ながいです。",
            "english": "Maria has long hair."
          }
        ]
      }
    ],
    "usefulInfoTitle": "ATMの使い方 (How to Use a Cash Machine)",
    "usefulInfo": [
      {
        "japanese": "お預け入れ",
        "reading": "おあずけいれ",
        "english": "deposit",
        "category": "Banking"
      },
      {
        "japanese": "お引き出し",
        "reading": "おひきだし",
        "english": "withdrawal",
        "category": "Banking"
      },
      {
        "japanese": "お振り込み",
        "reading": "おふりこみ",
        "english": "transfer (payment)",
        "category": "Banking"
      },
      {
        "japanese": "通帳記入",
        "reading": "つうちょうきにゅう",
        "english": "passbook update",
        "category": "Banking"
      },
      {
        "japanese": "残高照会",
        "reading": "ざんだかしょうかい",
        "english": "balance inquiry",
        "category": "Banking"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 17,
    "title": "Nai-Form & Obligations (〜なければなりません)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "写真を 撮らないで ください。",
        "reading": "しゃしんを とらないで ください。",
        "english": "Please don't take photographs."
      },
      {
        "japanese": "パスポートを 見せなければ なりません。",
        "reading": "ぱすぽーとを みせなければ なりません。",
        "english": "You have to show your passport."
      },
      {
        "japanese": "日曜日は 早く 起きなくても いいです。",
        "reading": "にちようびは はやく おきなくても いいです。",
        "english": "I don't have to get up early on Sundays."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "そこに 車を 止めないで ください。……すみません。",
        "reading": "そこに くるまを とめないで ください。……すみません。",
        "english": "Please don't park there. ……Sorry."
      },
      {
        "japanese": "もう 12時ですよ。一人で 大丈夫ですか。……心配しないで ください。タクシーで 帰りますから。",
        "reading": "もう じゅうにじですよ。ひとりでお だいじょうぶですか。……しんぱいしないで ください。たくしーで かえりますから。",
        "english": "It's midnight. Will you be alright alone? ……Don't worry, I'll take a taxi."
      },
      {
        "japanese": "今晩 飲みに行きませんか。……すみません。あした 香港へ 出張しなければ なりませんから、早く 帰ります。",
        "reading": "こんばん のみにいきませんか。……すみません。あした ほんこんへ しゅっちょうしなければ なりませんから、はやく かえります。",
        "english": "Go for drink tonight? ……Sorry, I must go on business trip tomorrow, so I have to go home early."
      },
      {
        "japanese": "子どもも お金を 払わなければ なりませんか。……いいえ、払わなくても いいです。",
        "reading": "こどもも おかねを はらわなければ なりませんか。……いいえ、はらわなくても いいです。",
        "english": "Do children have to pay too? ……No, they don't have to."
      },
      {
        "japanese": "レポートは いつまでに 出さなければ なりませんか。……金曜日までに 出して ください。",
        "reading": "れぽーとは いつまでに ださなければ なりませんか。……きんようびまでに だして ください。",
        "english": "When does the report have to be submitted by? ……By Friday, please."
      }
    ],
    "conversation": {
      "title": "どう しましたか (What seems to be the matter?)",
      "situation": "Matsumoto visits the doctor due to illness",
      "characters": [
        "医者",
        "松本"
      ],
      "lines": [
        {
          "speaker": "医者",
          "japanese": "どう しましたか。",
          "reading": "どう しましたか。",
          "english": "What seems to be the matter?"
        },
        {
          "speaker": "松本",
          "japanese": "きのうから のどが 痛くて、熱も 少し あります。",
          "reading": "きのうから のどが いたくて、ねつも すこし あります。",
          "english": "I've had a sore throat since yesterday, and a slight fever."
        },
        {
          "speaker": "医者",
          "japanese": "そうですか。ちょっと 口を 開けて ください。",
          "reading": "そうですか。ちょっと くちを あけて ください。",
          "english": "I see. Open your mouth a moment, please."
        },
        {
          "speaker": "医者",
          "japanese": "風邪ですね。2、3日 ゆっくり 休んで ください。",
          "reading": "かぜですね。に、さんにち ゆっくり やすんで ください。",
          "english": "You've caught a cold. Please take it easy for two or three days."
        },
        {
          "speaker": "松本",
          "japanese": "あのう、あしたから 東京へ 出張しなければ なりませんが……。",
          "reading": "あのう、あしたから とうきょうへ しゅっちょうしなければ なりませんが……。",
          "english": "Umm, I have to go to Tokyo on business from tomorrow..."
        },
        {
          "speaker": "医者",
          "japanese": "薬を 飲んで、きょうは 早く 寝て ください。お風呂に 入らないで くださいね。",
          "reading": "くすりを のんで、きょうは はやく ねて ください。おふろに はいらないで くださいね。",
          "english": "Take medicine, sleep early today, and please don't take a bath tonight."
        },
        {
          "speaker": "松本",
          "japanese": "はい、わかりました。",
          "reading": "はい、わかりました。",
          "english": "Yes, I understand."
        },
        {
          "speaker": "医者",
          "japanese": "じゃ、お大事に。",
          "reading": "じゃ、おだいじに。",
          "english": "Take care of yourself."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "どう しましたか。",
        "reading": "どう しましたか。",
        "english": "What's the matter?"
      },
      {
        "japanese": "［～が］痛いです。",
        "reading": "［～が］いたいです。",
        "english": "I have a pain [in my ~]."
      },
      {
        "japanese": "お大事に。",
        "reading": "おだいじに。",
        "english": "Take care of yourself (to ill person)."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Vない-form (ない形)",
        "explanation": "Group 1: change い-column to あ-column + ない (かかない). Group 2: drop ます + ない. Group 3: しない, こない.",
        "examples": [
          {
            "japanese": "かきます→かかない、たべます→たべない",
            "reading": "かきます→かかない、たべます→たべない",
            "english": "write / eat in negative plain form"
          }
        ]
      },
      {
        "title": "2. Vない-form ないで ください",
        "explanation": "Polite negative request (\"Please do not...\").",
        "examples": [
          {
            "japanese": "写真を 撮らないで ください。",
            "reading": "しゃしんを とらないで ください。",
            "english": "Please don't take photos."
          }
        ]
      },
      {
        "title": "3. Vない-form なければ なりません",
        "explanation": "Expresses obligation or necessity (\"Must do...\").",
        "examples": [
          {
            "japanese": "薬を 飲まなければ なりません。",
            "reading": "くすりを のまなければ なりません。",
            "english": "I must take medicine."
          }
        ]
      },
      {
        "title": "4. Vない-form なくても いいです",
        "explanation": "Expresses absence of obligation (\"Do not have to...\").",
        "examples": [
          {
            "japanese": "あした 来なくても いいです。",
            "reading": "あした こなくても いいです。",
            "english": "You don't have to come tomorrow."
          }
        ]
      }
    ],
    "usefulInfoTitle": "体・病気 (Body and Illness)",
    "usefulInfo": [
      {
        "japanese": "頭が 痛い",
        "reading": "あたまが いたい",
        "english": "headache",
        "category": "Symptom"
      },
      {
        "japanese": "おなかが 痛い",
        "reading": "おなかが いたい",
        "english": "stomachache",
        "category": "Symptom"
      },
      {
        "japanese": "熱が あります",
        "reading": "ねつが あります",
        "english": "fever",
        "category": "Symptom"
      },
      {
        "japanese": "せきが 出ます",
        "reading": "せきが でます",
        "english": "cough",
        "category": "Symptom"
      },
      {
        "japanese": "鼻水が 出ます",
        "reading": "はなみずが でます",
        "english": "runny nose",
        "category": "Symptom"
      },
      {
        "japanese": "風邪",
        "reading": "かぜ",
        "english": "cold, flu",
        "category": "Illness"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 18,
    "title": "Dictionary Form & Ability (〜ことができます/趣味)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "ミラーさんは 漢字を 読む ことが できます。",
        "reading": "みらーさんは かんじを よむ ことが できます。",
        "english": "Mr. Miller can read kanji."
      },
      {
        "japanese": "わたしの 趣味は 映画を 見る ことです。",
        "reading": "わたしの しゅみは えいがを みる ことです。",
        "english": "My hobby is watching films."
      },
      {
        "japanese": "寝る まえに、日記を 書きます。",
        "reading": "ねる まえに、にっきを かきます。",
        "english": "I always write in my diary before I sleep."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "車の 運転が できますか。……はい、できます。",
        "reading": "くるまの うんてんが できますか。……はい、できます。",
        "english": "Can you drive? ……Yes, I can."
      },
      {
        "japanese": "自転車に 乗る ことが できますか。……いいえ、できません。",
        "reading": "じてんしゃに のる ことが できますか。……いいえ、できません。",
        "english": "Can you ride a bicycle? ……No, I can't."
      },
      {
        "japanese": "カードで 払う ことが できますか。……すみません、現金で お願いします。",
        "reading": "かーどで はらう ことが できますか。……すみません、げんきんで おねがいします。",
        "english": "Can I pay by card? ……Sorry, cash only please."
      },
      {
        "japanese": "趣味は 何ですか。……古い 時計を 集める ことです。",
        "reading": "しゅみは なんですか。……ふるい とけいを あつめる ことです。",
        "english": "What is your hobby? ……Collecting old clocks."
      },
      {
        "japanese": "食事の まえに、手を 洗います。……はい、わかりました。",
        "reading": "しょくじの まえに、てを あらいます。……はい、わかりました。",
        "english": "Wash hands before eating. ……Yes."
      }
    ],
    "conversation": {
      "title": "趣味は 何ですか (What are your hobbies?)",
      "situation": "Yamada and Santos discuss photography and horses in Hokkaido",
      "characters": [
        "山田",
        "サントス"
      ],
      "lines": [
        {
          "speaker": "山田",
          "japanese": "サントスさんの 趣味は 何ですか。",
          "reading": "さんとすさんの しゅみは なんですか。",
          "english": "What are your hobbies, Mr. Santos?"
        },
        {
          "speaker": "サントス",
          "japanese": "写真です。",
          "reading": "しゃしんです。",
          "english": "Photography."
        },
        {
          "speaker": "山田",
          "japanese": "どんな 写真を 撮りますか。",
          "reading": "どんな しゃしんを とりますか。",
          "english": "What kind of photos do you take?"
        },
        {
          "speaker": "サントス",
          "japanese": "動物の 写真です。特に 馬が 好きです。",
          "reading": "どうぶつの しゃしんです。とくに うまが すきです。",
          "english": "Animal photos. I particularly like horses."
        },
        {
          "speaker": "山田",
          "japanese": "へえ、おもしろいですね。日本で 馬を 見ましたか。",
          "reading": "へえ、おもしろいですね。にほんで うまを みましたか。",
          "english": "Really? How interesting! Seen horses in Japan?"
        },
        {
          "speaker": "サントス",
          "japanese": "いいえ。日本では なかなか 馬を 見る ことが できません。",
          "reading": "いいえ。にほんでは なかなか うまを みる ことが できません。",
          "english": "No. You don't see many horses easily in Japan."
        },
        {
          "speaker": "山田",
          "japanese": "北海道に 馬が たくさん いますよ。",
          "reading": "ほっかいどうに うまが たくさん いますよ。",
          "english": "There are a lot of horses in Hokkaido!"
        },
        {
          "speaker": "サントス",
          "japanese": "本当ですか。じゃ、夏休みに ぜひ 行きたいです。",
          "reading": "ほんとうですか。じゃ、なつやすみに ぜひ いきたいです。",
          "english": "Really? Then I definitely want to go in summer."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "特に",
        "reading": "とくに",
        "english": "especially, particularly"
      },
      {
        "japanese": "へえ",
        "reading": "へえ",
        "english": "What! Really! (surprise)"
      },
      {
        "japanese": "なかなか",
        "reading": "なかなか",
        "english": "not easily (with negative)"
      },
      {
        "japanese": "ぜひ",
        "reading": "ぜひ",
        "english": "by all means, definitely"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Dictionary Form of Verbs (辞書形)",
        "explanation": "Group 1: い-column → う-column (かく, のむ). Group 2: drop ます + る (たべる). Group 3: する, くる.",
        "examples": [
          {
            "japanese": "かきます→かく、たべます→たべる、します→する",
            "reading": "かきます→かく、たべます→たべる、します→する",
            "english": "dictionary forms"
          }
        ]
      },
      {
        "title": "2. V-dict ことが できます (Can do / Ability)",
        "explanation": "Expresses potential or ability with verbs.",
        "examples": [
          {
            "japanese": "漢字を 読む ことが できます。",
            "reading": "かんじを よむ ことが できます。",
            "english": "I can read kanji."
          }
        ]
      },
      {
        "title": "3. わたしの 趣味は V-dict ことです",
        "explanation": "Expresses hobbies by nominalizing the verb with こと.",
        "examples": [
          {
            "japanese": "趣味は 音楽を 聞く ことです。",
            "reading": "しゅみは おんがくを きく ことです。",
            "english": "My hobby is listening to music."
          }
        ]
      },
      {
        "title": "4. V1-dict / Nの まえに、V2 (Before doing...)",
        "explanation": "V2 occurs before V1.",
        "examples": [
          {
            "japanese": "寝る まえに、本を 読みます。",
            "reading": "ねる まえに、ほんを よみます。",
            "english": "I read a book before sleeping."
          }
        ]
      }
    ],
    "usefulInfoTitle": "動き (Actions)",
    "usefulInfo": [
      {
        "japanese": "飛ぶ",
        "reading": "とぶ",
        "english": "fly",
        "category": "Action"
      },
      {
        "japanese": "跳ぶ",
        "reading": "とぶ",
        "english": "jump",
        "category": "Action"
      },
      {
        "japanese": "登る",
        "reading": "のぼる",
        "english": "climb",
        "category": "Action"
      },
      {
        "japanese": "走る",
        "reading": "はしる",
        "english": "run",
        "category": "Action"
      },
      {
        "japanese": "泳ぐ",
        "reading": "およぐ",
        "english": "swim",
        "category": "Action"
      },
      {
        "japanese": "投げる",
        "reading": "なげる",
        "english": "throw",
        "category": "Action"
      },
      {
        "japanese": "押す",
        "reading": "おす",
        "english": "push",
        "category": "Action"
      },
      {
        "japanese": "引く",
        "reading": "ひく",
        "english": "pull",
        "category": "Action"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 19,
    "title": "Ta-Form & Past Experience (〜たことがあります)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "相撲を 見た ことが あります。",
        "reading": "すもうを みた ことが あります。",
        "english": "I've been to see sumo."
      },
      {
        "japanese": "休みの 日は テニスを したり、散歩に 行ったり します。",
        "reading": "やすみの ひは てにすを したり、さんぽに いったり します。",
        "english": "On my days off, I do things like playing tennis and taking walks."
      },
      {
        "japanese": "これから だんだん 暑く なります。",
        "reading": "これから だんだん あつく なります。",
        "english": "It's going to get hotter and hotter from now on."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "北海道へ 行った ことが ありますか。……はい、一度 あります。2年まえに 行きました。",
        "reading": "ほっかいどうへ いった ことが ありますか。……はい、いちど あります。にねんまえに いきました。",
        "english": "Have you ever been to Hokkaido? ……Yes, once, two years ago."
      },
      {
        "japanese": "馬に 乗った ことが ありますか。……いいえ、一度も ありません。でも、乗りたいです。",
        "reading": "うまに のった ことが ありますか。……いいえ、いちども ありません。でも、のりたいです。",
        "english": "Have you ever ridden a horse? ……No, never. But I'd like to."
      },
      {
        "japanese": "冬休みは 何を しましたか。……京都の お寺を 見たり、友達と パーティーを したり しました。",
        "reading": "ふゆやすみは なにを しましたか。……きょうとの おてらを みたり、ともだちと ぱーてぃーを したり しました。",
        "english": "What did you do during winter vacation? ……Visited temples, partied with friends, etc."
      }
    ],
    "conversation": {
      "title": "ダイエットは あしたから します (I’ll start dieting tomorrow)",
      "situation": "Maria and Yoshiko Matsumoto chat over dinner and dessert",
      "characters": [
        "松本良子",
        "マリア"
      ],
      "lines": [
        {
          "speaker": "松本良子",
          "japanese": "乾杯！マリアさん、あまり 食べませんね。",
          "reading": "かんぱい！まりあさん、あまり たべませんね。",
          "english": "Cheers! Maria, you're not eating much?"
        },
        {
          "speaker": "マリア",
          "japanese": "ええ、きのうから ダイエットを して います。",
          "reading": "ええ、きのうから だいえっとを して います。",
          "english": "Yes, I've been dieting since yesterday."
        },
        {
          "speaker": "松本良子",
          "japanese": "そうですか。でも、無理な ダイエットは 体に よくありませんよ。",
          "reading": "そうですか。でも、むりな だいえっとは からだに よくありませんよ。",
          "english": "I see. But excessive dieting isn't good for your health."
        },
        {
          "speaker": "松本良子",
          "japanese": "この アイスクリーム、おいしいですよ。",
          "reading": "この あいすくりーむ、おいしいですよ。",
          "english": "This ice cream is delicious, you know."
        },
        {
          "speaker": "マリア",
          "japanese": "そうですか。……じゃ、いただきます。ダイエットは あしたから します。",
          "reading": "そうですか。……じゃ、いただきます。だいえっとは あしたから します。",
          "english": "Is it? ……Well, I'll take some. I'll start dieting tomorrow."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "乾杯",
        "reading": "かんぱい",
        "english": "Cheers! (Bottoms up)"
      },
      {
        "japanese": "ダイエット",
        "reading": "だいえっと",
        "english": "diet"
      },
      {
        "japanese": "無理［な］",
        "reading": "むり［な］",
        "english": "excessive, impossible"
      },
      {
        "japanese": "体に いい",
        "reading": "からだに いい",
        "english": "good for one's health"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Vた-form (た形)",
        "explanation": "Conjugated identically to て-form by substituting て/で with た/だ (かいた, のんだ, たべた, きた, した).",
        "examples": [
          {
            "japanese": "かいて→かいた、のんで→のんだ",
            "reading": "かいて→かいた、のんで→のんだ",
            "english": "te-form to ta-form"
          }
        ]
      },
      {
        "title": "2. Vた-form ことが あります (Past Experience)",
        "explanation": "Expresses having had the experience of doing something.",
        "examples": [
          {
            "japanese": "馬に 乗った ことが あります。",
            "reading": "うまに のった ことが あります。",
            "english": "I've ridden a horse."
          }
        ]
      },
      {
        "title": "3. V1たり、V2たり します (Representative Actions)",
        "explanation": "Lists representative non-exhaustive actions without strict time order.",
        "examples": [
          {
            "japanese": "テニスを したり、映画を 見たり します。",
            "reading": "てにすを したり、えいがを みたり します。",
            "english": "I do things like play tennis and watch movies."
          }
        ]
      },
      {
        "title": "4. い-adj (～く) / な-adj (～に) / N に なります (Change of State)",
        "explanation": "Indicates becoming or changing into a state (あたたかく なります, 25歳に なります).",
        "examples": [
          {
            "japanese": "寒く なります。元気に なります。",
            "reading": "さむく なります。げんきに なります。",
            "english": "Gets cold. Gets healthy."
          }
        ]
      }
    ],
    "usefulInfoTitle": "伝統文化・娯楽 (Traditional Culture & Entertainment)",
    "usefulInfo": [
      {
        "japanese": "茶道（お茶）",
        "reading": "さどう",
        "english": "tea ceremony",
        "category": "Culture"
      },
      {
        "japanese": "華道（生け花）",
        "reading": "かどう",
        "english": "flower arrangement",
        "category": "Culture"
      },
      {
        "japanese": "書道",
        "reading": "しょどう",
        "english": "calligraphy",
        "category": "Culture"
      },
      {
        "japanese": "歌舞伎",
        "reading": "かぶき",
        "english": "Kabuki",
        "category": "Culture"
      },
      {
        "japanese": "能",
        "reading": "のう",
        "english": "Noh theatre",
        "category": "Culture"
      },
      {
        "japanese": "空手",
        "reading": "からて",
        "english": "karate",
        "category": "Sports"
      },
      {
        "japanese": "盆踊り",
        "reading": "ぼんどおり",
        "english": "Bon dance",
        "category": "Culture"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 20,
    "title": "Casual Style & Informal Speech (普通形)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "サントスさんは パーティーに 来なかった。",
        "reading": "さんとすさんは ぱーてぃーに こなかった。",
        "english": "Mr. Santos didn't come to the party."
      },
      {
        "japanese": "東京は 人が 多い。",
        "reading": "とうきょうは ひとが おおい。",
        "english": "There are a lot of people in Tokyo."
      },
      {
        "japanese": "沖縄の 海は きれいだった。",
        "reading": "おきなわの うみは きれいだった。",
        "english": "The sea in Okinawa was beautiful."
      },
      {
        "japanese": "きょうは わたしの 誕生日だ。",
        "reading": "きょうは わたしの たんじょうびだ。",
        "english": "It's my birthday today."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "アイスクリーム［を］食べる？……うん、食べる。",
        "reading": "あいすくりーむ［を］たべる？……うん、たべる。",
        "english": "Want some ice cream? ……Yeah, I will."
      },
      {
        "japanese": "そこに はさみ［が］ある？……ううん、ない。",
        "reading": "そこに はさみ［が］ある？……ううん、ない。",
        "english": "Any scissors there? ……No, there aren’t."
      },
      {
        "japanese": "あした 京都［へ］行かない？……いいね。行こう。",
        "reading": "あした きょうと［へ］いかない？……いいね。いこう。",
        "english": "Shall we go to Kyoto tomorrow? ……Sounds great. Let's go."
      },
      {
        "japanese": "その カレー、おいしい？……うん、辛いけど、おいしい。",
        "reading": "その かれー、おいしい？……うん、からいけど、おいしい。",
        "english": "Is that curry good? ……Yeah, it's spicy, but nice."
      }
    ],
    "conversation": {
      "title": "いっしょに 行かない？ (Shall we go together?)",
      "situation": "Kobayashi and Thawaphon make casual plans to climb Mt. Fuji",
      "characters": [
        "小林",
        "タワポン"
      ],
      "lines": [
        {
          "speaker": "小林",
          "japanese": "夏休みに 国へ 帰る？",
          "reading": "なつやすみに くにへ かえる？",
          "english": "Going home for summer holiday?"
        },
        {
          "speaker": "タワポン",
          "japanese": "ううん、帰りたいけど……。",
          "reading": "ううん、かえりたいけど……。",
          "english": "No, although I'd like to..."
        },
        {
          "speaker": "小林",
          "japanese": "富士山に 登った ことが ある？",
          "reading": "ふじさんに のぼった ことが ある？",
          "english": "Ever climbed Mt. Fuji?"
        },
        {
          "speaker": "タワポン",
          "japanese": "ううん、ない。",
          "reading": "ううん、ない。",
          "english": "No, I haven't."
        },
        {
          "speaker": "小林",
          "japanese": "じゃ、いっしょに 行かない？",
          "reading": "じゃ、いっしょに いかない？",
          "english": "How about going together then?"
        },
        {
          "speaker": "タワポン",
          "japanese": "うん。いつごろ？",
          "reading": "うん。いつごろ？",
          "english": "Sure. About when?"
        },
        {
          "speaker": "小林",
          "japanese": "8月の 初めは どう？",
          "reading": "はちがつの はじめは どう？",
          "english": "How about beginning of August?"
        },
        {
          "speaker": "タワポン",
          "japanese": "いいね。",
          "reading": "いいね。",
          "english": "Sounds good."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "えーと",
        "reading": "えーと",
        "english": "well, let me see..."
      },
      {
        "japanese": "おめでとう［ございます］。",
        "reading": "おめでとう［ございます］。",
        "english": "Congratulations!"
      },
      {
        "japanese": "よかったら",
        "reading": "よかったら",
        "english": "if you like"
      },
      {
        "japanese": "うん / ううん",
        "reading": "うん / ううん",
        "english": "yes (casual) / no (casual)"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Polite Style vs. Plain Style (丁寧形と普通形)",
        "explanation": "Plain style is used with close friends, family, and in casual conversation. Questions drop か and rise in pitch.",
        "examples": [
          {
            "japanese": "行く？……うん、行く。",
            "reading": "いく？……うん、いく。",
            "english": "Going? ……Yeah, going."
          }
        ]
      },
      {
        "title": "2. Noun & な-adj in Plain Style",
        "explanation": "だ (present), じゃない (negative), だった (past), じゃなかった (past negative).",
        "examples": [
          {
            "japanese": "暇だ。暇じゃない。暇だった。",
            "reading": "ひまだ。ひまじゃない。ひまだった。",
            "english": "Free. Not free. Was free."
          }
        ]
      }
    ],
    "usefulInfoTitle": "人の 呼び方 (How to Address People)",
    "usefulInfo": [
      {
        "japanese": "お兄ちゃん / お姉ちゃん",
        "reading": "おにいちゃん / おねえちゃん",
        "english": "elder brother / elder sister",
        "category": "Addressing"
      },
      {
        "japanese": "お父さん / パパ",
        "reading": "おとうさん / ぱぱ",
        "english": "father / dad",
        "category": "Addressing"
      },
      {
        "japanese": "お母さん / ママ",
        "reading": "おかあさん / まま",
        "english": "mother / mom",
        "category": "Addressing"
      },
      {
        "japanese": "お客様",
        "reading": "おきゃくさま",
        "english": "customer, guest",
        "category": "Addressing"
      },
      {
        "japanese": "先生",
        "reading": "せんせい",
        "english": "teacher / doctor",
        "category": "Addressing"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 21,
    "title": "Opinions & Thoughts (〜と思います/〜と言いました)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "あした 雨が 降ると 思います。",
        "reading": "あした あめが ふると おもいます。",
        "english": "I think it's going to rain tomorrow."
      },
      {
        "japanese": "首相は 来月 アメリカへ 行くと 言いました。",
        "reading": "しゅしょうは らいげつ あめりかへ いくと いいました。",
        "english": "The Prime Minister said he will go to America next month."
      },
      {
        "japanese": "疲れたでしょう？",
        "reading": "つかれたでしょう？",
        "english": "I bet you're tired, aren't you?"
      }
    ],
    "exampleSentences": [
      {
        "japanese": "ミラーさんは どこですか。……もう 帰ったと 思います。",
        "reading": "みらーさんは どこですか。……もう かえったと おもいます。",
        "english": "Where's Mr. Miller? ……I think he's already gone home."
      },
      {
        "japanese": "日本に ついて どう 思いますか。……物価が 高いと 思います。",
        "reading": "にほんに ついて どう おもいますか。……ぶっかが たかいと おもいます。",
        "english": "What do you think of Japan? ……I think prices are high."
      },
      {
        "japanese": "寝る まえに、「お休みなさい」と 言います。",
        "reading": "ねる まえに、「おやすみなさい」と いいます。",
        "english": "We say 'Good night' before sleeping."
      }
    ],
    "conversation": {
      "title": "わたしも そう 思います (I think so, too)",
      "situation": "Matsumoto and Santos discuss soccer match after work",
      "characters": [
        "松本",
        "サントス"
      ],
      "lines": [
        {
          "speaker": "松本",
          "japanese": "サントスさん、久しぶりですね。ビールでも 飲みませんか。",
          "reading": "さんとすさん、ひさしぶりですね。びーるでも のみませんか。",
          "english": "Long time no see! How about a beer or something?"
        },
        {
          "speaker": "サントス",
          "japanese": "いいですね。今晩 日本と ブラジルの サッカーの 試合が ありますね。どちらが 勝つと 思いますか。",
          "reading": "いいですね。こんばん にほんと ぶらじるの さっかーの しあいが ありますね。どちらが かつと おもいますか。",
          "english": "Great idea. Japan plays Brazil tonight. Who do you think will win?"
        },
        {
          "speaker": "松本",
          "japanese": "もちろん ブラジルですよ。",
          "reading": "もちろん ぶらじるですよ。",
          "english": "Brazil, of course!"
        },
        {
          "speaker": "サントス",
          "japanese": "でも、最近 日本も 強く なりましたよ。",
          "reading": "でも、さいきん にほんも つよく なりましたよ。",
          "english": "But Japan has gotten strong lately too."
        },
        {
          "speaker": "松本",
          "japanese": "ええ、わたしも そう 思います。",
          "reading": "ええ、わたしも そう おもいます。",
          "english": "Yes, I think so too."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "久しぶりですね。",
        "reading": "ひさしぶりですね。",
        "english": "Long time no see."
      },
      {
        "japanese": "～でも 飲みませんか。",
        "reading": "～でも のみませんか。",
        "english": "How about having ~ or something?"
      },
      {
        "japanese": "もちろん",
        "reading": "もちろん",
        "english": "of course"
      },
      {
        "japanese": "もう 帰らないと……。",
        "reading": "もう かえらないと……。",
        "english": "I have to get home now..."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Plain Form と 思います (I think that...)",
        "explanation": "Used to express conjecture or personal opinion.",
        "examples": [
          {
            "japanese": "あした 雨が 降ると 思います。",
            "reading": "あした あめが ふると おもいます。",
            "english": "I think it will rain tomorrow."
          }
        ]
      },
      {
        "title": "2. \"Quotes\" / Plain Form と 言います (Quotation)",
        "explanation": "Quotes direct speech in 「」 or indirect speech in plain form.",
        "examples": [
          {
            "japanese": "ミラーさんは「東京へ 行きます」と 言いました。",
            "reading": "みらーさんは「とうきょうへ いきます」と いいました。",
            "english": "Mr. Miller said \"I will go to Tokyo\"."
          }
        ]
      },
      {
        "title": "3. Plain Form でしょう？ (Seeking agreement)",
        "explanation": "Asks for listener’s confirmation (\"...right?\").",
        "examples": [
          {
            "japanese": "北海道は 寒かったでしょう？",
            "reading": "ほっかいどうは さむかったでしょう？",
            "english": "It was cold in Hokkaido, right?"
          }
        ]
      }
    ],
    "usefulInfoTitle": "役職名 (Positions in Society)",
    "usefulInfo": [
      {
        "japanese": "首相（内閣総理大臣）",
        "reading": "しゅしょう",
        "english": "Prime Minister",
        "category": "Title"
      },
      {
        "japanese": "知事 / 市長",
        "reading": "ちじ / しちょう",
        "english": "Governor / Mayor",
        "category": "Title"
      },
      {
        "japanese": "学長 / 校長",
        "reading": "がくちょう / こうちょう",
        "english": "University President / Principal",
        "category": "Title"
      },
      {
        "japanese": "会長 / 社長 / 部長 / 課長",
        "reading": "かいちょう / しゃちょう / ぶちょう / かちょう",
        "english": "Chairman / President / Dept Head / Section Head",
        "category": "Title"
      },
      {
        "japanese": "駅長 / 署長 / 院長",
        "reading": "えきちょう / しょちょう / いんちょう",
        "english": "Stationmaster / Chief / Hospital Director",
        "category": "Title"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 22,
    "title": "Noun Modification (Relative Clauses)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "これは ミラーさんが 作った ケーキです。",
        "reading": "これは みらーさんが つくった けーきです。",
        "english": "This is the cake Mr. Miller made."
      },
      {
        "japanese": "あそこに いる 人は ミラーさんです。",
        "reading": "あそこに いる ひとは みらーさんです。",
        "english": "The person over there is Mr. Miller."
      },
      {
        "japanese": "きのう 習った 言葉を 忘れました。",
        "reading": "きのう ならった ことばを わすれました。",
        "english": "I forgot the words I learned yesterday."
      },
      {
        "japanese": "買い物に 行く 時間が ありません。",
        "reading": "かいものに いく じかんが ありません。",
        "english": "I don't have time to go shopping."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "これは 万里の長城で 撮った 写真です。……すごいですね。",
        "reading": "これは ばんりのちょうじょうで とった しゃしんです。……すごいですね。",
        "english": "These are photos I took at the Great Wall of China. ……Amazing!"
      },
      {
        "japanese": "着物を 着て いる 人は だれですか。……木村さんです。",
        "reading": "きものを きて いる ひとは だれですか。……きむらさんです。",
        "english": "Who's that person wearing a kimono? ……That's Ms. Kimura."
      },
      {
        "japanese": "どんな うちが 欲しいですか。……広い 庭が ある うちが 欲しいです。",
        "reading": "どんな うちが ほしいですか。……ひろい にわが ある うちが ほしいです。",
        "english": "What kind of house do you want? ……A house with a large garden."
      }
    ],
    "conversation": {
      "title": "どんな アパートが いいですか (What kind of flat are you looking for?)",
      "situation": "Wang Xue looks for an apartment with an estate agent",
      "characters": [
        "不動産屋",
        "ワン"
      ],
      "lines": [
        {
          "speaker": "不動産屋",
          "japanese": "お探しですか。どんな アパートが いいですか。",
          "reading": "おさがしですか。どんな あぱーとが いいですか。",
          "english": "Are you looking for an apartment? What kind?"
        },
        {
          "speaker": "ワン",
          "japanese": "そうですね。家賃は 8万円ぐらいで、駅から 近い 所が いいです。",
          "reading": "そうですね。やちんは はちまんえんぐらいで、えきから ちかい ところが いいです。",
          "english": "Around 80,000 yen rent, near the station."
        },
        {
          "speaker": "不動産屋",
          "japanese": "こちらは いかがですか。駅から 10分で、家賃は 8万3千円です。",
          "reading": "こちらは いかがですか。えきから じゅっぷんで、やちんは はちまんさんぜんえんです。",
          "english": "How about this? 10 min from station, 83,000 yen rent."
        },
        {
          "speaker": "ワン",
          "japanese": "きょう 見る ことが できますか。",
          "reading": "きょう みる ことが できますか。",
          "english": "Can I see it today?"
        },
        {
          "speaker": "不動産屋",
          "japanese": "ええ。今から 行きましょうか。",
          "reading": "ええ。いまから いきましょうか。",
          "english": "Yes. Shall we go now?"
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "お探しですか。",
        "reading": "おさがしですか。",
        "english": "Are you looking for ~?"
      },
      {
        "japanese": "家賃",
        "reading": "やちん",
        "english": "rent (apartment)"
      },
      {
        "japanese": "和室",
        "reading": "わしつ",
        "english": "Japanese-style tatami room"
      },
      {
        "japanese": "押し入れ",
        "reading": "おしいれ",
        "english": "Japanese-style closet"
      },
      {
        "japanese": "布団",
        "reading": "ふとん",
        "english": "futon bedding"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Noun Modification Clauses (連体修飾節)",
        "explanation": "Modifying clause comes before the noun in plain form. The subject of the clause is marked with が.",
        "examples": [
          {
            "japanese": "ミラーさんが 住んで いた うち",
            "reading": "みらーさんが すんで いた うち",
            "english": "The house where Mr. Miller lived"
          }
        ]
      },
      {
        "title": "2. V-dict 時間／約束／用事",
        "explanation": "Nominalizes the required time or appointment (e.g. 朝ごはんを食べる時間がありません).",
        "examples": [
          {
            "japanese": "買い物に 行く 時間が あります。",
            "reading": "かいものに いく じかんが あります。",
            "english": "I have time to go shopping."
          }
        ]
      }
    ],
    "usefulInfoTitle": "衣服 (Clothes & Wearing Verbs)",
    "usefulInfo": [
      {
        "japanese": "着る（シャツ、セーター）",
        "reading": "きる",
        "english": "wear (upper body)",
        "category": "Verb"
      },
      {
        "japanese": "はく（ズボン、靴）",
        "reading": "はく",
        "english": "wear (lower body/shoes)",
        "category": "Verb"
      },
      {
        "japanese": "かぶる（帽子）",
        "reading": "かぶる",
        "english": "wear (hat/cap)",
        "category": "Verb"
      },
      {
        "japanese": "かける（眼鏡）",
        "reading": "かける",
        "english": "wear (glasses)",
        "category": "Verb"
      },
      {
        "japanese": "する（ネクタイ、時計）",
        "reading": "する",
        "english": "wear (accessories/tie)",
        "category": "Verb"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 23,
    "title": "When / Conditional (〜とき/〜と)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "図書館で 本を 借りる とき、カードが 要ります。",
        "reading": "としょかんで ほんを かりる とき、かーどが いります。",
        "english": "When you borrow books from the library, you need a card."
      },
      {
        "japanese": "この ボタンを 押すと、お釣りが出ます。",
        "reading": "この ぼたんを おすと、おつりが でます。",
        "english": "If you press this button, your change comes out."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "テレビを よく 見ますか。……そうですね。野球の 試合が ある とき、見ます。",
        "reading": "てれびを よく みますか。……そうですね。やきゅうの しあいが ある とき、みます。",
        "english": "Do you watch TV often? ……When there is a baseball game."
      },
      {
        "japanese": "冷蔵庫に 何も ない とき、どう しますか。……近くの レストランへ 食べに 行きます。",
        "reading": "れいぞうこに なにも ない とき、どう しますか。……ちかくの れすとらんへ たべに いきます。",
        "english": "When nothing in the fridge? ……I eat at a restaurant."
      },
      {
        "japanese": "お湯が 出ません。……そこを 押すと、出ますよ。",
        "reading": "おゆが でません。……そこを おすと、でますよ。",
        "english": "No hot water. ……If you press there, it will come out."
      },
      {
        "japanese": "市役所は どこですか。……この道を まっすぐ 行くと、左に あります。",
        "reading": "しやくしょは どこですか。……このみちを まっすぐ いくと、ひだりに あります。",
        "english": "Where's city hall? ……Go straight down this road, it's on the left."
      }
    ],
    "conversation": {
      "title": "どうやって 行きますか (How do you get there?)",
      "situation": "Karina asks librarian for directions and requirements to borrow books",
      "characters": [
        "図書館の人",
        "カリナ"
      ],
      "lines": [
        {
          "speaker": "図書館の人",
          "japanese": "はい、みどり図書館です。",
          "reading": "はい、みどりとしょかんです。",
          "english": "Hello, Midori Library."
        },
        {
          "speaker": "カリナ",
          "japanese": "そちらまで どうやって 行きますか。",
          "reading": "そちらまで どうやって いきますか。",
          "english": "How do I get there?"
        },
        {
          "speaker": "図書館の人",
          "japanese": "本田駅から 12番の バスに 乗って、図書館前で 降りて ください。3つ目です。",
          "reading": "ほんだえきから じゅうにばんの ばすに のって、としょかんまえで おりて ください。みっつめです。",
          "english": "Take No. 12 bus from Honda Station, get off at Toshokanmae (3rd stop)."
        },
        {
          "speaker": "カリナ",
          "japanese": "本を 借りる とき、何が 要りますか。",
          "reading": "ほんを かりる とき、なにが いりますか。",
          "english": "What do I need when borrowing books?"
        },
        {
          "speaker": "図書館の人",
          "japanese": "名前と 住所が わかる 物を 持って 来て ください。",
          "reading": "なまえと じゅうしょが わかる ものを もって きて ください。",
          "english": "Please bring something showing your name and address."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "何回も",
        "reading": "なんかいも",
        "english": "many times"
      },
      {
        "japanese": "－目",
        "reading": "－め",
        "english": "the -th (indicating order)"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. V / い-adj / な-adj / Nの とき (When...)",
        "explanation": "Expresses time or circumstance when main clause happens.",
        "examples": [
          {
            "japanese": "本を 借りる とき、カードが 要ります。",
            "reading": "ほんを かりる とき、かーどが いります。",
            "english": "When borrowing books, you need a card."
          }
        ]
      },
      {
        "title": "2. V-dict と、～ (Automatic Consequence / Natural Condition)",
        "explanation": "Whenever A happens, B inevitably occurs.",
        "examples": [
          {
            "japanese": "ボタンを 押すと、お釣りが出ます。",
            "reading": "ぼたんを おすと、おつりが でます。",
            "english": "Press button and change comes out."
          }
        ]
      }
    ],
    "usefulInfoTitle": "道路・交通 (Roads and Traffic)",
    "usefulInfo": [
      {
        "japanese": "歩道 / 車道",
        "reading": "ほどう / しゃどう",
        "english": "sidewalk / roadway",
        "category": "Road"
      },
      {
        "japanese": "横断歩道",
        "reading": "おうだんほどう",
        "english": "pedestrian crossing",
        "category": "Road"
      },
      {
        "japanese": "信号",
        "reading": "しんごう",
        "english": "traffic light",
        "category": "Road"
      },
      {
        "japanese": "踏切",
        "reading": "ふみきり",
        "english": "railway crossing",
        "category": "Road"
      },
      {
        "japanese": "止まれ",
        "reading": "とまれ",
        "english": "STOP sign",
        "category": "Sign"
      },
      {
        "japanese": "進入禁止",
        "reading": "しんにゅうきんし",
        "english": "No Entry",
        "category": "Sign"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 24,
    "title": "Giving & Receiving Actions (〜てあげます/〜てもらいます)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "佐藤さんは わたしに チョコレートを くれました。",
        "reading": "さとうさんは わたしに ちょこれーとを くれました。",
        "english": "Ms. Sato gave me some chocolate."
      },
      {
        "japanese": "わたしは 山田さんに レポートを 直して もらいました。",
        "reading": "わたしは やまださんに れぽーとを なおして もらいました。",
        "english": "Mr. Yamada corrected my report for me."
      },
      {
        "japanese": "母は わたしに セーターを 送って くれました。",
        "reading": "ははは わたしに せーたーを おくって くれました。",
        "english": "My mother sent me a sweater."
      },
      {
        "japanese": "わたしは 木村さんに 本を 貸して あげました。",
        "reading": "わたしは きむらさんに ほんを かして あげました。",
        "english": "I lent Ms. Kimura a book."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "おばあちゃん、好き？……うん、いつも おいしい お菓子を くれるから。",
        "reading": "おばあちゃん、すき？……うん、いつも おいしい おかしを くれるから。",
        "english": "Do you love Granny? ……Yes, she always gives me sweets."
      },
      {
        "japanese": "パーティーの 料理は 自分で 作りましたか。……いいえ、ワンさんに 手伝って もらいました。",
        "reading": "ぱーてぃーの りょうりは じぶんで つくりましたか。……いいえ、わんさんに てつだって もらいました。",
        "english": "Cook party food yourself? ……No, Mr. Wang helped me."
      },
      {
        "japanese": "電車で 行きましたか。……いいえ、山田さんが 車で 送って くれました。",
        "reading": "でんしゃで いきましたか。……いいえ、やまださんが くるまで おくって くれました。",
        "english": "Go by train? ……No, Mr. Yamada took me in his car."
      }
    ],
    "conversation": {
      "title": "手伝いに 行きましょうか (Shall I come and help?)",
      "situation": "Karina offers to help Wang Xue move on Sunday",
      "characters": [
        "カリナ",
        "ワン"
      ],
      "lines": [
        {
          "speaker": "カリナ",
          "japanese": "ワンさん、日曜日 引っ越しですね。手伝いに 行きましょうか。",
          "reading": "わんさん、にちようび ひっこしですね。てつだいに いきましょうか。",
          "english": "Mr. Wang, you're moving Sunday. Shall I come help?"
        },
        {
          "speaker": "ワン",
          "japanese": "ありがとう ございます。じゃ、9時ごろ お願いします。",
          "reading": "ありがとう ございます。じゃ、くじごろ おねがいします。",
          "english": "Thank you. Please come around 9."
        },
        {
          "speaker": "カリナ",
          "japanese": "だれが 来ますか。",
          "reading": "だれが きますか。",
          "english": "Who else is coming?"
        },
        {
          "speaker": "ワン",
          "japanese": "山田さんと ミラーさんが 来て くれます。山田さんが 車を 貸して くれます。",
          "reading": "やまださんと みらーさんが きて くれます。やまださんが くるまを かして くれます。",
          "english": "Mr. Yamada and Mr. Miller are coming. Yamada will lend his car."
        },
        {
          "speaker": "カリナ",
          "japanese": "お弁当を 持って 行きましょうか。",
          "reading": "おべんとうを もって いきましょうか。",
          "english": "Shall I bring lunch boxes?"
        },
        {
          "speaker": "ワン",
          "japanese": "ええ、お願いします。",
          "reading": "ええ、おねがいします。",
          "english": "Yes please, thank you!"
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "ほかに",
        "reading": "ほかに",
        "english": "besides, in addition"
      },
      {
        "japanese": "母の日",
        "reading": "ははのひ",
        "english": "Mother's Day"
      }
    ],
    "grammarNotes": [
      {
        "title": "1. くれます (Give to me)",
        "explanation": "Used when someone gives something to the speaker or speaker’s family.",
        "examples": [
          {
            "japanese": "佐藤さんが わたしに 花を くれました。",
            "reading": "さとうさんが わたしに はなを くれました。",
            "english": "Ms. Sato gave me flowers."
          }
        ]
      },
      {
        "title": "2. Vて-form あげます / もらいます / くれます (Giving & Receiving Favors)",
        "explanation": "～てあげます (do favor for other), ～てもらいます (have someone do favor), ～てくれます (someone does favor for me).",
        "examples": [
          {
            "japanese": "山田さんに 直して もらいました。",
            "reading": "やまださんに なおして もらいました。",
            "english": "Had Mr. Yamada correct it for me."
          }
        ]
      }
    ],
    "usefulInfoTitle": "贈答の習慣 (Exchanging Gifts in Japan)",
    "usefulInfo": [
      {
        "japanese": "お年玉",
        "reading": "おとしだま",
        "english": "New Year's money gift for children",
        "category": "Gift"
      },
      {
        "japanese": "お中元 / お歳暮",
        "reading": "おちゅうげん / おせいぼ",
        "english": "Mid-year / Year-end gifts",
        "category": "Gift"
      },
      {
        "japanese": "結婚祝い / 出産祝い",
        "reading": "けっこんいわい / しゅっさんいわい",
        "english": "Wedding / Baby birth gift",
        "category": "Gift"
      },
      {
        "japanese": "お見舞い",
        "reading": "おみまい",
        "english": "Get-well gift for hospital visit",
        "category": "Gift"
      }
    ]
  },
  {
    "book": "Minna no Nihongo",
    "lessonNumber": 25,
    "title": "Conditionals (〜たら/〜ても)",
    "jlptLevel": "N5",
    "sentencePatterns": [
      {
        "japanese": "雨が 降ったら、出かけません。",
        "reading": "あめが ふったら、でかけません。",
        "english": "I'm not going out if it rains."
      },
      {
        "japanese": "雨が 降っても、出かけます。",
        "reading": "あめが ふっても、でかけます。",
        "english": "I'm going out even if it rains."
      }
    ],
    "exampleSentences": [
      {
        "japanese": "もし 1億円 あったら、何を したいですか。……学校を 造りたいです。",
        "reading": "もし いちおくえん あったら、なにを したいですか。……がっこうを つくりたいです。",
        "english": "What would you do with 100 million yen? ……Build a school."
      },
      {
        "japanese": "電車が なかったら、どう しますか。……歩いて 帰ります。",
        "reading": "でんしゃが なかったら、どう しますか。……あるいて かえります。",
        "english": "What if there are no trains? ……I'll walk home."
      },
      {
        "japanese": "安かったら、買いたいです。……そうですね。",
        "reading": "やすかったら、かいたいです。……そうですね。",
        "english": "If it's cheap, I want to buy it."
      },
      {
        "japanese": "暑くても、エアコンを つけません。",
        "reading": "あつくても、えあこんを つけません。",
        "english": "I don't turn on air conditioning even if it's hot."
      }
    ],
    "conversation": {
      "title": "いろいろ お世話に なりました (Thanks for everything)",
      "situation": "Miller says goodbye before transferring to Tokyo office",
      "characters": [
        "木村",
        "ミラー",
        "佐藤",
        "サントス"
      ],
      "lines": [
        {
          "speaker": "木村",
          "japanese": "ミラーさん、東京へ 行っても、大阪の ことを 忘れないで くださいね。",
          "reading": "みらーさん、とうきょうへ いっても、おおさかの ことを わすれないで くださいね。",
          "english": "Mr. Miller, even after going to Tokyo, don't forget Osaka!"
        },
        {
          "speaker": "ミラー",
          "japanese": "もちろん 忘れません。東京へ 来たら、ぜひ 遊びに 来て ください。",
          "reading": "もちろん わすれません。とうきょうへ きたら、ぜひ あそびに きて ください。",
          "english": "Of course not! If you come to Tokyo, please visit me."
        },
        {
          "speaker": "佐藤",
          "japanese": "体には 気をつけて、頑張って ください。",
          "reading": "からだには きをつけて、がんばって ください。",
          "english": "Take good care of yourself and do your best."
        },
        {
          "speaker": "ミラー",
          "japanese": "皆さん、いろいろ お世話に なりました。",
          "reading": "みなさん、いろいろ おせわに なりました。",
          "english": "Thank you all for everything you have done for me."
        }
      ]
    },
    "renshuuPhrases": [
      {
        "japanese": "もしもし",
        "reading": "もしもし",
        "english": "Hello (on the phone)"
      },
      {
        "japanese": "転勤",
        "reading": "てんきん",
        "english": "job transfer"
      },
      {
        "japanese": "［いろいろ］お世話に なりました。",
        "reading": "［いろいろ］おせわに なりました。",
        "english": "Thank you for everything you've done for me."
      },
      {
        "japanese": "どうぞ お元気で。",
        "reading": "どうぞ おげんきで。",
        "english": "Please take good care of yourself."
      }
    ],
    "grammarNotes": [
      {
        "title": "1. Plain Past ら、～ (Conditional \"If / When\")",
        "explanation": "Attaching ら to past tense plain form (あったら, 降ったら, 安かったら) creates conditionals.",
        "examples": [
          {
            "japanese": "お金が あったら、旅行します。",
            "reading": "おかねが あったら、りょこうします。",
            "english": "If I have money, I'll travel."
          }
        ]
      },
      {
        "title": "2. Vて-form も / い-adj (～くて) も / な-adj・N で も (Even if / Although)",
        "explanation": "Contrasting condition (\"even if...\"): 降っても (even if it rains), 高くても (even if expensive).",
        "examples": [
          {
            "japanese": "雨が 降っても、洗濯します。",
            "reading": "あめが ふっても、せんたくします。",
            "english": "I'll do laundry even if it rains."
          }
        ]
      }
    ],
    "usefulInfoTitle": "人の 一生 (Stages of Life)",
    "usefulInfo": [
      {
        "japanese": "生まれます",
        "reading": "うまれます",
        "english": "be born (0 yrs)",
        "category": "Life"
      },
      {
        "japanese": "幼稚園 / 保育園",
        "reading": "ようちえん / ほいくえん",
        "english": "kindergarten / nursery",
        "category": "Life"
      },
      {
        "japanese": "小学校 / 中学校 / 高校 / 大学",
        "reading": "しょうがっこう / ちゅうがっこう / こうこう / だいがく",
        "english": "elementary / junior / high school / university",
        "category": "Life"
      },
      {
        "japanese": "就職します",
        "reading": "しゅうしょくします",
        "english": "get a job",
        "category": "Life"
      },
      {
        "japanese": "結婚します",
        "reading": "けっこんします",
        "english": "get married",
        "category": "Life"
      },
      {
        "japanese": "定年退職",
        "reading": "ていねんたいしょく",
        "english": "retirement",
        "category": "Life"
      },
      {
        "japanese": "死にます",
        "reading": "しにます",
        "english": "pass away",
        "category": "Life"
      }
    ]
  }
];
