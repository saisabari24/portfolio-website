import { Terminal } from './Terminal';
import { CommandLine } from './CommandLine';
import React from 'react';

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
                className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-blue-400 font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <ul className="list-disc list-inside text-gray-400 text-sm">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        }
      />
    </Terminal>
  );
} 