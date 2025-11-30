import { Check } from 'lucide-react';


interface CardFeaturesProps {
  features: string[];
}

/**
 * コンポーネントカードの主要機能リスト部分
 */
export function CardFeatures({ features }: CardFeaturesProps) {
  return (
    <div className="p-6 border-t border-gray-100">
      <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
        主要機能
      </h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
