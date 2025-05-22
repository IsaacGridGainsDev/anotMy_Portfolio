import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

// Tech stack data
const techStackData = [
  {
    category: 'AI & ML',
    items: [
      { name: 'OpenAI', icon: '🧠', description: 'GPT models for text generation and processing' },
      { name: 'Whisper', icon: '🎤', description: 'Speech-to-text transcription' },
      { name: 'Anthropic', icon: '🤖', description: 'Claude models for reasoning tasks' },
      { name: 'Hugging Face', icon: '🤗', description: 'Open-source ML models' },
    ]
  },
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: '🐍', description: 'Primary language for AI systems and automation' },
      { name: 'JavaScript', icon: '📜', description: 'Web development and frontend interfaces' },
      { name: 'TypeScript', icon: '📘', description: 'Type-safe JavaScript for robust applications' },
      { name: 'SQL', icon: '🗃️', description: 'Database queries and data management' },
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', icon: '⚛️', description: 'Frontend UI development' },
      { name: 'FastAPI', icon: '⚡', description: 'High-performance API development' },
      { name: 'TailwindCSS', icon: '🎨', description: 'Utility-first CSS framework' },
      { name: 'CustomTkinter', icon: '🖼️', description: 'Modern UI toolkit for Python' },
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: '📊', description: 'Version control and collaboration' },
      { name: 'Docker', icon: '🐳', description: 'Containerization for deployment' },
      { name: 'Notion', icon: '📝', description: 'Documentation and knowledge management' },
      { name: 'Figma', icon: '🎭', description: 'UI/UX design and prototyping' },
    ]
  },
];

const TechStack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeItem, setActiveItem] = useState(null);
  
  return (
    <section id="tech-stack" ref={sectionRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#800000] dark:text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        
        <div className="relative">
          {/* Central Hub */}
          <div className="flex justify-center mb-16">
            <motion.div 
              className="w-32 h-32 rounded-full bg-[#800000] dark:bg-[#C0C0C0] flex items-center justify-center text-white dark:text-gray-900 text-xl font-bold shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="text-3xl">AI</div>
                <div className="text-sm">Systems</div>
              </div>
            </motion.div>
          </div>
          
          {/* Tech Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStackData.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#800000] dark:text-[#FFD700]">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      className={`p-3 rounded-md transition-all cursor-pointer flex items-center gap-3 ${activeItem === `${categoryIndex}-${itemIndex}` 
                        ? 'bg-[#800000] bg-opacity-10 dark:bg-opacity-20' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                      onClick={() => setActiveItem(activeItem === `${categoryIndex}-${itemIndex}` ? null : `${categoryIndex}-${itemIndex}`)}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-gray-800 dark:text-white">{item.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Tech Description Popup */}
          <AnimatedDescription activeItem={activeItem} techStackData={techStackData} />
        </div>
      </div>
    </section>
  );
};

// Animated description component
const AnimatedDescription = ({ activeItem, techStackData }) => {
  if (!activeItem) return null;
  
  const [categoryIndex, itemIndex] = activeItem.split('-').map(Number);
  const item = techStackData[categoryIndex].items[itemIndex];
  
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-10 max-w-md w-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ type: 'spring', damping: 25 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">{item.icon}</span>
        <h4 className="text-xl font-bold text-[#800000] dark:text-[#FFD700]">{item.name}</h4>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
    </motion.div>
  );
};

export default TechStack;