import type { ComponentInfo, CategoryInfo } from '../types';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Title } from '../../components/common/Title';
import { useState } from 'react';

/**
 * 全コンポーネントのデータ
 */
export const componentsData: ComponentInfo[] = [
  {
    id: 'button',
    name: 'Button',
    description: '汎用的なボタンコンポーネント。クリックイベントを処理し、disabled状態をサポート。',
    category: 'form',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoComponent: () => (
      <div className="flex gap-4">
        <Button onClick={() => alert('クリックされました！')}>クリック</Button>
        <Button onClick={() => console.log('Disabled')} disabled>
          無効化
        </Button>
      </div>
    ),
    codeSnippet: `<Button onClick={() => alert('Hello!')}>
  クリック
</Button>`,
    features: [
      'クリックイベント処理',
      'disabled状態のサポート',
      'カスタムスタイル対応',
      'Tailwind CSSによるスタイリング',
    ],
    difficulty: 1,
  },
  {
    id: 'input',
    name: 'Input',
    description: '多機能な入力フィールドコンポーネント。様々なタイプ、バリデーション、アクセシビリティをサポート。',
    category: 'form',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible'],
    demoComponent: () => {
      const [value, setValue] = useState('');
      return (
        <div className="space-y-2">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="テキストを入力してください"
          />
          <p className="text-sm text-gray-600">入力値: {value}</p>
        </div>
      );
    },
    codeSnippet: `const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="入力してください"
/>`,
    features: [
      '複数のinputタイプサポート（text, email, password等）',
      'フォーカス管理',
      '最大文字数制限',
      'アクセシビリティ対応（aria-label）',
      'カスタムスタイル対応',
    ],
    difficulty: 2,
  },
  {
    id: 'title',
    name: 'Title',
    description: 'ページやセクションのタイトルを表示するシンプルなコンポーネント。',
    category: 'display',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoComponent: () => <Title title="サンプルタイトル" />,
    codeSnippet: `<Title title="ページタイトル" />`,
    features: [
      '一貫したタイトルスタイリング',
      'レスポンシブ対応',
      'シンプルで再利用可能',
    ],
    difficulty: 1,
  },
];

/**
 * カテゴリ情報
 */
export const categoriesData: CategoryInfo[] = [
  {
    id: 'form',
    name: 'フォーム',
    description: '入力フィールドやボタンなど、ユーザー入力に関するコンポーネント',
    icon: '📝',
    color: 'blue',
  },
  {
    id: 'display',
    name: '表示',
    description: 'テキストやタイトルなど、情報を表示するためのコンポーネント',
    icon: '📄',
    color: 'green',
  },
  {
    id: 'interactive',
    name: 'インタラクティブ',
    description: 'ユーザー操作に応じて動的に変化するコンポーネント',
    icon: '⚡',
    color: 'purple',
  },
];
