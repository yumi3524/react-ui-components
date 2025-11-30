import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { Eye, Code2, Copy, Check } from 'lucide-react';
import type { ComponentInfo } from '../../types';
import { TabButton } from '../TabButton';

interface CardContentProps {
  component: ComponentInfo;
}

/**
 * コンポーネントカードのコンテンツ部分
 * タブ切り替え（Preview/Code）とデモ・コード表示を担当
 */
export function CardContent({ component }: CardContentProps) {
  const [showCode, setShowCode] = useState(false);
  const [showDemo, setShowDemo] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(component.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* タブ */}
      <div className="flex border-b border-gray-200">
        <TabButton
          isActive={showDemo}
          onClick={() => {
            setShowDemo(true);
            setShowCode(false);
          }}
          icon={<Eye className="w-4 h-4" />}
          label="Preview"
        />
        <TabButton
          isActive={showCode}
          onClick={() => {
            setShowDemo(false);
            setShowCode(true);
          }}
          icon={<Code2 className="w-4 h-4" />}
          label="Code"
        />
      </div>

      {/* コンテンツ */}
      <div className="p-0">
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="min-h-[200px] flex items-center justify-center p-8 bg-gray-50"
          >
            {(() => {
              const DemoComponent = component.demoComponent;
              return <DemoComponent />;
            })()}
          </motion.div>
        )}

        {showCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative group"
          >
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                fontSize: '0.8rem',
                padding: '1.5rem',
              }}
            >
              {component.codeSnippet}
            </SyntaxHighlighter>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 bg-white/10 text-white rounded opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm hover:bg-white/20"
              title="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
}
