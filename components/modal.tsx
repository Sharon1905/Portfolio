import React from 'react';
import { FiX, FiGithub } from 'react-icons/fi';

interface ModalProps {
  title: string;
  description: string;
  tech: string;
  github: string;
  onClose: () => void;
}

export default function Modal({ title, description, tech, github, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl max-w-3xl w-full p-8 relative shadow-lg animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 text-2xl"
          aria-label="Close modal"
        >
          <FiX />
        </button>

        <h3 className="text-3xl font-semibold mb-4">{title}</h3>

        <p className="text-md mb-6 whitespace-pre-line">{description}</p>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{tech}</p>

        <div className="flex justify-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-3xl"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
