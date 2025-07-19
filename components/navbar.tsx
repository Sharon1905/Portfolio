import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useTheme } from '../context/themecontext'; 

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  // const { theme, toggleTheme } = useTheme(); 
  const [active, setActive] = useState('Home'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const handleNavClick = (name: string, href: string) => {
    setActive(name);
    setIsMobileMenuOpen(false); 
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const initialHash = window.location.hash.substring(1);
      const foundLink = navLinks.find(link => link.href.substring(1) === initialHash);
      if (foundLink) {
        setActive(foundLink.name);
      }
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; 
      let currentActive = 'Home'; 
      for (const link of navLinks) {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = link.name;
            break;
          }
        }
      }
      setActive(currentActive);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []); 

  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-navy-DEFAULT shadow-md sticky top-0 z-50 md:px-6">
      <Link href="#home" className="text-xl font-extrabold text-white tracking-widest z-50">
        &lt;Sharon /&gt;
      </Link>

      <button
        className="md:hidden relative w-8 h-8 flex flex-col justify-around items-center focus:outline-none z-50 group"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'rotate-45 translate-y-2.5 transform origin-center'
              : 'group-hover:-translate-y-1' 
          }`}
        ></span>
        <span
          className={`block w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'opacity-0' : 'group-hover:scale-x-75' 
          }`}
        ></span>
        <span
          className={`block w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? '-rotate-45 -translate-y-2.5 transform origin-center'
              : 'group-hover:translate-y-1' 
          }`}
        ></span>
      </button>

      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => handleNavClick(link.name, link.href)}
                className={`relative font-semibold transition-colors duration-200 px-1 group ${active === link.name ? 'text-red-DEFAULT' : 'text-white hover:text-red-DEFAULT'}`}
              >
                <span className="relative z-10">{link.name}</span>
                <span
                   className={`absolute left-0 -bottom-1 w-full h-1 bg-red-500 transition-all duration-300 origin-left z-0 ${active === link.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    style={{
                      transformOrigin: 'left',
                      boxShadow: '0 0 4px rgba(255, 44, 44, 0.5), 0 0 8px rgba(255, 44, 44, 0.4)',
                    }}
                />
              </Link>
            </li>
          ))}
        </ul>
        {/* <button
          onClick={toggleTheme}
          className="text-2xl text-white focus:outline-none transition-transform hover:scale-110 ml-4"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? '\u2600\ufe0f' : '\ud83c\udf19'}
        </button> */}
      </div>

      <div className={`md:hidden fixed inset-0 bg-navy-DEFAULT bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 z-40
        ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        transition-all duration-500 ease-in-out transform`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => handleNavClick(link.name, link.href)}
                className={`text-3xl font-bold transition-colors duration-200 ${active === link.name ? 'text-red-DEFAULT' : 'text-white hover:text-red-DEFAULT'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <button
          onClick={toggleTheme}
          className="text-white text-4xl focus:outline-none transition-transform hover:scale-110 mt-8"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? '\u2600\ufe0f' : '\ud83c\udf19'}
        </button> */}
      </div>
    </nav>
  );
}