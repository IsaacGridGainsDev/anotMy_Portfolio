import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id = 'contact' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    reaction: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Emoji reactions
  const reactions = [
    { emoji: '👍', label: 'Sounds Good' },
    { emoji: '🚀', label: 'Let\'s Build' },
    { emoji: '💡', label: 'I Have Ideas' },
    { emoji: '🤝', label: 'Partnership' },
  ];
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle reaction selection
  const handleReaction = (reaction) => {
    setFormState(prev => ({ ...prev, reaction }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        message: '',
        reaction: ''
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id={id} ref={sectionRef} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#800000] dark:text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Let's Build Together
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Have a project in mind or want to discuss how AI can transform your workflow? I'd love to hear from you.
        </motion.p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div 
              className="p-6 md:p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">Your Message</label>
                    <textarea 
                      name="message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                      placeholder="Tell me about your project or idea..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  {/* Emoji Reactions */}
                  <div className="mb-6">
                    <label className="block text-gray-700 dark:text-gray-300 mb-3 text-sm">How would you describe your inquiry?</label>
                    <div className="flex flex-wrap gap-3">
                      {reactions.map((reaction, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`flex flex-col items-center p-3 rounded-md transition-all ${formState.reaction === reaction.emoji 
                            ? 'bg-[#800000] bg-opacity-10 dark:bg-opacity-20 border border-[#800000] dark:border-[#C0C0C0]' 
                            : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                          onClick={() => handleReaction(reaction.emoji)}
                        >
                          <span className="text-2xl mb-1">{reaction.emoji}</span>
                          <span className="text-xs text-gray-700 dark:text-gray-300">{reaction.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-[#800000] text-white rounded-md hover:bg-opacity-90 transition-all flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              className="bg-[#800000] text-white p-6 md:p-8 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:isaac_akinladejo@hotmail.com" className="hover:underline">isaac_akinladejo@hotmail.com</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <a href="https://github.com/IsaacGridGainsDev" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <a href="https://www.notion.so/7b9b6948f785419a9d47036cdff2fcec?pvs=66&qid&origin" target="_blank" rel="noopener noreferrer" className="hover:underline">Notion</a>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="https://www.fiverr.com/sellers/god_is_a_ble" target="_blank" rel="noopener noreferrer" className="hover:underline">Fiverr</a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="bg-[#800000] text-white p-6 md:p-8 flex flex-col justify-between"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <h3 className="text-xl font-bold mb-6">My Location</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <span>Isaac Grid Gains</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z" />
                    </svg>
                    <span>Remote / Global</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Find Me On</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/isaac-akinladejo-425b09162/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                    aria-label="LinkedIn"
                  >
                    <img 
                      src="/images/linkedin.svg" 
                      alt="LinkedIn" 
                      className="w-5 h-5" 
                    />
                  </a>
                  
                  <a 
                    href="https://github.com/IsaacGridGainsDev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                    aria-label="GitHub"
                  >
                    <img 
                      src="/images/github.svg" 
                      alt="GitHub" 
                      className="w-5 h-5" 
                    />
                  </a>
                  
                  <a 
                    href="https://www.fiverr.com/sellers/god_is_a_ble" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all"
                    aria-label="Fiverr"
                  >
                    <img 
                      src="/images/fiverr.svg" 
                      alt="Fiverr" 
                      className="w-5 h-5" 
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;