import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll event to change navigation style
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const sectionId = href?.substring(1);
        
        if (sectionId) {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    // Add click event listener to document
    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' : 'py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[#800000] dark:text-white">IA</a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="text-gray-700 hover:text-[#800000] dark:text-gray-300 dark:hover:text-white transition-colors">About</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-[#800000] dark:text-gray-300 dark:hover:text-white transition-colors">Projects</a></li>
            <li><a href="#tech-stack" className="text-gray-700 hover:text-[#800000] dark:text-gray-300 dark:hover:text-white transition-colors">Tech Stack</a></li>
            <li><a href="#prompt-kit" className="text-gray-700 hover:text-[#800000] dark:text-gray-300 dark:hover:text-white transition-colors">Prompt Kit</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-[#800000] dark:text-gray-300 dark:hover:text-white transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button className="text-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;