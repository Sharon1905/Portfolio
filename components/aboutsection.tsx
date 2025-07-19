'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-20 py-20 px-6 md:px-16 bg-navy text-white transition-colors duration-500"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <svg className="absolute left-0 top-0 w-1/3 h-1/2 z-[-10] animate-float1 pointer-events-none" viewBox="0 0 400 200" fill="none">
            <ellipse cx="80" cy="80" rx="60" ry="30" fill="#ff2c2c" fillOpacity="0.035" />
            <path d="M0,120 Q100,40 400,80" stroke="#fff" strokeWidth="8" strokeOpacity="0.03" fill="none" />
          </svg>
          <svg className="absolute right-0 bottom-0 w-1/4 h-1/3 z-[-10] animate-float2 pointer-events-none" viewBox="0 0 200 100" fill="none">
            <circle cx="160" cy="40" r="30" fill="#ff2c2c" fillOpacity="0.04" />
            <rect x="20" y="60" width="60" height="20" rx="10" fill="#fff" fillOpacity="0.03" />
          </svg>
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -12, 0, 12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/images/mogger 3.jpg"
                alt="Sharon Shaji"
                width={350}
                height={350}
                className="rounded-2xl shadow-xl object-cover border-4 border-red"
                placeholder="blur"
                blurDataURL="/images/mogger 3.jpg"
                style={{ boxShadow: '0 0 32px 0 #ff2c2c33, 0 4px 32px 0 #0006' }}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-neutral-200 mb-6">
              I’m Sharon, a passionate developer driven by curiosity and a constant hunger to build purposeful, real-world solutions. My journey into tech began with fascination — one line of code led to another, and soon I was creating projects that didn’t just work, but made sense.
            </p>
            <p className="text-lg leading-relaxed text-neutral-200 mb-6">
              Whether it’s a real-time voice translator or an esports talent platform, I enjoy crafting tools that are meaningful, efficient, and rooted in clean, logical design.
            </p>
            <p className="text-lg leading-relaxed text-neutral-200">
              Every new build is a chance to grow — because with every project, there’s something new to discover and refine.
            </p>
          </motion.div>
        </div>
      </section>
      <svg className="absolute left-1/2 top-0 w-1/6 h-1/6 z-[-10] animate-float3 pointer-events-none" viewBox="0 0 120 120" fill="none">
        <polygon points="60,10 110,110 10,110" fill="#ff2c2c" fillOpacity="0.03" />
        <circle cx="60" cy="60" r="30" fill="#fff" fillOpacity="0.02" />
      </svg>
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float1 { animation: float1 12s ease-in-out infinite alternate; }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(14px); }
        }
        .animate-float2 { animation: float2 10s ease-in-out infinite alternate; }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float3 { animation: float3 16s ease-in-out infinite alternate; }
      `}</style>
    </>
  );
}
