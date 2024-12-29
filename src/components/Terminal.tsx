import React from 'react';

interface TerminalProps {
  children: React.ReactNode;
}

export function Terminal({ children }: TerminalProps) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex gap-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="p-4 font-mono text-gray-300">
        {children}
      </div>
    </div>
  );
}