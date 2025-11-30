import type { Meta, StoryObj } from '@storybook/react-vite';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'Common/Title',
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '表示するタイトルテキスト',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

/**
 * 基本的なタイトル
 */
export const Default: Story = {
  args: {
    title: 'ページタイトル',
  },
};

/**
 * 短いタイトル
 */
export const Short: Story = {
  args: {
    title: 'Title',
  },
};

/**
 * 長いタイトル
 */
export const Long: Story = {
  args: {
    title: 'とても長いページタイトルの例（This is a Very Long Page Title Example）',
  },
};

/**
 * 日本語のタイトル
 */
export const Japanese: Story = {
  args: {
    title: 'ようこそReactアプリへ',
  },
};

/**
 * 英語のタイトル
 */
export const English: Story = {
  args: {
    title: 'Welcome to React App',
  },
};

/**
 * 複数のタイトルを表示
 */
export const Multiple: Story = {
  render: () => (
    <div className="space-y-6">
      <Title title="セクション 1" />
      <p className="text-gray-600">このセクションの内容...</p>
      <Title title="セクション 2" />
      <p className="text-gray-600">このセクションの内容...</p>
      <Title title="セクション 3" />
      <p className="text-gray-600">このセクションの内容...</p>
    </div>
  ),
};
