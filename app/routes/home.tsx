import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Route } from './+types/home';

// Components
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import PromptKit from '../components/PromptKit';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Isaac Akinladejo – AI Builder & Systems Architect Portfolio' },
    { name: 'description', content: 'Portfolio of Isaac Akinladejo, AI Builder and Systems Architect specializing in AI systems, prompt engineering, and technical creativity.' },
    { name: 'theme-color', content: '#800000' },
    { property: 'og:title', content: 'Isaac Akinladejo – AI Builder & Systems Architect' },
    { property: 'og:description', content: 'Building AI systems that think, automate, and assist — beautifully.' },
    { property: 'og:type', content: 'website' },
  ];
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize animations
    const ctx = gsap.context(() => {
      // Animations will be added here
    }, mainRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={mainRef} className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects id="projects" />
      <TechStack id="tech-stack" />
      <PromptKit id="prompt-kit" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}
