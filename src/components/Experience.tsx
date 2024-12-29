import { CommandLine } from "./CommandLine";
import { Terminal } from "./Terminal";

const experiences = [
  {
    title: "Associate Consultant",
    company: "Infosys",
    period: "July 2024 - Present",
    responsibilities: [
      "Engineering robust cloud infrastructures on AWS, Azure, and Google Cloud",
      "Streamlining CI/CD processes and implementing Infrastructure as Code",
      "Managing containerized applications with Docker and Kubernetes",
      "Optimizing application performance and cost management"
    ]
  },
  {
    title: "Software Engineer",
    company: "Bank of America",
    period: "July 2020 - July 2024",
    responsibilities: [
      "Reduced deployment time by 30% through CI/CD pipeline automation",
      "Implemented Terraform configurations, reducing manual work by 40%",
      "Set up AWS infrastructure using EC2, S3, RDS, and VPC",
      "Developed secure API ecosystem using Node.js and Spring Boot",
      "Led team automation efforts, reducing system downtime by 25%"
    ]
  }
]; 

export function Experience() {
  return (
    <Terminal>
      <CommandLine
        command="cat experience.log"
        output={
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-700">
                <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-blue-500" />
                <div className="mb-1 text-blue-400 font-bold">{exp.title}</div>
                <div className="text-gray-400 text-sm mb-2">{exp.company} | {exp.period}</div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        }
      />
    </Terminal>
  );
} 