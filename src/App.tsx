import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Terminal } from './components/Terminal';
import { CommandLine } from './components/CommandLine';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <Terminal>
          <CommandLine
            command="whoami"
            output={
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
                  Vijey A R Sabari Aditiyaa
                </h1>
                <p className="text-xl text-gray-300">
                  Full Stack Developer & Cloud Solutions Architect
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/saisabari24" 
                     className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
                    <Github size={20} />
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/sabariaditiyaa/"
                     className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition">
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            }
          />
        </Terminal>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
          <Skills />
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
          <Certifications />
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <Terminal>
            <CommandLine
              command="contact --send-message"
              output={
                <div className="mt-4">
                  <p className="text-gray-300 mb-4">
                    I'm always interested in hearing about new projects and opportunities.
                  </p>
                  <a href="mailto:your.email@example.com" 
                     className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition">
                    <Mail size={20} />
                    Send me an email
                  </a>
                </div>
              }
            />
          </Terminal>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;