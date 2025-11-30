import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { Eye, Code2, FileCode, Copy, Check } from 'lucide-react';
import type { ComponentInfo } from '../../types';
import { TabButton } from '../TabButton';

interface CardContentProps {
  component: ComponentInfo;
}

type TabType = 'preview' | 'usage' | 'source';

/**
 * コンポーネントカードのコンテンツ部分
 * タブ切り替え（Preview/Usage/Source）とデモ・コード表示を担当
 */
export function CardContent({ component }: CardContentProps) {
  const [activeTab, setActiveTab] = useState<TabType>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* タブ */}
      <div className="flex border-b border-gray-200">
        <TabButton
          isActive={activeTab === 'preview'}
          onClick={() => setActiveTab('preview')}
          icon={<Eye className="w-4 h-4" />}
          label="Preview"
        />
        <TabButton
          isActive={activeTab === 'usage'}
          onClick={() => setActiveTab('usage')}
          icon={<Code2 className="w-4 h-4" />}
          label="Usage"
        />
        <TabButton
          isActive={activeTab === 'source'}
          onClick={() => setActiveTab('source')}
          icon={<FileCode className="w-4 h-4" />}
          label="Source"
        />
      </div>

      {/* コンテンツ */}
      <div className="p-0">
        {activeTab === 'preview' && (
          <motion.div
            key="preview"
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

        {activeTab === 'usage' && (
          <motion.div
            key="usage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative group h-[400px] overflow-auto"
          >
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                fontSize: '0.8rem',
                padding: '1.5rem',
                minHeight: '100%',
              }}
            >
              {component.codeSnippet}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(component.codeSnippet)}
              className="absolute top-2 right-2 p-2 bg-white/10 text-white rounded opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm hover:bg-white/20 z-10"
              title="Copy usage code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </motion.div>
        )}

        {activeTab === 'source' && (
          <motion.div
            key="source"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative group h-[400px] overflow-auto"
          >
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                borderRadius: 0,
                fontSize: '0.8rem',
                padding: '1.5rem',
                minHeight: '100%',
              }}
            >
              {component.implementationCode}
            </SyntaxHighlighter>
            <button
              onClick={() => handleCopy(component.implementationCode)}
              className="absolute top-2 right-2 p-2 bg-white/10 text-white rounded opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm hover:bg-white/20 z-10"
              title="Copy implementation code"
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
