import React from 'react';
import { Cloud, Code, Server, Database, Cpu, Blocks } from 'lucide-react';
import { Terminal } from './Terminal';
import { CommandLine } from './CommandLine';

export function Skills() {
  const skills = {
    cloud: ["AWS", "Azure", "Google Cloud", "Terraform"],
    devops: ["Docker", "Kubernetes", "CI/CD", "Linux", "Jenkins", "Git", "Ansible", "Bash"],
    programming: ["JavaScript", "TypeScript", "Java", "Solidity"],
    frameworks: ["React", "Next.js", "Node.js", "Spring Boot"],
    databases: ["MongoDB", "PostgreSQL"],
    blockchain: ["Hardhat", "Truffle", "Ganache", "ethers.js", "viem", "Infura"]
  };

  return (
    <Terminal>
      <CommandLine 
        command="ls ./skills/"
        output={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <SkillCategory 
              icon={<Cloud />} 
              title="Cloud & DevOps" 
              skills={[...skills.cloud, ...skills.devops]} 
              columns={2}
              minHeight="h-[280px]"
            />
            <SkillCategory 
              icon={<Code />} 
              title="Languages & Frameworks" 
              skills={[...skills.programming, ...skills.frameworks]} 
              columns={2}
              minHeight="h-[280px]"
            />
            <SkillCategory 
              icon={<Database />} 
              title="Databases" 
              skills={skills.databases} 
              columns={1}
              minHeight="h-[200px]"
            />
            <SkillCategory 
              icon={<Blocks />} 
              title="Blockchain" 
              skills={skills.blockchain} 
              columns={2}
              minHeight="h-[200px]"
            />
          </div>
        }
      />
    </Terminal>
  );
}

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  columns?: number;
  minHeight?: string;
}

function SkillCategory({ icon, title, skills, columns = 1, minHeight = "h-auto" }: SkillCategoryProps) {
  // Calculate items per column
  const itemsPerColumn = Math.ceil(skills.length / columns);
  
  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg p-4 ${minHeight}`}>
      <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
        {icon}
        <h3 className="font-bold">{title}</h3>
      </div>
      <div className={columns === 2 ? 'grid grid-cols-2 gap-x-4' : 'grid grid-cols-1 gap-x-4'}>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <ul key={colIndex} className="space-y-2">
            {skills
              .slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
              .map((skill) => (
                <li key={skill} className="text-gray-700 dark:text-gray-300">$ {skill}</li>
              ))}
          </ul>
        ))}
      </div>
    </div>
  );
}