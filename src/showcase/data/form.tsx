import type { ComponentInfo } from '../types';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { useState } from 'react';

export const formComponents: ComponentInfo[] = [
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
];
