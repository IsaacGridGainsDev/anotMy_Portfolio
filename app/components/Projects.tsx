import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';

interface ProjectsProps {
  id?: string;
}

// Project data
const projectsData = [
  {
    id: 1,
    title: 'AI Lead Generation Assistant',
    description: 'Automated system for real estate agents to qualify and follow up with leads.',
    tags: ['AI', 'Automation', 'Business'],
    category: 'Prompt Kits',
    image: '/images/project1.svg', // Placeholder for SVG
    links: {
      github: 'https://github.com/isaac-akinladejo/lead-gen-ai',
      fiverr: 'https://fiverr.com/isaac_akinladejo/create-ai-lead-generation-systems',
      notion: 'https://notion.so/isaac-akinladejo/lead-gen-case-study'
    },
    techStack: ['Python', 'OpenAI', 'Twilio']
  },
  {
    id: 2,
    title: 'WhatsDoc Automator',
    description: 'Python application that converts WhatsApp voice notes and chats into professional documents.',
    tags: ['Voice Note Transcription', 'Document Templates', 'Automation Panel'],
    category: 'Transcription',
    image: '/images/project2.svg', // Placeholder for SVG
    links: {
      github: 'https://github.com/IsaacGridGainsDev/WhatsDoc',
      fiverr: 'https://www.fiverr.com/sellers/god_is_a_ble',
    },
    techStack: ['CustomTkinter', 'Python', 'OpenAI']
  },
  {
    id: 3,
    title: 'Auto Fonts Installer',
    description: 'Interactive Python application that automates installing fonts from ZIP files or folders.',
    tags: ['GUI', 'Dashboard', 'Automation'],
    category: 'AI Tools',
    image: '/images/project3.svg', // Placeholder for SVG
    links: {
      github: 'https://github.com/IsaacGridGainsDev/Font_Auto_Installer',
      notion: 'https://www.notion.so/7b9b6948f785419a9d47036cdff2fcec?pvs=66&qid&origin'
    },
    techStack: ['CustomTkinter', 'Python', 'GUI']
  },
  {
    id: 4,
    title: 'Automated Twitter Data Miner',
    description: ' Python application for mining, analyzing, and visualizing Twitter data using both historical scraping and real-time streaming capabilities.',
    tags: ['Data Mining', 'Automation', 'Business'],
    category: 'Business Systems',
    image: '/images/project4.svg', // Placeholder for SVG
    links: {
      github: 'https://github.com/IsaacGridGainsDev/Tweet-Harvester-GUI',
    },
    techStack: ['Python', 'FastAPI', 'PostgreSQL']
  },
];

// Categories for filtering
const categories = [
  'All',
  'AI Tools',
  'GUIs',
  'Business Systems',
  'Prompt Kits'
];

const Projects: React.FC<ProjectsProps> = ({ id = 'projects' }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  // Open project details in lightbox
  const openProject = (project) => {
    setSelectedProject(project);
  };
  
  // Close lightbox
  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id={id} ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#800000] dark:text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects Gallery
        </motion.h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category 
                ? 'bg-[#800000] text-white' 
                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
                onClick={() => openProject(project)}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-[#C0C0C0] dark:bg-gray-700 flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#800000] dark:text-[#C0C0C0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    {/* Simple project icon based on category */}
                    {project.category === 'AI Tools' && (
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z M12 6v6l4 2" />
                    )}
                    {project.category === 'GUIs' && (
                      <path d="M4 4h16v12H4V4zm4 16h8m-4-4v4" />
                    )}
                    {project.category === 'Business Systems' && (
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    )}
                    {project.category === 'Prompt Kits' && (
                      <path d="M8 10h8m-8 4h8m-8-8h8M5 6v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6a1 1 0 00-1 1z" />
                    )}
                  </svg>
                </div>
                
                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech Stack Icons */}
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                    <span className="font-medium">Tech:</span>
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-50 dark:bg-gray-900 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Project Lightbox */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              onClick={closeProject}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Project Image */}
                <div className="h-64 bg-[#C0C0C0] dark:bg-gray-700 flex items-center justify-center">
                  <svg className="w-32 h-32 text-[#800000] dark:text-[#C0C0C0]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    {/* Same SVG as in the card */}
                    {selectedProject.category === 'AI Tools' && (
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z M12 6v6l4 2" />
                    )}
                    {selectedProject.category === 'GUIs' && (
                      <path d="M4 4h16v12H4V4zm4 16h8m-4-4v4" />
                    )}
                    {selectedProject.category === 'Business Systems' && (
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    )}
                    {selectedProject.category === 'Prompt Kits' && (
                      <path d="M8 10h8m-8 4h8m-8-8h8M5 6v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6a1 1 0 00-1 1z" />
                    )}
                  </svg>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">{selectedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-50 dark:bg-gray-900 rounded text-sm text-[#800000] dark:text-[#C0C0C0]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.links.github && (
                      <a 
                        href={selectedProject.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded-md flex items-center gap-2 hover:bg-gray-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {selectedProject.links.fiverr && (
                      <a 
                        href={selectedProject.links.fiverr} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#800000] text-white rounded-md flex items-center gap-2 hover:bg-opacity-90 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.25 16.25v-10h-10v10h10m0-11.667c.917 0 1.667.75 1.667 1.667v10c0 .917-.75 1.667-1.667 1.667h-10c-.917 0-1.667-.75-1.667-1.667v-10c0-.917.75-1.667 1.667-1.667h10m-7.5 8.333h5v1.667h-5v-1.667m0-3.333h5v1.667h-5V9.583m0-3.333h5v1.667h-5V6.25" />
                        </svg>
                        Fiverr
                      </a>
                    )}
                    {selectedProject.links.notion && (
                      <a 
                        href={selectedProject.links.notion} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white rounded-md flex items-center gap-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                        </svg>
                        Notion Doc
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Close Button */}
                <button 
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  onClick={closeProject}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;