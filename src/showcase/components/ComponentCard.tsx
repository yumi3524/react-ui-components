import { useState } from 'react';
import type { ComponentInfo } from '../types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

interface ComponentCardProps {
  component: ComponentInfo;
}

/**
 * コンポーネント情報を表示するカード
 */
export function ComponentCard({ component }: ComponentCardProps) {
  const [showCode, setShowCode] = useState(false);
  const [showDemo, setShowDemo] = useState(true);

  const categoryColors = {
    form: 'bg-blue-50 border-blue-200 text-blue-800',
    display: 'bg-green-50 border-green-200 text-green-800',
    interactive: 'bg-purple-50 border-purple-200 text-purple-800',
  };

  const difficultyStars = '⭐'.repeat(component.difficulty || 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      {/* ヘッダー */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {component.name}
            </h3>
            {component.difficulty && (
              <div className="text-sm text-gray-600 mb-2">
                難易度: {difficultyStars}
              </div>
            )}
          </div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[component.category]
              }`}
          >
            {component.category}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{component.description}</p>

        {component.problem && (
          <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              <strong>💡 解決する問題:</strong> {component.problem}
            </p>
          </div>
        )}

        {/* タグ */}
        <div className="flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* タブ */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          onClick={() => {
            setShowDemo(true);
            setShowCode(false);
          }}
          className={`flex-1 px-4 py-3 font-medium transition-colors ${showDemo
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900'
            }`}
        >
          📱 デモ
        </button>
        <button
          onClick={() => {
            setShowDemo(false);
            setShowCode(true);
          }}
          className={`flex-1 px-4 py-3 font-medium transition-colors ${showCode
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900'
            }`}
        >
          💻 コード
        </button>
      </div>

      {/* コンテンツ */}
      <div className="p-6">
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="min-h-[150px] flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"
          >
            {component.demoComponent()}
          </motion.div>
        )}

        {showCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
              }}
            >
              {component.codeSnippet}
            </SyntaxHighlighter>
            <button
              onClick={() => {
                navigator.clipboard.writeText(component.codeSnippet);
                alert('コードをクリップボードにコピーしました！');
              }}
              className="mt-2 px-4 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-800 transition-colors"
            >
              📋 コピー
            </button>
          </motion.div>
        )}
      </div>

      {/* 主要機能 */}
      <div className="px-6 pb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">✨ 主要機能</h4>
        <ul className="space-y-2">
          {component.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="mr-2 text-green-500">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
