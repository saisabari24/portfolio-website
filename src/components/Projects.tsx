import { Terminal } from './Terminal';
import { CommandLine } from './CommandLine';
import React from 'react';
import { Code, ExternalLink } from 'lucide-react';
import {
  SiAmazon as SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiArgo as SiArgocd,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiSpring as SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiSolidity,
  SiWeb3Dotjs,
  SiSonarqube,
  SiRedux,
  SiExpress,
  SiMysql,
  SiNetflix,
  SiGithub,
} from 'react-icons/si';

type TechIconsType = {
  [key: string]: JSX.Element;
};

const techIcons: TechIconsType = {
  'AWS': <SiAmazonaws className="text-[#FF9900]" />,
  'Docker': <SiDocker className="text-[#2496ED]" />,
  'Kubernetes': <SiKubernetes className="text-[#326CE5]" />,
  'Terraform': <SiTerraform className="text-[#7B42BC]" />,
  'Jenkins': <SiJenkins className="text-[#D24939]" />,
  'ArgoCD': <SiArgocd className="text-[#EF7B4D]" />,
  'React': <SiReact className="text-[#61DAFB]" />,
  'TypeScript': <SiTypescript className="text-[#3178C6]" />,
  'Node.js': <SiNodedotjs className="text-[#339933]" />,
  'Spring Boot': <SiSpringboot className="text-[#6DB33F]" />,
  'MongoDB': <SiMongodb className="text-[#47A248]" />,
  'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'Solidity': <SiSolidity className="text-[#363636]" />,
  'Hardhat': <Code size={16} className="text-[#FFF100]" />,
  'Web3': <SiWeb3Dotjs className="text-[#F16822]" />,
  'Sonarqube': <SiSonarqube className="text-[#4E9BCD]" />,
  'Redux': <SiRedux className="text-[#764ABC]" />,
  'Express': <SiExpress className="text-white" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'Eureka': <SiNetflix className="text-[#E50914]" />,
  'BaseChain': <Code size={16} className="text-white" />,
  'Java': <Code size={16} className="text-[#007396]" />,
  'Trivy': <Code size={16} className="text-[#2496ED]" />,
};

// Update the project tech badges rendering
function TechBadge({ tech }: { tech: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-700 rounded text-xs">
      {techIcons[tech] || <Code size={12} />}
      <span>{tech}</span>
    </div>
  );
}

export const projects = [
  {
    title: "BasedPedro Cryptocurrency",
    description: "ERC-20 token platform on Base Chain with presale functionality",
    highlights: [
      "Developed ERC-20 token in Base Chain",
      "Implemented secure presale smart contract",
      "Built responsive presale dashboard with Web3 integration",
      "Integrated RainbowKit for wallet connections",
    ],
    tech: ["Solidity", "Next.js", "React", "Hardhat", "Web3", "BaseChain"],
    link: "https://basedpedro.com/"
  },
  {
    title: "AmazonPrime-CICD",
    description: "Amazon Prime Clone with robust CI/CD pipeline and cloud infrastructure",
    highlights: [
      "Implemented GitOps with ArgoCD and Helm",
      "Set up monitoring with Prometheus & Grafana",
      "Automated deployments with Jenkins and Terraform"
    ],
    tech: ["AWS", "Kubernetes", "Jenkins", "Terraform", "Docker", "ArgoCD"],
    link: "https://github.com/saisabari24/amazonPrime-CICID"
  },
  {
    title: "Starbucks",
    description: "Starbucks clone with comprehensive CI/CD and security scanning",
    highlights: [
      "Implemented CI/CD pipeline with Jenkins",
      "Integrated Sonarqube for code quality",
      "Security scanning with Trivy"
    ],
    tech: ["AWS", "Jenkins", "Docker", "Sonarqube", "Trivy"],
    link: "https://github.com/saisabari24/starbucks"
  },
  {
    title: "Flexibble",
    description: "Modern design sharing platform inspired by Dribbble",
    highlights: [
      "Server-side rendering with Next.js",
      "TypeScript for type safety",
      "MongoDB for data persistence"
    ],
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/saisabari24/flexibble"
  },
  {
    title: "MernStack Repairshop",
    description: "Full-stack repair shop management system",
    highlights: [
      "State management with Redux",
      "RESTful API with Express",
      "MongoDB database integration"
    ],
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/saisabari24/MernStack"
  },
  {
    title: "SpringBoot Microservices",
    description: "Microservices architecture with Spring Boot",
    highlights: [
      "Service discovery with Netflix Eureka",
      "API Gateway implementation",
      "Multiple database integration"
    ],
    tech: ["Java", "Spring Boot", "MongoDB", "MySQL", "Eureka"],
    link: "https://github.com/saisabari24/SpringBootMicroServices"
  }
];

export function Projects() {
  return (
    <Terminal>
      <CommandLine
        command="ls ./projects/"
        output={
          <div className="grid grid-cols-1 gap-6 mt-4">
            {projects.map((project) => (
              <a 
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition relative group"
              >
                <div className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full flex items-center gap-1.5 ${
                  project.link.includes('github.com') 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-blue-900/50 text-blue-300'
                }`}>
                  {project.link.includes('github.com') ? (
                    <>
                      <SiGithub className="w-3 h-3" />
                      <span>GitHub</span>
                    </>
                  ) : (
                    <span>Live Demo</span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-blue-400 font-bold text-xl flex items-center gap-2">
                    {project.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm mb-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </a>
            ))}
          </div>
        }
      />
    </Terminal>
  );
} 