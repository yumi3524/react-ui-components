# React UI Components

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Storybook](https://img.shields.io/badge/Storybook-10.1-FF4785?logo=storybook)

モダンなReactコンポーネントライブラリ。TypeScript、Tailwind CSS、Storybookで構築された、再利用可能なUIコンポーネント集です。

## ✨ 特徴

- 🎨 **美しいデザイン** - Tailwind CSSによるモダンなスタイリング
- 📚 **Storybookドキュメント** - インタラクティブなコンポーネントカタログ
- 💻 **ライブデモ** - 各コンポーネントを実際に操作可能
- 📱 **レスポンシブ** - モバイル・タブレット・デスクトップ対応
- ♿ **アクセシビリティ** - WAI-ARIA準拠
- 🔧 **TypeScript** - 完全な型安全性

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

## 📦 含まれるコンポーネント

### フォームコンポーネント

#### Button
汎用的なボタンコンポーネント。

```tsx
<Button onClick={() => alert('Clicked!')}>
  クリック
</Button>
```

**主要機能:**
- クリックイベント処理
- disabled状態のサポート
- カスタムスタイル対応

#### Input
多機能な入力フィールドコンポーネント。

```tsx
const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="入力してください"
/>
```

**主要機能:**
- 複数のinputタイプサポート（text, email, password等）
- フォーカス管理
- 最大文字数制限
- アクセシビリティ対応

### 表示コンポーネント

#### Title
ページやセクションのタイトルを表示。

```tsx
<Title title="ページタイトル" />
```

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

プロジェクトには、コンポーネントを視覚的に確認できるショーケースサイトが含まれています。

- `/` - ライブラリホーム
- `/showcase` - コンポーネントギャラリー

各コンポーネントのライブデモ、コード例、主要機能を確認できます。

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
