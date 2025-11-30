import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '入力値',
    },
    onChange: {
      action: 'changed',
      description: '値変更時のハンドラ',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'input要素のtype属性',
    },
    disabled: {
      control: 'boolean',
      description: '無効化',
    },
    required: {
      control: 'boolean',
      description: '必須入力',
    },
    maxLength: {
      control: 'number',
      description: '最大文字数',
    },
    autoFocus: {
      control: 'boolean',
      description: 'オートフォーカス',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * 基本的なテキスト入力
 */
export const Text: Story = {
  render: () => {
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
};

/**
 * メールアドレス入力
 */
export const Email: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        type="email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="email@example.com"
        aria-label="メールアドレス"
      />
    );
  },
};

/**
 * パスワード入力
 */
export const Password: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        type="password"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="パスワード"
        aria-label="パスワード"
      />
    );
  },
};

/**
 * 無効化された入力フィールド
 */
export const Disabled: Story = {
  render: () => {
    const [value] = useState('無効化されています');
    return (
      <Input
        value={value}
        onChange={() => { }}
        disabled
        placeholder="このフィールドは無効です"
      />
    );
  },
};

/**
 * 最大文字数制限付き
 */
export const WithMaxLength: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="最大10文字まで"
          maxLength={10}
        />
        <p className="text-sm text-gray-600">
          {value.length} / 10 文字
        </p>
      </div>
    );
  },
};

/**
 * 数値入力
 */
export const Number: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="数値を入力"
      />
    );
  },
};

/**
 * 検索フィールド
 */
export const Search: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="検索..."
        className="w-96"
      />
    );
  },
};

/**
 * フォーム例：複数の入力フィールド
 */
export const FormExample: Story = {
  render: () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-sm font-medium mb-1">名前</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="山田 太郎"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">メールアドレス</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">メッセージ</label>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="メッセージを入力"
            maxLength={100}
          />
          <p className="text-xs text-gray-500 mt-1">{message.length} / 100</p>
        </div>
      </div>
    );
  },
};
