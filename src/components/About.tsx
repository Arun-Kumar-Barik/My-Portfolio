import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import profileImage from './Professional Profile.jpg'; // use correct relative path


const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { rotationY: -20, opacity: 0 },
        { rotationY: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isInView]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 blur-lg opacity-30 animate-pulse-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-secondary-500/50 animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-primary-500/50 glassmorphism">
                  <img 
                    src={profileImage} 
  alt="Arun Kumar Barik" 
  className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div 
            ref={cardRef}
            className="glassmorphism p-8 rounded-2xl tilt-card"
          >
            <div className="tilt-card-content">
              <h3 className="text-2xl font-bold text-gradient mb-4">Java Backend Developer & Software Engineer</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Java Backend Developer with strong development skills and industry experience. 
                I've built scalable applications and worked on enterprise-level projects at Incture.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span>Building robust backend systems with Java, Spring Boot, and Hibernate</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                  <span>Developing RESTful APIs and optimizing database interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent-500 mt-2 mr-2"></span>
                  <span>Expertise in software development and system architecture</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-900/50 border border-primary-700/50 rounded-full text-xs">Java 8</span>
                <span className="px-3 py-1 bg-secondary-900/50 border border-secondary-700/50 rounded-full text-xs">Spring Boot</span>
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-700/50 rounded-full text-xs">Hibernate</span>
                <span className="px-3 py-1 bg-primary-900/50 border border-primary-700/50 rounded-full text-xs">MySQL</span>
                <span className="px-3 py-1 bg-secondary-900/50 border border-secondary-700/50 rounded-full text-xs">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;