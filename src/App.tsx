import React from 'react';
import { Github, Linkedin, Twitter, Mail, Terminal as TerminalIcon, Download } from 'lucide-react';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { TypeAnimation } from 'react-type-animation';
import { Experience } from './components/Experience';
import { ScrollProgress } from './components/ScrollProgress';
import Resume from './assets/Sabari_Aditiyaa_CV.docx';

function App() {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/saisabari24',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sabariaditiyaa/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SabariAditiyaa',
      icon: <Twitter size={20} />,
    },
    {
      name: 'Email',
      url: 'mailto:sabariaditiyaa@gmail.com',
      icon: <Mail size={20} />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-6 md:p-12">
      <ScrollProgress />
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header/Introduction */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
            Vijey A R Sabari Aditiyaa
          </h1>
          <TypeAnimation
            sequence={[
              'Cloud DevOps Engineer',
              1000,
              'Cloud DevOps Engineer | Full Stack Developer',
              1000,
              'Cloud DevOps Engineer | Full Stack Developer | Blockchain Developer',
              5000,
            ]}
            wrapper="div"
            speed={50}
            className="text-xl text-gray-300"
            repeat={Infinity}
            cursor={false}
          />
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                href={Resume}
                download="Sabari_Aditiyaa_CV.docx"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
              >
                <TerminalIcon size={20} className="text-green-400" />
                <span className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span>download-resume</span>
                  <Download size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
          <Experience />
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <Projects />
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          <Skills />
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Certifications</h2>
          <Certifications />
        </section>
      </div>
    </div>
  );
}

export default App;