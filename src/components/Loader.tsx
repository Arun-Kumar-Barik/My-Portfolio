import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  progress: number;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gradient mb-4">Arun Kumar Barik</h1>
        <p className="text-xl text-secondary-400 mb-8">Java Backend Developer | DSA Mentor</p>
        
        <div className="w-64 h-2 bg-dark-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
          />
        </div>
        <p className="mt-2 text-sm text-gray-400">{progress}%</p>
      </motion.div>
    </div>
  );
};

export default Loader;