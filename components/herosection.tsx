import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colors = [
    '#ff2c2c', '#f87171', '#ff6666', '#a855f7', '#c084fc', '#ffffff', '#ffddaa'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: 1 + Math.random() * 2.5,
      dx: -0.3 + Math.random() * 0.6,
      dy: -0.3 + Math.random() * 0.6,
      alpha: 0.3 + Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.globalAlpha = 1;
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > window.innerWidth) p.dx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.dy *= -1;
      }
      animationFrameId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 hidden xs:block" 
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
}

export default function HeroSection() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x, y });
      document.body.style.setProperty('--clientX', `${e.clientX}px`);
      document.body.style.setProperty('--clientY', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = (multX: number, multY: number) => ({
    transform: `translate(${parallax.x * multX}px, ${parallax.y * multY}px) scale(1)`
  });

  return (
    <section id="home" className="min-h-screen pb-16 sm:pb-24 lg:pb-0 flex flex-col md:flex-row justify-center items-center gap-10 px-4 sm:px-6 md:px-10 lg:px-16 transition-colors duration-500 relative overflow-hidden bg-navy">
      <ParticleBackground />

      <svg className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none hidden xs:block" viewBox="0 0 1440 800" fill="none">
        <line x1="200" y1="100" x2="1240" y2="120" stroke="#ff2c2c" strokeWidth="3" strokeOpacity="0.13">
          <animate attributeName="y1" values="100;120;100" dur="7s" repeatCount="indefinite" />
          <animate attributeName="y2" values="120;100;120" dur="7s" repeatCount="indefinite" />
        </line>
        <line x1="300" y1="700" x2="1100" y2="720" stroke="#fff" strokeWidth="2" strokeOpacity="0.09">
          <animate attributeName="y1" values="700;720;700" dur="9s" repeatCount="indefinite" />
          <animate attributeName="y2" values="720;700;720" dur="9s" repeatCount="indefinite" />
        </line>
        <circle cx="400" cy="200" r="8" fill="#ff2c2c">
          <animate attributeName="cy" values="200;220;200" dur="6s" repeatCount="indefinite" />
          <animate attributeName="fill" values="#ff2c2c;#fff;#ff2c2c" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.18;0.32;0.18" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="600" r="12" fill="#fff">
          <animate attributeName="cy" values="600;620;600" dur="8s" repeatCount="indefinite" />
          <animate attributeName="fill" values="#fff;#ff2c2c;#fff" dur="8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.13;0.28;0.13" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="absolute inset-0 -z-10 w-screen h-screen overflow-hidden hidden xs:block">
        <svg
          className="absolute left-0 top-0 w-full h-full z-0 animate-pulse-slow"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={parallaxStyle(80, 40)}
          >
          <path d="M0,400 Q200,200 800,0" stroke="#ff2c2c" strokeWidth="60" strokeOpacity="0.15" fill="none" />
          <path d="M0,600 Q300,400 800,200" stroke="#ff2c2c" strokeWidth="40" strokeOpacity="0.10" fill="none" />
          <path d="M100,800 Q400,600 800,400" stroke="#fff" strokeWidth="12" strokeOpacity="0.08" fill="none" />
          <circle cx="120" cy="120" r="40" fill="#ff2c2c" fillOpacity="0.12" />
          <rect x="600" y="650" width="80" height="80" rx="20" fill="#fff" fillOpacity="0.07" />
        </svg>
      </div>
      <svg
        className="hidden xs:block absolute right-0 bottom-0 w-1/2 h-1/2 z-0 animate-float1" 
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={parallaxStyle(-60, -80)}
      >
        <path d="M0,200 Q100,100 400,0" stroke="#ff2c2c" strokeWidth="30" strokeOpacity="0.13" fill="none" />
        <circle cx="350" cy="350" r="30" fill="#ff2c2c" fillOpacity="0.10" />
      </svg>
      <svg className="hidden xs:block absolute left-1/3 top-1/4 w-16 h-16 z-0 animate-float2" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="32" rx="24" ry="16" fill="#ff2c2c" fillOpacity="0.18" />
      </svg>
      <svg className="hidden xs:block absolute right-1/4 bottom-1/3 w-12 h-12 z-0 animate-float3" viewBox="0 0 48 48" fill="none">
        <ellipse cx="24" cy="24" rx="16" ry="10" fill="#fff" fillOpacity="0.10" />
      </svg>
      <svg className="hidden xs:block absolute left-1/2 bottom-1/4 w-10 h-10 z-0 animate-float4" viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="20" rx="10" ry="7" fill="#ff2c2c" fillOpacity="0.13" />
      </svg>
      <svg className="hidden xs:block absolute right-8 top-1/3 w-40 h-40 z-0 animate-float5 pointer-events-none" viewBox="0 0 160 160" fill="none">
        <polygon points="80,10 150,80 80,150 10,80" fill="#ff2c2c" fillOpacity="0.06" />
        <path d="M40,80 Q80,40 120,80 Q80,120 40,80 Z" fill="#fff" fillOpacity="0.03" />
      </svg>
      <div className="spotlight" />
      
      <div className="flex flex-col items-center flex-1 max-w-xl md:max-w-none mx-auto md:mx-0 md:items-start md:text-left z-10 animate-fade-up px-2 sm:px">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
          Hi, I'm Sharon Shaji
        </h1>

        <div className="hidden md:block lg:hidden w-fit mx-auto md:mx-0 mb-6 animate-fade-up" style={{animationDelay: '0.1s'}}>
            <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden bg-navy z-10 shadow-xl">
                <div className="absolute inset-0 z-0 pointer-events-none rounded-full" style={{
                    background: 'radial-gradient(circle, #ff2c2c55 0%, #ff2c2c22 60%, transparent 100%)',
                    filter: 'blur(12px)',
                }} />
                <Image
                src="/images/mogger 2.jpg"
                alt="Sharon Hero"
                fill
                className="object-cover rounded-full"
                placeholder="blur"
                blurDataURL="/images/mogger 2.jpg"
                />
            </div>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#f87171] mb-6 animate-fade-up" style={{animationDelay: '0.2s'}}>
          Web3 Developer | AI Explorer | Gaming Tech Enthusiast
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#f87171] mb-8 max-w-xs sm:max-w-md md:max-w-xl mx-auto md:mx-0 animate-fade-up" style={{animationDelay: '0.4s'}}>
          Building immersive solutions at the intersection of innovation and gaming — blending tech with creativity.
        </p>
        <div className="flex flex-col sm:flex-row items-center sm:justify-start md:items-start md:justify-start gap-4 sm:gap-6 animate-fade-up" style={{animationDelay: '0.6s'}}>
          <a
            href="#contact"
            className="px-8 py-4 bg-red text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            Hire Me
          </a>
          <Link
            href="/Sharon Resume.pdf"
            target="_blank"
            download="Sharon_Resume.pdf"
            className="px-6 py-3 border-2 border-red text-red font-semibold rounded-xl hover:bg-red/10 hover:text-white transition"
          >
            Download CV
          </Link>
        </div>
        <div className="mt-6 flex justify-center md:justify-start gap-4 text-red animate-fade-up " style={{animationDelay: '0.8s'}}>
          <a href="https://github.com/Sharon1905" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
      
      <div className="flex-1 mt-8 md:mt-0 justify-center md:justify-end items-center z-10 animate-fade-up
        flex md:hidden lg:flex"
        style={{animationDelay: '1s'}}>
        <div className="relative w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[420px] md:h-[420px] flex items-center justify-center">
          <div className="absolute inset-0 z-0 pointer-events-none rounded-full" style={{
            background: 'radial-gradient(circle, #ff2c2c55 0%, #ff2c2c22 60%, transparent 100%)',
            filter: 'blur(12px)',
          }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden bg-navy z-10 shadow-xl">
            <Image
              src="/images/mogger 2.jpg"
              alt="Sharon Hero"
              fill
              className="object-cover rounded-full"
              placeholder="blur"
              blurDataURL="/images/mogger 2.jpg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <span className="text-white text-[10px] sm:text-xs mb-1">Scroll</span>
        <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
      <style jsx>{`
        .clip-hexagon {
          -webkit-clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
          clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        }
      `}</style>
      <style jsx global>{`
        .spotlight {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 2;
          background-image: radial-gradient(
            circle at var(--clientX, 50%) var(--clientY, 50%),
            rgba(0,0,0,0.32) 0em,
            rgba(0,0,0,0.32) 0.7em,
            transparent 1.2em
          );
          transition: background-position 0.1s;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float1 { animation: float1 7s ease-in-out infinite alternate; }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-float2 { animation: float2 5s ease-in-out infinite alternate; }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float3 { animation: float3 6s ease-in-out infinite alternate; }
        @keyframes float4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-float4 { animation: float4 4.5s ease-in-out infinite alternate; }
      `}</style>
      <style jsx>{`
        @keyframes float5 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float5 { animation: float5 10s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
}