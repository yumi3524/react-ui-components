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
│   │   └── common/           # 共通コンポーネント
│   │       ├── Button.tsx
│   │       ├── Button.stories.tsx
│   │       ├── Input.tsx
│   │       ├── Input.stories.tsx
│   │       ├── Title.tsx
│   │       └── Title.stories.tsx
│   └── showcase/             # コンポーネントショーケース
│       ├── components/
│       ├── pages/
│       └── data/
├── .storybook/               # Storybook設定
└── public/
```
