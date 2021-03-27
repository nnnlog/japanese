const WORD_CLASS = {
	NOUN: '0',
	VERB: '1',
	ADJ: '2',
	ETC: '999',
};

export default {
	word_class: WORD_CLASS,
	words: [
		{
			text: 'おはよう',
			mean: '안녕(아침 인사)',
			chapter: ['etc'],
			word_class: [WORD_CLASS.ETC]
		},
		{
			text: 'かう',
			mean: '사다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'いく',
			mean: '가다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'はなす',
			mean: '말하다, 이야기하다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'あそぶ',
			mean: '놀다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'すわる',
			mean: '앉다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'のむ',
			mean: '마시다',
			chapter: [7, 8],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'つくる',
			mean: '만들다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'のぼる',
			mean: '오르다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'みる',
			mean: '보다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'たべる',
			mean: '먹다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'する',
			mean: '하다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'くる',
			mean: '오다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'もう',
			mean: '이미, 벌써, 더',
			chapter: [7],
			word_class: []
		},
		{
			text: 'なつやすみ',
			mean: '여름방학(휴가)',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ふゆやすみ',
			mean: '겨울방학',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'よてい',
			mean: '예정',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'イタリア',
			mean: '이탈리아',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'りょうり',
			mean: '요리',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ならう',
			mean: '배우다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'スキー',
			mean: '스키',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'あう',
			mean: '만나다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'きく',
			mean: '듣다, 묻다, 국화',
			chapter: [7],
			word_class: [WORD_CLASS.VERB, WORD_CLASS.NOUN]
		},
		{
			text: 'よむ',
			mean: '읽다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'ねる',
			mean: '자다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'きのう',
			mean: '어제',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'きょう',
			mean: '오늘',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'あした',
			mean: '내일',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ケーキ',
			mean: '케이크',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'テレビ',
			mean: '텔레비전',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ともだち',
			mean: '친구',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'よく',
			mean: '잘, 자주',
			chapter: [7],
			word_class: []
		},
		{
			text: 'ときどき',
			mean: '때때로',
			chapter: [7],
			word_class: []
		},
		{
			text: 'あまり',
			mean: '(부정)그다지, 별로',
			chapter: [7],
			word_class: []
		},
		{
			text: 'ぜんぜん',
			mean: '전혀',
			chapter: [7],
			word_class: []
		},
		{
			text: 'うんどう',
			mean: '운동',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'しんぶん',
			mean: '신문',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'コーヒー',
			mean: '커피',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'やま',
			mean: '산',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'としょかん',
			mean: '도서관',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'アイスクリーム',
			mean: '아이스크림',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'おんがく',
			mean: '음악',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'はは',
			mean: '어머니',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ちち',
			mean: '아버지',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ひ',
			mean: '날, 해',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ほか',
			mean: '딴 것, 바깥',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'くに',
			mean: '나라',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ほかの くに',
			mean: '다른 나라',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'オーストラリア',
			mean: '오스트레일리아, 호주',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'おなじ',
			mean: '같음, 동일함',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'はやい',
			mean: '이르다, 빠르다',
			chapter: [7],
			word_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'ほう',
			mean: '방향, 쪽, 편',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'いっしょ',
			mean: '함께 함',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'カーネーション',
			mean: '카네이션',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'プレゼント',
			mean: '선물',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'えいが',
			mean: '영화',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'いえ',
			mean: '집',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'うち',
			mean: '집, 안, 우리',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'そうじ',
			mean: '청소',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'てつだう',
			mean: '도와주다, 거들다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'はな',
			mean: '꽃',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'いろいろだ',
			mean: '여러가지다',
			chapter: [7],
			word_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'ちがう',
			mean: '다르다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: '～から',
			mean: '~로 부터, ~이므로, ~이니까(이유)',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'おもしろい',
			mean: '재미있다',
			chapter: [7],
			word_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'かいもの',
			mean: '쇼핑',
			chapter: [7, 8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'どんな',
			mean: '어떤',
			chapter: [7],
			word_class: []
		},
		{
			text: 'にぎやかだ',
			mean: '붐비다, 번화하다',
			chapter: [7],
			word_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'まち',
			mean: '시, 도시',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'たべもの',
			mean: '음식',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'でも',
			mean: '그렇지만',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'ふゆ',
			mean: '겨울',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'とても',
			mean: '아주, 매우',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'さむい',
			mean: '춥다',
			chapter: [7],
			word_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'おきる',
			mean: '일어나다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'がっこう',
			mean: '학교',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ひるごはん',
			mean: '점심밥',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'かえる',
			mean: '돌아오다',
			chapter: [7],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'おおさか',
			mean: '오사카',
			chapter: [7],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'かわいい',
			mean: '귀엽다, 사랑스럽다',
			chapter: [7],
			word_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'メール',
			mean: '메일',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'かく',
			mean: '쓰다',
			chapter: [8],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'ダンス',
			mean: '댄스, 춤',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'はじめる',
			mean: '시작하다',
			chapter: [8],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'でんき',
			mean: '전기, 전등',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'すうがく',
			mean: '수학',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'べんきょう',
			mean: '공부',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'デパート',
			mean: '백화점',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'くつ',
			mean: '신발, 구두',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'こうえん',
			mean: '공원',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'しゅうまつ',
			mean: '주말 ',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'おんせん',
			mean: '온천',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'きもち',
			mean: '기분',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'いい / よい',
			mean: '좋다',
			chapter: [8],
			word_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'タクシー',
			mean: '택시',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'のる',
			mean: '타다',
			chapter: [8],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'すこし',
			mean: '조금, 약간',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'やすむ',
			mean: '쉬다',
			chapter: [8],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'しゃしん',
			mean: '사진',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'あそこ',
			mean: '저기',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: '～ましょう',
			mean: '～합시다',
			chapter: [8],
			word_class: [WORD_CLASS.VERB]
		},
		{
			text: 'ちょっと',
			mean: '좀, 조금, 잠깐',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'おちゃ',
			ean: '차',
			hapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'プール',
			mean: '풀, 수영장',
			chapter: [8],
			word_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'およぐ',
			mean: ' 헤엄치다, 수영하다',
			hapter: [8],
			ord_class: [WORD_CLASS.VERB]
		},
		{
			text: 'せんぱい',
			ean: '선배',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ボランティア',
			ean: '봉사활동, 자원봉사자',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: '～たち',
			ean: '～들',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'わたしたち',
			ean: '우리들, 저희들',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'かみ',
			ean: '종이',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'じてんしゃ',
			ean: '자전거',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'がくせい',
			ean: '학생',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'わたす',
			ean: '건네다, 넘기다',
			hapter: [8],
			ord_class: [WORD_CLASS.VERB]
		},
		{
			text: 'マナー',
			ean: '매너',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'まもる',
			ean: '지키다',
			hapter: [8],
			ord_class: [WORD_CLASS.VERB]
		},
		{
			text: 'スマホ',
			ean: '스마트폰',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'つかう',
			ean: '쓰다, 사용하다',
			hapter: [8],
			ord_class: [WORD_CLASS.VERB]
		},
		{
			text: 'だめだ',
			ean: '안된다',
			hapter: [8],
			ord_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'ゆっくり',
			ean: '천천히, 느긋하게',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'はしる',
			ean: '달리다',
			hapter: [8],
			ord_class: [WORD_CLASS.VERB]
		},
		{
			text: 'たいへんだ',
			ean: '힘들다',
			hapter: [8],
			ord_class: [WORD_CLASS.ADJ]
		},
		{
			text: '～けど, ～が',
			ean: '～지만',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'てつだう',
			ean: '돕다, 거들다',
			hapter: [8],
			ord_class: [WORD_CLASS.VERB]
		},
		{
			text: 'あきはばら',
			ean: '아키하바라',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'スカイツリー',
			ean: '스카이트리',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ゆうめいだ',
			ean: '유명하다',
			hapter: [8],
			ord_class: [WORD_CLASS.ADJ]
		},
		{
			text: 'ひこうき',
			ean: '비행기',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ぐらい',
			ean: '～정도',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'すごく',
			ean: '굉장히, 대단히',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'たくさん',
			ean: '많음, 많이',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'ごはん',
			ean: '밥',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		},
		{
			text: 'アルバイト / バイト',
			ean: '아르바이트',
			hapter: [8],
			ord_class: [WORD_CLASS.NOUN]
		}
	]
};
