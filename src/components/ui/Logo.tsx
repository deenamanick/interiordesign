import React from 'react';
import { Home } from 'lucide-react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 24 }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-indigo-600 rounded-lg transform rotate-45 -translate-y-1 translate-x-1"></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg p-1 border-2 border-indigo-600 z-10">
        <Home size={size} className="text-indigo-600 dark:text-indigo-400" />
      </div>
    </div>
  );
};

export default Logo;