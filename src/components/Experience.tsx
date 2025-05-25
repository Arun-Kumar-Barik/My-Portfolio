import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex w-full relative"
    >
      <div className="absolute left-0 md:left-1/2 md:-ml-[1px] w-[2px] h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
      
      <div className={`${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} w-full md:w-1/2 mb-10`}>
        <div className="glassmorphism p-6 rounded-xl relative z-10 h-full border-l-4 border-primary-500">
          {/* Icon */}
          <div className="absolute -left-4 top-6 w-8 h-8 rounded-full glassmorphism flex items-center justify-center border border-primary-500">
            {experience.icon === 'code' ? (
              <Briefcase size={14} className="text-primary-400" />
            ) : (
              <GraduationCap size={14} className="text-primary-400" />
            )}
          </div>
          
          <div className="ml-2">
            <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
            <div className="flex flex-col mb-3">
              <p className="text-secondary-400 font-medium">{experience.company}</p>
              <p className="text-sm text-gray-400">{experience.location} | {experience.date}</p>
            </div>
            
            <ul className="space-y-2">
              {experience.description.map((desc: string, descIndex: number) => (
                <li key={descIndex} className="text-gray-300 text-sm flex">
                  <span className="mr-2">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section id="experience" className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
        </motion.div>

        <div ref={ref} className="relative flex flex-col md:items-center">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;