import type { ComponentInfo } from '../types';
import { Title } from '../../components/common/Title';

export const displayComponents: ComponentInfo[] = [
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
