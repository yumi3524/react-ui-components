import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              React UI Components
            </span>
          </div>
        </div>
      </header>

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            React UI Components
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            React, TypeScript, Tailwind CSSで構築された
            <br />
            再利用可能なUIコンポーネントライブラリ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/showcase">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
                View Components
              </button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 border-t border-gray-100 pt-16">
          {[
            {
              title: 'Tailwind CSS',
              desc: 'Utility-first CSS framework for rapid UI development.',
            },
            {
              title: 'Framer Motion',
              desc: 'Production-ready motion library for React.',
            },
            {
              title: 'TypeScript',
              desc: 'Strongly typed code for better developer experience.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-6"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
