import type { ComponentInfo } from '../../types';
import { Title } from '../../../components/common/Title';

// コンポーネントの実装コードを raw import で取得
import TitleSource from '../../../components/common/Title.tsx?raw';

// 使用例のコードスニペットをインポート
import { TitleSnippet } from '../snippets';

export const displayComponents: ComponentInfo[] = [
  {
    id: 'title',
    name: 'Title',
    description: 'ページやセクションのタイトルを表示するシンプルなコンポーネント。',
    category: 'display',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    demoComponent: () => <Title title="サンプルタイトル" />,
    codeSnippet: TitleSnippet,
    implementationCode: TitleSource,
    features: [
      '一貫したタイトルスタイリング',
      'レスポンシブ対応',
      'シンプルで再利用可能',
    ],
    difficulty: 1,
  },
];
