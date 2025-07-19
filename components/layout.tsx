import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer'; 
import useScrollSpy from '../utils/userscrollspy';

export default function Layout({ children }: { children: React.ReactNode }) {
  useScrollSpy(['about', 'projects', 'skills', 'contact']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}