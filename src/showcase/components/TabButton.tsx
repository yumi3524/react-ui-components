import type { ReactNode } from 'react';

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

/**
 * タブ切り替えボタンコンポーネント
 * Preview/Code の切り替えに使用
 */
export function TabButton({ isActive, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 px-4 py-3 m-2 text-sm font-medium transition-colors flex items-center justify-center gap-2 !outline-none !border-none ${isActive
        ? 'text-gray-900 border-b-2 bg-blue-50 hover:bg-blue-100'
        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
        }`}
      style={{
        border: 'none',
      } as React.CSSProperties}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
