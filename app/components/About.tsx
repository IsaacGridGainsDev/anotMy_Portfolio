import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Timeline data
  const timelineEvents = [
    {
      year: '2018',
      title: 'Started Architecture Journey',
      description: 'Began exploring design and systems development.'
    },
    {
      year: '2021',
      title: 'First AI Project',
      description: 'Developed a prompt to model a simple GUI app for email generation in Python'
    },
    {
      year: '2022',
      title: 'Prompt Engineering',
      description: 'Specialized in creating advanced prompt systems for business applications.'
    },
    {
      year: '2023',
      title: 'Systems Architecture',
      description: 'Began prototyping full AI systems architecture and integration.'
    },
    {
      year: '2025',
      title: 'Portfolio Growth',
      description: 'Established presence on Fiverr from the Alx Africa Freelancer Academy.'
    }
  ];
  
  // Philosophy cards
  const philosophyCards = [
    {
      title: 'Hephaestus',
      value: 'Tenacity',
      description: 'Like the craftsman god, I forge solutions with persistence and skill.'
    },
    {
      title: 'Stoicism',
      value: 'Clarity',
      description: 'I approach problems with calm rationality and focused purpose.'
    },
    {
      title: 'Innovation',
      value: 'Creativity',
      description: 'Finding novel approaches to complex problems through creative thinking.'
    }
  ];
  
  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        // Animate timeline items
        gsap.fromTo('.timeline-item', 
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, stagger: 0.2, duration: 0.8, ease: 'power2.out' }
        );
        
        // Animate philosophy cards
        gsap.fromTo('.philosophy-card', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, delay: 0.5, ease: 'back.out(1.2)' }
        );
      }, sectionRef);
      
      return () => ctx.revert();
    }
  }, [isInView]);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#800000] dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Portrait/SVG */}
          <div className="flex justify-center items-center lg:col-span-1">
            <div className="w-64 h-64 rounded-full border-4 border-[#800000] dark:border-[#C0C0C0] overflow-hidden bg-[#C0C0C0] dark:bg-gray-800 flex items-center justify-center">
              <svg viewBox="0 0 100 100" width="80%" height="80%">
                {/* Stylized portrait SVG */}
                <circle cx="50" cy="35" r="25" className="fill-maroon dark:fill-silver" />
                <path d="M25,90 Q50,110 75,90" className="fill-none stroke-maroon dark:stroke-silver" strokeWidth="2" />
                <rect x="35" y="60" width="30" height="40" rx="5" className="fill-maroon dark:fill-silver" />
              </svg>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-[#C0C0C0]">My Journey</h3>
            <div className="relative border-l-2 border-[#800000] dark:border-[#C0C0C0] pl-8 pb-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="timeline-item mb-8 relative">
                  <div className="absolute -left-10 w-5 h-5 rounded-full bg-[#800000] dark:bg-[#C0C0C0]"></div>
                  <div className="text-sm font-bold text-[#800000] dark:text-[#FFD700]">{event.year}</div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">{event.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Philosophy Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-[#C0C0C0]">Personal Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyCards.map((card, index) => (
              <div 
                key={index} 
                className="philosophy-card p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md border-t-4 border-[#800000] dark:border-[#C0C0C0]"
              >
                <h4 className="text-xl font-bold mb-2 text-[#800000] dark:text-[#FFD700]">{card.title}</h4>
                <div className="text-sm uppercase tracking-wider mb-3 text-gray-500 dark:text-gray-400">{card.value}</div>
                <p className="text-gray-700 dark:text-gray-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;