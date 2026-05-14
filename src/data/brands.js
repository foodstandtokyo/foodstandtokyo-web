// 4ブランドの全データをここに集約
// 将来microCMS化する際は、ここをAPIから取得に置き換える

export const brands = {
  waffles: {
    id: 'waffles',
    num: '01',
    category: 'SWEETS',
    name: 'the Waffle\'s',
    name_jp: 'アメリカンワッフルと生ホイップクリーム',
    logo: '/logos/waffles_t.png',
    hero_bg: 'linear-gradient(160deg, #D8E2EB 0%, #A8BCCB 50%, #7A95AB 100%)',
    menu_title_italic: 'Menu',
    menu_title_rest: 'Lineup.',
    about: 'ふわっと香るバターと小麦、サクッと軽い焼きたてワッフルに、牧場直送の北海道産クリームと季節のフルーツを贅沢にトッピング。冷凍は一切使わず、その場で仕上げる生まれたての生ホイップは、口溶けなめらかで後味すっきり。産みたて卵の生地が織りなす、思わず写真を撮りたくなる華やかさ。ワンハンドで楽しめる、イベントやフェスで大人気の映えスイーツです。',
    items: [
      {
        name: 'ホイッフル',
        prices: [
          { label: 'HALF', value: '¥700' },
          { label: 'REGULAR', value: '¥1,300' },
        ],
        desc: 'すっきりレアチーズクリーム、とろける生ホイップのWクリーム。メープルシロップのやさしい甘さがとけ合います。',
      },
      {
        name: '完熟春苺<br />いちごだらけ',
        prices: [
          { label: 'HALF', value: '¥950' },
          { label: 'REGULAR', value: '¥1,650' },
        ],
        desc: '提携農家さんから届く旬のフルーツを贅沢にトッピング。季節ごとに変わる上質なスイーツラインナップをご用意しています。',
      },
      {
        name: 'ワッフル<br />クリームサンド',
        prices: [{ label: 'SPECIAL', value: 'コラボ商品制作も可' }],
        desc: '旬の果実、香ばしいナッツ、濃厚チョコ。素材の組み合わせで味わいが変わる多彩なワッフルをご用意。',
      },
    ],
    prev: { id: 'coco', name_small: 'Coco', name_main: 'Shrimp' },
    next: { id: 'frozen', name_small: '', name_main: 'FROZEN Stand' },
  },

  frozen: {
    id: 'frozen',
    num: '02',
    category: 'FROZEN',
    name: 'FROZEN Stand',
    name_jp: '果氷けずり&フローズンスムージー',
    logo: '/logos/frozen_t.png',
    hero_bg: 'linear-gradient(160deg, #D8E5EE 0%, #B5CFE1 50%, #8AB1CB 100%)',
    menu_title_italic: 'Signature',
    menu_title_rest: 'Items.',
    about: '完熟フルーツを贅沢に削ったフローズンスイーツと、よく冷えた生ビールや生フルーツサワーを楽しめるフルーティーなスタンド。軽くひんやりしたい時にも、ちょっと一杯にも使える、心地よいスタンドです。提携農家さんの完熟ブランド苺。採れたてを瞬間冷凍し、果実の風味と甘さそのままに、なめらかな口溶け。こだわりの「けずりいちご」。',
    items: [
      {
        name: '完熟 おとめけずり<br />台湾パインけずり',
        prices: [{ label: 'PRICE', value: '¥800' }],
        desc: '完熟ブランド苺を急速冷凍し果実だけをふんわり削った、甘さと香り広がるひんやり苺スイーツ。',
      },
      {
        name: 'フローズン スムージー',
        prices: [{ label: 'PRICE', value: '¥750' }],
        desc: '果実の香りと甘さをぎゅっと閉じ込めたフローズンスムージー。ひんやり食感と濃い味わいがクセになるリッチな仕上がり。',
      },
      {
        name: '冷んやりチュロス<br />スノーキャラメル',
        prices: [{ label: 'PRICE', value: '¥650' }],
        desc: 'ひんやり食感が心地よい冷んやりチュロス。キャラメルの甘さを優しくまとわせたスノーキャラメルで、軽く食べられます。',
      },
    ],
    prev: { id: 'waffles', name_small: 'the', name_main: 'Waffle\'s' },
    next: { id: 'salad', name_small: 'Salad', name_main: 'bowl works' },
  },

  salad: {
    id: 'salad',
    num: '03',
    category: 'HEALTHY',
    name: 'Salad bowl works',
    name_jp: 'サラダボウル&フレッシュスムージー',
    logo: '/logos/salad_t.png',
    hero_bg: 'linear-gradient(160deg, #EAEAEA 0%, #BDBDBD 50%, #7A7A7A 100%)',
    menu_title_italic: 'On the',
    menu_title_rest: 'Menu.',
    about: '『サラダでキレイに満たす』をコンセプトに、新鮮な食材をたっぷり使った彩り豊かなサラダボウル専門店。自家製サラダチキンやスパイシーなケイジャンシュリンプなど、高タンパクで栄養バランスにこだわったメニューが人気です。温かいスープやビタミンたっぷりのスムージーも充実。ビーガン・ハラル対応で、店舗の味と安心感をそのままお届けします。',
    items: [
      {
        name: 'カリフォルニア コブ',
        prices: [{ label: 'PRICE', value: '¥1,000' }],
        desc: '香り立つケイジャンシュリンプと具沢山素材をボウルに。満足感たっぷりのコブサラダ。トルティーヤで巻くと満足度アップ!',
      },
      {
        name: 'オリエンタル シーザー',
        prices: [{ label: 'PRICE', value: '¥900' }],
        desc: 'スモーク香る具材に、チーズを贅沢に使ったコク深いシーザーサラダ。スモークチキンをトッピングがおすすめ!',
      },
      {
        name: 'フレッシュ スムージー',
        prices: [{ label: 'PRICE', value: '¥750' }],
        desc: 'フレッシュフルーツの甘さと香りで、美味しくビタミン補給できるスムージー。',
      },
    ],
    prev: { id: 'frozen', name_small: '', name_main: 'FROZEN Stand' },
    next: { id: 'coco', name_small: 'Coco', name_main: 'Shrimp' },
  },

  coco: {
    id: 'coco',
    num: '04',
    category: 'SEAFOOD',
    name: 'Coco Shrimp',
    name_jp: 'ガーリックシュリンプ&シーフード',
    logo: '/logos/coco_t.png',
    hero_bg: 'linear-gradient(160deg, #FAE8E5 0%, #E8B5AC 50%, #C8867B 100%)',
    menu_title_italic: 'In the mood',
    menu_title_rest: 'for Shrimp?',
    about: '香ばしいガーリックシュリンプとスパイシーなケイジャンシュリンプを主役にした、シュリンプ&シーフード専門店。ガーリック×ケイジャンの合いがけが楽しめるシュリンププレートは、ガーリックライスと季節野菜のピクルス付きで満足感抜群。生ビールや生フルーツサワー、白ワインなど、シーフードに合うドリンクとのペアリングも好評です。',
    items: [
      {
        name: 'ガーリックシュリンプ',
        prices: [{ label: 'SIGNATURE', value: '人気No.1' }],
        desc: '香ばしいガーリックの風味とぷりぷりの海老が主役。ガーリックライスと季節野菜のピクルス付きの満足プレート。',
      },
      {
        name: 'ケイジャンシュリンプ',
        prices: [{ label: 'SPICY', value: 'スパイシー' }],
        desc: 'スパイシーなケイジャンスパイスが効いたシュリンプ。ピリッとした刺激と海老の旨味が一体に。ガーリック×ケイジャンの合いがけも楽しめます。',
      },
      {
        name: '生ビール<br />生フルーツサワー',
        prices: [{ label: 'DRINK', value: 'ペアリング推奨' }],
        desc: 'シーフードに合うドリンクとのペアリングも好評。よく冷えた生ビールや生フルーツサワー、白ワインなどをご用意。',
      },
    ],
    prev: { id: 'salad', name_small: 'Salad', name_main: 'bowl works' },
    next: { id: 'waffles', name_small: 'the', name_main: 'Waffle\'s' },
  },
};
