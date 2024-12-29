import React from 'react';
import { Award } from 'lucide-react';
import { Terminal } from './Terminal';
import { CommandLine } from './CommandLine';

export function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/fc961ade-10e9-47b8-9fb1-0ea7f928a65b"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/91e40897-fbc8-4066-a22f-e9dc62944989"
    },
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud",
      link: "https://www.credly.com/badges/185e9b1c-d55b-44ba-ba64-dcb6e58624d5"
    },
    {
      title: "Corda Certified Developer",
      issuer: "R3",
      link: "https://www.credly.com/badges/fd0f3af2-0080-4061-bcd6-8878ecb6cf55"
    },
    {
      title: "Blockchain Foundation Developer",
      issuer: "IBM",
      link: "https://www.credly.com/badges/699ba514-5543-4cf3-99f3-deda8d7400cc"
    },
    {
      title: "Oracle Cloud Infrastructure 2023 Foundations Associate",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=4BFEA8134745D17F1E41991FEED1D624A3844CDC6FA8657ED269A7055C81ED9E"
    }
  ];

  return (
    <Terminal>
      <CommandLine
        command="cat certifications.json"
        output={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {certifications.map((cert) => (
              <a 
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition"
              >
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                  <Award size={20} />
                  <h3 className="font-bold">{cert.title}</h3>
                </div>
                <p className="text-gray-400">{cert.issuer}</p>
              </a>
            ))}
          </div>
        }
      />
    </Terminal>
  );
}