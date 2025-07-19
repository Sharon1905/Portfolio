import Head from 'next/head';
import HeroSection from '../components/herosection';
import ProjectSection from '../components/projectsection';
import AboutSection from '../components/aboutsection';
import ContactSection from '../components/contactsection';
import SkillsSection from '../components/skillsection';
import useScrollSpy from '../utils/userscrollspy';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  useScrollSpy(['about', 'skills', 'projects', 'contact']);
  return (
    <>
      <Head>
        <title>Sharon Shaji | Portfolio</title>
        <meta name="description" content="Portfolio website of Sharon Shaji" />
      </Head>

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}