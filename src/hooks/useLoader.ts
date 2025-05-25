import { useState, useCallback } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const setIsLoaded = useCallback(() => {
    // Simulate progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return { isLoading, progress, setIsLoaded };
};