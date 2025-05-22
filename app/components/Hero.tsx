import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate SVG elements
      gsap.fromTo('.neural-path', 
        { strokeDashoffset: 1000, strokeDasharray: 1000 },
        { strokeDashoffset: 0, duration: 2, stagger: 0.1, ease: 'power2.inOut' }
      );
      
      // Animate gear rotations
      gsap.to('.gear-1', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
      gsap.to('.gear-2', { rotation: -360, duration: 15, repeat: -1, ease: 'linear' });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-20 dark:opacity-10" 
          style={{ backgroundImage: 'url("/images/background.jpg")' }}
        ></div>
      </div>
      
      {/* Content */}
      <motion.div 
        className="z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="mb-8 flex justify-center">
          <img 
            src="/images/isaac.png" 
            alt="Isaac Akinladejo" 
            className="w-40 h-40 rounded-full border-4 border-[#800000] dark:border-[#C0C0C0] object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#800000] dark:text-white">
          <span className="block">Isaac Akinladejo</span>
          <span className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-[#C0C0C0] block mt-2">AI Builder & Systems Architect</span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 text-gray-700 dark:text-[#C0C0C0]">
          I build AI systems that think, automate, and assist — beautifully.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#about" 
            className="px-6 py-3 bg-[#800000] text-white rounded-md hover:bg-opacity-90 transition-all"
          >
            About Me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-[#800000] text-[#800000] dark:border-[#C0C0C0] dark:text-[#C0C0C0] rounded-md hover:bg-[#800000] hover:bg-opacity-10 transition-all"
          >
            View Projects
          </a>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;