import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PromptKitProps {
  id?: string;
}

const PromptKit: React.FC<PromptKitProps> = ({ id = 'prompt-kit' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [promptInput, setPromptInput] = useState('');
  const [promptResult, setPromptResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Sample prompt template for real estate lead follow-up
  const samplePrompt = `Hello [Client Name],

I noticed you were interested in properties in [Neighborhood]. I have some new listings that match your criteria for [Property Type] homes in the [Price Range] range.

Would you be available for a quick call this week to discuss these options?

Best regards,
[Agent Name]`;
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Generate personalized prompt based on input
      const personalized = promptInput.split(',').reduce((result, item, index) => {
        const values = ['Client Name', 'Neighborhood', 'Property Type', 'Price Range', 'Agent Name'];
        if (index < values.length) {
          return result.replace(`[${values[index]}]`, item.trim());
        }
        return result;
      }, samplePrompt);
      
      setPromptResult(personalized);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id={id} ref={sectionRef} className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#800000] dark:text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Live Prompt Kit Demo
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Try out this sample prompt template for real estate agent follow-ups. Enter your details below to see how AI can personalize communication.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Input Your Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">Enter values separated by commas:</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="John Doe, Downtown, Condo, $300-400k, Jane Smith"
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  required
                />
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Format: Client Name, Neighborhood, Property Type, Price Range, Agent Name
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-[#800000] text-white rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Generate Personalized Prompt'}
              </button>
            </form>
          </motion.div>
          
          {/* Result Display */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Generated Prompt</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md min-h-[200px] whitespace-pre-line">
              {promptResult || 'Your personalized prompt will appear here...'}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is just one example from my extensive prompt engineering toolkit.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-[#800000] text-white rounded-md hover:bg-opacity-90 transition-all"
          >
            Discuss Custom Prompt Systems
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptKit;