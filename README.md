# React UI Components

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Storybook](https://img.shields.io/badge/Storybook-10.1-FF4785?logo=storybook)

Reactコンポーネントライブラリ。TypeScript、Tailwind CSS、Storybookで構築された、再利用可能なUIコンポーネント集です。


## 🚀 セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開きます。

### Storybookの起動

```bash
npm run storybook
```

ブラウザで `http://localhost:6006` を開きます。


## 🛠️ 技術スタック

- **React 19** - UIライブラリ
- **TypeScript 5.9** - 型安全性
- **Tailwind CSS 3.4** - スタイリング
- **Vite 7** - ビルドツール
- **Storybook 10.1** - コンポーネントドキュメント
- **Framer Motion** - アニメーション
- **React Router** - ルーティング
- **React Syntax Highlighter** - コードハイライト

## 📖 使い方

### コンポーネントショーケース

コンポーネントを視覚的に確認できるように、コンポーネントギャラリーを提供します。

- `/` - ライブラリホーム
- `/showcase` - コンポーネントギャラリー

各コンポーネントのコード例、主要機能を確認できます。

### Storybook

Storybookでは、各コンポーネントの様々なバリエーションを確認できます：

- インタラクティブなControls
- 自動生成されたドキュメント
- アクセシビリティチェック

## 🏗️ プロジェクト構造

```
react-ui-components/
├── src/
│   ├── components/
│   │   └── common/                    # 共通UIコンポーネント
│   │       ├── Button.tsx             # ボタンコンポーネント
│   │       ├── Button.stories.tsx     # Buttonのストーリー
│   │       ├── Input.tsx              # 入力フォームコンポーネント
│   │       ├── Input.stories.tsx      # Inputのストーリー
│   │       ├── Title.tsx              # タイトルコンポーネント
│   │       └── Title.stories.tsx      # Titleのストーリー
│   ├── showcase/                      # コンポーネントギャラリー
│   │   ├── components/
│   │   │   ├── ComponentCard/         # カード型表示コンポーネント
│   │   │   │   ├── index.tsx          # ComponentCard本体
│   │   │   │   ├── CardHeader.tsx     # カードヘッダー
│   │   │   │   ├── CardContent.tsx    # カードコンテンツ
│   │   │   │   └── CardFeatures.tsx   # 機能リスト表示
│   │   │   └── TabButton.tsx          # タブボタン
│   │   ├── pages/
│   │   │   ├── Home.tsx               # ホームページ
│   │   │   └── Gallery.tsx            # コンポーネント一覧ページ
│   │   ├── data/
│   │   │   ├── index.ts               # データのエントリーポイント
│   │   │   ├── categories.tsx         # カテゴリデータ
│   │   │   ├── form.tsx               # フォーム系コンポーネントデータ
│   │   │   └── display.tsx            # 表示系コンポーネントデータ
│   │   └── types.ts                   # 型定義
│   ├── App.tsx                        # メインアプリケーション
│   ├── App.css                        # アプリケーションスタイル
│   ├── main.tsx                       # エントリーポイント
│   └── index.css                      # グローバルスタイル
├── .storybook/                        # Storybook設定
│   ├── main.ts                        # Storybookメイン設定
│   └── preview.ts                     # プレビュー設定
├── public/                            # 静的ファイル
├── dist/                              # ビルド出力
├── package.json                       # 依存関係管理
├── vite.config.ts                     # Vite設定
├── tsconfig.json                      # TypeScript設定（ルート）
├── tsconfig.app.json                  # TypeScript設定（アプリ用）
├── tsconfig.node.json                 # TypeScript設定（Node.js用）
├── tailwind.config.js                 # Tailwind CSS設定
├── postcss.config.js                  # PostCSS設定
├── eslint.config.js                   # ESLint設定
└── .gitignore                         # Git除外設定
```
