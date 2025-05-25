import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../constants';

const Education = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div ref={ref} className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-8 rounded-xl max-w-3xl w-full relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
            
            {education.map((edu, index) => (
              <div key={index} className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-secondary-400 font-medium">{edu.date}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-lg text-gray-200 mb-1">{edu.degree}</p>
                  {edu.gpa && (
                    <p className="text-accent-400 font-medium">GPA: {edu.gpa}</p>
                  )}
                </div>
                
                {edu.courses && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-secondary-300">Relevant Coursework</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {edu.courses.map((course, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary-500 mr-2"></div>
                          <p className="text-gray-300">{course}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;