import { useState } from 'react';
import { componentsData, categoriesData } from '../data/components';
import { ComponentCard } from '../components/ComponentCard';
import type { ComponentCategory } from '../types';
import { motion } from 'framer-motion';

/**
 * コンポーネント一覧ページ
 */
export const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    ComponentCategory | 'all'
  >('all');

  const filteredComponents =
    selectedCategory === 'all'
      ? componentsData
      : componentsData.filter((c) => c.category === selectedCategory);

  const stats = [
    { label: 'Components', value: componentsData.length },
    { label: 'Categories', value: categoriesData.length },
    { label: 'TypeScript', value: '100%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Component Gallery</h1>
          <div className="flex gap-4 text-sm text-gray-500">
            {stats.map((stat) => (
              <div key={stat.label} className="flex gap-2 items-center">
                <span className="font-medium text-gray-900">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'all'
                ? 'bg-gray-900 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
          >
            All
          </button>
          {categoriesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${selectedCategory === category.id
                  ? 'bg-white text-gray-900 shadow-lg scale-105 ring-2 ring-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {selectedCategory !== 'all' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 text-gray-600"
          >
            {categoriesData.find((c) => c.id === selectedCategory)?.description}
          </motion.div>
        )}

        {/* Component Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredComponents.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ComponentCard component={component} />
            </motion.div>
          ))}
        </div>

        {filteredComponents.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No components found in this category.
          </div>
        )}
      </main>
    </div>
  );
};
