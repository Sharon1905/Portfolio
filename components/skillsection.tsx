import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend, 
} from 'chart.js';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const skills = {
  'Languages': ['Python', 'C/C++', 'SQL', 'JavaScript', 'TypeScript(basic)','HTML/CSS', 'JSON'],
  'ML & AI': ['scikit-learn', 'pandas', 'NumPy', 'matplotlib', 'pickle','OpenCV', 'Jupyter Notebook'],
  'Developer Tools': ['Git', 'GitHub', 'VS Code', 'Visual Studio', 'PyCharm', ],
  'Frameworks & Tech': ['React', 'Node.js', 'Flask', 'FastAPI', 'REST API', 'Django', 'Tailwind CSS', 'MySQL', 'PostgreSQL'],
  'Cloud & DevOps': ['Docker', 'Linux', 'AWS'],
};

const skillCategories = [
  { label: 'Languages', percent: 90, desc: 'Python, C/C++, SQL, JavaScript, HTML/CSS' },
  { label: 'ML & AI', percent: 90, desc: 'scikit-learn, pandas, NumPy, matplotlib, OpenCV' },
  { label: 'Developer Tools', percent: 90, desc: 'Git, GitHub, VS Code, Visual Studio, PyCharm, Docker' },
  { label: 'Frameworks & Tech', percent: 90, desc: 'React, Node.js, Flask, FastAPI, REST API, Django, Tailwind CSS, MySQL, PostgreSQL' },
  { label: 'Cloud & DevOps', percent: 90, desc: 'Docker, Linux, AWS' },
];

function useInViewOnce(ref: any) {
  const [hasBeenInView, setHasBeenInView] = React.useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasBeenInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return hasBeenInView;
}

function CircularProgress({ percent, label }: { percent: number; label: string }) {
  const ref = useRef(null);
  const inViewOnce = useInViewOnce(ref);
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    if (inViewOnce && progress < percent) {
      const timeout = setTimeout(() => setProgress(p => Math.min(p + 2, percent)), 10);
      return () => clearTimeout(timeout);
    }
  }, [inViewOnce, progress, percent]);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center bg-navy"
      animate={{ y: [0, -8, 0, 8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div
          className="absolute top-0 left-0 w-full h-full rounded-full"
          style={{
            background: `conic-gradient(#ff2c2c ${progress * 3.6}deg, #222 0deg)`
          }}
        />
        <div className="absolute top-2 left-2 w-16 h-16 rounded-full bg-navy flex items-center justify-center">
          <span className="text-white font-bold text-lg">{progress}%</span>
        </div>
      </div>
      <div className="mt-2 text-lg font-extrabold text-white text-center uppercase tracking-wide">{label}</div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  return (
    <>
      <motion.section
        id="skills"
        className="scroll-mt-20 py-16 px-6 md:px-12 bg-navy text-white relative overflow-hidden"
        style={{ backgroundColor: '#181d23' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <svg className="absolute left-0 top-0 w-1/3 h-1/2 z-0 animate-float1 pointer-events-none" viewBox="0 0 400 200" fill="none">
          <ellipse cx="100" cy="60" rx="70" ry="30" fill="#ff2c2c" fillOpacity="0.07" />
          <path d="M0,100 Q120,10 400,60" stroke="#fff" strokeWidth="8" strokeOpacity="0.06" fill="none" />
        </svg>
        <svg className="absolute right-0 bottom-0 w-1/4 h-1/3 z-0 animate-float2 pointer-events-none" viewBox="0 0 200 100" fill="none">
          <circle cx="160" cy="40" r="30" fill="#ff2c2c" fillOpacity="0.09" />
          <rect x="20" y="60" width="60" height="20" rx="10" fill="#fff" fillOpacity="0.05" />
        </svg>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-8 justify-center items-center">
            {skillCategories.map((cat) => (
              <CircularProgress key={cat.label} percent={cat.percent} label={cat.label} />
            ))}
          </div>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="border-b border-red pb-2">
                <button
                  onClick={() => toggleCategory(category)}
                  className="flex items-center justify-between w-full text-lg font-semibold text-red group"
                >
                  <span>{category}</span>
                  <motion.span
                    className="ml-2"
                    animate={{ rotate: openCategory === category ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openCategory === category && (
                    <motion.ul
                      key="dropdown"
                      initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                      animate={{ height: 'auto', opacity: 1, paddingTop: 8, paddingBottom: 8 }}
                      exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="pl-4 list-disc text-neutral-200 overflow-hidden"
                      layout
                    >
                      {skillList.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float1 { animation: float1 13s ease-in-out infinite alternate; }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-float2 { animation: float2 11s ease-in-out infinite alternate; }
      `}</style>
    </>
  );
}
