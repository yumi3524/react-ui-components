import { Link } from 'react-router-dom';
import { componentsData, categoriesData } from '../data';
import { ComponentCard } from '../components/ComponentCard/index';
import type { ComponentCategory } from '../types';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { useState } from 'react';

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
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 text-sm font-medium group"
            >
              <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
              Home
            </Link>
            <div className="h-6 w-px bg-gray-200" />
            <h1 className="text-xl font-bold text-gray-900">Component Gallery</h1>
          </div>
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
              ? 'bg-gray-900 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
          >
            All
          </button>
          {categoriesData.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
            >
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
