import React, { useState } from 'react';
import Modal from './modal';

const projects = [
  {
    title: 'LearnChain',
    description: 'Decentralized learning platform where educators publish courses and students earn blockchain-verified certificates.',
    fullDescription: `A decentralized learning platform where educators can create and publish blockchain-backed courses. Students enroll, complete modules, and earn tamper-proof certificates minted on-chain. It promotes open education, transparency, and verifiable credentials — ideal for future-forward learning ecosystems.`,
    tech: 'Flask, React, Solidity, PostgreSQL',
    github: 'https://github.com/Sharon1905',
  },
  {
    title: 'SkillLink',
    description: 'Esports talent platform connecting players with orgs via gigs, endorsements, and stat verification.',
    fullDescription: 'SkillLink bridges esports players and organizations through short-term gigs, endorsement-based matchmaking, and verified game statistics. Built with secure authentication and performance verification using external APIs, it helps players monetize their skillsets while building a soulbound NFT-backed reputation.',
    tech: 'FastAPI, Python, PostgreSQL, JWT',
    github: 'https://github.com/Sharon1905',
  },
  {
    title: 'FaceTrackr',
    description: 'Real-time facial recognition attendance system optimized for low-spec hardware and remote classrooms.',
    fullDescription: 'An AI-powered facial recognition attendance system designed for classrooms, especially in low-resource environments. Built using dlib and OpenCV, it identifies students in real-time through a webcam feed, logs attendance, and works reliably even on devices without GPUs. Great for remote or rural education setups.',
    tech: 'Python, OpenCV, dlib',
    github: 'https://github.com/Sharon1905',
  },
  {
    title: 'Verbo',
    description: 'Real-time voice translation app using STT, translation APIs, and TTS models like Coqui/Piper.',
    fullDescription: 'A real-time voice translation app that takes spoken input, transcribes it (STT), translates it, and plays it back using TTS. Designed for travelers and multilingual communication, it combines Coqui/Piper TTS and LibreTranslate for smooth translation between 40+ languages — with plans for subtitle and chat history support.',
    tech: 'Python, Flask, TTS/STT APIs',
    github: 'https://github.com/Sharon1905',
  },
];

export default function ProjectSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <section
        id="projects"
        className="scroll-mt-20 py-16 px-6 md:px-12 bg-navy text-white relative overflow-hidden"
      >
        <svg className="absolute left-0 top-0 w-1/3 h-1/2 z-0 animate-float1 pointer-events-none" viewBox="0 0 400 200" fill="none">
          <ellipse cx="100" cy="60" rx="70" ry="30" fill="#ff2c2c" fillOpacity="0.07" />
          <path d="M0,100 Q120,10 400,60" stroke="#fff" strokeWidth="8" strokeOpacity="0.06" fill="none" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/4 h-1/3 z-0 animate-float2 pointer-events-none" viewBox="0 0 200 100" fill="none">
          <circle cx="160" cy="40" r="30" fill="#ff2c2c" fillOpacity="0.09" />
          <rect x="20" y="60" width="60" height="20" rx="10" fill="#fff" fillOpacity="0.05" />
        </svg>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(proj)}
              className="flex flex-col justify-between h-full p-6 rounded-2xl 
                bg-navy-dark 
                shadow-md 
                border border-navy 
                hover:shadow-2xl hover:border-red 
                transform hover:scale-105 hover:-translate-y-1 
                transition-all duration-300 cursor-pointer text-white"
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-neutral-200 mb-3">
                {proj.description}
              </p>
              <span className="text-xs text-neutral-400">{proj.tech}</span>
            </div>
          ))}
        </div>

        {selected && (
          <Modal
            title={selected.title}
            description={selected.fullDescription}
            tech={selected.tech}
            github={selected.github}
            onClose={() => setSelected(null)}
          />
        )}
      </section>
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float1 { animation: float1 14s ease-in-out infinite alternate; }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-float2 { animation: float2 12s ease-in-out infinite alternate; }
      `}</style>
    </>
  );
}
