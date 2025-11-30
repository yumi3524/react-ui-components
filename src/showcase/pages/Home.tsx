import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💎</span>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              React UI Components
            </span>
          </div>
          <nav>
            <Link to="/showcase">
              <Button onClick={() => { }}>ライブラリを見る</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            モダンな
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              UIコンポーネント集
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            React, TypeScript, Tailwind CSSで構築された、
            美しく再利用可能なコンポーネントライブラリ。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/showcase">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                🚀 ライブラリを見る
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: '🎨',
              title: 'モダンなデザイン',
              desc: 'Tailwind CSSを使用した美しくレスポンシブなデザイン',
            },
            {
              icon: '⚡',
              title: 'インタラクティブ',
              desc: 'Framer Motionによるスムーズなアニメーションと操作感',
            },
            {
              icon: '📝',
              title: '完全な型安全性',
              desc: 'TypeScriptによる堅牢な実装とドキュメント',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">Tech Stack</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 shadow-sm border border-gray-100"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
