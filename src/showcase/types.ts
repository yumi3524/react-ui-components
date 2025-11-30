import type { ReactNode } from 'react';

/**
 * コンポーネントのカテゴリ
 */
export type ComponentCategory = 'form' | 'display' | 'interactive';

/**
 * コンポーネント情報の型定義
 */
export interface ComponentInfo {
  /** 一意なID */
  id: string;
  /** コンポーネント名 */
  name: string;
  /** 説明 */
  description: string;
  /** カテゴリ */
  category: ComponentCategory;
  /** タグ（技術スタック等） */
  tags: string[];
  /** デモコンポーネント */
  demoComponent: () => ReactNode;
  /** 使用例のコードスニペット */
  codeSnippet: string;
  /** コンポーネントの実装コード */
  implementationCode: string;
  /** 主要機能のリスト */
  features: string[];
  /** 難易度（1-5） */
  difficulty?: number;
  /** 解決する問題 */
  problem?: string;
}

/**
 * カテゴリ情報の型定義
 */
export interface CategoryInfo {
  id: ComponentCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}
