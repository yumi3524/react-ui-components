import { motion } from 'framer-motion';
import type { ComponentInfo } from '../../types';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';
import { CardFeatures } from './CardFeatures';

interface ComponentCardProps {
  component: ComponentInfo;
}

/**
 * コンポーネント情報を表示するカード
 * Header, Content, Features の3つのサブコンポーネントで構成
 */
export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-200"
    >
      <CardHeader component={component} />
      <CardContent component={component} />
      <CardFeatures features={component.features} />
    </motion.div>
  );
}
