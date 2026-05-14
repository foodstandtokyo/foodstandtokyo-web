# デプロイ手順書

このサイトを foodstand.tokyo で公開するまでの手順。

## 全体の流れ

```
ステップ1：GitHubにアップロード
   ↓
ステップ2：Cloudflareアカウント作成
   ↓
ステップ3：Cloudflare Pages でデプロイ
   ↓
ステップ4：foodstand.tokyo ドメイン接続
```

---

## ステップ1：GitHubにアップロード

### 方法A：Webからアップロード（簡単）

1. https://github.com にログイン
2. 右上の「+」→「New repository」
3. リポジトリ名：`foodstand-tokyo`（お好みで）
4. **Public** を選択（無料プランで使うため）
5. 「Create repository」をクリック
6. 「uploading an existing file」リンクをクリック
7. このプロジェクトのフォルダ内のファイルを **全部選択して** ドラッグ&ドロップ
   - ⚠️ `node_modules` と `dist` は除外する
8. 下の「Commit changes」をクリック

### 方法B：コマンドラインから（慣れている人向け）

```bash
cd foodstand-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[YOUR_USERNAME]/foodstand-tokyo.git
git push -u origin main
```

---

## ステップ2：Cloudflareアカウント作成

1. https://dash.cloudflare.com/sign-up にアクセス
2. メールアドレスとパスワードで新規登録
3. メール認証を完了

---

## ステップ3：Cloudflare Pages でデプロイ

1. Cloudflareダッシュボードで左メニュー「Workers & Pages」
2. 「Create application」→「Pages」タブ→「Connect to Git」
3. GitHubアカウントを連携（初回のみ）
4. リポジトリ `foodstand-tokyo` を選択
5. 「Begin setup」

### ビルド設定

| 項目 | 値 |
|---|---|
| Production branch | `main` |
| Framework preset | `Astro` |
| Build command | `npm run build` |
| Build output directory | `dist` |

6. 「Save and Deploy」をクリック
7. 1〜2分でビルド完了、`xxxxx.pages.dev` のURLが発行されます

---

## ステップ4：foodstand.tokyo ドメイン接続

### 4-1. Cloudflare Pagesで独自ドメインを追加

1. デプロイしたPagesプロジェクトを開く
2. 「Custom domains」タブ
3. 「Set up a custom domain」
4. `foodstand.tokyo` を入力→「Continue」
5. 表示される **DNS設定情報** をメモ

### 4-2. 既存のドメイン管理画面で設定

foodstand.tokyo を取得しているサービス（おそらく Canva やお名前.com、ムームードメインなど）の管理画面で：

1. DNS設定画面を開く
2. Aレコード または CNAMEレコード を、Cloudflareから指示された値に変更
3. 既存のCanvaサイトを指していたレコードを **削除** または **書き換え**
4. 保存

### 4-3. DNS反映待ち

最大24時間、通常は1時間以内に反映されます。

`foodstand.tokyo` でアクセスできたら完了！

---

## トラブルシューティング

### ビルドに失敗する
- Cloudflare Pagesの「Build log」を確認
- ローカルで `npm run build` が通るかチェック

### 画像が表示されない
- `public/logos/` 内のファイル名が正しいか確認
- パスは `/logos/xxx.png`（先頭にスラッシュ）

### ドメインが繋がらない
- DNS設定が完全に反映されるまで時間がかかります
- https://www.whatsmydns.net/ で世界中での反映状況を確認できます

### Canvaサイトとどうやって切り替える？
- 上記のDNS設定変更で自動的に切り替わります
- Canva側でドメインを「切断」する必要があれば、Canvaの設定画面から行ってください

---

## サイト更新方法

1. GitHubのリポジトリでファイルを編集（または手元で編集してpush）
2. Cloudflare Pagesが自動でビルド＆デプロイ
3. 数分後に foodstand.tokyo に反映

---

## フェーズ2：microCMS連携

文章や写真を管理画面から編集できるようにする作業は、フェーズ2で別途進めます。
今のフェーズ1では、`src/data/brands.js` や各コンポーネント内のテキストを直接編集してください。
