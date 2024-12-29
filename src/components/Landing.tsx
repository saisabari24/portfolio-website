import { TypeAnimation } from 'react-type-animation';

// Update the intro text
const introText = {
  title: "Cloud DevOps Engineer & Fullstack Developer",
  subtitle: "4+ years of experience in cloud infrastructure, DevOps, and full-stack development",
  description: "Specializing in AWS, Docker, Kubernetes, and modern web technologies. Skilled in automating CI/CD pipelines and optimizing cloud infrastructure."
}; 

<TypeAnimation
  sequence={[
    'Full Stack Developer',
    1000,
    'Cloud DevOps Engineer',
    1000,
    'Blockchain Developer',
    1000,
  ]}
  wrapper="span"
  speed={50}
  className="text-blue-400"
  repeat={Infinity}
/> 