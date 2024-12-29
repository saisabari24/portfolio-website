import React from 'react';

interface CommandLineProps {
  command: string;
  output: React.ReactNode;
}

export function CommandLine({ command, output }: CommandLineProps) {
  return (
    <div>
      <div className="flex items-center gap-2 text-green-400">
        <span>$</span>
        <span>{command}</span>
      </div>
      <div className="mt-4 text-gray-300">
        {output}
      </div>
    </div>
  );
}