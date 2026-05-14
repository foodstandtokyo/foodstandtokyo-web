# FOOD STAND TOKYO Website

東京・神奈川・千葉・埼玉・静岡 イベント出店専門フードトラック「FOOD STAND」の公式サイト。

## 技術スタック

- **Astro** … サイト生成
- **HTML/CSS（Astroコンポーネント）** … UI
- **Cloudflare Pages** … ホスティング（予定）
- **microCMS** … コンテンツ管理（フェーズ2で追加予定）

## ローカル開発

### 必要なもの
- Node.js 18以上
- npm

### セットアップ手順

```bash
# 1. 依存パッケージインストール
npm install

# 2. 開発サーバー起動
npm run dev
```

ブラウザで `http://localhost:4321` を開くと表示されます。

### ビルド

```bash
npm run build
```

`dist/` フォルダに静的サイトが生成されます。

## ディレクトリ構成

```
/
├── public/              静的ファイル（画像など）
│   └── logos/           各ブランドのロゴ
├── src/
│   ├── components/      各セクションのUIコンポーネント
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Brands.astro
│   │   ├── PastEvents.astro
│   │   ├── Information.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── brands.js    4ブランドのコンテンツ（後でmicroCMS化）
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro          トップページ
│   │   └── brands/
│   │       └── [id].astro       ブランド詳細ページ（動的）
│   └── styles/
│       └── global.css   グローバルCSS（配色・フォント定義）
├── package.json
├── astro.config.mjs
└── README.md
```

## カラーパレット

| 役割 | HEX |
|---|---|
| ベース | `#FAFAF7` |
| メイン文字 | `#2C3540` |
| サブ文字 | `#6B7280` |
| グレー | `#A5A5A5` |
| ブルーグレー薄 | `#A8BCCB` |
| ブルーグレー中 | `#7A8FA8` |
| ブルーグレー濃 | `#5A7891` |
| ブルーグレー最濃 | `#3D5C73` |
| 区切り線 | `#E5E7EB` |

## デプロイ手順（Cloudflare Pages）

詳しくは `DEPLOY.md` を参照してください。

## 次のステップ

- [ ] 写真素材の差し込み（プレースホルダー部分）
- [ ] microCMS連携（フェーズ2）
- [ ] foodstand.tokyo ドメイン接続

## 開発履歴

- 2026年5月：初期構築
