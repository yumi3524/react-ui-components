import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ボタンに表示するテキスト',
    },
    onClick: {
      action: 'clicked',
      description: 'クリック時のハンドラ',
    },
    disabled: {
      control: 'boolean',
      description: 'ボタンの無効化',
    },
    className: {
      control: 'text',
      description: '追加のCSSクラス',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * デフォルトのボタンスタイル
 */
export const Primary: Story = {
  args: {
    children: 'Button',
    onClick: () => console.log('Button clicked'),
  },
};

/**
 * 無効化されたボタン
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    onClick: () => console.log('This should not fire'),
    disabled: true,
  },
};

/**
 * 長いテキストのボタン
 */
export const LongText: Story = {
  args: {
    children: 'とても長いテキストのボタン（Very Long Button Text）',
    onClick: () => console.log('Long text button clicked'),
  },
};

/**
 * カスタムスタイルを適用したボタン
 */
export const CustomStyle: Story = {
  args: {
    children: 'Custom Style Button',
    onClick: () => console.log('Custom button clicked'),
    className: 'bg-green-500 hover:bg-green-600',
  },
};

/**
 * 複数のボタンを並べた例
 */
export const MultipleButtons: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button onClick={() => console.log('Button 1')}>Button 1</Button>
      <Button onClick={() => console.log('Button 2')}>Button 2</Button>
      <Button onClick={() => console.log('Button 3')} disabled>
        Button 3 (Disabled)
      </Button>
    </div>
  ),
};
