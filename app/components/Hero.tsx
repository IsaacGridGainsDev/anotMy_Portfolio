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
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {/* Neural Network Paths */}
          <path className="neural-path stroke-maroon dark:stroke-silver" d="M200,200 C300,100 700,300 800,200" strokeWidth="2" fill="none" />
          <path className="neural-path stroke-maroon dark:stroke-silver" d="M200,400 C300,300 700,500 800,400" strokeWidth="2" fill="none" />
          <path className="neural-path stroke-maroon dark:stroke-silver" d="M200,600 C300,500 700,700 800,600" strokeWidth="2" fill="none" />
          
          {/* Nodes */}
          <circle className="fill-maroon dark:fill-silver" cx="200" cy="200" r="10" />
          <circle className="fill-maroon dark:fill-silver" cx="800" cy="200" r="10" />
          <circle className="fill-maroon dark:fill-silver" cx="200" cy="400" r="10" />
          <circle className="fill-maroon dark:fill-silver" cx="800" cy="400" r="10" />
          <circle className="fill-maroon dark:fill-silver" cx="200" cy="600" r="10" />
          <circle className="fill-maroon dark:fill-silver" cx="800" cy="600" r="10" />
          
          {/* Gears */}
          <g className="gear-1" transform="translate(300, 300)">
            <circle className="fill-none stroke-gold" cx="0" cy="0" r="50" strokeWidth="2" />
            <path className="fill-none stroke-gold" d="M0,-60 L0,-40 M0,40 L0,60 M-60,0 L-40,0 M40,0 L60,0 M-42,-42 L-30,-30 M42,42 L30,30 M-42,42 L-30,30 M42,-42 L30,-30" strokeWidth="2" />
          </g>
          <g className="gear-2" transform="translate(700, 500)">
            <circle className="fill-none stroke-gold" cx="0" cy="0" r="40" strokeWidth="2" />
            <path className="fill-none stroke-gold" d="M0,-50 L0,-30 M0,30 L0,50 M-50,0 L-30,0 M30,0 L50,0 M-35,-35 L-25,-25 M35,35 L25,25 M-35,35 L-25,25 M35,-35 L25,-25" strokeWidth="2" />
          </g>
        </svg>
      </div>
      
      {/* Content */}
      <motion.div 
        className="z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
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