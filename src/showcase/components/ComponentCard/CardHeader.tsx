import { Lightbulb } from 'lucide-react';
import type { ComponentInfo } from '../../types';

interface CardHeaderProps {
  component: ComponentInfo;
}

/**
 * コンポーネントカードのヘッダー部分
 * タイトル、難易度、カテゴリ、説明、問題文、タグを表示
 */
export function CardHeader({ component }: CardHeaderProps) {
  const categoryColors = {
    form: 'bg-blue-50 border-blue-200 text-blue-800',
    display: 'bg-green-50 border-green-200 text-green-800',
    interactive: 'bg-purple-50 border-purple-200 text-purple-800',
  };

  return (
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {component.name}
          </h3>
          {component.difficulty && (
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Level {component.difficulty}
            </div>
          )}
        </div>
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
            categoryColors[component.category]
          }`}
        >
          {component.category}
        </div>
      </div>

      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        {component.description}
      </p>

      {component.problem && (
        <div className="mb-6 flex gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-1">
              Problem
            </h4>
            <p className="text-sm text-gray-600">{component.problem}</p>
          </div>
        </div>
      )}

      {/* タグ */}
      <div className="flex flex-wrap gap-2">
        {component.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
