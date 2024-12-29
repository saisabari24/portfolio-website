import React, { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrolled / total) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-blue-500 transition-all duration-200 ease-out"
        style={{ 
          width: `${progress}%`,
          backgroundImage: 'linear-gradient(to right, #3B82F6, #60A5FA)'
        }}
      />
    </div>
  );
} 