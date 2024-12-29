import { CommandLine } from "./CommandLine";
import { Terminal } from "./Terminal";
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Contact() {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/saisabari24',
      icon: <Github size={20} />,
      username: '@saisabari24'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sabariaditiyaa/',
      icon: <Linkedin size={20} />,
      username: '@sabariaditiyaa'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SabariAditiyaa',
      icon: <Twitter size={20} />,
      username: '@SabariAditiyaa'
    },
    {
      name: 'Email',
      url: 'mailto:sai77sab@gmail.com',
      icon: <Mail size={20} />,
      username: 'sabariaditiyaa@gmail.com'
    }
  ];

  return (
    <Terminal>
      <CommandLine
        command="cat contact.json"
        output={
          <div className="space-y-4">
            <p className="text-gray-300">Feel free to reach out through any of these platforms:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                >
                  <div className="text-blue-400">
                    {social.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-200">{social.name}</div>
                    <div className="text-gray-400 text-sm">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        }
      />
    </Terminal>
  );
} 