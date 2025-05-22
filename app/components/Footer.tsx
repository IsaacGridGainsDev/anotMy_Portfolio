import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-[#800000] dark:text-[#C0C0C0]">Isaac Akinladejo</h3>
            <p className="text-gray-400">AI Builder & Systems Architect</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#tech-stack" className="text-gray-300 hover:text-white transition-colors">Tech Stack</a>
            <a href="#prompt-kit" className="text-gray-300 hover:text-white transition-colors">Prompt Kit</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Accessibility Shortcut */}
          <div>
            <button 
              className="px-4 py-2 bg-[#800000] text-white rounded-md hover:bg-opacity-90 transition-all"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              Back to Top
            </button>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Isaac Akinladejo. All rights reserved.
          </p>
          
          <motion.p 
            className="text-gray-500 text-sm italic"
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
          >
            "Building tomorrow's AI solutions with today's technology."
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;