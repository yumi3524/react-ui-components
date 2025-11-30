# Raw Imports と Code Snippets の分離

## 📖 概要

このプロジェクトでは、以下の2つの技術を組み合わせて、コードの肥大化を防いでいます:

1. **Raw Import** - コンポーネントの実装コードを自動取得
2. **Snippets 分離** - 使用例のコードを専用ファイルに分離

これにより、以下の問題を解決しています:

- ❌ **手動でコードをコピペする必要がない**
- ❌ **実装とドキュメントの同期ズレが発生しない**
- ❌ **データファイルが肥大化しない**

---

## 🔧 仕組み

### 1. Raw Import（実装コードの自動取得）

`?raw` サフィックスを使うと、ファイルの内容を**文字列**として取得できます。

```typescript
// ❌ 通常の import: コンポーネントとして取得
import { Button } from './Button.tsx';

// ✅ Raw import: ファイルの内容（文字列）として取得
import ButtonSource from './Button.tsx?raw';

console.log(ButtonSource);
// => "export function Button() { ... }"
```

#### 型定義の設定

[src/vite-env.d.ts](../src/vite-env.d.ts) で Raw Import の型を定義:

```typescript
/// <reference types="vite/client" />

// Raw imports のための型定義
declare module '*?raw' {
  const content: string;
  export default content;
}
```

これにより TypeScript が `?raw` を認識し、型安全にコードを取得できます。

---

### 2. Snippets 分離（使用例コードの分離）

使用例のコードを専用ディレクトリにカテゴリ別で分離します。

```
src/showcase/data/
├── form.tsx              # コンポーネント情報
├── display.tsx
└── snippets/             # 使用例コードを格納
    ├── index.ts          # エントリーポイント
    ├── form/             # フォーム系スニペット
    │   ├── ButtonSnippet.ts
    │   └── InputSnippet.ts
    └── display/          # 表示系スニペット
        └── TitleSnippet.ts
```

#### Snippet ファイルの例

```typescript
// snippets/form/ButtonSnippet.ts
/**
 * Button コンポーネントの使用例コード
 */
export const ButtonSnippet = `<Button onClick={() => alert('Hello!')}>
  クリック
</Button>`;
```

#### エントリーポイント (index.ts)

```typescript
// snippets/index.ts
/**
 * カテゴリ別に整理されています:
 * - form/     フォーム関連コンポーネント
 * - display/  表示系コンポーネント
 */

// Form コンポーネントのスニペット
export { ButtonSnippet } from './form/ButtonSnippet';
export { InputSnippet } from './form/InputSnippet';

// Display コンポーネントのスニペット
export { TitleSnippet } from './display/TitleSnippet';
```

---

### 3. 使用例

[src/showcase/data/form.tsx](../src/showcase/data/form.tsx) での実装例:

```typescript
import type { ComponentInfo } from '../types';
import { Button } from '../../components/common/Button';

// 🔥 Raw Import で実装コードを取得
import ButtonSource from '../../components/common/Button.tsx?raw';

// 📝 Snippets から使用例コードを取得
import { ButtonSnippet } from './snippets';

export const formComponents: ComponentInfo[] = [
  {
    id: 'button',
    name: 'Button',
    demoComponent: () => <Button onClick={() => {}}>クリック</Button>,

    // ✅ たった1行で設定！
    codeSnippet: ButtonSnippet,
    implementationCode: ButtonSource,
  },
];
```

---

## ✅ メリット

### 1. 自動同期

コンポーネントの実装を変更すると、**自動的にギャラリーの Source タブにも反映**されます。

```typescript
// Button.tsx を修正
export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}

// ↓ ビルド時に自動で取得される
// ↓ 手動更新は不要！
```

### 2. ファイルサイズの大幅削減

#### Before（手動コピペ）:
```typescript
// form.tsx - 134行の巨大なファイル 😱
{
  codeSnippet: `<Button onClick={() => alert('Hello!')}>
  クリック
</Button>`,
  implementationCode: `export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export function Button({ children, onClick, disabled, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 \${className}\`}
    >
      {children}
    </button>
  );
}`,
}
```

#### After（Raw Import + Snippets 分離）:
```typescript
// form.tsx - 68行のスッキリしたファイル！😊
import ButtonSource from '../../components/common/Button.tsx?raw';
import { ButtonSnippet } from './snippets';

{
  codeSnippet: ButtonSnippet,
  implementationCode: ButtonSource,
}
```

**結果: 134行 → 68行（49%削減）**

### 3. 保守性の向上

- 実装ファイルを変更するだけで、ドキュメントも自動更新
- 使用例コードがシンタックスハイライト付きで編集可能
- 手動でのコピペミスが発生しない
- コードレビューがしやすい

### 4. 再利用性と整理性の向上

カテゴリ別に整理されているため、管理しやすく再利用も簡単です:

```typescript
// snippets/form/ButtonSnippet.ts
export const ButtonSnippet = `<Button onClick={() => alert('Hello!')}>
  クリック
</Button>`;

// カテゴリごとに整理されているため見つけやすい
// 複数の場所で使用可能
import { ButtonSnippet } from './snippets';
```

**カテゴリ別のメリット:**
- コンポーネントが増えても整理整頓された状態を維持
- 新しいカテゴリの追加が容易
- データファイル（form.tsx, display.tsx）と構造が一致

---

## 📂 ファイル構成

```
react-ui-components/
├── src/
│   ├── vite-env.d.ts              # Raw Import の型定義
│   ├── components/
│   │   └── common/
│   │       ├── Button.tsx         # 実装（ここを編集）
│   │       ├── Input.tsx
│   │       └── Title.tsx
│   └── showcase/
│       └── data/
│           ├── form.tsx           # コンポーネント情報
│           ├── display.tsx
│           └── snippets/          # 使用例コードを格納
│               ├── index.ts       # エントリーポイント
│               ├── form/          # フォーム系スニペット
│               │   ├── ButtonSnippet.ts
│               │   └── InputSnippet.ts
│               └── display/       # 表示系スニペット
│                   └── TitleSnippet.ts
└── docs/
    └── RAW_IMPORTS.md            # このドキュメント
```

---

## 🚀 新しいコンポーネントを追加する方法

### 1. コンポーネントを実装

```typescript
// src/components/common/Card.tsx
export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
```

### 2. 使用例コードを作成

```typescript
// src/showcase/data/snippets/display/CardSnippet.ts
/**
 * Card コンポーネントの使用例コード
 */
export const CardSnippet = `<Card title="カードタイトル">
  カードの内容
</Card>`;
```

### 3. snippets/index.ts に追加

```typescript
// src/showcase/data/snippets/index.ts

// Form コンポーネントのスニペット
export { ButtonSnippet } from './form/ButtonSnippet';
export { InputSnippet } from './form/InputSnippet';

// Display コンポーネントのスニペット
export { TitleSnippet } from './display/TitleSnippet';
export { CardSnippet } from './display/CardSnippet';  // ← 追加
```

### 4. データファイルに追加

```typescript
// src/showcase/data/display.tsx
import { Card } from '../../components/common/Card';
import CardSource from '../../components/common/Card.tsx?raw';
import { CardSnippet } from './snippets';

export const displayComponents: ComponentInfo[] = [
  // ... 既存のコンポーネント
  {
    id: 'card',
    name: 'Card',
    description: 'カード型レイアウトコンポーネント',
    category: 'display',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoComponent: () => (
      <Card title="カードタイトル">
        カードの内容
      </Card>
    ),
    codeSnippet: CardSnippet,           // ← 使用例
    implementationCode: CardSource,     // ← 実装コード
    features: ['シンプルなレイアウト', 'カスタマイズ可能'],
    difficulty: 1,
  },
];
```

### 5. 完了！

ビルドすると自動的にコードが取得されます。

```bash
npm run build
npm run dev
```

---

## 🔍 トラブルシューティング

### TypeScript エラー: "Cannot find module '*.tsx?raw'"

**原因:** 型定義が読み込まれていない

**解決方法:**
1. [src/vite-env.d.ts](../src/vite-env.d.ts) が存在するか確認
2. `tsconfig.json` で `vite-env.d.ts` が include されているか確認
3. VSCode を再起動

### ビルドエラー: "Failed to resolve import"

**原因:** ファイルパスが間違っている

**解決方法:**
```typescript
// ❌ 間違い: 相対パスが不正
import Source from './wrong-path/Button.tsx?raw';

// ✅ 正しい: 正確な相対パスを指定
import ButtonSource from '../../components/common/Button.tsx?raw';
```

### 実装コードが更新されない

**原因:** ブラウザのキャッシュ

**解決方法:**
```bash
# 開発サーバーを再起動
npm run dev

# または強制リビルド
rm -rf dist node_modules/.vite
npm run build
```

---

## 📚 参考資料

- [Vite: Static Asset Handling](https://vite.dev/guide/assets.html#importing-asset-as-string)
- [Vite: ?raw suffix](https://vite.dev/guide/assets.html#importing-asset-as-string)

---

## 🎯 まとめ

Raw Import + Snippets 分離により:
- ✅ ファイルサイズが大幅削減（134行 → 68行、**49%削減**）
- ✅ 実装とドキュメントの自動同期
- ✅ 使用例コードの再利用性向上
- ✅ 保守性の向上
- ✅ 型安全なコード取得

新しいコンポーネントを追加する際も、シンプルな4ステップで完了します！
